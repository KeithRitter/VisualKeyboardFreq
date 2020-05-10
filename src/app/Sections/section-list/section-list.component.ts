import { Component, OnInit, ModuleWithComponentFactories } from '@angular/core';
import { InData } from '../../shared/InData';
import { InputDataService } from '../../../input-data.service';
import * as moment from 'moment';

@Component({
  selector: 'app-section-list',
  templateUrl: './section-list.component.html',
  styleUrls: ['./section-list.component.css']
})
export class SectionListComponent implements OnInit {

  constructor(private _inputDataService: InputDataService) { }

  dataRes: any;

 // data: InData[] = [    
 //   {time: new Date(2020, 3, 3) , count: 1},
 //   {time: new Date(2020, 3, 4) , count: 1},
 //   {time: new Date(2020, 3, 5) , count: 1},
 //   {time: new Date(2020, 3, 6) , count: 1},
 //   {time: new Date(2020, 3, 7) , count: 1},
  //  {time: new Date(2020, 3, 8) , count: 1}
  //];
  data: res;
  
  ngOnInit(): void {
    this._inputDataService.getCount()
    .subscribe(res => {
      this.data = res;
    })
  }
}
