import { NgModule, importProvidersFrom } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { AboutPageComponent } from './pages/about-page/about-page.component';
import { NotFound404PageComponent } from './pages/not-found404-page/not-found404-page.component';
import { ActivitiesPageComponent } from './pages/activities-page/activities-page.component';
import { WelcomePageComponent } from './pages/welcome-page/welcome-page.component';
import {Backend1Service} from "./services/backend1.service";
import { ActivityComponent } from './components/activity/activity.component';

@NgModule({
  declarations: [
    AppComponent,
    AboutPageComponent,
    NotFound404PageComponent,
    ActivitiesPageComponent,
    WelcomePageComponent,
    ActivityComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [
    HttpClientModule,
    Backend1Service
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
