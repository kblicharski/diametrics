import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatListModule, MatDatepickerModule, MatNativeDateModule } from '@angular/material';

import { AppComponent } from './app.component';
import { AboutComponent } from './pages/about/about.component';
import { PageNotFoundComponent } from './utility/page-not-found/page-not-found.component';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from "@angular/common/http";
import { HeaderItemComponent } from './header/header-item/header-item.component';
import { HeaderComponent } from './header/header.component';
import { HistoryComponent } from './pages/history/history.component';
import { ApiTestComponent } from './api/api-test/api-test.component';

@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    PageNotFoundComponent,
    HeaderItemComponent,
    HeaderComponent,
    HistoryComponent,
    ApiTestComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatListModule,
    MatDatepickerModule,
    MatNativeDateModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
