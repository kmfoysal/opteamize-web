import { Component, OnInit } from '@angular/core';
import * as ApexCharts from 'apexcharts';

const TIME = [
  '12:30',
  '13:00',
  '13:30',
  '14:00',
  '14:30',
  '15:00',
  '15:30',
  '16:00',
  '16:30',
  '17:00',
];


@Component({
  selector: 'app-zone-three',
  templateUrl: './zone-three.component.html',
  styleUrls: ['./zone-three.component.scss']
})
export class ZoneThreeComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    const a = [5, 4, 3, 4, 7, 5, 4, 6, 5, 20].map((y, i) => ({
      y,
      x: TIME[i],
    }));

    let options = {
      chart: {
        type: 'area',
        height: 250,
        toolbar: false,
      },
      grid: {
        show: true,
        borderColor: 'rgba(188, 188, 188, 0.5)',
        strokeDashArray: 3,
        position: 'back',
        xaxis: {
          lines: {
            show: true,
          },
        },
        yaxis: {
          lines: {
            show: true,
          },
        },
        row: {
          colors: undefined,
          opacity: 0.5,
        },
        column: {
          colors: undefined,
          opacity: 0.5,
        },
        padding: {
          top: 0,
          right: 0,
          bottom: 0,
          left: 0,
        },
      },
      colors: ['#F1A128'],
      series: [
        {
          name: 'Revenue',
          data: a,
        },
      ],
      stroke: {
        width: 0.5,
        curve: 'smooth',
      },
      markers: {
        size: 0,
      },
      dataLabels: {
        enabled: false,
      },
      xaxis: {
        type: 'time',
        labels: {
          // formatter: val => moment(val).format('DD/MM/YYYY'
        },
      },

      fill: {
        type: 'gradient',
        gradient: {
          shadeIntensity: 1,
          opacityFrom: 0.1,
          opacityTo: 0.4,
          stops: [0, 100],
          colors: ['#2E3fA', '#66DA2'],
        },
      },
    };

    let chart = new ApexCharts(document.querySelector('#chart3'), options);

    chart.render();
  }


}
