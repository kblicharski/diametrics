import { Component } from '@angular/core';
import { RestService } from '../../../api/rest.service';

@Component({
  selector: 'app-add-event',
  templateUrl: './add-event.component.html',
  styleUrls: ['./add-event.component.css']
})
export class AddEventComponent {
  eventTypes = [
    'Exercise',
    'Food'
  ];

  selectedType: string;
  duration: string;
  carbs: string;
  insulin: string;

  constructor(private restService: RestService) { }

  validForm() {
    if ((this.validInput(this.duration)) || (this.validInput(
        this.carbs) && this.validInput(this.insulin))) {
      return true;
    }
    return false;
  }

  validInput(formValue: string) {
    return /^\+?([1-9]\d*)$/.test(formValue);
  }

  formFilled(): boolean {
    if ((this.duration) || (this.carbs && this.insulin)) {
      return true;
    }
    return false;
  }

  submitForm() {
    return;
  }

  toInt(input: string): number {
    return parseInt(input, 10);
  }


}
