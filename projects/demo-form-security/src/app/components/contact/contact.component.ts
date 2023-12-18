import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, FormArray, Validators } from '@angular/forms';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  form!: FormGroup;
  displayText: string = '';

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      name: new FormControl('', Validators.required),
      email: new FormControl('', [Validators.required, Validators.email]),
      description: new FormControl('', [Validators.required, Validators.minLength(3)]),
      cities: new FormArray([])
    });
  }

  get cityControls() {
    const current = this.form.get('cities')!;
    return (<FormArray>current).controls;
  }

  CheckInvalid(name: string) {
    const control = this.form.get(name)!
    return control.dirty || control.touched && control.invalid
  }

  GetControlInvalid(name: string, type: string) {
    const control = this.form.get(name)!
    if (!control) return false;
    return control.errors?.[type]!
  }

  HandleAddCity() {
    let cities = this.form.get('cities')!;
    if (!cities) return;
    const control = new FormControl('', Validators.required);
    (<FormArray>cities).push(control);
  }

  HandleRemoveCity(index: number) {
    let cities = this.form.get('cities')!;
    if (!cities) return;
    (<FormArray>cities).removeAt(index);
  }

  HandleSubmit() {
    if (this.form.invalid) return;
    this.displayText = JSON.stringify(this.form.value, null, 4);
  }
}
