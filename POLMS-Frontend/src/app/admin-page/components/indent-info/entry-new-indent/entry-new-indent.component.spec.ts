import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EntryNewIndentComponent } from './entry-new-indent.component';

describe('EntryNewIndentComponent', () => {
  let component: EntryNewIndentComponent;
  let fixture: ComponentFixture<EntryNewIndentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EntryNewIndentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EntryNewIndentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
