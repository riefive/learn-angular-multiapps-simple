import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  userToken!: BehaviorSubject<UserTokenModel>;
  userProfile!: BehaviorSubject<UserModel>;

  constructor(private http: HttpClient) { 
    this.userToken = new BehaviorSubject<UserTokenModel>({ access_token: '', refresh_token: '' });
    this.userProfile = new BehaviorSubject<UserModel>({
      id: 0, email: '', name: '', role: '', avatar: ''
    });
  }

  DoLogin(payload: any): Observable<UserTokenModel> {
    return this.http.post<UserTokenModel>(`${environment.public.apiFake}/auth/login`, payload);
  }

  DoSaveToken(result: any) {
    this.userToken.next(result);
    console.log(result);
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