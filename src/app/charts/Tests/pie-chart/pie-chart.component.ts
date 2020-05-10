import { Component, OnInit } from '@angular/core';
import { InputDataService } from '../../../../input-data.service';
import { THEME_COLORS } from '../../theme.colors';

@Component({
  selector: 'app-pie-chart',
  templateUrl: './pie-chart.component.html',
  styleUrls: ['./pie-chart.component.css']
})
export class PieChartComponent implements OnInit {

  constructor(private _inputDataService: InputDataService) { }

  pieChartData : number[];
  pieChartLabels : Date[];
  pieChartColors : any[] = [ 
    { 
      backgroundColor: this.themeColors("default"),
      borderColor: this.themeColors("borders")
    } 
  ];
  pieChartType = 'doughnut';

  ngOnInit(): void {
    this._inputDataService.getCount()
    .subscribe(res =>{
      const data = this.parsePieChartData(res);
      this.pieChartData = data.map(x => x['count']);
      this.pieChartLabels = data.map(x => x['date']);
      console.log(data.map(x => x['count']));
    });
  }

  parsePieChartData(res: any){
    const data = res.slice(0);
    return data;
  }

  themeColors(setName: string) : string[] {
    const c = THEME_COLORS.slice(0)
    .find(set => set.name == setName).colorSet;
    return c;
  }

}
