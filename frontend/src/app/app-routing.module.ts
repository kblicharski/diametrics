import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { PageNotFoundComponent } from './utility/page-not-found/page-not-found.component';
import { AboutComponent } from './pages/about/about.component';

const appRoutes: Routes = [
  {path: 'about', component: AboutComponent},
  {path: '', redirectTo: '/about', pathMatch: 'full'},
  {path: '404', component: PageNotFoundComponent},
  {path: '**', redirectTo: '/404'}
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
