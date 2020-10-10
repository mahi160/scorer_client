import { PageNotFindComponent } from './views/page-not-find/page-not-find.component';
import { SummaryComponent } from './views/summary/summary.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: 'summary', component: SummaryComponent },
  { path: '', redirectTo: '/summary', pathMatch: 'full' },
  { path: '**', component: PageNotFindComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
