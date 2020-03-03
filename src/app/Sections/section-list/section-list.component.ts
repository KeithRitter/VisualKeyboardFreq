import { Component, OnInit } from '@angular/core';
import { InData } from '../../shared/InData';

@Component({
  selector: 'app-section-list',
  templateUrl: './section-list.component.html',
  styleUrls: ['./section-list.component.css']
})
export class SectionListComponent implements OnInit {

  constructor() { }

  data: InData[] = [    
    {time: new Date(2020, 3, 3) , count: 1},
    {time: new Date(2020, 3, 4) , count: 1},
    {time: new Date(2020, 3, 5) , count: 1},
    {time: new Date(2020, 3, 6) , count: 1},
    {time: new Date(2020, 3, 7) , count: 1},
    {time: new Date(2020, 3, 8) , count: 1}
  ];
  
  ngOnInit(): void {
  }

}
