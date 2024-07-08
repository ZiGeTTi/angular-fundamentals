import { Component, EventEmitter, OnInit, Output, output } from "@angular/core";
import { FormControl, FormGroup, ValidatorFn, Validators } from "@angular/forms";
import { ISession, restrictedWords } from "../shared";

@Component({
    selector: 'create-session',
    templateUrl: './create-session.component.html',
    styles: [`
    em {float:right; color:#E05C65; padding-left:10px;}
    .error input, .error select, .error textarea {background-color:#E3C3C5;}
    .error ::-webkit-input-placeholder {color:#999;}
    .error :-moz-placeholder{color:#999;}
    .error :-ms-input-placeholder{color:#999;}
    `]
})

export class CreateSessionComponent implements OnInit{

@Output() saveNewSession = new EventEmitter()
@Output() cancelAddSession = new EventEmitter()
newSessionForm: FormGroup
name:FormControl
presenter:FormControl
duration:FormControl
level:FormControl
abstract:FormControl

    ngOnInit(): void {
    this.name = new FormControl('', Validators.required)
    this.presenter = new FormControl('', Validators.required)
    this.duration = new FormControl('', Validators.required)
    this.level = new FormControl('', Validators.required)
    this.abstract = new FormControl('', [Validators.required, Validators.maxLength(40), restrictedWords(['foo', 'bar']) as ValidatorFn ])

    this.newSessionForm = new FormGroup({
        name: this.name,
        presenter: this.presenter,
        duration:this.duration,
        level:this.level,
        abstract: this.abstract
    })
    }

    saveSession(formValues){
        console.log(formValues)
        let newSession:ISession = {
            id: 1,
            abstract: formValues.abstract,
            duration: +formValues.duration,
            level: formValues.level,
            name: formValues.name,
            presenter: formValues.presenter,
            voters:[]
        }
        this.saveNewSession.emit(newSession)
    }
    
 cancel(){
    this.cancelAddSession.emit()
 }
}