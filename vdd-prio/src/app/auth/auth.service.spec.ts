/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { NgAuthService } from './auth.service';

describe('Service: NgAuth', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [NgAuthService]
    });
  });

  it('should ...', inject([NgAuthService], (service: NgAuthService) => {
    expect(service).toBeTruthy();
  }));
});
