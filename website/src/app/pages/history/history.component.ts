import { Component, EventEmitter, Output } from '@angular/core';
import { RestService } from '../../api/rest.service';
import { DataEmitterService } from "../data-emitter.service";

@Component({
  selector: 'app-history',
  templateUrl: './history.component.html',
  styleUrls: ['./history.component.css'],
  providers: [RestService]
})
export class HistoryComponent {
  userName = 'madsilva';
  icRatio = 15;
  correctionFactor = 35;

  @Output(
    'newDataReceived') newDataReceived: EventEmitter<Object> = new EventEmitter();

  constructor(private _myCommunicationService: DataEmitterService) {
    _myCommunicationService.changeEmitted$.subscribe(myMessage => {
      console.log('received in history and sent');
      _myCommunicationService.chartChange(myMessage);
      this.icRatio = Math.round((Math.random() * 1.5 + 15) * 100) / 100;
      this.correctionFactor = Math.round((Math.random() * 3.5 + 35) * 100) / 100;
    });
  }

}
