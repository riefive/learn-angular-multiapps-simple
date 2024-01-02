import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { of } from 'rxjs';
import { delay } from 'rxjs/operators';
import { AuthService } from './services/auth.service';
import { IMenu } from 'projects/lib-beehive-ui-shared/src/public-api';

const menuRaws: IMenu[] = [
  { path: '/pages/beehive-red-happy', name: 'Red-Happy' } as IMenu,
  { path: '/pages/beehive-red-angry', name: 'Red-Angry' } as IMenu,
  { path: '/pages/beehive-green-happy', name: 'Green-Happy' } as IMenu,
  { path: '/pages/beehive-green-angry', name: 'Green-Angry' } as IMenu,
  { path: '/pages/beehive-blue-happy', name: 'Blue-Happy' } as IMenu,
  { path: '/pages/beehive-blue-angry', name: 'Blue-Angry' } as IMenu,
];

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, OnDestroy {
  menuType!: string;
  menuSides!: any[];
  menus!: IMenu[];
  isLogin!: boolean;
  isHiddenMenu!: boolean;
  title = 'learn-angular-multiapps';

  constructor(private authSrv: AuthService, private router: Router) {}

  ngOnInit(): void {
    this.isHiddenMenu = true;
    this.isLogin = this.authSrv.IsLogin;
    this.authSrv.loginChange.subscribe((value) => {
      this.menus = value ? menuRaws : [];
      this.isLogin = value;
      this.HandleChangeMenu(this.isLogin);
    });
    this.menus = this.isLogin ? menuRaws : [];
    this.menuType = 'side'; // common | side
    this.HandleChangeMenu(this.isLogin);
  }

  ngOnDestroy() {
    this.authSrv.loginChange.unsubscribe();
  }

  HandleChangeMenu(bool: boolean) {
    const menuSideRaws = [
      { link: 'app1', text: 'App 1' },
      { link: 'app2', text: 'App 2' },
      { 
        text: 'Demos', 
        subChild: true, 
        children: [
          { link: 'demos/image', text: 'Demo Image' },
          { link: 'demos/contact', text: 'Demo Contact' },
          { link: 'demos/security', text: 'Demo Security' },
          { link: 'demos/table', text: 'Demo Table' },
          { link: 'demos/accessor-one', text: 'Demo Accessor One' },
        ] 
      },
      { 
        text: 'Pages', 
        subChild: true, 
        children: [
          { link: 'pages/beehive-red-happy', text: 'Red Happy' },
          { link: 'pages/beehive-red-angry', text: 'Red Angry' },
          { link: 'pages/beehive-green-happy', text: 'Green Happy' },
          { link: 'pages/beehive-green-angry', text: 'Green Angry' },
          { link: 'pages/beehive-blue-happy', text: 'Blue Happy' },
          { link: 'pages/beehive-blue-angry', text: 'Blue Angry' },
        ] 
      },
      { text: 'Logout', click: true }
    ];
    if (bool) {
      this.menuSides = menuSideRaws;
    } else {
      let menuSideRawsClone = [...menuSideRaws];
      menuSideRawsClone = menuSideRawsClone.filter((item) => !item.subChild);
      menuSideRawsClone.splice(menuSideRawsClone.length - 1, 1, { link: 'login', text: 'Login' });
      this.menuSides = menuSideRawsClone;
    }
  }

  HandleLogout() {
    this.authSrv.DoLogout();
    of(this.isLogin).pipe(delay(100)).subscribe({
      next: () => {
        this.authSrv.loginChange.emit(false);
        this.authSrv.DoGetDeactiveGuard().subscribe();
        this.router.navigate(['/login']);
      }
    });
  }
}
