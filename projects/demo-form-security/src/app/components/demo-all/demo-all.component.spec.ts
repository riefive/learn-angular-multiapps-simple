import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DemoAllComponent } from './demo-all.component';

describe('DemoAllComponent', () => {
  let component: DemoAllComponent;
  let fixture: ComponentFixture<DemoAllComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DemoAllComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DemoAllComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
