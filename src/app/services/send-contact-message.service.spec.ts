import { TestBed } from '@angular/core/testing';

import { SendContactMessageService } from './send-contact-message.service';

describe('SendContactMessageService', () => {
  let service: SendContactMessageService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SendContactMessageService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
