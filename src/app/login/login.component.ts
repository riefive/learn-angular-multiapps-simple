import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { of } from 'rxjs';
import { delay } from 'rxjs/operators';
import { AuthService, UserModel, UserTokenModel } from '../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  form!: FormGroup;

  constructor(private formBuilder: FormBuilder, private authSrv: AuthService, private router: Router) { }

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [Validators.required, Validators.minLength(4)]),
    });
  }

  HandleProfile() {
    of(true).pipe(delay(1000)).subscribe(() => {
      this.authSrv.DoGetProfile().subscribe({
        next: (result: UserModel) => {
          this.authSrv.DoSaveProfile(result);
          this.router.navigate(['/']);
        },
        error: (error) => {
          console.log(error);
          alert(error.statusText);
        },
      });
    });
  }

  HandleSubmit() {
    if (this.form.invalid) return;
    let flowAuth = this.authSrv.DoLogin(this.form.value)
    flowAuth.subscribe({
      next: (result: UserTokenModel) => {
        this.authSrv.DoSaveToken(result);
        this.HandleProfile();
      },
      error: (error) => {
        console.log(error);
      },
    });
  }
}
