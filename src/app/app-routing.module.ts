import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from '../app/home/home.component';
import {LoginComponent} from '../app/login/login.component';
import {AcceptFormComponent} from '../app/accept-form/accept-form.component';

const routes: Routes = [
  {path:'',component:HomeComponent},
  {path:'Login',component:LoginComponent},
  {path:'AcceptForm',component:AcceptFormComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }