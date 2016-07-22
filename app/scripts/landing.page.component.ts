import {Component, OnInit} from 'angular2/core';
import { Router  } from 'angular2/router';

@Component({
  selector: 'landing',
  templateUrl:"app/views/landing_page/landing.page.html",
  styleUrls: ["app/views/landing_page/landing.page.css"]
})

export class LandingPageComponent implements OnInit{
  constructor(
    private _router: Router){ }
  ngOnInit(){
  }

}
