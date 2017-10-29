import { Injectable } from '@angular/core';
import { Subject } from "rxjs/Subject";

@Injectable()
export class DataEmitterService {

  private emitChangeSource = new Subject<any>();
  private chartSource = new Subject<any>();

  changeEmitted$ = this.emitChangeSource.asObservable();
  chartEmitted$ = this.chartSource.asObservable();

  emitChange(myMessage: any) {
    this.emitChangeSource.next(myMessage);
  }

  chartChange(myMessage: any) {
    this.chartSource.next(myMessage);
  }

}
