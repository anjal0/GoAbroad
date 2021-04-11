import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SingleUniversityComponent } from './single-university.component';

describe('SingleUniversityComponent', () => {
  let component: SingleUniversityComponent;
  let fixture: ComponentFixture<SingleUniversityComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SingleUniversityComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SingleUniversityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
