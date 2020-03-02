import { Component, OnInit } from '@angular/core';

const SAMPLE_LINECHART_DATA: any[] =[
  {data: [5, 5, 5], label: 'Not Implemented'},
  {data: [5, 5, 5], label: 'Not Implemented'}
];

const SAMPLE_LINECHART_LABELS: string[] = []

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
    responsive: true,
    maintainAspectRatio: false
  };

  ngOnInit(): void {
  }

}
