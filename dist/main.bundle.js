webpackJsonp(["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/addnewpet/addnewpet.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/addnewpet/addnewpet.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <h2>Add your pet</h2>\n  <form #myForm=\"ngForm\">\n\n\n\n\n    <div class=\"form-group\">\n      <label for=\"name\">Name</label>\n      <input type=\"text\" class=\"form-control\" id=\"name\"  placeholder=\"Enter Name...\"  required  [(ngModel)]=\"model.name\" name=\"name\" #name=\"ngModel\">\n      <div [hidden]=\"name.valid || name.pristine\"\n           class=\"alert alert-danger\">\n        Name is required\n      </div>\n    </div>\n\n     <!-- TODO: remove this: {{model.name}}-->\n\n    <div class=\"form-group\">\n      <label for=\"type\">Type</label>\n      <select class=\"form-control\" id=\"type\" placeholder=\"Select Type\" required [(ngModel)]=\"model.type\" name=\"type\" (change)=\"changeType(model.type)\">\n        <option *ngFor=\"let pow of types\" [value]=\"pow\" >{{pow}}</option>\n      </select>\n    </div>\n\n    <!--TODO: remove this: {{model.type}}-->\n\n    <div class=\"form-group\">\n      <label for=\"breed\">Breed</label>\n      <select class=\"form-control\" id=\"breed\" placeholder=\"Select Breed\"  required [(ngModel)]=\"model.breed\" name=\"breed\">\n        <option *ngFor=\"let breed of breeds\" [value]=\"breed\" >{{breed}}</option>\n      </select>\n    </div>\n\n    <!--TODO: remove this: {{model.breed}}-->\n\n    <div class=\"form-group\">\n      <label for=\"name\">Latitude</label>\n      <input type=\"text\" class=\"form-control\" id=\"latitude\" placeholder=\"Enter Latitude...\" required  [(ngModel)]=\"model.latitude\" name=\"latitude\"  #latitude=\"ngModel\">\n      <div [hidden]=\"latitude.valid || latitude.pristine\"\n           class=\"alert alert-danger\">\n        Latitude is required\n      </div>\n    </div>\n\n   <!-- TODO: remove this: {{model.latitude}}-->\n\n    <div class=\"form-group\">\n      <label for=\"name\">Longitude</label>\n      <input type=\"text\" class=\"form-control\" id=\"longitude\" placeholder=\"Enter Longitude...\" required [(ngModel)]=\"model.longitude\" name=\"longitude\"  #longitude=\"ngModel\"\n             (change)=\"lookForLocation(model.latitude, model.longitude)\" >\n      <div [hidden]=\"longitude.valid || longitude.pristine\"\n           class=\"alert alert-danger\">\n        Longitude is required\n      </div>\n    </div>\n\n   <!-- TODO: remove this: {{model.longitude}}-->\n\n    <div class=\"form-group\">\n      <label for=\"name\">Location</label>\n      <input type=\"text\" class=\"form-control\" id=\"location\" placeholder=\"Enter Location...\" [(ngModel)]=\"model.location\" name=\"location\">\n    </div>\n\n    <!--TODO: remove this: {{model.location}}-->\n\n\n          <button type=\"submit\" (click)=\"onSubmit(model.name, model.type,model.breed,model.location, model.latitude, model.longitude)\" class=\"btn btn-success\">Add my pet!</button>\n          <button class=\"btn btn-primary\" (click)=\"cancelSubmit()\" >Cancel</button>\n\n  </form>\n</div>\n"

/***/ }),

/***/ "./src/app/addnewpet/addnewpet.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AddnewpetComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__pet__ = __webpack_require__("./src/app/addnewpet/pet.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__addnewpet_service__ = __webpack_require__("./src/app/addnewpet/addnewpet.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AddnewpetComponent = /** @class */ (function () {
    //  b7ca4f48dba24ab8926c3fd81d3881f3
    //
    function AddnewpetComponent(router, addnewpetservice) {
        this.router = router;
        this.addnewpetservice = addnewpetservice;
        this.types = ['Dog', 'Cat', 'Fish'];
        this.model = new __WEBPACK_IMPORTED_MODULE_1__pet__["a" /* Pet */]('', '', '', '', '', '');
        this.dog_breeds = ["German Shepperd", "Pug", "Beagle", "Pointer", "Husky", "Poodle"];
        this.cat_breeds = ["Spynhx", "Bolinese"];
        this.fish_breeds = ["Fish Balls", "Gold Fish"];
        this.breeds = [];
        this.arrayArg = [];
    }
    AddnewpetComponent.prototype.ngOnInit = function () {
    };
    AddnewpetComponent.prototype.changeType = function (_type) {
        if (_type == "Dog") {
            this.breeds = [];
            this.breeds = this.dog_breeds;
        }
        if (_type == "Cat") {
            this.breeds = [];
            this.breeds = this.cat_breeds;
        }
        if (_type == "Fish") {
            this.breeds = [];
            this.breeds = this.fish_breeds;
        }
    };
    AddnewpetComponent.prototype.onSubmit = function (name, type, breed, location, latitude, longitude) {
        var _this = this;
        if (name.length < 1) {
            alert("Enter Name");
            return;
        }
        if (type.length < 1) {
            alert("Select Type");
            return;
        }
        if (breed.length < 1) {
            alert("Select Breed");
            return;
        }
        if (latitude.length < 1) {
            alert("Enter latitude");
            return;
        }
        if (longitude.length < 1) {
            alert("Enter longitude");
            return;
        }
        if (location.length < 1) {
            alert("Enter location");
            return;
        }
        if (location == "Please check Latitude and Longitude") {
            alert("Please check Latitude and Longitude");
            return;
        }
        this.arrayArg = [];
        var newObj = new Object();
        newObj["name"] = name;
        newObj["type"] = type;
        newObj["breed"] = breed;
        newObj["location"] = location;
        newObj["latitude"] = latitude;
        newObj["longitude"] = longitude;
        this.arrayArg.push(newObj);
        var json = this.arrayArg.reduce(function (json, value, key) { json[key] = value; return json; }, {});
        var myJsonString = JSON.stringify(json);
        this.addnewpetservice.addNewPet(myJsonString)
            .subscribe(function (data) {
            var link = ['/'];
            _this.router.navigate(link);
        });
    };
    AddnewpetComponent.prototype.cancelSubmit = function () {
        var link = ['/'];
        this.router.navigate(link);
    };
    AddnewpetComponent.prototype.lookForLocation = function (lat, lang) {
        var _this = this;
        this.addnewpetservice.lookForLoc(lat, lang)
            .subscribe(function (data) {
            if (data.results.length < 1) {
                _this.model.location = "Please check Latitude and Longitude";
            }
            else {
                _this.model.location = data["results"][0]["formatted"];
            }
        });
    };
    AddnewpetComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-addnewpet',
            template: __webpack_require__("./src/app/addnewpet/addnewpet.component.html"),
            styles: [__webpack_require__("./src/app/addnewpet/addnewpet.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__angular_router__["a" /* Router */],
            __WEBPACK_IMPORTED_MODULE_2__addnewpet_service__["a" /* AddnewpetService */]])
    ], AddnewpetComponent);
    return AddnewpetComponent;
}());



/***/ }),

/***/ "./src/app/addnewpet/addnewpet.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AddnewpetService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AddnewpetService = /** @class */ (function () {
    function AddnewpetService(http) {
        this.http = http;
        this.url = "";
    }
    AddnewpetService.prototype.addNewPet = function (_param) {
        this.url = '/api/addpet/' + _param;
        return this.http.get(this.url);
    };
    AddnewpetService.prototype.lookForLoc = function (_lat, _lang) {
        this.url = '/api/lookforloc/' + _lat + "," + _lang;
        return this.http.get(this.url);
    };
    AddnewpetService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */]])
    ], AddnewpetService);
    return AddnewpetService;
}());



/***/ }),

/***/ "./src/app/addnewpet/pet.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Pet; });
var Pet = /** @class */ (function () {
    function Pet(name, type, breed, latitude, longitude, location) {
        this.name = name;
        this.type = type;
        this.breed = breed;
        this.latitude = latitude;
        this.longitude = longitude;
        this.location = location;
    }
    return Pet;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<router-outlet></router-outlet>\r\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'app';
    }
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-root',
            template: __webpack_require__("./src/app/app.component.html"),
            styles: [__webpack_require__("./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("./node_modules/@angular/platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common_http__ = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_routing__ = __webpack_require__("./src/app/app.routing.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_component__ = __webpack_require__("./src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__listpet_listpet_component__ = __webpack_require__("./src/app/listpet/listpet.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__addnewpet_addnewpet_component__ = __webpack_require__("./src/app/addnewpet/addnewpet.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__addnewpet_addnewpet_service__ = __webpack_require__("./src/app/addnewpet/addnewpet.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__listpet_listpet_service__ = __webpack_require__("./src/app/listpet/listpet.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__viewpet_viewpet_component__ = __webpack_require__("./src/app/viewpet/viewpet.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__viewpet_viewpet_service__ = __webpack_require__("./src/app/viewpet/viewpet.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};












var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_6__listpet_listpet_component__["a" /* ListpetComponent */],
                __WEBPACK_IMPORTED_MODULE_7__addnewpet_addnewpet_component__["a" /* AddnewpetComponent */],
                __WEBPACK_IMPORTED_MODULE_10__viewpet_viewpet_component__["a" /* ViewpetComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_3__app_routing__["a" /* routing */],
                __WEBPACK_IMPORTED_MODULE_2__angular_common_http__["b" /* HttpClientModule */],
                __WEBPACK_IMPORTED_MODULE_4__angular_forms__["a" /* FormsModule */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_8__addnewpet_addnewpet_service__["a" /* AddnewpetService */],
                __WEBPACK_IMPORTED_MODULE_9__listpet_listpet_service__["a" /* ListpetService */],
                __WEBPACK_IMPORTED_MODULE_11__viewpet_viewpet_service__["a" /* ViewpetService */]
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/app.routing.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return routing; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__listpet_listpet_component__ = __webpack_require__("./src/app/listpet/listpet.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__addnewpet_addnewpet_component__ = __webpack_require__("./src/app/addnewpet/addnewpet.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__viewpet_viewpet_component__ = __webpack_require__("./src/app/viewpet/viewpet.component.ts");
/**
 * Created by Arnold on 2018-04-10.
 */




var APP_ROUTES = [
    { path: '', redirectTo: '/listpets', pathMatch: 'full' },
    { path: 'listpets', component: __WEBPACK_IMPORTED_MODULE_1__listpet_listpet_component__["a" /* ListpetComponent */] },
    { path: 'addnewpet', component: __WEBPACK_IMPORTED_MODULE_2__addnewpet_addnewpet_component__["a" /* AddnewpetComponent */] },
    { path: 'viewpet', component: __WEBPACK_IMPORTED_MODULE_3__viewpet_viewpet_component__["a" /* ViewpetComponent */] }
];
var routing = __WEBPACK_IMPORTED_MODULE_0__angular_router__["b" /* RouterModule */].forRoot(APP_ROUTES);


/***/ }),

/***/ "./src/app/listpet/listpet.component.css":
/***/ (function(module, exports) {

module.exports = "table tbody tr:nth-child(odd) {\r\n  background-color: #f1f1f1;\r\n}\r\ntable tbody tr:nth-child(even) {\r\n  background-color: #ffffff;\r\n}\r\n.points_table {\r\n  background-color: transparent;\r\n  width: 100%;\r\n  /*height: 100%;*/\r\n}\r\n.points_table thead {\r\n  width: 100%;\r\n}\r\n.points_table tbody {\r\n  height: 562px;\r\n  overflow-y: auto;\r\n  width: 100%;\r\n  border-radius: 5px;\r\n}\r\n.points_table thead tr{\r\n  width: 99%;\r\n}\r\n.points_table tr{\r\n  width: 100%;\r\n}\r\n.points_table thead, .points_table tbody, .points_table tr, .points_table td, .points_table th{\r\n  display: inline-block;\r\n}\r\n.points_table thead{\r\n  background: #85e7ff;\r\n  /*background: #d91f2d;*/\r\n  /*color: #fff;*/\r\n  color: #214b5f;\r\n  border-radius: 5px;\r\n}\r\n.points_table tbody td, .points_table thead > tr> th{\r\n  float: left;\r\n  border-bottom-width: 0;\r\n}\r\n.points_table>tbody>tr>td, .points_table>tbody>tr>th, .points_table>tfoot>tr>td, .points_table>tfoot>tr>th, .points_table>thead>tr>td, .points_table>thead>tr>th{\r\n  padding: 8px;\r\n  height: 50px;\r\n  text-align: left;\r\n  line-height: 32px;\r\n  font-size: large;\r\n}\r\n.odd {\r\n  background: #ffffff;\r\n  color: #000;\r\n}\r\n.even {\r\n  background: #efefef;\r\n  color: #000;\r\n}\r\n.points_table_scrollbar{\r\n  height: 612px;\r\n  overflow-y: scroll;\r\n}\r\n.points_table_scrollbar::-webkit-scrollbar-track{\r\n  -webkit-box-shadow: inset 0 0 6px rgba(0,0,0,0.9);\r\n  border-radius: 10px;\r\n  background-color: #444444;\r\n}\r\n.points_table_scrollbar::-webkit-scrollbar{\r\n  width: 1%;\r\n  min-width: 5px;\r\n  background-color: #F5F5F5;\r\n}\r\n.points_table_scrollbar::-webkit-scrollbar-thumb{\r\n  border-radius: 10px;\r\n  background: #85e7ff;\r\n  /*background-color: #D62929;*/\r\n  background-image: -webkit-linear-gradient(90deg, transparent, rgba(0, 0, 0, 0.4) 50%, transparent, transparent)\r\n}\r\n"

/***/ }),

/***/ "./src/app/listpet/listpet.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <div class=\"row\">\n    <h2>Does My Pet Need An Umbrella?</h2>\n      <div class=\"container\">\n            <div class=\"row\">\n                <div class=\"pull-left\" >\n                  <h3>Select a pet to find out</h3>\n                </div>\n                <div class=\"pull-right\">\n                  <button class=\"btn btn-primary\" (click)=\"addNewPet()\" >Add A New Pet</button>\n                </div>\n            </div>\n      </div>\n    <table class=\"points_table\">\n      <thead>\n        <tr>\n          <th class=\"col-xs-3\">Name</th>\n          <th class=\"col-xs-3\">Type</th>\n          <th class=\"col-xs-3\">Breed</th>\n          <th class=\"col-xs-3\"></th>\n        </tr>\n      </thead>\n      <tbody class=\"points_table_scrollbar\">\n        <tr *ngFor=\"let pet of pets\">\n          <td class=\"col-xs-3\">{{pet.name}}</td>\n          <td class=\"col-xs-3\">{{pet.type}}</td>\n          <td class=\"col-xs-3\">{{pet.breed}}</td>\n          <td class=\"col-xs-3\">\n            <button class=\"btn btn-primary\" (click)=\"viewPet(pet.uuid)\"  >View</button>\n          </td>\n        </tr>\n      </tbody>\n    </table>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/listpet/listpet.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ListpetComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__listpet_service__ = __webpack_require__("./src/app/listpet/listpet.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__model_pet_model__ = __webpack_require__("./src/app/model/pet.model.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ListpetComponent = /** @class */ (function () {
    function ListpetComponent(router, _listpetservice) {
        this.router = router;
        this._listpetservice = _listpetservice;
        this.pets = [];
    }
    ListpetComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._listpetservice.listPets()
            .subscribe(function (data) {
            if (data.length > 0) {
                for (var x in data) {
                    var _uid = data[x]["uid"];
                    var _name = data[x]["name"];
                    var _type = data[x]["type"];
                    var _breed = data[x]["breed"];
                    var _location = data[x]["location"];
                    var _latitude = data[x]["latitude"];
                    var _longitude = data[x]["longitude"];
                    _this.pets.push(new __WEBPACK_IMPORTED_MODULE_3__model_pet_model__["a" /* Pet */](_uid, _name, _type, _breed, _location, _latitude, _longitude));
                }
            }
            else {
                console.log('There were no results for your search query');
            }
        });
    };
    ListpetComponent.prototype.addNewPet = function () {
        var link = ['/addnewpet'];
        this.router.navigate(link);
    };
    ListpetComponent.prototype.viewPet = function (uid) {
        localStorage.setItem('uid', uid);
        var link = ['/viewpet'];
        this.router.navigate(link);
    };
    ListpetComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-listpet',
            template: __webpack_require__("./src/app/listpet/listpet.component.html"),
            styles: [__webpack_require__("./src/app/listpet/listpet.component.css")],
            providers: [__WEBPACK_IMPORTED_MODULE_1__listpet_service__["a" /* ListpetService */]]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* Router */],
            __WEBPACK_IMPORTED_MODULE_1__listpet_service__["a" /* ListpetService */]])
    ], ListpetComponent);
    return ListpetComponent;
}());



/***/ }),

/***/ "./src/app/listpet/listpet.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ListpetService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ListpetService = /** @class */ (function () {
    function ListpetService(http) {
        this.http = http;
        this.url = "";
    }
    ListpetService.prototype.listPets = function () {
        this.url = '/api/listpets';
        return this.http.get(this.url);
    };
    ListpetService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */]])
    ], ListpetService);
    return ListpetService;
}());



/***/ }),

/***/ "./src/app/model/pet.model.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Pet; });
/**
 * Created by Arnold on 2018-04-10.
 */
var Pet = /** @class */ (function () {
    function Pet(_uuid, _name, _type, _breed, _location, _latitude, _longitude) {
        this.uuid = _uuid;
        this.name = _name;
        this.type = _type;
        this.breed = _breed;
        this.location = _location;
        this.latitude = _latitude;
        this.longitude = _longitude;
    }
    return Pet;
}());



/***/ }),

/***/ "./src/app/viewpet/viewpet.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/viewpet/viewpet.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <div class=\"row\">\n      <div class=\"col-sm-4 img-responsive\">\n        <img class=\"img-responsive\" src=\"{{image_source}}\" />\n      </div>\n      <div class=\"col-sm-8 img-responsive\">\n          <h1>{{answer}}</h1>\n          <h2>It looks like {{name}}, is {{going}} to need one in {{location}}</h2>\n          <h2>Weather Summary:  {{summary_description}}</h2>\n          <button class=\"btn btn-primary\" (click)=\"lookup()\" >Lookup a different pet</button>\n      </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/viewpet/viewpet.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ViewpetComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__viewpet_service__ = __webpack_require__("./src/app/viewpet/viewpet.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ViewpetComponent = /** @class */ (function () {
    function ViewpetComponent(_viewpetservice, router) {
        this._viewpetservice = _viewpetservice;
        this.router = router;
        this.name = "";
        this.location = "";
        this.icon = "";
        this.answer = "";
        this.image_source = "";
        this.going = "";
        this.summary_description = "";
        this.requires_umbrella = ["rain"];
    }
    ViewpetComponent.prototype.ngOnInit = function () {
        var _this = this;
        var uid = localStorage.getItem("uid");
        this._viewpetservice.viewPet(uid)
            .subscribe(function (data) {
            var _uid = data[0]["uid"];
            var _name = data[0]["name"];
            var _type = data[0]["type"];
            var _breed = data[0]["breed"];
            var _location = data[0]["location"];
            var _latitude = data[0]["latitude"];
            var _longitude = data[0]["longitude"];
            _this.reqHttp(_uid, _name, _type, _breed, _location, _latitude, _longitude);
        });
    };
    ViewpetComponent.prototype.lookup = function () {
        var link = ['/'];
        this.router.navigate(link);
    };
    ViewpetComponent.prototype.reqHttp = function (_uid, _name, _type, _breed, _location, _latitude, _longitude) {
        var _this = this;
        this.name = _name;
        this.location = _location;
        this._viewpetservice.callDarkSkyForecast(_latitude, _longitude)
            .subscribe(function (data) {
            _this.answer = "Nope!";
            _this.going = "not going ";
            _this.summary_description = data.currently.summary;
            if (data.currently.icon == "clear-day") {
                _this.image_source = "../../assets/clear-day.png";
            }
            if (data.currently.icon == "clear-night") {
                _this.image_source = "../../assets/clear-night.png";
            }
            if (data.currently.icon == "partly-cloudy-day") {
                _this.image_source = "../../assets/partly-coudy-day.png";
            }
            if (data.currently.icon == "partly-cloudy-night") {
                _this.image_source = "../../assets/partly-coudy-night.png";
            }
            if (data.currently.icon == "cloudy") {
                _this.image_source = "../../assets/cloudy.png";
            }
            if (data.currently.icon == "rain") {
                _this.image_source = "../../assets/rain.png";
                _this.answer = "Yup!";
                _this.going = "going ";
            }
            if (data.currently.icon == "sleet") {
                _this.image_source = "../../assets/sleet.png";
            }
            if (data.currently.icon == "snow") {
                _this.image_source = "../../assets/snow.png";
            }
            if (data.currently.icon == "wind") {
                _this.image_source = "../../assets/wind.png";
            }
            if (data.currently.icon == "fog") {
                _this.image_source = "../../assets/fog.png";
            }
        });
    };
    ViewpetComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-viewpet',
            template: __webpack_require__("./src/app/viewpet/viewpet.component.html"),
            styles: [__webpack_require__("./src/app/viewpet/viewpet.component.css")],
            providers: [__WEBPACK_IMPORTED_MODULE_1__viewpet_service__["a" /* ViewpetService */]]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__viewpet_service__["a" /* ViewpetService */],
            __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* Router */]])
    ], ViewpetComponent);
    return ViewpetComponent;
}());



/***/ }),

/***/ "./src/app/viewpet/viewpet.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ViewpetService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ViewpetService = /** @class */ (function () {
    function ViewpetService(http) {
        this.http = http;
        this.url = "";
    }
    ViewpetService.prototype.viewPet = function (uid) {
        this.url = '/api/viewpet/' + uid;
        return this.http.get(this.url);
    };
    ViewpetService.prototype.callDarkSkyForecast = function (_latitude, _longitude) {
        //this.url = this.darkSkyEndpoint+this.secret_key+ "/" + _latitude +","+_longitude;
        this.url = '/api/darksky' + "/" + _latitude + "," + _longitude;
        return this.http.get(this.url);
    };
    ViewpetService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */]])
    ], ViewpetService);
    return ViewpetService;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false
};


/***/ }),

/***/ "./src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("./node_modules/@angular/platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("./src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("./src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("./src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map