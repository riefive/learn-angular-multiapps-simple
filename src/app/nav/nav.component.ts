import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { of } from 'rxjs';
import { delay } from 'rxjs/operators';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {
  @Input() isLogin!: boolean;

  constructor(private authSrv: AuthService, private router: Router) { }

  ngOnInit(): void {
  }

  HandleLogout() {
    this.authSrv.DoLogout();
    of(this.isLogin).pipe(delay(100)).subscribe({
      next: () => {
        this.router.navigate(['/login'])
      }
    });
  }
}
