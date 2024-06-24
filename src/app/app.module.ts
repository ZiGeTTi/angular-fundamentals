import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { EventsAppComponent } from './events-app.component';
import { EventsListComponent } from './events/events-list.component';
import { EventThumbnailComponent } from './events/event-thumbnail.component';
import { NavbarComponent } from './nav/navbar.component';
import { EventService } from './events/shared/event.service';
import { ToastrHelperService } from './common/toastr.service';
import { ToastrModule } from 'ngx-toastr';
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";

@NgModule({
  declarations: [
    EventsAppComponent,
    EventsListComponent,
    EventThumbnailComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot()
  ],
  providers:[EventService, ToastrHelperService],
  bootstrap:[EventsAppComponent] 
})
export class AppModule { }
