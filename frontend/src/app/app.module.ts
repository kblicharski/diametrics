import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { HeaderItemComponent } from './header/header-item/header-item.component';
import { PageNotFoundComponent } from '../../../website/src/app/utility/page-not-found/page-not-found.component';
import { AboutComponent } from './pages/about/about.component';
import { AppRoutingModule } from '../../../website/src/app/app-routing.module';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HeaderItemComponent,
    PageNotFoundComponent,
    AboutComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
