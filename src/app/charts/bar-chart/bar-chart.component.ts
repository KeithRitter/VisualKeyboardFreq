import { Component, OnInit } from '@angular/core';

const SAMPLE_BARCHART_DATA: any[] = [
  { data: [30, 81, 12, 19, 7, 99, 2], label: 'Mock Data One'},
  { data: [12, 32, 74, 51, 69, 1, 8], label: 'Mock Data Two'}
];

const SAMPLE_BARCHART_LABELS: string[] = [ 'W1', 'W2', 'W3', 'W4', 'W5', 'W6', 'W7' ]

@Component({
  selector: 'app-bar-chart',
  templateUrl: './bar-chart.component.html',
  styleUrls: ['./bar-chart.component.css']
})
export class BarChartComponent implements OnInit {

  constructor() { }

  public barChartData : any[] = SAMPLE_BARCHART_DATA;
  public barChartLabels: string[] = SAMPLE_BARCHART_LABELS;
  public barChartType = 'bar';
  public barChartLegend = false;
  public barChartOptions: any = {
    scaleShowVerticalLines: false,
    responsive: true
  };

  ngOnInit(): void {
  }

}
