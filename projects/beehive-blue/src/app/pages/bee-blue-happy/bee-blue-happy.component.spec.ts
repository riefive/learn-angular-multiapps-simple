import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BeeBlueHappyComponent } from './bee-blue-happy.component';

describe('BeeBlueHappyComponent', () => {
  let component: BeeBlueHappyComponent;
  let fixture: ComponentFixture<BeeBlueHappyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BeeBlueHappyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BeeBlueHappyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
