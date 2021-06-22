import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DriverPageTabComponent } from './driver-page-tab.component';

describe('DriverPageTabComponent', () => {
  let component: DriverPageTabComponent;
  let fixture: ComponentFixture<DriverPageTabComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DriverPageTabComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DriverPageTabComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
