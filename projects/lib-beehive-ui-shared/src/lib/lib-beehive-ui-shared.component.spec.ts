import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LibBeehiveUiSharedComponent } from './lib-beehive-ui-shared.component';

describe('LibBeehiveUiSharedComponent', () => {
  let component: LibBeehiveUiSharedComponent;
  let fixture: ComponentFixture<LibBeehiveUiSharedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LibBeehiveUiSharedComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LibBeehiveUiSharedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
