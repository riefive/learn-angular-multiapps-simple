import { Component, OnDestroy, OnInit } from '@angular/core';
import { IMenu } from 'projects/lib-beehive-ui-shared/src/public-api';
import { AuthService } from './services/auth.service';

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
  menus!: IMenu[];
  isLogin!: boolean;
  title = 'learn-angular-multiapps';

  constructor(private authSrv: AuthService) {}

  ngOnInit(): void {
    this.isLogin = this.authSrv.IsLogin;
    this.menus = this.isLogin ? menuRaws : [];
    this.authSrv.loginChange.subscribe((value) => {
      this.menus = value ? menuRaws : [];
      this.isLogin = value;
    });
  }

  ngOnDestroy() {
    this.authSrv.loginChange.unsubscribe();
  }
}
