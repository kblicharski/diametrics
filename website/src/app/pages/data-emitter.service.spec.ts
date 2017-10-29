import { TestBed, inject } from '@angular/core/testing';

import { DataEmitterService } from './data-emitter.service';

describe('DataEmitterService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DataEmitterService]
    });
  });

  it('should be created', inject([DataEmitterService], (service: DataEmitterService) => {
    expect(service).toBeTruthy();
  }));
});
