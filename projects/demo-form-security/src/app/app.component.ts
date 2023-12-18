import { Component, OnInit } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'learn-angular-ssr';

  constructor(private metaTagService: Meta, private titleService: Title) {}

  ngOnInit(): void {
    this.metaTagService.addTags([
      { name: 'description', content: 'Friendly SEO App' },
      { name: 'keywords', content: 'Angular, SEO' },
      { name: 'author', content: 'Riefive' },
      { name: 'robots', content: 'index, follow' },
    ]);
    this.titleService.setTitle('My Angular SSR')
  }
}
