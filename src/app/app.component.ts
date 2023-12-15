import { Component, OnInit } from '@angular/core';
import { IMenu } from 'projects/lib-beehive-ui-shared/src/public-api';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  menus!: IMenu[];
  title = 'learn-angular-multiapps';

  ngOnInit(): void {
    this.menus = [
      { path: '/pages/beehive-red-happy', name: 'Red-Happy' } as IMenu,
      { path: '/pages/beehive-red-angry', name: 'Red-Angry' } as IMenu,
      { path: '/pages/beehive-green-happy', name: 'Green-Happy' } as IMenu,
      { path: '/pages/beehive-green-angry', name: 'Green-Angry' } as IMenu,
      { path: '/pages/beehive-blue-happy', name: 'Blue-Happy' } as IMenu,
      { path: '/pages/beehive-blue-angry', name: 'Blue-Angry' } as IMenu,
    ];
  }
}
