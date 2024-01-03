import { ChangeDetectionStrategy, Component, HostListener, forwardRef } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

type OnChangeFn<T> = (value: T) => void;
type OnTouchFn = () => void;

@Component({
  selector: 'app-button-toggle',
  templateUrl: './button-toggle.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => ButtonToggleComponent),
      multi: true
    }
  ]
})
export class ButtonToggleComponent implements ControlValueAccessor {
    onChange: OnChangeFn<boolean> = () => {}
    onTouch: OnTouchFn = () => {}
    pressed: boolean = false;
    disabled: boolean = false;
  
    constructor() { }

    writeValue(value: boolean): void {
        if (value === null || value === undefined) return;
        this.pressed = !!value;
    }

    registerOnChange(fn: OnChangeFn<boolean>): void {
        this.onChange = fn
    }

    registerOnTouched(fn: OnTouchFn): void {
        this.onTouch = fn
    }

    setDisabledState(isDisabled: boolean): void {
        this.disabled = isDisabled;
    }

    @HostListener('focusout')
    HandleFocusOut() {
        this.onTouch();
    }

    HandleToggle() {
        this.pressed = !this.pressed;
        this.onChange(this.pressed);
    }
}