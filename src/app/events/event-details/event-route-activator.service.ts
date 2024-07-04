import { Injectable, inject } from "@angular/core";
import { ActivatedRouteSnapshot, CanActivateFn, Router, RouterStateSnapshot } from "@angular/router";
import { EventService } from "../shared/event.service";

@Injectable()
export class EventRouteActivator {
    constructor(private eventService:EventService,private router: Router) {}
    canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
        const eventExist = !!this.eventService.getEvent(+next.params['id'])

        if(!eventExist)
            this.router.navigate(['/404'])

        return eventExist
    }
}

export const AuthGuard: CanActivateFn = (next: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean => {
    return inject(EventRouteActivator).canActivate(next, state);
  }