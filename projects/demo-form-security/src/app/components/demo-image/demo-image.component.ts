import { Component, OnInit } from '@angular/core';
import { Location, LocationStrategy, PathLocationStrategy } from '@angular/common';
@Component({
  selector: 'app-demo-image',
  templateUrl: './demo-image.component.html',
  styleUrls: ['./demo-image.component.css'],
  providers: [
    Location, 
    { provide: LocationStrategy, useClass: PathLocationStrategy }
  ]
})
export class DemoImageComponent implements OnInit {
  sourceImage: string = '';
  currentPath: string = '';

  constructor(private location: Location) { }

  ngOnInit(): void {
    this.sourceImage = 'https://placehold.co/600x400';
    this.currentPath = this.location.path();
  }

  HandleBack() {
    this.location.back();
  }
  
  HandleForward() {
    this.location.forward();
  }

}
