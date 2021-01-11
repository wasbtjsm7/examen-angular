import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CoursedetailpageComponent } from './coursedetailpage.component';

describe('CoursedetailpageComponent', () => {
  let component: CoursedetailpageComponent;
  let fixture: ComponentFixture<CoursedetailpageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CoursedetailpageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CoursedetailpageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
