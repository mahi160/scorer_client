import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material/material.module';
import { LayoutModule } from '@angular/cdk/layout';
import { AppComponent } from './app.component';
import { NavBarComponent } from './layouts/nav-bar/nav-bar.component';
import { SummaryComponent } from './views/summary/summary.component';
import { PageNotFindComponent } from './views/page-not-find/page-not-find.component';
import { RulesFormComponent } from './layouts/rules-form/rules-form.component';
import { MatchesComponent } from './views/matches/matches.component';

import { ReactiveFormsModule } from '@angular/forms';
import { TypeFormComponent } from './layouts/type-form/type-form.component';
import { PlayersFormComponent } from './layouts/players-form/players-form.component';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    SummaryComponent,
    PageNotFindComponent,
    RulesFormComponent,
    MatchesComponent,
    TypeFormComponent,
    PlayersFormComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    LayoutModule,
    MaterialModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
