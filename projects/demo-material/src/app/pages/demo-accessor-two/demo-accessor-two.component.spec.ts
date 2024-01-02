import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DemoAccessorTwoComponent } from './demo-accessor-two.component';

describe('DemoAccessorTwoComponent', () => {
  let component: DemoAccessorTwoComponent;
  let fixture: ComponentFixture<DemoAccessorTwoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DemoAccessorTwoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DemoAccessorTwoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
