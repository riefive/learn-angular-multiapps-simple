import { Component, OnInit } from '@angular/core';
import { IMenu } from 'projects/lib-beehive-ui-shared/src/public-api';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  menus!: IMenu[];
  title = 'beehive-blue';

  ngOnInit(): void {
    this.menus = [
      { path: '/pages/beehive-blue-happy', name: 'Blue-Happy' } as IMenu,
      { path: '/pages/beehive-blue-angry', name: 'Blue-Angry' } as IMenu,
    ];
  }
}
