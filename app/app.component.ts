import {Component} from 'angular2/core';
import {RouteConfig, ROUTER_DIRECTIVES} from 'angular2/router';

import {HomeComponent} from './scripts/home.component';
import {NavBarComponent} from './scripts/navbar.component';
import {LandingPageComponent} from './scripts/landing.page.component';
import {UserComponent} from './scripts/user.component';
import {LoginComponent} from './scripts/login.component';
@RouteConfig([
    { path: '/', name: 'Home', component: HomeComponent, useAsDefault:true},
    { path: '/login', name:'Login', component: LoginComponent},
    { path: '/user', name: 'User', component:UserComponent},
    { path: '/*other', name: 'Other', redirectTo: ['Home']}
])
@Component({
    selector: 'my-app',
    template:`
      <navbar></navbar>
      <login></login>
      <router-outlet></router-outlet>
    ` ,
    providers: [HomeComponent,LandingPageComponent],
    directives: [NavBarComponent,ROUTER_DIRECTIVES]
})
export class AppComponent{
}
