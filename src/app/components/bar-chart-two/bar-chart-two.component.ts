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
  selector: 'app-bar-chart-two',
  templateUrl: './bar-chart-two.component.html',
  styleUrls: ['./bar-chart-two.component.scss']
})
export class BarChartTwoComponent implements OnInit {

  @ViewChild("chart") chart!: ChartComponent;
  public chartOptions: Partial<ChartOptions>;

  constructor() {
    this.chartOptions = {
      series: [
        {
          name: "Zone 1",
          data: [70, 64, 77,63,56,65,79,70, 64, 77,83]
        },
        {
          name: "Zone 2",
          data: [73, 85, 55,75,62,78,84,73, 85, 55,95]
        },
        {
          name: "Zone 3",
          data: [86, 71, 66,69,50,56,67, 86, 71, 66,79]
        },

      ],
      chart: {
        type: "bar",
        height: 500,
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
          "2",
          "4",
          "6",
          "8",
          "10",
          "12",
          "14",
          "16",
          "18",
          "20",
          "22",
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
