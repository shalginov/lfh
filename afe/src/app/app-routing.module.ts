import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AuthComponent } from './auth/auth.component';
import { RegComponent } from './reg/reg.component';
import { CabComponent } from './cab/cab.component';



const routes: Routes = [
  {path: '', component: CabComponent},
  {path: 'auth', component: AuthComponent},
  {path: 'cab', component: CabComponent},
  {path: 'reg', component: RegComponent}
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
