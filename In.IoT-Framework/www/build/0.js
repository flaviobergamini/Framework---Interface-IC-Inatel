webpackJsonp([0],{

/***/ 268:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CreateUserPageModule", function() { return CreateUserPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(49);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__create_user__ = __webpack_require__(269);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var CreateUserPageModule = /** @class */ (function () {
    function CreateUserPageModule() {
    }
    CreateUserPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__create_user__["a" /* CreateUserPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__create_user__["a" /* CreateUserPage */]),
            ],
        })
    ], CreateUserPageModule);
    return CreateUserPageModule;
}());

//# sourceMappingURL=create-user.module.js.map

/***/ }),

/***/ 269:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CreateUserPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(49);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__validators_confirmPassword__ = __webpack_require__(270);
/* No contructor estão as validações do cadastro do usuario para desbloquear o botão Registrar */
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var CreateUserPage = /** @class */ (function () {
    function CreateUserPage(navCtrl, navParams, formbuilder) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.formbuilder = formbuilder;
        this.registerForm = this.formbuilder.group({
            name: [null, [__WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].minLength(5)]],
            email: [null, [__WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].email]],
            password: [null, [__WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].minLength(6)]],
            confirmPassword: [null, [__WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].minLength(6), __WEBPACK_IMPORTED_MODULE_3__validators_confirmPassword__["a" /* ValidateConfirmPassword */]]]
        });
    }
    CreateUserPage.prototype.submitForm = function () {
        console.log(this.registerForm.value);
    };
    CreateUserPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-create-user',template:/*ion-inline-start:"/home/flaviobergamini/Meus projetos/Framework---Interface-IC-Inatel/In.IoT-Framework/src/pages/create-user/create-user.html"*/'<!--Foi criado a página de cadastro, onde no content possui o formulário para coleta de dados \ndo usuário e logo a baixo o botão para registro com validações-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>Criar Conta</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n<ion-content padding>\n    <form novalidate [formGroup]="registerForm" (ngSubmit)="submitForm()">\n      <ion-list>\n        <ion-item>\n            <ion-input type="text" placeholder="Nome" \n            formControlName="name"></ion-input>\n        </ion-item>\n        <ion-item>\n            <ion-input type="email" placeholder="E-mail"\n             formControlName="email"></ion-input>\n        </ion-item>\n        <ion-item>\n            <ion-input type="password" placeholder="Senha" \n            formControlName="password"></ion-input>\n        </ion-item>\n        <ion-item>\n            <ion-input type="password" placeholder="Confimar Senha" \n            formControlName="confirmPassword"></ion-input>\n        </ion-item>\n      </ion-list>\n      <div padding>\n        <button type="submit" ion-button [disabled]="registerForm.invalid">Registrar</button>\n      </div>\n    </form>\n  </ion-content>\n  '/*ion-inline-end:"/home/flaviobergamini/Meus projetos/Framework---Interface-IC-Inatel/In.IoT-Framework/src/pages/create-user/create-user.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormBuilder */]])
    ], CreateUserPage);
    return CreateUserPage;
}());

//# sourceMappingURL=create-user.js.map

/***/ }),

/***/ 270:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = ValidateConfirmPassword;
function ValidateConfirmPassword(control) {
    if (!control.root.value) {
        return null;
    }
    if (control.value === control.root.value.password) {
        return null;
    }
    else {
        return { validateConfirmPassword: true };
    }
}
//# sourceMappingURL=confirmPassword.js.map

/***/ })

});
//# sourceMappingURL=0.js.map