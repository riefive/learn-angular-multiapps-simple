import { Component, OnInit } from '@angular/core';
import { IMenu } from 'projects/lib-beehive-ui-shared/src/public-api';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  menus!: IMenu[];
  title = 'beehive-green';

  ngOnInit(): void {
    this.menus = [
      { path: '/pages/beehive-green-happy', name: 'Green-Happy' } as IMenu,
      { path: '/pages/beehive-green-angry', name: 'Green-Angry' } as IMenu,
    ];
  }
}
