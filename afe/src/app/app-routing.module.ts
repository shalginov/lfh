import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthComponent } from './auth/auth.component';
import { RegComponent } from './reg/reg.component';
import { CabComponent } from './cab/cab.component';
import { TicketComponent } from './ticket/ticket.component'
import { EditTicketComponent } from './edit-ticket/edit-ticket.component'


const routes: Routes = [
  {path: '', component: AuthComponent},
  {path: 'auth', component: AuthComponent},
  {path: 'cab', component: CabComponent},
  {path: 'reg', component: RegComponent},
  {path: 'ticket', component: TicketComponent},
  {path: 'edit', component: EditTicketComponent} 
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
