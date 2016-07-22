System.register(['angular2/core', 'angular2/router'], function(exports_1, context_1) {
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
    var core_1, router_1;
    var LandingPageComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            }],
        execute: function() {
            LandingPageComponent = (function () {
                function LandingPageComponent(_router) {
                    this._router = _router;
                }
                LandingPageComponent.prototype.ngOnInit = function () {
                };
                LandingPageComponent = __decorate([
                    core_1.Component({
                        selector: 'landing',
                        templateUrl: "app/views/landing_page/landing.page.html",
                        styleUrls: ["app/views/landing_page/landing.page.css"]
                    }), 
                    __metadata('design:paramtypes', [router_1.Router])
                ], LandingPageComponent);
                return LandingPageComponent;
            }());
            exports_1("LandingPageComponent", LandingPageComponent);
        }
    }
});
//# sourceMappingURL=landing.page.component.js.map