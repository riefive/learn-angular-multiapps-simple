import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BeeGreenHappyComponent } from './bee-green-happy.component';

describe('BeeGreenHappyComponent', () => {
  let component: BeeGreenHappyComponent;
  let fixture: ComponentFixture<BeeGreenHappyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BeeGreenHappyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BeeGreenHappyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
