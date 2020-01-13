import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { LandingComponent } from './components/landing/landing.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { AppRoutingModule } from './app-routing.module';
import { DetailsRoutingModule } from './details/details-routing.module';
import { DetailsModule } from './details/details.module';

@NgModule({
  declarations: [
    AppComponent,
    LandingComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    DetailsModule,
    DetailsRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }
