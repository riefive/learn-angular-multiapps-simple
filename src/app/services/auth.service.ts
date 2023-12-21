import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { CookieService } from 'ngx-cookie-service';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  userToken!: BehaviorSubject<UserTokenModel>;
  userProfile!: BehaviorSubject<UserModel>;

  constructor(private http: HttpClient, private cookieService : CookieService) { 
    this.userToken = new BehaviorSubject<UserTokenModel>({ access_token: '', refresh_token: '' });
    this.userProfile = new BehaviorSubject<UserModel>({
      id: 0, email: '', name: '', role: '', avatar: ''
    });
  }

  get IsLogin(): boolean {
    const token = this.cookieService.get('token');
    const user = this.cookieService.get('user');
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

  DoGetProfile(): Observable<UserModel> {
    let options = {};
    const token = this.cookieService.get('token');
    if (token) {
      options = { headers: { 'Authorization': `Bearer ${token}`} };
    }
    return this.http.get<UserModel>(`${environment.public.apiFake}/auth/profile`, options);
  }

  DoSaveToken(result: UserTokenModel) {
    this.userToken.next(result);
    this.cookieService.set('token', result.access_token);
    this.cookieService.set('refresh', result.refresh_token);
  }

  DoSaveProfile(result: UserModel) {
    this.userProfile.next(result);
    this.cookieService.set('user', JSON.stringify(result));
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