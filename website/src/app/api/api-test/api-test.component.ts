import { Component } from '@angular/core';
import { RestService } from '../rest.service';

@Component({
  selector: 'app-api-test',
  templateUrl: './api-test.component.html',
  styleUrls: ['./api-test.component.css'],
  providers: [RestService]
})
export class ApiTestComponent {
  data: Object;

  constructor(private restService: RestService) {}

  putData() {
    this.restService.put().subscribe();
  }

  getData() {
    this.restService.get().subscribe(
      (data: Object) => {
        this.data = data;
      }
    );
  }

}
