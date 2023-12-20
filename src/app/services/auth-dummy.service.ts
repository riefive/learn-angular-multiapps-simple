import { Injectable } from '@angular/core';
import { of } from 'rxjs';
import { delay } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthDummyService {

  constructor() { }

  isLoggedIn() {
    return of(true).pipe(delay(500));
  }

  hasPermissions() {
    return of(true);
  }
}
