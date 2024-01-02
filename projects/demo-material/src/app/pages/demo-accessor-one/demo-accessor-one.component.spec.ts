import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DemoAccessorOneComponent } from './demo-accessor-one.component';

describe('DemoAccessorOneComponent', () => {
  let component: DemoAccessorOneComponent;
  let fixture: ComponentFixture<DemoAccessorOneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DemoAccessorOneComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DemoAccessorOneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
