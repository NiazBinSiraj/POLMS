import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VehicleInfoContentComponent } from './vehicle-info-content.component';

describe('VehicleInfoContentComponent', () => {
  let component: VehicleInfoContentComponent;
  let fixture: ComponentFixture<VehicleInfoContentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VehicleInfoContentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VehicleInfoContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
