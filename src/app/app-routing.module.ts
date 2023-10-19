import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';


import { WelcomeComponent } from './welcome/welcome.component';
import { OurstoryComponent } from './ourstory/ourstory.component';
import { EventsComponent } from './events/events.component';
import { LodgingComponent } from './lodging/lodging.component';
import { RestaurantsComponent } from './restaurants/restaurants.component';
import { UserComponent } from './user/user.component';



const routes: Routes = [
  { path: '', redirectTo: '/welcome', pathMatch: 'full' },
  { path: 'welcome', component:  WelcomeComponent},
  { path: 'ourstory', component:  OurstoryComponent},
  { path: 'events', component: EventsComponent},
  { path: 'lodging', component: LodgingComponent},
  { path: 'restaurants', component: RestaurantsComponent},
  { path: 'user', component: UserComponent},
];
export const appRouting = RouterModule.forRoot(routes);
@NgModule({
  imports: [
    RouterModule.forRoot(routes),
    CommonModule
  ],
  exports: [ RouterModule ],
  declarations: []
})
export class AppRoutingModule { }