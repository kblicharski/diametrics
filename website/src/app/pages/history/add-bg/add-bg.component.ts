import { Component } from '@angular/core';
import { RestService } from "../../../api/rest.service";

@Component({
  selector: 'app-add-bg',
  templateUrl: './add-bg.component.html',
  styleUrls: ['./add-bg.component.css']
})
export class AddBgComponent {

  bgReading: string;

  isNumeric(num: any): boolean {
    return !isNaN(num);
  }

  validReading(formValue: string): boolean {
    return /^\+?([1-9]\d*)$/.test(formValue);
  }

  reasonableReading(): boolean {
    return this.toInt(this.bgReading) <= 400 && this.toInt(this.bgReading) >= 20;
  }

  constructor(private restService: RestService) { }

  submitForm() {
    return;
  }

  toInt(input: string): number {
    return parseInt(input, 10);
  }

}
