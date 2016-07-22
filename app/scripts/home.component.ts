import {Component,OnInit} from 'angular2/core';
import {LoginComponent} from './login.component';
import { Router,RouteParams } from 'angular2/router';
import { FormBuilder, Validators, ControlGroup,NgForm} from 'angular2/common';

// import {UserService} from '../service/user/user.service';
import {User} from './user';
import {Hero} from '../models/hero';

@Component({
  templateUrl: "app/views/home/home.component.html",
  styleUrls: ["app/views/home/home.css"],
  providers: [LoginComponent]
})

export class HomeComponent implements OnInit{
  form: ControlGroup;
  user = new User();

  constructor(
    private _router: Router,
    fb: FormBuilder,
    private _routeParams: RouteParams,
    // private _userService: UserService
  ){
    // this.form = fb.group({
		// 	name: ['', Validators.required],
		// 	email: ['', Validators],
		// 	phone: [],
		// 	address: fb.group({
		// 		street: [],
		// 		suite: [],
		// 		city: [],
		// 		zipcode: []
		// 	})
		// });
  }
  ngOnInit(){

  }

  powers = ['Really Smart', 'Super Flexible',
          'Super Hot', 'Weather Changer'];
  model = new Hero(18, 'Dr IQ', this.powers[0], 'Chuck Overstreet');
  submitted = false;
  onSubmit() { this.submitted = true; }
  // TODO: Remove this when we're done
  get diagnostic() { return JSON.stringify(this.model); }
  // save(){
  //   var result;
  //
  //   if(this.user.id){
  //     result = this._userService.updateUser(this.user);
  //   }else{
  //     result = this._userService.addUser(this.user)
	// 	  result.subscribe(x => {
  //           // Ideally, here we'd want:
  //           // this.form.markAsPristine();
  //           this._router.navigate(['Home']);
  //     });
  //   }
  // }
}
