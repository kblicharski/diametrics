import { Component } from '@angular/core';
import { Chart } from 'angular-highcharts';
import { Point } from 'angular-highcharts/chart';
import * as Highcharts from 'highcharts';
import { DataEmitterService } from "../../data-emitter.service";

@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.css']
})
export class ChartComponent {
  chart = new Chart({
    chart: {
      type: 'spline',
      marginRight: 10,
    },
    title: {
      text: 'Your Blood Glucose History'
    },
    credits: {
      enabled: false
    },
    xAxis: {
      type: 'datetime',
      tickAmount: 10
    },
    yAxis: {
      tickInterval: 50,
      min: 20,
      max: 300,
      title: {
        text: 'Blood Glucose (mg/dL)'
      },
      plotLines: [
        {
          color: 'red',
          value: 75,
          width: 3
        },
        {
          color: 'yellow',
          value: 200,
          width: 3
        }
      ],
    },
    tooltip: {
      formatter: function () {
        return '<b>' + Math.floor(this.y) + '</b><br/>' +
          Highcharts.dateFormat('%Y-%m-%d %H:%M:%S', this.x) + '<br/>';
      }
    },
    legend: {
      enabled: false
    },
    exporting: {
      enabled: false
    },
    series: [{
      name: 'Blood Glucose Data',
      data: this.generateData()
    }]
  });

  currentX: number;

  constructor(private _myCommunicationService: DataEmitterService) {
    _myCommunicationService.chartEmitted$.subscribe(myMessage => {
      console.log('received in chart');
      this.add(myMessage);
    });
  }

  generateData(): Point[] {
    const data: Point[] = [];
    const time = (new Date()).getTime();
    for (let i = 0; i < 9; i += 1) {
      const x = time + i * 1000 * 60 * 30;
      const y = (Math.random() * 150) + 50;
      const point: Point = {x, y};
      data.push(point);
      this.currentX = x;
    }
    return data;
  }

  add(event): void {
    console.log(event);
    const y = parseFloat(event.reading);
    const x = (new Date()).getTime() + 1000 * 60 * 30 * 9;
    const point: Point = {x, y};
    console.log(point);
    this.chart.addPoint(point, 0, true, true);
  }

  randomAdd(): void {
    const x = this.currentX + (Math.random() * (1000 * 60 * 60 * 2)) + (1000 * 60 * 30);
    this.currentX = x;
    const y = (Math.random() * 100) + 50;
    const point: Point = {x, y};
    this.chart.addPoint(point, 0, true, true);
  }

}
