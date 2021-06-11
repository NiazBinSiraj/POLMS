import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminInfoTabComponent } from './admin-info-tab.component';

describe('AdminInfoTabComponent', () => {
  let component: AdminInfoTabComponent;
  let fixture: ComponentFixture<AdminInfoTabComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminInfoTabComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminInfoTabComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
