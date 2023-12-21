import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from '../services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class GlobalGuard implements CanActivate {
  constructor(private authSrv: AuthService, private router: Router) { }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      const isLogin = this.authSrv.IsLogin;
      if (state.url === '/login' && isLogin) {
        this.router.navigate(['/']);
        return false;
      }
      return true;
  }
  
}
