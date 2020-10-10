import { MaterialModule } from './material/material.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavBarComponent } from './layouts/nav-bar/nav-bar.component';
import { LayoutModule } from '@angular/cdk/layout';
import { SummaryComponent } from './views/summary/summary.component';
import { PageNotFindComponent } from './views/page-not-find/page-not-find.component';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    SummaryComponent,
    PageNotFindComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    LayoutModule,
    MaterialModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
