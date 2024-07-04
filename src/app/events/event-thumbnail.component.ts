import { Component, EventEmitter, Input, Output } from "@angular/core";
import { IEvent } from "./shared";

@Component({
    selector: 'event-thumbnail',
    template: ` <div [routerLink] = "['/events', event.id]" class="well hoverwell thumbnail">
            <div>Name: {{event.name}}</div>
            <div>ImageURl: {{event.imageUrl}}</div>
            <div>Price: \${{event.price}}</div>
            <div [ngClass] = "{green: event?.time === '8:00 am' , bold: event?.time ==='8:00 am'}"  [ngSwitch]="event?.time">
                Time:{{event?.time}}
                <span *ngSwitchCase="'8:00 am'">(Early Start)</span>
                <span *ngSwitchCase="'10:00 am'">(Late Start)</span>
                <span *ngSwitchDefault>(Normal Start)</span>
            </div>
            <div *ngIf="event?.location">
        <span> Location: {{event.location?.address}}</span>
        <span>&nbsp;</span>
        <span> {{event.location?.city}}, {{event.location?.country}}</span>
            </div>
            <div *ngIf="event?.onlineUrl">
            <span>onlineUrl {{event.onlineUrl}}</span>
            </div>
            </div>
    `,
    styles: [`
        .green {color:#003300 !important;}
        .bold {font-size:bold;}
        .thumbnail {min-height: 210px;}
        .pad-left {margin-left:10px;}
        .well div {color:#bbb;}
        `]

})
export class EventThumbnailComponent {
    @Input() event: IEvent
    someProperty: any = "some some thing"
    logFoo() {
        console.log('foo')
    }
}