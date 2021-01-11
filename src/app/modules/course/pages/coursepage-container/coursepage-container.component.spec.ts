import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CoursepageContainerComponent } from './coursepage-container.component';

describe('CoursepageContainerComponent', () => {
  let component: CoursepageContainerComponent;
  let fixture: ComponentFixture<CoursepageContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CoursepageContainerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CoursepageContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
