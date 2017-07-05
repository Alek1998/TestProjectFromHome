import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule ,ActivatedRouteSnapshot } from "@angular/router";

import {
  EventsListComponent,
  EventThumbnailComponent,
  EventService,
  EventDetailsComponent,
  CreateEventComponent,
  EventRouteActivator,
  EventListResolver
} from './events/index'

import { AppComponent } from './app.component';
import { NavBarComponent } from "./nav/navbar.component";
import { ToastrService } from "./events/common/toastr.service";
import { appRoutes } from "./routes";
import { Error404Component } from "./errors/404.component";
import {AuthService} from "app/user/auth.service";

@NgModule({
  declarations: [
    AppComponent,
    EventsListComponent,
    EventThumbnailComponent,
    NavBarComponent,
    EventDetailsComponent,
    CreateEventComponent,
    Error404Component
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [
    EventService,
    ToastrService,
    EventRouteActivator,
    EventListResolver,
    AuthService,
    {
      provide: 'canDeactivateCreateEvent',
      useValue: checkDirtyState
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

export function checkDirtyState( component: CreateEventComponent){
  if(component.isDirty)
  {
    return window.confirm('you have not saved this event , do you really want to cancel?')
  }
  return true
}
