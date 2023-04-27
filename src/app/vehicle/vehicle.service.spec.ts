/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { VehicleService } from './vehicle.service';

describe('Service: Vehicle', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [VehicleService],
    });
  });

  it('should get vehicles data', inject(
    [VehicleService],
    (service: VehicleService) => {
      expect(service).toBeTruthy();
    }
  ));
});
