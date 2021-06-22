import { ComponentFixture, TestBed } from '@angular/core/testing';

import { POLLedgerEntryComponent } from './pol-ledger-entry.component';

describe('POLLedgerEntryComponent', () => {
  let component: POLLedgerEntryComponent;
  let fixture: ComponentFixture<POLLedgerEntryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ POLLedgerEntryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(POLLedgerEntryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
