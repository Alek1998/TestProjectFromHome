import { NgModule } from '@angular/core';
import {CommonModule} from "@angular/common";
import {RouterModule} from "@angular/router";
import {FormsModule} from "@angular/forms"
import {ProfileComponent} from "./profile.component";
import {userRoutes} from "./user.routes";
import {LoginComponent} from "app/user/login.component";

@NgModule({
  imports:[
    CommonModule,
    RouterModule.forChild(userRoutes),
    FormsModule
  ],
  declarations: [
    ProfileComponent,
    LoginComponent
  ],
  providers: [

  ]
})
export class UserModule{

}
