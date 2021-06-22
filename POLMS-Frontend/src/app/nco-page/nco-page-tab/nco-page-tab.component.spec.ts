import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NcoPageTabComponent } from './nco-page-tab.component';

describe('NcoPageTabComponent', () => {
  let component: NcoPageTabComponent;
  let fixture: ComponentFixture<NcoPageTabComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NcoPageTabComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NcoPageTabComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
