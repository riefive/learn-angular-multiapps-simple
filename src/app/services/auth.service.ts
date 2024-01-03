import { HttpClient } from '@angular/common/http';
import { EventEmitter, Inject, Injectable, Optional, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser, isPlatformServer } from '@angular/common';
import { REQUEST } from '@nguniversal/express-engine/tokens';
import { BehaviorSubject, Observable } from 'rxjs';
import { CookieService } from 'ngx-cookie-service';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  loginChange: EventEmitter<boolean> = new EventEmitter();
  userToken!: BehaviorSubject<UserTokenModel>;
  userProfile!: BehaviorSubject<UserModel>;

  constructor(
    @Optional() @Inject(PLATFORM_ID) private platformId: Object,
    @Optional() @Inject(REQUEST) private request: any,
    private http: HttpClient, 
    private cookieService: CookieService
  ) { 
    this.userToken = new BehaviorSubject<UserTokenModel>({ access_token: '', refresh_token: '' });
    this.userProfile = new BehaviorSubject<UserModel>({
      id: 0, email: '', name: '', role: '', avatar: ''
    });
  }

  get IsLogin(): boolean {
    let token = null;
    let user = null;
    if (isPlatformServer(this.platformId) || !isPlatformBrowser(this.platformId)) {
      const cookies = this.request?.cookies;
      token = cookies.token;
      user = cookies.user;
    } else {
      token = this.cookieService.get('token');
      user = this.cookieService.get('user');
    }
    let userParsed: any = {};
    try {
      userParsed = JSON.parse(user);
    } catch (error) {}
    return !!token && !!userParsed?.name;
  }

  DoLogin(payload: any): Observable<UserTokenModel> {
    return this.http.post<UserTokenModel>(`${environment.public.apiFake}/auth/login`, payload);
  }

  DoLogout() {
    this.userToken.next({ access_token: '', refresh_token: '' });
    this.userProfile.next({ id: 0, email: '', name: '', role: '', avatar: '' });
    this.cookieService.delete('token');
    this.cookieService.delete('refresh');
    this.cookieService.delete('user');
  }

  DoRefresh(): Observable<UserTokenModel> {
    const token = this.cookieService.get('refresh');
    return this.http.post<UserTokenModel>(`${environment.public.apiFake}/auth/refresh-token`, { refreshToken: token });
  }

  DoGetProfile(): Observable<UserModel> {
    const isSkip = true;
    let options = {};
    const token = this.cookieService.get('token');
    if (!isSkip && token) {
      options = { headers: { 'Authorization': `Bearer ${token}`} };
    }
    return this.http.get<UserModel>(`${environment.public.apiFake}/auth/profile`, options);
  }

  DoGetActiveGuard(): Observable<any> {
    return this.http.get('/guard/active');
  }

  DoGetDeactiveGuard(): Observable<any> {
    return this.http.get('/guard/deactive');
  }

  DoSaveToken(result: UserTokenModel) {
    this.userToken.next(result);
    this.cookieService.set('token', result.access_token);
    this.cookieService.set('refresh', result.refresh_token);
  }

  DoSaveProfile(result: UserModel) {
    this.userProfile.next(result);
    this.cookieService.set('user', JSON.stringify(result));
    this.loginChange.emit(this.IsLogin);
  }
}

export interface UserTokenModel {
  access_token: string;
  refresh_token: string;
}

export interface UserModel {
  id: number;
  email: string;
  name: string;
  role: string;
  avatar: string;
}