import { ComponentFixture, TestBed } from '@angular/core/testing';

import { POLLedgerEntryHistoryComponent } from './pol-ledger-entry-history.component';

describe('POLLedgerEntryHistoryComponent', () => {
  let component: POLLedgerEntryHistoryComponent;
  let fixture: ComponentFixture<POLLedgerEntryHistoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ POLLedgerEntryHistoryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(POLLedgerEntryHistoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
