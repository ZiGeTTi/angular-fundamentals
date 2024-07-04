import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EventsListComponent } from './events/events-list.component';
import { EventDetailsComponent } from './events/event-details/event-details.component';
import { CreateEventComponent } from './events/create-event.component';
import { Error404Component } from './error/404.component';
import { EventRouteActivator } from './events/event-details/event-route-activator.service';
import { CreateSessionComponent } from './events';

const routes: Routes = [
  {path:'events/new', component:CreateEventComponent, canDeactivate:['CanDeActivateCreateEvent']},
  {path:'events', component:EventsListComponent},
  {path:'events/:id', component:EventDetailsComponent, canActivate: [EventRouteActivator]},
  {path:'events/session/new', component:CreateSessionComponent},
  {path:'404', component:Error404Component},
  {path:'', redirectTo:'/events', pathMatch:'full'},
  {path:'user', loadChildren:()=> import('./user/user.module').then(m=> m.UserModule)}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
