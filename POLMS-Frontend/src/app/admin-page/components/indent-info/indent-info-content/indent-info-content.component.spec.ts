import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IndentInfoContentComponent } from './indent-info-content.component';

describe('IndentInfoContentComponent', () => {
  let component: IndentInfoContentComponent;
  let fixture: ComponentFixture<IndentInfoContentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IndentInfoContentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IndentInfoContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
