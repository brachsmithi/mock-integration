import { Component } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'mock-integration';

  constructor(private toastr: ToastrService) { }

  showError(){
    this.toastr.error("Hello, I'm the toastr message.")
  }
}
