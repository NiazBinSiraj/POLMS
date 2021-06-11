import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IndentInfoComponent } from './indent-info.component';

describe('IndentInfoComponent', () => {
  let component: IndentInfoComponent;
  let fixture: ComponentFixture<IndentInfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IndentInfoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IndentInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
