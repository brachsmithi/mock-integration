import { TestBed } from '@angular/core/testing';

import { MockDataObjectService } from './mock-data-object.service';
import { ConfigService } from './config.service';
import { HttpTestingController, HttpClientTestingModule } from '@angular/common/http/testing';
import { Type } from '@angular/core';
import { MockData } from '../models/mock-data';

let configs: ConfigService;
let httpMock: HttpTestingController;
let service: MockDataObjectService;
const baseUrl = 'http://fake.com';

describe('MockDataObjectService', () => {

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [ ConfigService ]
    });
    httpMock = TestBed.get<HttpTestingController>(HttpTestingController as Type<HttpTestingController>);
    service = TestBed.get(MockDataObjectService);
  });

  afterEach(() => {
    httpMock.verify();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should retrieve data from remote service', () => {
    const mockData: MockData = {
        key: 'one',
        value: 1
    };
    service.getMockData().subscribe(data => {
      expect(data).toEqual(mockData);
    });

    const mockRequest = httpMock.expectOne(`${baseUrl}/data`);
    expect(mockRequest.request.method).toBe('GET');

    mockRequest.flush(mockData);
  });

});
