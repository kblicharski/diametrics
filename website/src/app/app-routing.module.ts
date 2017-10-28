import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { PageNotFoundComponent } from './utility/page-not-found/page-not-found.component';
import { AboutComponent } from './pages/about/about.component';
import { HistoryComponent } from './pages/history/history.component';
import { ApiTestComponent } from './api/api-test/api-test.component';

const appRoutes: Routes = [
  {path: 'about', component: AboutComponent},
  {path: 'history', component: HistoryComponent},
  {path: 'api', component: ApiTestComponent},
  {path: '', redirectTo: '/about', pathMatch: 'full'},
  {path: '404', component: PageNotFoundComponent},
  {path: '**', redirectTo: '/404'}
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
