import { Component, OnInit } from '@angular/core';
import { MockData } from '../models/mock-data';
import { MockDataObjectService } from '../services/mock-data-object.service';

@Component({
  selector: 'app-mock-data-object',
  templateUrl: './mock-data-object.component.html',
  styleUrls: ['./mock-data-object.component.scss']
})
export class MockDataObjectComponent implements OnInit {

  data: MockData;

  constructor(private service: MockDataObjectService) { }

  ngOnInit() {
    this.service.getMockData().subscribe(dataObject => {
      this.data = dataObject;
    });
  }

}
