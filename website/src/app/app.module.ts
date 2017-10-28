import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatListModule } from "@angular/material";

import { AppComponent } from './app.component';
import { AboutComponent } from './pages/about/about.component';
import { PageNotFoundComponent } from './utility/page-not-found/page-not-found.component';
import { AppRoutingModule } from './app-routing.module';
import { HeaderItemComponent } from './header/header-item/header-item.component';
import { HeaderComponent } from './header/header.component';

@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    PageNotFoundComponent,
    HeaderItemComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatListModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
