import { Component, OnInit, Input } from '@angular/core';
import { InputDataService } from '../../../../input-data.service';
import * as moment from 'moment';

const SAMPLE_LINECHART_DATA: any[] =[
  {data: [5, 12, 2], label: 'Mock Data A'},
  {data: [8, 4, 18], label: 'Mock Data B'}
];

const SAMPLE_LINECHART_LABELS: string[] = []

@Component({
  selector: 'app-line-chart',
  templateUrl: './line-chart.component.html',
  styleUrls: ['./line-chart.component.css']
})

export class LineChartComponent implements OnInit {

  constructor(private _inputDataService: InputDataService, private location: Location) { }

  dataRes: any;
  dataCounts: number[];
  dataTimes: Date[];
  
  public lineChartData : any[];
  public lineChartLabels : string[];
  public lineChartType = 'line';
  public lineChartLegend = true;
  public lineChartOptions: any = {
    responsive: true,
    maintainAspectRatio: false
  };

  ngOnInit(): void {
    this._inputDataService.getCount()
    .subscribe(res =>{
      const localChartData = this.getChartData(res);
      this.lineChartLabels = localChartData.map(x => x[0]);
      this.lineChartData = [{'data': localChartData.map(x => x[1]), 'label': 'Dates'}]
    });
    this.location.reload();
  }

  getChartData(res: any){
    this.dataRes = res;
    const counts = this.dataRes.map(x => x.count);
    const dates = this.dataRes.map(x => moment(new Date(x.date)).format(`hh:mm:ss`));

    const formatted = this.dataRes.reduce((r, e) => {
      r.push([moment(e.date).format('hh:mm:ss'), e.count]); 
      return r;
    }, []);

    const p = [];

    const chartData = formatted.reduce((r, e) => {
      const key = e[0];
      if(!r[key]) {
        p[key] = e;
        r.push(p[key]);
      }
      else {
        p[key][1] += e[1];
      }
      return r;
    }, []);

    console.log(formatted);
    console.log(chartData);

    return chartData;
  }
}
