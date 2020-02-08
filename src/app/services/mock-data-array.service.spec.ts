import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { MockDataArrayService } from './mock-data-array.service';
import { ConfigService } from './config.service';
import { Type } from '@angular/core';
import { MockData } from '../models/mock-data';
import { Configuration } from '../models/configuration';

let httpMock: HttpTestingController;
let service: MockDataArrayService;
const baseUrl = 'http://fake.org';

describe('MockDataArrayService', () => {
  const configSpy = jasmine.createSpyObj('ConfigService', ['config']);
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule,
      ],
      providers: [
        { provide: ConfigService, useValue: configSpy }
      ]
    });
    httpMock = TestBed.get<HttpTestingController>(HttpTestingController as Type<HttpTestingController>);
    service = TestBed.get(MockDataArrayService);
    let mockConfigService = TestBed.get(ConfigService);
    var config = <Configuration> {
      mockDataArrayBaseUrl: baseUrl,
      mockDataObjectBaseUrl: "string"
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
    const mockDataArray: Array<MockData> = [
      {
        key: 'one',
        value: 1
      } as MockData,
      {
        key: 'two',
        value: 2
      } as MockData,
    ];

    service.getMockDataArray().subscribe(dataArray => {
      expect(dataArray).toEqual(mockDataArray);
    });

    const mockRequest = httpMock.expectOne(`${baseUrl}/array`);
    expect(mockRequest.request.method).toBe('GET');

    mockRequest.flush(mockDataArray);
  });
});
