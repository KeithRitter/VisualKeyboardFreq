import { Component, OnInit } from '@angular/core';

const SAMPLE_LINECHART_DATA: any[] =[
  {data: [40, 80, 120, 8], label: 'Mock Data One'},
  {data: [12, 43, 0, 24], label: 'Mock Data Two'}
];

const SAMPLE_LINECHART_LABELS: string[] = ['10min', '20min', '30min', '40min']

@Component({
  selector: 'app-line-chart',
  templateUrl: './line-chart.component.html',
  styleUrls: ['./line-chart.component.css']
})

export class LineChartComponent implements OnInit {

  constructor() { }

  public lineChartData : any[] = SAMPLE_LINECHART_DATA;
  public lineChartLabels : string[] = SAMPLE_LINECHART_LABELS;
  public lineChartType = 'line';
  public lineChartLegend = true;
  public lineChartOptions: any = {
    responsive: true
  };

  ngOnInit(): void {
  }

}
