import { Component, OnInit, ViewChild } from '@angular/core';

import {
  ApexAxisChartSeries,
  ApexChart,
  ChartComponent,
  ApexDataLabels,
  ApexPlotOptions,
  ApexYAxis,
  ApexLegend,
  ApexStroke,
  ApexXAxis,
  ApexFill,
  ApexTooltip,
  ApexGrid,
} from "ng-apexcharts";

export type ChartOptions = {
  series: ApexAxisChartSeries;
  chart: ApexChart;
  dataLabels: ApexDataLabels;
  plotOptions: ApexPlotOptions;
  yaxis: ApexYAxis;
  xaxis: ApexXAxis;
  fill: ApexFill;
  tooltip: ApexTooltip;
  stroke: ApexStroke;
  legend: ApexLegend;
  grid: ApexGrid;
};

@Component({
  selector: 'app-bar-chart-one',
  templateUrl: './bar-chart-one.component.html',
  styleUrls: ['./bar-chart-one.component.scss']
})
export class BarChartOneComponent implements OnInit {

  @ViewChild("chart") chart!: ChartComponent;
  public chartOptions: Partial<ChartOptions>;

  constructor() {
    this.chartOptions = {
      series: [
        {
          name: "Zone 1",
          data: [10, 14, 7,13,16,5,9]
        },
        {
          name: "Zone 2",
          data: [13, 5, 5,15,12,8,14]
        },
        {
          name: "Zone 3",
          data: [6, 11, 6,9,10,6,7]
        },

      ],
      chart: {
        type: "bar",
        height: 400,
      },

      grid: {
        show: true,
        borderColor: 'rgba(188, 188, 188, 0.5)',
        strokeDashArray: 3,
        position: 'back',
        xaxis: {
          lines: {
            show: false,
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
      plotOptions: {
        bar: {
          horizontal: false,
          // columnWidth: "40%",
        }
      },
      dataLabels: {
        enabled: false
      },
      stroke: {
        show: true,
        width: 2,
        colors: ["transparent"]
      },
      xaxis: {
        categories: [
          "Maandag",
          "Dinsdag",
          "Woensdag",
          "Donderdag",
          "Vrijdag",
          "Zaterdag",
          "Zondag",
        ],
      },
      fill: {
        colors: ["#26C597", "#A878FF", "#F1A128"],
        opacity: 1
      },
      tooltip: {
        y: {
          formatter: function(val) {
            return "$ " + val + " thousands";
          }
        }
      }
    };
  }

  ngOnInit(): void {
  }

}
