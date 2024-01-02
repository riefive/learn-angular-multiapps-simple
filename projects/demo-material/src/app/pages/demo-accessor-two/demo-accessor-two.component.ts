import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-demo-accessor-two',
  templateUrl: './demo-accessor-two.component.html',
  styleUrls: ['./demo-accessor-two.component.scss']
})
export class DemoAccessorTwoComponent implements OnInit {
  sampleForm!: FormGroup;

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.sampleForm = this.formBuilder.group({
      mainContact: new FormControl({
        value: {
          countryCode: '62',
          phoneNumber: '81234567890'
        }, disabled: false
      })
    });
  }

}
