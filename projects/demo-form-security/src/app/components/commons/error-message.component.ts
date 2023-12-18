import { Component, Input } from '@angular/core';
import { AbstractControl } from '@angular/forms';
import { GetValidatorErrorMessage } from '../../utils/validator-utils';

@Component({
  selector: 'app-error-message',
  templateUrl: './error-message.component.html',
})
export class ErrorMessageComponent {
  @Input() control!: AbstractControl

  constructor() {}

  get ErrorMessage() {    
    for (const validatorName in this.control?.errors) {
        if (this.control.touched) {
            return GetValidatorErrorMessage(validatorName, this.control.errors[validatorName]);
        }
    }
    return null;
  }
}