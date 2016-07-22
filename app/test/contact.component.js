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
    var ContactComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            }],
        execute: function() {
            ContactComponent = (function () {
                function ContactComponent(_router) {
                    this._router = _router;
                    this._next = false;
                    this._previous = false;
                }
                ContactComponent.prototype.onSubmit = function (form) {
                    console.log(form);
                    this._router.navigate(['Albums']);
                };
                ContactComponent.prototype.routerCanDeactivate = function (next, previous) {
                    if (next) {
                        this._next = true;
                        return next;
                    }
                    else {
                        this._previous = true;
                        return previous;
                    }
                };
                ContactComponent.prototype.getConfirm = function () {
                    if (this._previous) {
                        confirm("Are you sure");
                    }
                    if (this._next) {
                        confirm("Are you sure");
                    }
                };
                ContactComponent = __decorate([
                    core_1.Component({
                        templateUrl: '/app/contact.component.html'
                    }), 
                    __metadata('design:paramtypes', [router_1.Router])
                ], ContactComponent);
                return ContactComponent;
            }());
            exports_1("ContactComponent", ContactComponent);
        }
    }
});
//# sourceMappingURL=contact.component.js.map