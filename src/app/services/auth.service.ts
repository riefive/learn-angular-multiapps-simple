import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  userProfile!: BehaviorSubject<UserModel>;

  constructor(private http: HttpClient) { 
    this.userProfile = new BehaviorSubject<UserModel>({
      id: 0, email: '', name: '', role: '', avatar: ''
    });
  }

  DoLogin(payload: any) {
    return this.http.post(`${environment.public.apiFake}/auth/login`, payload);
  }
}

export interface UserModel {
  id: number;
  email: string;
  name: string;
  role: string;
  avatar: string;
}