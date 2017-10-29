import { Component } from '@angular/core';
import { Chart } from 'angular-highcharts';
import * as Highcharts from 'Highcharts';
import { Point } from 'angular-highcharts/chart';

@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.css']
})
export class ChartComponent {
  // chart = new Chart({
  //   chart: {
  //     type: 'line'
  //   },
  //   title: {
  //     text: 'Blood Glucose Levels'
  //   },
  //   credits: {
  //     enabled: false
  //   },
  //   series: [{
  //     index: 0,
  //     data: (function () {
  //       // generate an array of random data
  //       var data = [],
  //         time = (new Date()).getTime(),
  //         i;
  //
  //       for (i = -19; i <= 0; i += 1) {
  //         data.push({
  //           x: time + i * 1000,
  //           y: Math.random() * (150) + 50
  //         });
  //       }
  //       return data;
  //     }())
  //   }]
  // });

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
      tickAmount: 20
    },
    yAxis: {
      title: {
        text: 'Blood Glucose (mg/dL)'
      },
      plotLines: [{
        value: 0,
        width: 1,
        color: '#808080'
      }]
    },
    tooltip: {
      formatter: function () {
        return '<b>' + this.y + '</b><br/>' +
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
      name: 'Random data',
      data: this.generateData()
    }]
  });

  currentX: number;

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

  add(x: number, y: number): void {
    const point: Point = {x, y};
    this.chart.addPoint(point, 0, true, true);
  }

  randomAdd(): void {
    const x = this.currentX + (Math.random() * (1000 * 60 * 60 * 3)) + (1000 * 60 * 60 * 3);
    const y = (Math.random() * 150) + 50;
    const point: Point = {x, y};
    this.chart.addPoint(point, 0, true, true);
  }

}
