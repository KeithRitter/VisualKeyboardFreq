import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pie-chart',
  templateUrl: './pie-chart.component.html',
  styleUrls: ['./pie-chart.component.css']
})
export class PieChartComponent implements OnInit {

  constructor() { }

  pieChartData : number[] = [84, 46, 12];
  pieChartLabels : string[] = ['Mango', 'Aaron', 'Test'];
  pieChartColors : any[] = [ 
    { 
      backgroundColor: ['#26547c','#ff6b6b','#ffd166'],
      borderColor: ['#000','#000','#000']
    } 
  ];
  pieChartType = 'doughnut';

  ngOnInit(): void {
  }

}
