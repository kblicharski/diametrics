import { Component } from '@angular/core';
import { DataEmitterService } from "../../data-emitter.service";

@Component({
  selector: 'app-add-bg',
  templateUrl: './add-bg.component.html',
  styleUrls: ['./add-bg.component.css']
})
export class AddBgComponent {

  bgReading: string;

  constructor(private _myCommunicationService: DataEmitterService) {}

  validReading(formValue: string): boolean {
    return /^\+?([1-9]\d*)$/.test(formValue);
  }

  reasonableReading(): boolean {
    return this.toInt(this.bgReading) <= 400 && this.toInt(
      this.bgReading) >= 20;
  }

  submitForm() {
    const data = {reading: this.bgReading};
    console.log('submitted');
    this._myCommunicationService.emitChange(data);
  }

  toInt(input: string): number {
    return parseInt(input, 10);
  }

}
