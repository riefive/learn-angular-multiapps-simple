import { Component, OnInit } from '@angular/core';
import { Location, LocationStrategy, PathLocationStrategy } from '@angular/common';

export const rawItems: any[] = [
  { id: 11, name: 'bottle' },
  { id: 12, name: 'boombox' },
  { id: 13, name: 'chair' },
  { id: 14, name: 'fishbowl' },
  { id: 15, name: 'lamp' },
  { id: 16, name: 'tv' },
  { id: 17, name: 'mug' },
  { id: 18, name: 'paintbrush' },
  { id: 19, name: 'plant' },
  { id: 20, name: 'teapot' }
];

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
  childItem: string = '';
  items: any[] = [];

  constructor(private location: Location) { }

  ngOnInit(): void {
    this.sourceImage = 'https://placehold.co/600x400';
    this.currentPath = this.location.path();
    this.childItem = 'battery';
    this.items = rawItems;
  }

  HandleBack() {
    this.location.back();
  }
  
  HandleForward() {
    this.location.forward();
  }

}
