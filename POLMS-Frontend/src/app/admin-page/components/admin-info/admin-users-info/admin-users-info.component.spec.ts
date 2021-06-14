import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminUsersInfoComponent } from './admin-users-info.component';

describe('AdminUsersInfoComponent', () => {
  let component: AdminUsersInfoComponent;
  let fixture: ComponentFixture<AdminUsersInfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminUsersInfoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminUsersInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
