import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VDRAEntryComponent } from './vdra-entry.component';

describe('VDRAEntryComponent', () => {
  let component: VDRAEntryComponent;
  let fixture: ComponentFixture<VDRAEntryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VDRAEntryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VDRAEntryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
