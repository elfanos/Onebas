import {Component} from 'angular2/core'
import {ROUTER_DIRECTIVES,Router} from 'angular2/router'
@Component({
  selector: 'navbar',
  templateUrl: "app/views/navbar/navbar.component.html",
  styleUrls: ["app/views/navbar/navbar.css"],
  directives: [ROUTER_DIRECTIVES]

})
export class NavBarComponent {
    constructor(private _router: Router){
    }

    isCurrentRoute(route){
        var instruction = this._router.generate(route);
        return this._router.isRouteActive(instruction);
    }
 }
