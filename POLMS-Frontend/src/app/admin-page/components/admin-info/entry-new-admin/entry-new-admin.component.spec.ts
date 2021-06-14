import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EntryNewAdminComponent } from './entry-new-admin.component';

describe('EntryNewAdminComponent', () => {
  let component: EntryNewAdminComponent;
  let fixture: ComponentFixture<EntryNewAdminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EntryNewAdminComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EntryNewAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
