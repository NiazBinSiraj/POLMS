import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminsInfoComponent } from './admins-info.component';

describe('AdminsInfoComponent', () => {
  let component: AdminsInfoComponent;
  let fixture: ComponentFixture<AdminsInfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminsInfoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminsInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
