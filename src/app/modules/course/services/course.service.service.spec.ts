import { TestBed } from '@angular/core/testing';

import { CourseeService } from './course.service.service';

describe('Course.ServiceService', () => {
  let service: CourseeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CourseeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
