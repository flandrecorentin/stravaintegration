import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutPageComponent } from './pages/about-page/about-page.component';
import { NotFound404PageComponent } from './pages/not-found404-page/not-found404-page.component';
import { ActivitiesPageComponent } from './pages/activities-page/activities-page.component';
import { WelcomePageComponent } from './pages/welcome-page/welcome-page.component';

const routes: Routes = [
  {path: '', component: WelcomePageComponent},
  {path: 'about', component: AboutPageComponent},
  {path: 'activities', component: ActivitiesPageComponent},


  {path: '**', pathMatch: 'full', component: NotFound404PageComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
