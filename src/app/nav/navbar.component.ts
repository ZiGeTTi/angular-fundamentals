import { Component } from "@angular/core";
import { AuthService } from "../user/auth.service";

@Component({
    selector:'nav-bar',
    templateUrl:'./navbar.component.html',
    styles:`
    .nav.navbar-nav{font-size:15px;}
    #searchForm{margin-right:100px;}
    `
})
export class NavbarComponent{
constructor(public auth:AuthService){
 console.log('navbar'+ auth.isAuthenticated()   )
}

isAuth(): boolean{
    return this.auth.isAuthenticated()
}
}