import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-demo-accessor-one',
  templateUrl: './demo-accessor-one.component.html',
  styleUrls: ['./demo-accessor-one.component.scss'],
})
export class DemoAccessorOneComponent implements OnInit {
  external!: string;

  constructor() { }

  ngOnInit(): void {
    
  }

}
