import { Component, OnInit } from '@angular/core';
import { InputDataService } from '../../../../input-data.service'
import * as moment from 'moment';

//const SAMPLE_BARCHART_DATA: any[] = [
//  { data: [30, 81, 12, 19, 7, 99, 2], label: 'Mock Data One'},
//  { data: [12, 32, 74, 51, 69, 1, 8], label: 'Mock Data Two'}
//];

//const SAMPLE_BARCHART_LABELS: string[] = [ 'W1', 'W2', 'W3', 'W4', 'W5', 'W6', 'W7' ]

@Component({
  selector: 'app-bar-chart',
  templateUrl: './bar-chart.component.html',
  styleUrls: ['./bar-chart.component.css']
})
export class BarChartComponent implements OnInit {

  constructor(private _inputDataService: InputDataService, private location: Location) { }

  dataRes: any;
  dataCounts: number[];
  dataTimes: Date[];

  public barChartData : any[];
  public barChartLabels: string[];
  public barChartType = 'bar';
  public barChartLegend = true;
  public barChartOptions: any = {
    scaleShowVerticalLines: false,
    responsive: true
  };

  ngOnInit(): void {
    this._inputDataService.getCount()
    .subscribe(res => {
      //console.log(res);
      const localChartData = this.getChartData(res);
      this.barChartLabels = localChartData.map(x => x[0]);
      this.barChartData = [{'data': localChartData.map(x => x[1]), 'label': 'Dates'}]
      console.log(this.barChartData);
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
