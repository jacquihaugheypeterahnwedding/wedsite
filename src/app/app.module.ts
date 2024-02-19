import { BrowserModule } from '@angular/platform-browser';
import { NgModule, LOCALE_ID } from '@angular/core';
import { AmplifyAuthenticatorModule } from '@aws-amplify/ui-angular';
import { registerLocaleData } from '@angular/common';

import { GALLERY_CONFIG, GalleryConfig } from 'ng-gallery';
import { GalleryModule, GalleryItem, ImageItem } from 'ng-gallery';

import { GalleriaModule } from 'primeng/galleria';

/* new form imports */
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RestaurantsComponent } from './restaurants/restaurants.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import {MatIconModule} from '@angular/material/icon';
import {MatRadioModule} from '@angular/material/radio';
import {MatDialogModule} from '@angular/material/dialog';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import {MatStepperModule} from '@angular/material/stepper'
import {MatTooltipModule} from '@angular/material/tooltip';
import {MatSnackBar} from '@angular/material/snack-bar';
import {MatSidenavModule} from '@angular/material/sidenav';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatListModule } from '@angular/material/list';
import { MatMenuModule } from '@angular/material/menu';
import  {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import { MatFormFieldModule } from "@angular/material/form-field";
import {MatToolbarModule} from '@angular/material/toolbar';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import {MatTabsModule} from '@angular/material/tabs';
import { OurstoryComponent } from './ourstory/ourstory.component';
import { LodgingComponent } from './lodging/lodging.component';
import { EventsComponent } from './events/events.component';
import { CognitoService } from './cognito.service';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatCheckboxModule} from '@angular/material/checkbox'

import localeEn from '@angular/common/locales/en';
registerLocaleData(localeEn);
import localeKo from '@angular/common/locales/ko';
import { UserService } from './user.service';
import { UserComponent } from './user/user.component';
registerLocaleData(localeKo);

import {NgIf} from '@angular/common';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { MatInputModule } from '@angular/material/input';
import { EventDetailsComponent } from './event-details/event-details.component';
import { CommingSoonComponent } from './comming-soon/comming-soon.component';
import { GalleryComponent } from './gallery/gallery.component';
import { AreasComponent } from './areas/areas.component';
import { AirportsComponent } from './airports/airports.component';
import { ActivitiesComponent } from './activities/activities.component';
import { DialogOverviewExampleDialog, FaqComponent } from './faq/faq.component';

import { FlexLayoutModule } from '@angular/flex-layout';
import { HomeComponent } from './home/home.component';
import { InviteComponent } from './invite/invite.component';
import { CountdownComponent } from './countdown/countdown.component';
import { RSVPDialog, RsvpComponent } from './rsvp/rsvp.component';
import { STEPPER_GLOBAL_OPTIONS } from '@angular/cdk/stepper';
import { RegistryComponent } from './registry/registry.component';



@NgModule({
  declarations: [AppComponent, DialogOverviewExampleDialog, RSVPDialog, RestaurantsComponent, WelcomeComponent, OurstoryComponent, LodgingComponent, EventsComponent, UserComponent, EventDetailsComponent, CommingSoonComponent, GalleryComponent, AreasComponent, AirportsComponent, ActivitiesComponent, FaqComponent, HomeComponent, InviteComponent, CountdownComponent, RsvpComponent, RegistryComponent],
  imports: [
    BrowserModule,
    NgbModule,
    AppRoutingModule,
    FlexLayoutModule,
    AmplifyAuthenticatorModule,
    /* configuring form modules */
    FormsModule,
    MatFormFieldModule, MatExpansionModule, MatListModule, MatDialogModule, MatTooltipModule,
    NgIf,
    GalleriaModule,
    ReactiveFormsModule, MatGridListModule,
    MatInputModule, MatSidenavModule, MatMenuModule, MatProgressSpinnerModule,
    MatSlideToggleModule, MatToolbarModule, MatButtonModule, MatIconModule, MatCardModule,
    MatTabsModule, MatRadioModule, MatStepperModule, MatCheckboxModule,
    BrowserAnimationsModule,
    GalleryModule,
  ],
  providers: [
    CognitoService,
    MatSnackBar,
    UserService,
    {
      provide: GALLERY_CONFIG,
      useValue: {
        autoHeight: true,
        imageSize: 'cover'
      } as GalleryConfig
    },
    {
      provide: STEPPER_GLOBAL_OPTIONS,
      useValue: { showError: true }
    }
    ],
  bootstrap: [AppComponent]
})
export class AppModule {}