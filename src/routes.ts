import { Routes } from '@angular/router';
import { SectionHealthComponent } from './app/sections/section-health/section-health.component';
import { SectionTestChartComponent } from './app/sections/section-test-chart/section-test-chart.component';

export const appRoutes : Routes = [
    {path: 'health', component: SectionHealthComponent},
    {path: 'tchart', component: SectionTestChartComponent},
];