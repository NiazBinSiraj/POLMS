import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EntryNewDriverComponent } from './entry-new-driver.component';

describe('EntryNewDriverComponent', () => {
  let component: EntryNewDriverComponent;
  let fixture: ComponentFixture<EntryNewDriverComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EntryNewDriverComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EntryNewDriverComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
