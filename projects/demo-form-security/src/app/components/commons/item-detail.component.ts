import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-item-detail',
  templateUrl: './item-detail.component.html',
})
export class ItemDetailComponent {
  @Input() childItem = '';
  currentItem = 'item in boxes';
}