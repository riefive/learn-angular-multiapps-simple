import { Injectable } from '@angular/core';
import { ChildService } from './child.service';

@Injectable({
    providedIn: 'root'
})
export class ParentService {
  constructor(private childService: ChildService) {}

  GetValue() {
    return this.childService.GetValue();
  }
}
