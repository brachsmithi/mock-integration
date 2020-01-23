import { Injectable, Inject } from '@angular/core';
import { MockData } from '../models/mock-data';
import { ConfigService } from './config.service';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MockDataArrayService {

  constructor(private configs: ConfigService, private http: HttpClient) {}

  getMockDataArray(): Observable<Array<MockData>> {
    return this.http
      .get<Array<MockData>>(`${this.configs.config.mockDataArrayBaseUrl}/array`);
  }
}
