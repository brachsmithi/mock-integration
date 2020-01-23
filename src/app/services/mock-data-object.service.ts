import { Injectable } from '@angular/core';
import { MockData } from '../models/mock-data';
import { ConfigService } from './config.service';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MockDataObjectService {

  mockData: MockData;

  constructor(private configs: ConfigService, private http: HttpClient) { }

  getMockData(): Observable<MockData> {
    return this.http.get<MockData>(`${this.configs.config.mockDataObjectBaseUrl}/data`);
  }
}
