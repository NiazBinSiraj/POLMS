import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NcoPageComponent } from './nco-page.component';

describe('NcoPageComponent', () => {
  let component: NcoPageComponent;
  let fixture: ComponentFixture<NcoPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NcoPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NcoPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
