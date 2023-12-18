import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';


import { WelcomeComponent } from './welcome/welcome.component';
import { OurstoryComponent } from './ourstory/ourstory.component';
import { EventsComponent } from './events/events.component';
import { LodgingComponent } from './lodging/lodging.component';
import { RestaurantsComponent } from './restaurants/restaurants.component';
import { UserComponent } from './user/user.component';
import { EventDetailsComponent } from './event-details/event-details.component';
import { CommingSoonComponent } from './comming-soon/comming-soon.component';
import { GalleryComponent } from './gallery/gallery.component';
import { FaqComponent } from './faq/faq.component';
import { AreasComponent } from './areas/areas.component';
import { AirportsComponent } from './airports/airports.component';
import { HomeComponent } from './home/home.component';
import { InviteComponent } from './invite/invite.component';
import { RsvpComponent } from './rsvp/rsvp.component';
import { RsvpYesComponent } from './rsvp-yes/rsvp-yes.component';


const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component:  HomeComponent},
  { path: 'invite', component:  InviteComponent},
  { path: 'welcome', component:  WelcomeComponent},
  { path: 'ourstory', component:  OurstoryComponent},
  { path: 'events', component: EventsComponent},
  { path: 'lodging', component: LodgingComponent},
  { path: 'restaurants', component: CommingSoonComponent},
  { path: 'user', component: UserComponent},
  { path: 'eventdetails/:id', component: CommingSoonComponent},
  { path: 'help', component: CommingSoonComponent},
  { path: 'gallery', component: GalleryComponent},
  { path: 'areas', component: AreasComponent},
  { path: 'activities', component: CommingSoonComponent},
  { path: 'faq', component: FaqComponent},
  { path: 'airports', component: AirportsComponent},
  { path: 'rsvp', component: RsvpComponent},
  { path: 'rsvpyes', component: RsvpYesComponent},
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