import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from "@angular/forms";

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {
  MatDatepickerModule, MatListModule, MatNativeDateModule, MatFormFieldModule,
  MatSelectModule, MatOptionModule, MatInputModule
} from '@angular/material';
import { ChartModule } from 'angular-highcharts';

import { AppComponent } from './app.component';
import { AboutComponent } from './pages/about/about.component';
import { PageNotFoundComponent } from './utility/page-not-found/page-not-found.component';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { HeaderItemComponent } from './header/header-item/header-item.component';
import { HeaderComponent } from './header/header.component';
import { HistoryComponent } from './pages/history/history.component';
import { ApiTestComponent } from './api/api-test/api-test.component';
import { AddBgComponent } from './pages/history/add-bg/add-bg.component';
import { AddEventComponent } from './pages/history/add-event/add-event.component';
import { ChartComponent } from './pages/history/chart/chart.component';


@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    PageNotFoundComponent,
    HeaderItemComponent,
    HeaderComponent,
    HistoryComponent,
    ApiTestComponent,
    AddBgComponent,
    AddEventComponent,
    ChartComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatListModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatFormFieldModule,
    MatSelectModule,
    MatOptionModule,
    MatInputModule,
    ChartModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
