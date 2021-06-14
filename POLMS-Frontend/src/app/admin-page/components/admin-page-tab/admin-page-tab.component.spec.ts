import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminPageTabComponent } from './admin-page-tab.component';

describe('AdminPageTabComponent', () => {
  let component: AdminPageTabComponent;
  let fixture: ComponentFixture<AdminPageTabComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminPageTabComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminPageTabComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
