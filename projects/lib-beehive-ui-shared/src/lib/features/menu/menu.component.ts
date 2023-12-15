import { Component, OnInit, Input } from '@angular/core';

export interface IMenu {
  path: string;
  name: string;
}

@Component({
  selector: 'lib-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  _menus!: IMenu[];

  @Input()
  set menus(menu:IMenu[]){
    this._menus=menu;
  }

  constructor() { }

  ngOnInit(): void {
  }

}
