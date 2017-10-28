import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { PageNotFoundComponent } from './utility/page-not-found/page-not-found.component';
import { AboutComponent } from './pages/about/about.component';
import { HistoryComponent } from './pages/history/history.component';
import { ApiTestComponent } from './api/api-test/api-test.component';
import { AddBgComponent } from './pages/history/add-bg/add-bg.component';
import { AddEventComponent } from './pages/history/add-event/add-event.component';

const appRoutes: Routes = [
  {path: 'about', component: AboutComponent},
  {path: 'history', component: HistoryComponent, children: [
    { path: 'add-bg', component: AddBgComponent },
    { path: 'add-event', component: AddEventComponent }
  ]},
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
