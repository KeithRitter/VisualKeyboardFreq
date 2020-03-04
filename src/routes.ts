import { Routes } from '@angular/router';
import { SectionTestChartComponent } from './app/sections/section-test-chart/section-test-chart.component';
import { SectionMainComponent } from './app/Sections/section-main/section-main.component';
import { SectionListComponent } from './app/sections/section-list/section-list.component';

export const appRoutes : Routes = [
    {path: 'tchart', component: SectionTestChartComponent},
    {path: 'main', component: SectionMainComponent},
    {path: 'listc', component: SectionListComponent},
    {path: '', component: SectionMainComponent, pathMatch: 'full'}
];