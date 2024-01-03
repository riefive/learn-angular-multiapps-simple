import { Injectable } from '@angular/core';
import { of } from 'rxjs';
import { delay } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ChildService {
  value = 'real value';

  SetValue(value: string) {
    this.value = value;
  }

  GetValue() {
    return this.value;
  }

  GetObservableValue() {
    return of('observable value');
  }

  GetPromiseValue() {
    return Promise.resolve('promise value');
  }

  GetObservableDelayValue() {
    return of('observable delay value').pipe(delay(10));
  }
}

export class ChildFakeService extends ChildService {
  override value = 'faked service value';
}
