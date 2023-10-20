import { BrowserModule } from '@angular/platform-browser';
import { NgModule, LOCALE_ID } from '@angular/core';
import { AmplifyAuthenticatorModule } from '@aws-amplify/ui-angular';
import { registerLocaleData } from '@angular/common';

/* new form imports */
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RestaurantsComponent } from './restaurants/restaurants.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import {MatIconModule} from '@angular/material/icon';
import {MatRadioModule} from '@angular/material/radio';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import {MatSidenavModule} from '@angular/material/sidenav';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatListModule } from '@angular/material/list';
import { MatMenuModule } from '@angular/material/menu';
import { MatFormFieldModule } from "@angular/material/form-field";
import {MatToolbarModule} from '@angular/material/toolbar';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import {MatTabsModule} from '@angular/material/tabs';
import { OurstoryComponent } from './ourstory/ourstory.component';
import { LodgingComponent } from './lodging/lodging.component';
import { EventsComponent } from './events/events.component';
import { CognitoService } from './cognito.service';

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

@NgModule({
  declarations: [AppComponent, RestaurantsComponent, WelcomeComponent, OurstoryComponent, LodgingComponent, EventsComponent, UserComponent, EventDetailsComponent, CommingSoonComponent],
  imports: [
    BrowserModule,
    NgbModule,
    AppRoutingModule,
    AmplifyAuthenticatorModule,
    /* configuring form modules */
    FormsModule,
    MatFormFieldModule, MatExpansionModule, MatListModule,
    NgIf,
    ReactiveFormsModule,
    MatInputModule, MatSidenavModule, MatMenuModule,
    MatSlideToggleModule, MatToolbarModule, MatButtonModule, MatIconModule, MatCardModule,
    MatTabsModule, MatRadioModule,
    BrowserAnimationsModule
  ],
  providers: [
    CognitoService,
    UserService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}