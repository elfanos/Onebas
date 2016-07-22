import {Component} from 'angular2/core';
import {Router, CanDeactivate} from 'angular2/router';

@Component({
    templateUrl: '/app/contact.component.html'
})
export class ContactComponent implements CanDeactivate{
    private _next = false;
    private _previous = false;
    constructor(
      private _router: Router){
    }
    onSubmit(form){
        console.log(form);
        this._router.navigate(['Albums']);
    }
    routerCanDeactivate(next,previous) :boolean{
      if(next){
        this._next = true
        return next;
      }
      else{
        this._previous = true;
        return previous;
      }
    }
    getConfirm(){
      if(this._previous){
        confirm("Are you sure");
      }
      if(this._next){
        confirm("Are you sure");
      }
    }
}
