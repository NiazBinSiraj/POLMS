import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IndentInfoTabComponent } from './indent-info-tab.component';

describe('IndentInfoTabComponent', () => {
  let component: IndentInfoTabComponent;
  let fixture: ComponentFixture<IndentInfoTabComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IndentInfoTabComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IndentInfoTabComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
