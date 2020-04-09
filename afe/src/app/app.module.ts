import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { AuthComponent } from './auth/auth.component';
import { RegComponent } from './reg/reg.component';
import { CabComponent } from './cab/cab.component';

import {RouterModule, Routes} from '@angular/router';
import { FooterComponent } from './footer/footer.component';

import {FormsModule} from '@angular/forms';
import {CheckFormService} from './check-form.service';
import {FlashMessagesModule} from 'angular2-flash-messages';
import {AuthService} from './auth.service'
import {HttpModule} from '@angular/http'


const appRoute : Routes = [
  {path: '', component: CabComponent},
  {path: 'auth', component: AuthComponent},
  {path: 'cab', component: CabComponent},
  {path: 'reg', component: RegComponent}
 
];

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    AuthComponent,
    RegComponent,
    CabComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(appRoute),
    FormsModule,
    FlashMessagesModule.forRoot(),
    HttpModule
  ],
  providers: [CheckFormService, AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
