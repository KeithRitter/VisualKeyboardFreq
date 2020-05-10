import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { RouterModule } from '@angular/router';
import { appRoutes } from '../routes';

import { ChartsModule } from 'ng2-charts';

import { AppComponent } from './app.component';
import { NavbarComponent } from './sections/section-navigation/navbar/navbar.component';
import { SidebarComponent } from './sections/section-navigation/sidebar/sidebar.component';

import { SectionMainComponent } from './Sections/section-main/section-main.component';
import { SectionTestChartComponent } from './sections/section-test-chart/section-test-chart.component';
import { SectionListComponent } from './sections/section-list/section-list.component';

import { BarChartComponent } from './charts/Tests/bar-chart/bar-chart.component';
import { PieChartComponent } from './charts/Tests/pie-chart/pie-chart.component';

import { LineChartComponent } from './charts/Prod/line-chart/line-chart.component';
import { SectionNavigationComponent } from './sections/section-navigation/section-navigation.component';
import { InputDataService } from 'src/input-data.service';
import { HttpClient, HttpHandler, HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    SidebarComponent,
    SectionTestChartComponent,
    BarChartComponent,
    LineChartComponent,
    PieChartComponent,
    SectionMainComponent,
    SectionListComponent,
    SectionNavigationComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    ChartsModule,
    HttpClientModule
  ],
  providers: [InputDataService, HttpClient, Location],
  bootstrap: [AppComponent]
})
export class AppModule { }
