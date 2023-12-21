import {
    HttpEvent,
    HttpHandler,
    HttpInterceptor,
    HttpRequest,
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, throwError } from 'rxjs';
import { catchError, switchMap } from 'rxjs/operators';
import { CookieService } from 'ngx-cookie-service';
import { AuthService } from '../services/auth.service';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
    constructor(private autSrv: AuthService, private router: Router, private cookieService: CookieService) {}

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        if (req.url.indexOf('auth/refresh-token') > -1) {
            return next.handle(req);
        }

        const token = this.cookieService.get('token');
        const reqAdd = req.clone({
            headers: req.headers.set('Authorization', `Bearer ${token}`)
        });
        
        return next.handle(reqAdd).pipe(
            catchError((error) => {
                if (error.status == 401) {
                    return this.HandleStatus401(req, next, error);
                } else {
                    return throwError(() => error);
                }
            })
        );
    }

    private HandleStatus401(req: HttpRequest<any>, next: HttpHandler, originalError: any) {
        return this.autSrv.DoRefresh().pipe(
            switchMap(() => {
              return next.handle(req);
            }),
            catchError((error) => {
                this.cookieService.delete('token');
                this.cookieService.delete('refresh');
                this.router.navigate(['/']);
                return throwError(() => originalError);
            })
          );
    }
}
