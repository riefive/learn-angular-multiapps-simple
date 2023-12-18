import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DemoSecurityComponent } from './demo-security.component';

describe('SecurityComponent', () => {
  let component: DemoSecurityComponent;
  let fixture: ComponentFixture<DemoSecurityComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DemoSecurityComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DemoSecurityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
