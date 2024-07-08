import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {
  EventsListComponent,
  EventService,
  EventDetailsComponent,
  CreateEventComponent,
  EventRouteActivator,
  CreateSessionComponent,
  SessionListComponent,
  DurationPipe
} from './events/index';
import { EventsAppComponent } from './events-app.component';
 
import { EventThumbnailComponent } from './events/event-thumbnail.component';
import { NavbarComponent } from './nav/navbar.component';
 
import { ToastrHelperService } from './common/toastr.service';
import { ToastrModule } from 'ngx-toastr';
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
 
import { AppRoutingModule } from './app-routing.module';
import { Error404Component } from './error/404.component';
import { AuthService } from './user/auth.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { CollapsibleWellComponent } from './common/collapsible-well.component';
 

@NgModule({
  declarations: [
    EventsAppComponent,
    EventsListComponent,
    EventThumbnailComponent,
    EventDetailsComponent,
    Error404Component,
    CreateEventComponent,
    NavbarComponent,
    CreateSessionComponent,
    SessionListComponent,
    CollapsibleWellComponent,
    DurationPipe
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    CommonModule,
    ToastrModule.forRoot(),
    AppRoutingModule  
  ],
  providers:[EventService,
     ToastrHelperService,
      EventRouteActivator,
    {
      provide:'CanDeActivateCreateEvent',
      useValue:checkDirtyState
    },
    AuthService
    ],
  bootstrap:[EventsAppComponent] 
})
export class AppModule { }
export function checkDirtyState(component: CreateEventComponent)
{
 if(component.isDirty)
  return window.confirm('You have not completed creating event , dou want to cancel?')
return true
}