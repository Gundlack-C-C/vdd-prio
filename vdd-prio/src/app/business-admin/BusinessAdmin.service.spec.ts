/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { BusinessAdminService } from './BusinessAdmin.service';

describe('Service: BusinessAdmin', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [BusinessAdminService]
    });
  });

  it('should ...', inject([BusinessAdminService], (service: BusinessAdminService) => {
    expect(service).toBeTruthy();
  }));
});
