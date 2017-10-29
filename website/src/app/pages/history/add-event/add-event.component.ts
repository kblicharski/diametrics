import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { Subscription } from "rxjs/Subscription";
import { DataEmitterService } from "../../data-emitter.service";

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

  constructor(private _myCommunicationService: DataEmitterService) {}

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
    let data: Object;
    if (this.selectedType === 'Food') {
      data = {insulin: this.insulin, carbs: this.carbs};
    } else {
      data = {duration: this.duration};
    }
    console.log('submitted');
    this._myCommunicationService.emitChange(data);
  }

  toInt(input: string): number {
    return parseInt(input, 10);
  }


}
