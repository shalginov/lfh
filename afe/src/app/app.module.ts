import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule} from '@angular/common/http'

import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { AuthComponent } from './auth/auth.component';
import { RegComponent } from './reg/reg.component';
import { CabComponent } from './cab/cab.component';
import { TicketComponent } from './ticket/ticket.component'

import {FormsModule} from '@angular/forms';
import {CheckFormService} from './check-form.service';
import {FlashMessagesModule} from 'angular2-flash-messages';
import {AuthService} from './auth.service'
import {HttpModule} from '@angular/http';
// // import {HttpClient} from  '@angular/common/http';
// import {HttpClientModule} from '@angular/common/http';
import { TicmobService } from './ticmob.service';
import { EditTicketComponent } from './edit-ticket/edit-ticket.component'
import { TicketService } from './ticket.service';
import { FilterComponent } from './filter/filter.component';



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    AuthComponent,
    RegComponent,
    CabComponent,
    TicketComponent,
    EditTicketComponent,
    FilterComponent   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    FlashMessagesModule.forRoot(),
    HttpModule,
    // HttpClient,
    HttpClientModule
  ],
  providers: [
    CheckFormService,
     AuthService,
      TicmobService,
       TicketService,
      ],
  bootstrap: [AppComponent]
})
export class AppModule { }
