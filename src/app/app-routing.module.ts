import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminDashboardComponent } from './components/admin-dashboard/admin-dashboard.component';
import { HomepageComponent } from './components/homepage/homepage.component';
import { MatchesComponent } from './components/matches/matches.component';

const routes: Routes = [
  { path: '', component: HomepageComponent },
  { path: 'admin', component: AdminDashboardComponent },
  { path: 'matches', component: MatchesComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
