import { Injectable } from "@angular/core";
import { ToastrService } from 'ngx-toastr';

@Injectable()
export class ToastrHelperService{

    constructor(private toastr: ToastrService) {}
success(message:string, title?:string){
    console.log("toastr")
    this.toastr.success(message, title)
}
warning(message:string, title?:string){
    this.toastr.warning(message, title)
}
error(message:string, title?:string){
    this.toastr.error(message, title)
}
 
}