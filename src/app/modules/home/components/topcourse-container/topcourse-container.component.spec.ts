import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TopcourseContainerComponent } from './topcourse-container.component';

describe('TopcourseContainerComponent', () => {
  let component: TopcourseContainerComponent;
  let fixture: ComponentFixture<TopcourseContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TopcourseContainerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TopcourseContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
