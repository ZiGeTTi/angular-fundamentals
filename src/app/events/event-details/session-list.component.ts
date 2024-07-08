import { Component, Input, OnChanges, SimpleChanges } from "@angular/core";
import { ISession } from "../shared";
import { filter } from "rxjs";

@Component({
    selector: 'session-list',
    templateUrl: './session-list.component.html'

})

export class SessionListComponent implements OnChanges {

    @Input() sessions: ISession[]
    @Input() filterBy: string;
    @Input() sortBy: string;
    visibleSessions: ISession[] = [];

    ngOnChanges(changes: SimpleChanges): void {
        if (this.sessions) {
            this.filterSessions(this.filterBy)
            this.sortBy==='name' ? this.visibleSessions.sort(sortByNameAsc):this.visibleSessions.sort(sortByVotesDesc)
        }
    }
  
    filterSessions(filter) {
        if (this.filterBy === 'all') {
            this.visibleSessions = this.sessions.slice(0);
        }
        else {
            this.visibleSessions = this.sessions.filter(session => {
                console.log(this.filterBy)
                return session.level.toLowerCase() === filter;
            })
        }
    }
    log() {
        console.log(this.sessions)
    }
}

function sortByNameAsc(s1: ISession, s2: ISession) {
    if(s1.name > s2.name) return 1
    else if(s1.name===s2.name) return 0
    else return -1
}
function sortByVotesDesc(a: ISession, b: ISession) {
   return b.voters.length - b.voters.length
}

