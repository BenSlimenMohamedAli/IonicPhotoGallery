import { TestBed } from '@angular/core/testing';

import { PhotoProviderService } from './photo-provider.service';

describe('PhotoProviderService', () => {
  let service: PhotoProviderService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PhotoProviderService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
