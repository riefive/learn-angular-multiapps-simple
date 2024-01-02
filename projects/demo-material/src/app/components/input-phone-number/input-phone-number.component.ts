import { Component, forwardRef } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

interface InternationalPhoneNumber {
  countryCode: string;
  phoneNumber: string;
}

@Component({
  selector: 'app-input-phone-number',
  templateUrl: './input-phone-number.component.html',
  styleUrls: ['./input-phone-number.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => InputPhoneNumberComponent),
      multi: true,
    }
  ]
})
export class InputPhoneNumberComponent implements ControlValueAccessor {
  withModel: boolean = false;
  value!: InternationalPhoneNumber;
  disabled = false;
  hasChanged = true;
  onChange = (value: InternationalPhoneNumber) => {};
  onTouched = (value: any) => {};

  constructor() { }

  set valueCountry(val: any) {
    let codeNumber = val;
    const formattedCodeNumber = codeNumber.replace(/[^0-9]+/g, '');
    this.value = { ...this.value, countryCode: formattedCodeNumber };
    this.onChange(this.value);
    this.onTouched(this.value);
  }

  set valuePhone(val: any) {
    let phoneNumber = val;
    const formattedPhoneNumber = phoneNumber.replace(/[^0-9]/g, '');
    this.value = { ...this.value, phoneNumber: formattedPhoneNumber };
    this.onChange(this.value);
    this.onTouched(this.value);
  }

  registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }

  setDisabledState(isDisabled: boolean): void {
    this.disabled = isDisabled;
  }

  writeValue(value: InternationalPhoneNumber): void {
    this.value = value;
  }

  HandleCountryCodeChange(e: any): void {
    if (this.disabled) {
      return;
    }
    let codeNumber = e.target.value;
    const formattedCodeNumber = codeNumber.replace(/[^0-9]/g, '');
    this.value = { ...this.value, countryCode: formattedCodeNumber };
    this.onChange(this.value);
  }

  HandlePhoneNumberChange(e: any): void {
    if (this.disabled) {
      return;
    }
    let phoneNumber = e.target.value;
    const formattedPhoneNumber = phoneNumber.replace(/[^0-9\-]+/g, '').replace(/(\..*)\./g, '$1');
    this.value = { ...this.value, phoneNumber: formattedPhoneNumber };
    this.onChange(this.value);
  }

  HandleFocussed(): void {
    this.hasChanged = false;
  }

  HandleTouched(): void {
    this.hasChanged = true;
    this.onTouched(this.value);
  }
}
