import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HomepageComponent } from './components/homepage/homepage.component';
import { AdminDashboardComponent } from './components/admin-dashboard/admin-dashboard.component';
import { BgmiComponent } from './components/admin-dashboard/bgmi/bgmi.component';
import { AddTournamentComponent } from './components/admin-dashboard/add-tournament/add-tournament.component';
import { AddMatchesComponent } from './components/admin-dashboard/add-matches/add-matches.component';
import { BgmilistComponent } from './components/admin-dashboard/bgmi/bgmilist/bgmilist.component';
import { LoginComponent } from './components/login/login.component';
import { SignupComponent } from './components/signup/signup.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { PopulargamesComponent } from './components/homepage/populargames/populargames.component';
import { PopulartournamentComponent } from './components/homepage/populartournament/populartournament.component';
import { FooterComponent } from './components/footer/footer.component';
import { GamesComponent } from './components/homepage/games/games.component'
@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomepageComponent,
    AdminDashboardComponent,
    BgmiComponent,
    AddTournamentComponent,
    AddMatchesComponent,
    BgmilistComponent,
    LoginComponent,
    SignupComponent,
    PopulargamesComponent,
    PopulartournamentComponent,
    FooterComponent,
    GamesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
