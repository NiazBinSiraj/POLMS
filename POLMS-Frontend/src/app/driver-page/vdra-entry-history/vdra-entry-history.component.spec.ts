import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VDRAEntryHistoryComponent } from './vdra-entry-history.component';

describe('VDRAEntryHistoryComponent', () => {
  let component: VDRAEntryHistoryComponent;
  let fixture: ComponentFixture<VDRAEntryHistoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VDRAEntryHistoryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VDRAEntryHistoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
