import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-demo-image',
  templateUrl: './demo-image.component.html',
  styleUrls: ['./demo-image.component.css']
})
export class DemoImageComponent implements OnInit {
  sourceImage: string = '';

  constructor() { }

  ngOnInit(): void {
    this.sourceImage = 'https://placehold.co/600x400';
  }

}
