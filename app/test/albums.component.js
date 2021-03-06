System.register(['angular2/core', 'angular2/http', 'angular2/router', './photo.service'], function(exports_1, context_1) {
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
    var core_1, http_1, router_1, photo_service_1;
    var AlbumsComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (http_1_1) {
                http_1 = http_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (photo_service_1_1) {
                photo_service_1 = photo_service_1_1;
            }],
        execute: function() {
            AlbumsComponent = (function () {
                function AlbumsComponent(_photoService) {
                    this._photoService = _photoService;
                    this.isLoading = true;
                }
                AlbumsComponent.prototype.ngOnInit = function () {
                    var _this = this;
                    this._photoService.getAlbums()
                        .subscribe(function (albums) {
                        _this.isLoading = false;
                        _this.albums = albums;
                    });
                };
                AlbumsComponent = __decorate([
                    core_1.Component({
                        template: "\n        <h1>Albums</h1>\n        <div *ngIf=\"isLoading\">\n            <i class=\"fa fa-spinner fa-spin fa-3x\"></i>\n        </div>\n        <ul>\n            <li *ngFor=\"#album of albums\">\n              <a [routerLink]=\"['Album',{ id: album.id}]\">\n                {{ album.title }}\n              </a>\n            </li>\n        </ul>\n    ",
                        directives: [router_1.ROUTER_DIRECTIVES],
                        providers: [photo_service_1.PhotoService, http_1.HTTP_PROVIDERS]
                    }), 
                    __metadata('design:paramtypes', [photo_service_1.PhotoService])
                ], AlbumsComponent);
                return AlbumsComponent;
            }());
            exports_1("AlbumsComponent", AlbumsComponent);
        }
    }
});
//# sourceMappingURL=albums.component.js.map