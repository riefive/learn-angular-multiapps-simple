import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService, UserTokenModel } from '../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  form!: FormGroup;

  constructor(private formBuilder: FormBuilder, private authSrv: AuthService) { }

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [Validators.required, Validators.minLength(4)]),
    });
  }

  HandleSubmit() {
    if (this.form.invalid) return;
    let flowAuth = this.authSrv.DoLogin(this.form.value)
    console.log(flowAuth)
    flowAuth.subscribe({
      next: (result: UserTokenModel) => {
        this.authSrv.DoSaveToken(result);
        console.log(result);
      },
      error: (error) => {
        console.log(error);
      },
    });
  }
}
