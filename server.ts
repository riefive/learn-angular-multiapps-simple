import 'zone.js/dist/zone-node';

import { ngExpressEngine } from '@nguniversal/express-engine';
import * as express from 'express';
import * as session from 'express-session';
import { join } from 'path';

import { AppServerModule } from './src/main.server';
import { APP_BASE_HREF } from '@angular/common';
import { existsSync } from 'fs';
const packages = require('./package.json');

// declare interface session
interface SessionData {
  loggedIn: boolean;
}

// The Express app is exported so that it can be used by serverless Functions.
export function app(): express.Express {
  const server = express();
  const distFolder = join(process.cwd(), `dist/${packages.name}/browser`);
  const indexHtml = existsSync(join(distFolder, 'index.original.html')) ? 'index.original.html' : 'index';

  // config session middleware
  const sessionMiddleware = {
    secret: 'testersession8901',
    resave: false,
    saveUninitialized: true,
    cookie: { secure: false }
  };

  // Our Universal express-engine (found @ https://github.com/angular/universal/tree/master/modules/express-engine)
  server.engine('html', ngExpressEngine({
    bootstrap: AppServerModule,
  }));

  server.set('view engine', 'html');
  server.set('views', distFolder);

  if (server.get('env') === 'production') {
    server.set('trust proxy', 1); // trust first proxy
    sessionMiddleware.cookie.secure = true; // serve secure cookies
  }

  server.use(session(sessionMiddleware));

  // to active session loggedIn
  server.get('/guard/active', (req, res) => {
    const session: SessionData = <any>req.session;
    session.loggedIn = true;
    res.status(200).type('json').end(JSON.stringify({ message: 'logged in is active' }));
  });

  // deactive session loggedIn
  server.get('/guard/deactive', (req, res) => {
    const session: SessionData = <any>req.session;
    session.loggedIn = false;
    req.session.destroy(() => {
      res.status(200).type('json').end(JSON.stringify({ message: 'logged in is deactive' }));
    });
  });

  // sample to check session login
  server.get('/private', (req, res, next) => {
    const session: SessionData = <any>req.session;
    if (session.loggedIn) {
      res.status(200).type('json').end(JSON.stringify({ message: 'private page' }));
    } else {
      res.redirect('/login'); // require the user to log in 
    }
  });

  // guard for pages or demos
  server.use((req, res, next) => {
    const checkUrlPatterns = /(pages|demos)\/.+/;
    const session: SessionData = <any>req.session;
    const withGuard = checkUrlPatterns.test(req.url);
    if (withGuard) {
      if (session.loggedIn) {
        next(); // allow the next route to run
      } else {
        res.redirect('/login'); // require the user to log in 
      }
    } else {
      next();
    } 
  });

  // Example Express Rest API endpoints
  // server.get('/api/**', (req, res) => { });
  // Serve static files from /browser
  server.get('*.*', express.static(distFolder, {
    maxAge: '1y'
  }));

  // All regular routes use the Universal engine
  server.get('*', (req, res) => {
    res.render(indexHtml, { req, 
      providers: [
        { provide: APP_BASE_HREF, useValue: req.baseUrl },
        { provide: 'REQUEST', useValue: req },
        { provide: 'RESPONSE', useValue: res },
      ] 
    });
  });

  return server;
}

function run(): void {
  const port = process.env['PORT'] || 4000;

  // Start up the Node server
  const server = app();
  server.listen(port, () => {
    console.log(`Node Express server listening on http://localhost:${port}`);
  });
}

// Webpack will replace 'require' with '__webpack_require__'
// '__non_webpack_require__' is a proxy to Node 'require'
// The below code is to ensure that the server is run only when not requiring the bundle.
declare const __non_webpack_require__: NodeRequire;
const mainModule = __non_webpack_require__.main;
const moduleFilename = mainModule && mainModule.filename || '';
if (moduleFilename === __filename || moduleFilename.includes('iisnode')) {
  run();
}

export * from './src/main.server';
