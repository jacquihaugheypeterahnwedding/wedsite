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



const routes: Routes = [
  { path: '', redirectTo: '/welcome', pathMatch: 'full' },
  { path: 'welcome', component:  WelcomeComponent},
  { path: 'ourstory', component:  CommingSoonComponent},
  { path: 'events', component: EventsComponent},
  { path: 'lodging', component: LodgingComponent},
  { path: 'restaurants', component: CommingSoonComponent},
  { path: 'user', component: UserComponent},
  { path: 'eventdetails', component: EventDetailsComponent},
  { path: 'help', component: CommingSoonComponent},
  { path: 'gallery', component: CommingSoonComponent},
  { path: 'areas', component: CommingSoonComponent},
  { path: 'activities', component: CommingSoonComponent},
  { path: 'faq', component: CommingSoonComponent},
  { path: 'airports', component: CommingSoonComponent},
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