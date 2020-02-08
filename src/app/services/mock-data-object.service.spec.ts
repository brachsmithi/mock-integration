import { TestBed } from '@angular/core/testing';

import { MockDataObjectService } from './mock-data-object.service';
import { ConfigService } from './config.service';
import { HttpTestingController, HttpClientTestingModule } from '@angular/common/http/testing';
import { Type } from '@angular/core';
import { MockData } from '../models/mock-data';
import { cold } from 'jasmine-marbles';
import { Configuration } from '../models/configuration';

let httpMock: HttpTestingController;
let service: MockDataObjectService;
const baseUrl = 'http://fake.com';

describe('MockDataObjectService', () => {

  beforeEach(() => {
    const configSpy = jasmine.createSpyObj('ConfigService', ['config']);
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [ 
        { provide: ConfigService, useValue: configSpy }
      ]
    }).compileComponents();
    httpMock = TestBed.get<HttpTestingController>(HttpTestingController as Type<HttpTestingController>);
    service = TestBed.get(MockDataObjectService);
    let mockConfigService = TestBed.get(ConfigService);
    var config = <Configuration> {
      mockDataArrayBaseUrl: "foo",
      mockDataObjectBaseUrl: baseUrl
    };
    mockConfigService.config.and.returnValue(config);
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
