import { Component, OnInit } from "@angular/core";
import { EventService } from "./shared/event.service";
import { ToastrHelperService } from "../common/toastr.service";
import { IEvent } from "./shared";

@Component({
template: `<div>
    <h1>Upcoming Angular Events</h1>
    <hr/>
    <div class="row">
    <div  *ngFor="let event of events" class="col-md-5">
   <event-thumbnail (click) = "handleThumbnailClick(event.name)" [event]="event"></event-thumbnail>
       </div>
       </div>
</div>`
})

export class EventsListComponent implements OnInit {
  events:IEvent[]

  constructor(private eventService: EventService, private toastrService: ToastrHelperService){

  }
    ngOnInit(): void {
    this.eventService.getEvents().subscribe(events=>{this.events = events}) //ctor'da cagırmak tehlikeli o yüzden onInıt ta cagırdık
    //datayı observable ile cagırdıgımız için subscirbe oluyoruz.
    }

    handleThumbnailClick(eventName){
      console.log(eventName)
      this.toastrService.success(eventName)
    }
   
}