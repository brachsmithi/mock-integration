import { Component, OnInit, Inject } from '@angular/core';
import { MockDataArrayService } from '../services/mock-data-array.service';
import { MockData } from '../models/mock-data';

@Component({
  selector: 'app-mock-data-array',
  templateUrl: './mock-data-array.component.html',
  styleUrls: ['./mock-data-array.component.scss']
})
export class MockDataArrayComponent implements OnInit {

  dataArray: MockData[];

  constructor(private service: MockDataArrayService) { }

  ngOnInit() {
    this.service.getMockDataArray().subscribe(dataArray => {
      this.dataArray = dataArray;
    });
  }

}
