import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {FirstPageComponent} from "./components/first-page/first-page.component";
import {SignUpPageComponent} from "./components/SignUp-page/SingUp-page.component";

const routes: Routes = [
  {path:'', component:FirstPageComponent},
  {path:'signup',component:SignUpPageComponent},
  //{ }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
