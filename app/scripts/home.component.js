System.register(['angular2/core', './login.component', 'angular2/router', 'angular2/common', './user', '../models/hero'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, login_component_1, router_1, common_1, user_1, hero_1;
    var HomeComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (login_component_1_1) {
                login_component_1 = login_component_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (common_1_1) {
                common_1 = common_1_1;
            },
            function (user_1_1) {
                user_1 = user_1_1;
            },
            function (hero_1_1) {
                hero_1 = hero_1_1;
            }],
        execute: function() {
            HomeComponent = (function () {
                function HomeComponent(_router, fb, _routeParams) {
                    this._router = _router;
                    this._routeParams = _routeParams;
                    this.user = new user_1.User();
                    this.powers = ['Really Smart', 'Super Flexible',
                        'Super Hot', 'Weather Changer'];
                    this.model = new hero_1.Hero(18, 'Dr IQ', this.powers[0], 'Chuck Overstreet');
                    this.submitted = false;
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
                HomeComponent.prototype.ngOnInit = function () {
                };
                HomeComponent.prototype.onSubmit = function () { this.submitted = true; };
                Object.defineProperty(HomeComponent.prototype, "diagnostic", {
                    // TODO: Remove this when we're done
                    get: function () { return JSON.stringify(this.model); },
                    enumerable: true,
                    configurable: true
                });
                HomeComponent = __decorate([
                    core_1.Component({
                        templateUrl: "app/views/home/home.component.html",
                        styleUrls: ["app/views/home/home.css"],
                        providers: [login_component_1.LoginComponent]
                    }), 
                    __metadata('design:paramtypes', [router_1.Router, common_1.FormBuilder, router_1.RouteParams])
                ], HomeComponent);
                return HomeComponent;
            }());
            exports_1("HomeComponent", HomeComponent);
        }
    }
});
//# sourceMappingURL=home.component.js.map