import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NcosInfoComponent } from './ncos-info.component';

describe('NcosInfoComponent', () => {
  let component: NcosInfoComponent;
  let fixture: ComponentFixture<NcosInfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NcosInfoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NcosInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
