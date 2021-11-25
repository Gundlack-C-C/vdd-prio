/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { SectionAdminService } from './section-admin.service';

describe('Service: SectionAdmin', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SectionAdminService]
    });
  });

  it('should ...', inject([SectionAdminService], (service: SectionAdminService) => {
    expect(service).toBeTruthy();
  }));
});
