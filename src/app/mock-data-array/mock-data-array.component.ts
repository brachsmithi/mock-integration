import { Component, OnInit, Inject } from '@angular/core';
import { MockDataArrayService } from '../services/mock-data-array.service';
import { MockData } from '../models/mock-data';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-mock-data-array',
  templateUrl: './mock-data-array.component.html',
  styleUrls: ['./mock-data-array.component.scss']
})
export class MockDataArrayComponent implements OnInit {

  dataArray: MockData[];

  constructor(private service: MockDataArrayService, private toastr: ToastrService) { }

  ngOnInit() {
    this.service.getMockDataArray().subscribe(
      dataArray => {
        this.dataArray = dataArray;
      }
      // },
      // error => {
      //   this.toastr.error("Error received while fetching Array data: " + error.name);
      //   console.log(error);
      // }
    );
  }

}
