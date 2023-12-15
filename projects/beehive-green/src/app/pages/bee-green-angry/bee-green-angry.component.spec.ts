import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BeeGreenAngryComponent } from './bee-green-angry.component';

describe('BeeGreenAngryComponent', () => {
  let component: BeeGreenAngryComponent;
  let fixture: ComponentFixture<BeeGreenAngryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BeeGreenAngryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BeeGreenAngryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
