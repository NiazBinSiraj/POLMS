import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EntryNewNcoComponent } from './entry-new-nco.component';

describe('EntryNewNcoComponent', () => {
  let component: EntryNewNcoComponent;
  let fixture: ComponentFixture<EntryNewNcoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EntryNewNcoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EntryNewNcoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
