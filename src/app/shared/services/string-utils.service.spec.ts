import { TestBed, inject } from '@angular/core/testing';

import { StringUtilsService } from './string-utils.service';

describe('StringUtilsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [StringUtilsService]
    });
  });

  it('should be created', inject([StringUtilsService], (service: StringUtilsService) => {
    expect(service).toBeTruthy();
  }));

  it('underscoreToCamelCased should return "" when input is null', inject([StringUtilsService], (service: StringUtilsService) => {
    expect(service.underscoreToCamelCased(null)).toEqual('');
  }));
});
