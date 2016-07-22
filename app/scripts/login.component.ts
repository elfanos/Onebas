import {Component} from 'angular2/core';
import {ROUTER_DIRECTIVES,Router} from 'angular2/router';

@Component({
  selector:'login',
  templateUrl: "app/views/login/login.html",
  styleUrls: ["app/views/login/login.css"],
  directives: [ROUTER_DIRECTIVES]
})

export class LoginComponent{
  constructor(private _router: Router){
  }
  isCurrentRoute(route){
      var instruction = this._router.generate(route);
      return this._router.isRouteActive(instruction);
  }
}
