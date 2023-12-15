import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BeeBlueAngryComponent } from './bee-blue-angry.component';

describe('BeeBlueAngryComponent', () => {
  let component: BeeBlueAngryComponent;
  let fixture: ComponentFixture<BeeBlueAngryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BeeBlueAngryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BeeBlueAngryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
