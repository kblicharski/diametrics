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
    this.restService.put({}).subscribe();
  }

  getData() {
    this.restService.get().subscribe(
      (data: Object) => {
        console.log('Received ${data}');
        this.data = data;
      }, (error) => {
        console.log(error);
      }
    );
  }

  deleteData() {
    this.restService.delete().subscribe();
    this.getData();
  }

}
