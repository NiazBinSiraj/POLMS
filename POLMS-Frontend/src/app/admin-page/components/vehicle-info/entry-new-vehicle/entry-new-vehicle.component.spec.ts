import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EntryNewVehicleComponent } from './entry-new-vehicle.component';

describe('EntryNewVehicleComponent', () => {
  let component: EntryNewVehicleComponent;
  let fixture: ComponentFixture<EntryNewVehicleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EntryNewVehicleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EntryNewVehicleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
