import { Routes } from '@angular/router';
import { SectionHealthComponent } from './app/sections/section-health/section-health.component';
import { SectionTestChartComponent } from './app/sections/section-test-chart/section-test-chart.component';
import { SectionMainComponent } from './app/Sections/section-main/section-main.component';

export const appRoutes : Routes = [
    {path: 'health', component: SectionHealthComponent},
    {path: 'tchart', component: SectionTestChartComponent},
    {path: 'main', component: SectionMainComponent},
    {path: '', component: SectionMainComponent, pathMatch: 'full'}
];