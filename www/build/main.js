webpackJsonp([0],{

/***/ 103:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__home_marketerhome__ = __webpack_require__(282);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__register_register__ = __webpack_require__(200);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__home_home__ = __webpack_require__(201);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var LoginPage = /** @class */ (function () {
    function LoginPage(navCtrl) {
        this.navCtrl = navCtrl;
    }
    // to homepage
    // signin() {
    //     this.navCtrl.push(HomePage)
    // }
    LoginPage.prototype.signinMarketer = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_0__home_marketerhome__["a" /* MarketerHomePage */]);
    };
    LoginPage.prototype.signinVendor = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__home_home__["a" /* HomePage */]);
    };
    // to homepage
    // to register
    LoginPage.prototype.register = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__register_register__["a" /* RegisterPage */]);
    };
    LoginPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["m" /* Component */])({
            selector: 'page-login',template:/*ion-inline-start:"C:\Users\Chris\source\Workspaces\paidpromote\src\pages\login\login.html"*/'\n\n  \n\n  <ion-content padding>\n\n      <ion-card>\n\n        <ion-card-header>\n\n            Welcome to Paid Promote\n\n        </ion-card-header>\n\n        <img src="assets/imgs/logo.png"/>\n\n            <ion-item>\n\n                <ion-label floating>Username</ion-label>\n\n                <ion-input style="border-bottom: 1px solid #488aff" type="text"></ion-input>\n\n            </ion-item>\n\n\n\n            <ion-item>\n\n                <ion-label floating>Password</ion-label>\n\n                <ion-input style="border-bottom: 1px solid #488aff" type="password"></ion-input>\n\n            </ion-item>\n\n\n\n        <!-- <div padding>\n\n            <button (click)="signin()" ion-button block>Sign In</button>\n\n            <p style="font-size: small">Tidak punya akun? <a (click)="register()">Register</a></p>\n\n        </div> -->\n\n        <div padding>\n\n            <p color="danger" style="font-size: small; color: red">**dua tombol di bawah ini hanya sebagai prototype, tombol login nantinya hanya satu</p>\n\n            <div padding>\n\n                <button (click)="signinMarketer()" ion-button block>Login sebagai marketer</button>\n\n            </div>\n\n\n\n            <div padding>\n\n                <button (click)="signinVendor()" ion-button block>Login sebagai vendor</button>\n\n                <p style="font-size: small">Tidak punya akun? <a (click)="register()">Register</a></p>\n\n            </div>\n\n        </div>\n\n    </ion-card>\n\n  </ion-content>\n\n  '/*ion-inline-end:"C:\Users\Chris\source\Workspaces\paidpromote\src\pages\login\login.html"*/
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["g" /* NavController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["g" /* NavController */]) === "function" && _a || Object])
    ], LoginPage);
    return LoginPage;
    var _a;
}());

//# sourceMappingURL=login.js.map

/***/ }),

/***/ 104:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UploadVendorPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__package_package__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_file_transfer__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_camera__ = __webpack_require__(35);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var UploadVendorPage = /** @class */ (function () {
    function UploadVendorPage(navCtrl, alertCtrl, transfer, camera, loadingCtrl, toastCtrl) {
        this.navCtrl = navCtrl;
        this.alertCtrl = alertCtrl;
        this.transfer = transfer;
        this.camera = camera;
        this.loadingCtrl = loadingCtrl;
        this.toastCtrl = toastCtrl;
        this.regType = "vendor";
    }
    // upload image
    UploadVendorPage.prototype.getImage = function () {
        var _this = this;
        var options = {
            quality: 100,
            destinationType: this.camera.DestinationType.FILE_URI,
            sourceType: this.camera.PictureSourceType.PHOTOLIBRARY
        };
        this.camera.getPicture(options).then(function (imageData) {
            _this.imageURI = imageData;
        }, function (err) {
            console.log(err);
            _this.presentToast(err);
        });
    };
    UploadVendorPage.prototype.uploadFile = function () {
        var _this = this;
        var loader = this.loadingCtrl.create({
            content: "Uploading..."
        });
        loader.present();
        var fileTransfer = this.transfer.create();
        var options = {
            fileKey: 'ionicfile',
            fileName: 'ionicfile',
            chunkedMode: false,
            mimeType: "image/jpeg",
            headers: {}
        };
        fileTransfer.upload(this.imageURI, 'http://192.168.0.7:8080/api/uploadImage', options)
            .then(function (data) {
            console.log(data + " Uploaded Successfully");
            _this.imageFileName = "http://192.168.0.7:8080/static/images/ionicfile.jpg";
            loader.dismiss();
            _this.presentToast("Image uploaded successfully");
        }, function (err) {
            console.log(err);
            loader.dismiss();
            _this.presentToast(err);
        });
    };
    // upload image
    UploadVendorPage.prototype.presentPrompt = function () {
        var _this = this;
        var nextStep = this.alertCtrl.create({
            title: 'Konfirmasi',
            message: 'Lanjutkan ke tahap pemilihan paket ?',
            buttons: [
                {
                    text: 'Batal',
                    handler: function (data) {
                        console.log('Batal');
                    }
                },
                {
                    text: 'Ok',
                    handler: function (data) {
                        _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_0__package_package__["a" /* PackagePage */]);
                    }
                }
            ]
        });
        nextStep.present();
    };
    UploadVendorPage.prototype.presentToast = function (msg) {
        var toast = this.toastCtrl.create({
            message: msg,
            duration: 3000,
            position: 'bottom'
        });
        toast.onDidDismiss(function () {
            console.log('Dismissed toast');
        });
        toast.present();
    };
    UploadVendorPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["m" /* Component */])({
            selector: 'page-uploadvendor',template:/*ion-inline-start:"C:\Users\Chris\source\Workspaces\paidpromote\src\pages\uploadvendor\uploadvendor.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>\n      Unggah Bukti Pembayaran\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n\n\n<ion-content padding>\n\n  <ion-item>\n    <ion-item>\n      <p>{{imageURI}}</p>\n      <button ion-button color="secondary" (click)="getImage()">Get Image</button>\n    </ion-item>\n    <ion-item>\n      <h4>Image Preview</h4>\n      <img src="{{imageFileName}}" *ngIf="imageFileName" alt="Ionic File" width="300" />\n    </ion-item>\n    <ion-item>\n      <button ion-button (click)="uploadFile()">Upload</button>\n    </ion-item>\n  </ion-item>\n\n\n\n</ion-content>\n'/*ion-inline-end:"C:\Users\Chris\source\Workspaces\paidpromote\src\pages\uploadvendor\uploadvendor.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["g" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["a" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_3__ionic_native_file_transfer__["a" /* FileTransfer */],
            __WEBPACK_IMPORTED_MODULE_4__ionic_native_camera__["a" /* Camera */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["e" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["i" /* ToastController */]])
    ], UploadVendorPage);
    return UploadVendorPage;
}());

//# sourceMappingURL=uploadvendor.js.map

/***/ }),

/***/ 105:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AdsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__package_package__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_file_transfer__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_camera__ = __webpack_require__(35);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var AdsPage = /** @class */ (function () {
    function AdsPage(navCtrl, alertCtrl, transfer, camera, loadingCtrl, toastCtrl) {
        this.navCtrl = navCtrl;
        this.alertCtrl = alertCtrl;
        this.transfer = transfer;
        this.camera = camera;
        this.loadingCtrl = loadingCtrl;
        this.toastCtrl = toastCtrl;
        this.regType = "vendor";
    }
    // upload image
    AdsPage.prototype.getImage = function () {
        var _this = this;
        var options = {
            quality: 100,
            destinationType: this.camera.DestinationType.FILE_URI,
            sourceType: this.camera.PictureSourceType.PHOTOLIBRARY
        };
        this.camera.getPicture(options).then(function (imageData) {
            _this.imageURI = imageData;
        }, function (err) {
            console.log(err);
            _this.presentToast(err);
        });
    };
    AdsPage.prototype.uploadFile = function () {
        var _this = this;
        var loader = this.loadingCtrl.create({
            content: "Uploading..."
        });
        loader.present();
        var fileTransfer = this.transfer.create();
        var options = {
            fileKey: 'ionicfile',
            fileName: 'ionicfile',
            chunkedMode: false,
            mimeType: "image/jpeg",
            headers: {}
        };
        fileTransfer.upload(this.imageURI, 'http://192.168.0.7:8080/api/uploadImage', options)
            .then(function (data) {
            console.log(data + " Uploaded Successfully");
            _this.imageFileName = "http://192.168.0.7:8080/static/images/ionicfile.jpg";
            loader.dismiss();
            _this.presentToast("Image uploaded successfully");
        }, function (err) {
            console.log(err);
            loader.dismiss();
            _this.presentToast(err);
        });
    };
    // upload image
    AdsPage.prototype.submitAds = function () {
        this.presentPrompt();
    };
    AdsPage.prototype.presentPrompt = function () {
        var _this = this;
        var nextStep = this.alertCtrl.create({
            title: 'Konfirmasi',
            message: 'Lanjutkan ke tahap pemilihan paket ?',
            buttons: [
                {
                    text: 'Batal',
                    handler: function (data) {
                        console.log('Batal');
                    }
                },
                {
                    text: 'Ok',
                    handler: function (data) {
                        _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_0__package_package__["a" /* PackagePage */]);
                    }
                }
            ]
        });
        nextStep.present();
    };
    AdsPage.prototype.presentToast = function (msg) {
        var toast = this.toastCtrl.create({
            message: msg,
            duration: 3000,
            position: 'bottom'
        });
        toast.onDidDismiss(function () {
            console.log('Dismissed toast');
        });
        toast.present();
    };
    AdsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["m" /* Component */])({
            selector: 'page-ads',template:/*ion-inline-start:"C:\Users\Chris\source\Workspaces\paidpromote\src\pages\ads\ads.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>\n      Pasang Iklan\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n\n\n<ion-content padding>\n\n  <ion-item>\n    <ion-item>\n      <p>{{imageURI}}</p>\n      <button ion-button color="secondary" (click)="getImage()">Get Image</button>\n    </ion-item>\n    <ion-item>\n      <h4>Image Preview</h4>\n      <img src="{{imageFileName}}" *ngIf="imageFileName" alt="Ionic File" width="300" />\n    </ion-item>\n    <!-- <ion-item>\n      <button ion-button (click)="uploadFile()">Upload</button>\n    </ion-item> -->\n  </ion-item>\n\n  <ion-item>\n    <ion-label floating>Deskripsi</ion-label>\n    <ion-textarea style="border-bottom: 1px solid #488aff" type="text"></ion-textarea> \n  </ion-item>\n\n  <ion-item>\n    <ion-label floating>Kategori Marketer :</ion-label>\n    <ion-select [(ngModel)]="marketerType">\n        <ion-option value="surabaya">Area Surabaya</ion-option>\n        <ion-option value="jakarta">Area Jakarta</ion-option>\n    </ion-select>\n  </ion-item>\n\n\n  <div padding>\n    <button (click)="submitAds()" ion-button block>Submit</button>\n  </div>\n\n\n\n</ion-content>\n'/*ion-inline-end:"C:\Users\Chris\source\Workspaces\paidpromote\src\pages\ads\ads.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["g" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["a" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_3__ionic_native_file_transfer__["a" /* FileTransfer */],
            __WEBPACK_IMPORTED_MODULE_4__ionic_native_camera__["a" /* Camera */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["e" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["i" /* ToastController */]])
    ], AdsPage);
    return AdsPage;
}());

//# sourceMappingURL=ads.js.map

/***/ }),

/***/ 106:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MarketerAdsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__modalads_modalads__ = __webpack_require__(205);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_file_transfer__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_camera__ = __webpack_require__(35);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var MarketerAdsPage = /** @class */ (function () {
    function MarketerAdsPage(navCtrl, modalCtrl, transfer, camera, loadingCtrl, toastCtrl) {
        this.navCtrl = navCtrl;
        this.modalCtrl = modalCtrl;
        this.transfer = transfer;
        this.camera = camera;
        this.loadingCtrl = loadingCtrl;
        this.toastCtrl = toastCtrl;
        this.regType = "vendor";
    }
    // get image
    MarketerAdsPage.prototype.getImage = function () {
        var _this = this;
        var options = {
            quality: 100,
            destinationType: this.camera.DestinationType.FILE_URI,
            sourceType: this.camera.PictureSourceType.PHOTOLIBRARY
        };
        this.camera.getPicture(options).then(function (imageData) {
            _this.imageURI = imageData;
        }, function (err) {
            console.log(err);
            _this.presentToast(err);
        });
    };
    // get image
    MarketerAdsPage.prototype.adsDetail = function () {
        var modal = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_0__modalads_modalads__["a" /* ModalAdsPage */]);
        modal.present();
    };
    MarketerAdsPage.prototype.presentToast = function (msg) {
        var toast = this.toastCtrl.create({
            message: msg,
            duration: 3000,
            position: 'bottom'
        });
        toast.onDidDismiss(function () {
            console.log('Dismissed toast');
        });
        toast.present();
    };
    MarketerAdsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["m" /* Component */])({
            selector: 'page-marketerads',template:/*ion-inline-start:"C:\Users\Chris\source\Workspaces\paidpromote\src\pages\marketerads\marketerads.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>\n      Pilih Iklan\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n\n\n<ion-content padding>\n\n  <ion-list>\n    <ion-item-sliding>\n      <ion-item>\n        <ion-avatar item-start>\n          <img src="assets/imgs/venkman.jpg"/>\n        </ion-avatar>\n        <h2>Iklan 1</h2>\n        <p>Geser ke kiri untuk melihat detil pekerjaan</p>\n      </ion-item>\n      <ion-item-options>\n          <button (click)="adsDetail()" ion-button color="primary">\n            Detil\n          </button>\n          <!-- <button ion-button color="secondary">\n            <ion-icon name="checkmark"></ion-icon>\n          </button>\n          <button ion-button color="danger">\n            <ion-icon name="close"></ion-icon>\n          </button> -->\n        </ion-item-options>\n    </ion-item-sliding>\n\n    <ion-item-sliding>\n      <ion-item>\n        <ion-avatar item-start>\n          <img src="assets/imgs/winston.jpg"/>\n        </ion-avatar>\n        <h2>Iklan 2</h2>\n        <p>Geser ke kiri untuk melihat detil pekerjaan</p>\n      </ion-item>\n      <ion-item-options>\n          <button (click)="adsDetail()" ion-button color="primary">\n            Detil\n          </button>\n          <!-- <button ion-button color="secondary">\n            <ion-icon name="checkmark"></ion-icon>\n          </button>\n          <button ion-button color="danger">\n            <ion-icon name="close"></ion-icon>\n          </button> -->\n        </ion-item-options>\n    </ion-item-sliding>\n  </ion-list>\n\n\n\n</ion-content>\n'/*ion-inline-end:"C:\Users\Chris\source\Workspaces\paidpromote\src\pages\marketerads\marketerads.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["g" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["f" /* ModalController */],
            __WEBPACK_IMPORTED_MODULE_3__ionic_native_file_transfer__["a" /* FileTransfer */],
            __WEBPACK_IMPORTED_MODULE_4__ionic_native_camera__["a" /* Camera */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["e" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["i" /* ToastController */]])
    ], MarketerAdsPage);
    return MarketerAdsPage;
}());

//# sourceMappingURL=marketerads.js.map

/***/ }),

/***/ 116:
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
webpackEmptyAsyncContext.id = 116;

/***/ }),

/***/ 157:
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
webpackEmptyAsyncContext.id = 157;

/***/ }),

/***/ 200:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RegisterPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__login_login__ = __webpack_require__(103);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var RegisterPage = /** @class */ (function () {
    function RegisterPage(navCtrl, alertCtrl) {
        this.navCtrl = navCtrl;
        this.alertCtrl = alertCtrl;
    }
    // submit register
    RegisterPage.prototype.registerBegin = function () {
        var _this = this;
        var prompt = this.alertCtrl.create({
            title: 'Verifikasi',
            message: 'Masukkan Kode Verifikasi Anda',
            inputs: [
                {
                    name: 'verificationCode',
                    placeholder: 'Kode Verifikasi',
                },
            ],
            buttons: [
                {
                    text: 'Cancel',
                    handler: function (data) {
                        console.log("cancel");
                        // this.waitConfirm('Kode Salah', 'Kode yang Anda Masukkan Salah' )
                    }
                },
                {
                    text: 'Submit',
                    handler: function (data) {
                        console.log("submit");
                        _this.waitConfirm('Konfirmasi', 'Kode verifikasi telah diterima, silahkan login menggunakan username dan kata sandi terdaftar');
                    }
                }
            ]
        });
        prompt.present();
    };
    RegisterPage.prototype.waitConfirm = function (titlePrompt, messagePrompt) {
        var _this = this;
        if (titlePrompt == 'Konfirmasi') {
            var confirm_1 = this.alertCtrl.create({
                title: titlePrompt,
                message: messagePrompt,
                buttons: [
                    {
                        text: 'Login',
                        handler: function (data) {
                            _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__login_login__["a" /* LoginPage */]);
                        }
                    }
                ]
            });
            confirm_1.present();
        }
        else {
            var confirm_2 = this.alertCtrl.create({
                title: titlePrompt,
                message: messagePrompt,
                buttons: [
                    {
                        text: 'Cancel',
                        handler: function (data) {
                            _this.registerBegin();
                        }
                    }
                ]
            });
            confirm_2.present();
        }
    };
    // submit register
    // back to login
    RegisterPage.prototype.login = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__login_login__["a" /* LoginPage */]);
    };
    RegisterPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-register',template:/*ion-inline-start:"C:\Users\Chris\source\Workspaces\paidpromote\src\pages\register\register.html"*/'<ion-header>\n\n    <ion-navbar>\n\n      <ion-title>\n\n        Kembali ke login\n\n      </ion-title>\n\n    </ion-navbar>\n\n  </ion-header>\n\n  \n\n  <ion-content padding>\n\n\n\n        <ion-item>\n\n            <ion-label floating>Nama</ion-label>\n\n            <ion-input style="border-bottom: 1px solid #488aff" type="text"></ion-input>\n\n        </ion-item>\n\n\n\n        <ion-item>\n\n            <ion-label floating>E-mail</ion-label>\n\n            <ion-input style="border-bottom: 1px solid #488aff" type="text"></ion-input>\n\n        </ion-item>\n\n\n\n        <ion-item>\n\n            <ion-label floating>Alamat</ion-label>\n\n            <ion-input style="border-bottom: 1px solid #488aff" type="text"></ion-input>\n\n        </ion-item>\n\n\n\n        <ion-item>\n\n            <ion-label floating>Kota</ion-label>\n\n            <ion-select>\n\n                <ion-option value="surabaya">Surabaya</ion-option>\n\n                <ion-option value="jakarta">Jakarta</ion-option>\n\n            </ion-select>\n\n        </ion-item>\n\n\n\n        <ion-item>\n\n            <ion-label floating>No. Telp/Handphone</ion-label>\n\n            <ion-input style="border-bottom: 1px solid #488aff" type="number"></ion-input>\n\n        </ion-item>\n\n\n\n        <ion-item>\n\n            <ion-label floating>Register sebagai :</ion-label>\n\n            <ion-select [(ngModel)]="regType">\n\n                <ion-option value="vendor">Vendor/Pemasang Iklan</ion-option>\n\n                <ion-option value="marketer">Marketer/Penyebar Iklan</ion-option>\n\n            </ion-select>\n\n        </ion-item>\n\n\n\n        <ion-item>\n\n            <ion-label floating>Username</ion-label>\n\n            <ion-input style="border-bottom: 1px solid #488aff" type="text"></ion-input>\n\n        </ion-item>\n\n\n\n        <ion-item>\n\n            <ion-label floating>Password</ion-label>\n\n            <ion-input style="border-bottom: 1px solid #488aff" type="password"></ion-input>\n\n        </ion-item>\n\n\n\n        <div padding>\n\n            <button (click)="registerBegin()" ion-button block>Register</button>\n\n            <p style="font-size: small">Sudah punya akun? <a (click)="login()">Login</a></p>\n\n        </div>\n\n  </ion-content>\n\n  '/*ion-inline-end:"C:\Users\Chris\source\Workspaces\paidpromote\src\pages\register\register.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */]])
    ], RegisterPage);
    return RegisterPage;
}());

//# sourceMappingURL=register.js.map

/***/ }),

/***/ 201:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__uploadvendor_uploadvendor__ = __webpack_require__(104);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__uploadmarketer_uploadmarketer__ = __webpack_require__(202);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__setting_setting__ = __webpack_require__(203);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__vendorprofile_vendorprofile__ = __webpack_require__(204);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__package_package__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ads_ads__ = __webpack_require__(105);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__marketerads_marketerads__ = __webpack_require__(106);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__marketerprofile_marketerprofile__ = __webpack_require__(206);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_ionic_angular__ = __webpack_require__(11);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};










var HomePage = /** @class */ (function () {
    function HomePage(navCtrl) {
        this.navCtrl = navCtrl;
        // roots to any page
        this.ads = __WEBPACK_IMPORTED_MODULE_5__ads_ads__["a" /* AdsPage */];
        this.marketerAds = __WEBPACK_IMPORTED_MODULE_6__marketerads_marketerads__["a" /* MarketerAdsPage */];
        this.package = __WEBPACK_IMPORTED_MODULE_4__package_package__["a" /* PackagePage */];
        this.profile = __WEBPACK_IMPORTED_MODULE_3__vendorprofile_vendorprofile__["a" /* VendorProfilePage */];
        this.marketerProfile = __WEBPACK_IMPORTED_MODULE_7__marketerprofile_marketerprofile__["a" /* MarketerProfilePage */];
        this.uploadShare = __WEBPACK_IMPORTED_MODULE_1__uploadmarketer_uploadmarketer__["a" /* UploadMarketerPage */];
        this.uploadPay = __WEBPACK_IMPORTED_MODULE_0__uploadvendor_uploadvendor__["a" /* UploadVendorPage */];
        this.setting = __WEBPACK_IMPORTED_MODULE_2__setting_setting__["a" /* SettingPage */];
        this.regType = "vendor";
    }
    HomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_8__angular_core__["m" /* Component */])({
            selector: 'page-home',template:/*ion-inline-start:"C:\Users\Chris\source\Workspaces\paidpromote\src\pages\home\home.html"*/'\n\n<ion-content padding>\n\n  <!-- pages for marketer -->\n  <div *ngIf="regType == \'marketer\'">\n    <ion-tabs class="tabs-icon">\n      <ion-tab tabIcon="browsers" tabTitle="Iklan" [root]="marketerAds"></ion-tab>\n      <ion-tab tabIcon="cloud-upload" tabTitle="Unggah" [root]="uploadShare"></ion-tab>\n      <ion-tab tabIcon="contact" tabTitle="Profil" [root]="marketerProfile"></ion-tab>\n      <ion-tab tabIcon="settings" tabTitle="Pengaturan" [root]="setting"></ion-tab>\n    </ion-tabs>\n  </div>\n  <!-- pages for marketer -->\n\n  <!-- pages for vendor -->\n  <div *ngIf="regType == \'vendor\'">\n    <ion-tabs class="tabs-icon">\n      <ion-tab tabIcon="browsers" tabTitle="Iklan" [root]="ads"></ion-tab>\n      <ion-tab tabIcon="card" tabTitle="Paket" [root]="package"></ion-tab>\n      <ion-tab tabIcon="cloud-upload" tabTitle="Unggah" [root]="uploadPay"></ion-tab>\n      <ion-tab tabIcon="contact" tabTitle="Profil" [root]="profile"></ion-tab>\n      <ion-tab tabIcon="settings" tabTitle="Pengaturan" [root]="setting"></ion-tab>\n    </ion-tabs>\n  </div>\n  <!-- pages for vendor -->\n\n\n\n</ion-content>\n'/*ion-inline-end:"C:\Users\Chris\source\Workspaces\paidpromote\src\pages\home\home.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_9_ionic_angular__["g" /* NavController */]])
    ], HomePage);
    return HomePage;
}());

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 202:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UploadMarketerPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__package_package__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_file_transfer__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_camera__ = __webpack_require__(35);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var UploadMarketerPage = /** @class */ (function () {
    function UploadMarketerPage(navCtrl, alertCtrl, transfer, camera, loadingCtrl, toastCtrl) {
        this.navCtrl = navCtrl;
        this.alertCtrl = alertCtrl;
        this.transfer = transfer;
        this.camera = camera;
        this.loadingCtrl = loadingCtrl;
        this.toastCtrl = toastCtrl;
        this.regType = "vendor";
    }
    // upload image
    UploadMarketerPage.prototype.getImage = function () {
        var _this = this;
        var options = {
            quality: 100,
            destinationType: this.camera.DestinationType.FILE_URI,
            sourceType: this.camera.PictureSourceType.PHOTOLIBRARY
        };
        this.camera.getPicture(options).then(function (imageData) {
            _this.imageURI = imageData;
        }, function (err) {
            console.log(err);
            _this.presentToast(err);
        });
    };
    UploadMarketerPage.prototype.uploadFile = function () {
        var _this = this;
        var loader = this.loadingCtrl.create({
            content: "Uploading..."
        });
        loader.present();
        var fileTransfer = this.transfer.create();
        var options = {
            fileKey: 'ionicfile',
            fileName: 'ionicfile',
            chunkedMode: false,
            mimeType: "image/jpeg",
            headers: {}
        };
        fileTransfer.upload(this.imageURI, 'http://192.168.0.7:8080/api/uploadImage', options)
            .then(function (data) {
            console.log(data + " Uploaded Successfully");
            _this.imageFileName = "http://192.168.0.7:8080/static/images/ionicfile.jpg";
            loader.dismiss();
            _this.presentToast("Image uploaded successfully");
        }, function (err) {
            console.log(err);
            loader.dismiss();
            _this.presentToast(err);
        });
    };
    // upload image
    UploadMarketerPage.prototype.presentPrompt = function () {
        var _this = this;
        var nextStep = this.alertCtrl.create({
            title: 'Konfirmasi',
            message: 'Lanjutkan ke tahap pemilihan paket ?',
            buttons: [
                {
                    text: 'Batal',
                    handler: function (data) {
                        console.log('Batal');
                    }
                },
                {
                    text: 'Ok',
                    handler: function (data) {
                        _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_0__package_package__["a" /* PackagePage */]);
                    }
                }
            ]
        });
        nextStep.present();
    };
    UploadMarketerPage.prototype.presentToast = function (msg) {
        var toast = this.toastCtrl.create({
            message: msg,
            duration: 3000,
            position: 'bottom'
        });
        toast.onDidDismiss(function () {
            console.log('Dismissed toast');
        });
        toast.present();
    };
    UploadMarketerPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["m" /* Component */])({
            selector: 'page-uploadmarketer',template:/*ion-inline-start:"C:\Users\Chris\source\Workspaces\paidpromote\src\pages\uploadmarketer\uploadmarketer.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>\n      Unggah Bukti Penyebaran\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n\n\n<ion-content padding>\n\n  <ion-item>\n    <ion-item>\n      <p>{{imageURI}}</p>\n      <button ion-button color="secondary" (click)="getImage()">Get Image</button>\n    </ion-item>\n    <ion-item>\n      <h4>Image Preview</h4>\n      <img src="{{imageFileName}}" *ngIf="imageFileName" alt="Ionic File" width="300" />\n    </ion-item>\n    <ion-item>\n      <button ion-button (click)="uploadFile()">Upload</button>\n    </ion-item>\n  </ion-item>\n\n\n\n</ion-content>\n'/*ion-inline-end:"C:\Users\Chris\source\Workspaces\paidpromote\src\pages\uploadmarketer\uploadmarketer.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["g" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["a" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_3__ionic_native_file_transfer__["a" /* FileTransfer */],
            __WEBPACK_IMPORTED_MODULE_4__ionic_native_camera__["a" /* Camera */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["e" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["i" /* ToastController */]])
    ], UploadMarketerPage);
    return UploadMarketerPage;
}());

//# sourceMappingURL=uploadmarketer.js.map

/***/ }),

/***/ 203:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SettingPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var SettingPage = /** @class */ (function () {
    function SettingPage(navCtrl) {
        this.navCtrl = navCtrl;
        this.regType = "vendor";
    }
    SettingPage.prototype.logOut = function () {
        window.location.reload();
    };
    SettingPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-setting',template:/*ion-inline-start:"C:\Users\Chris\source\Workspaces\paidpromote\src\pages\setting\setting.html"*/'<ion-header>\n    <ion-navbar>\n      <ion-title>\n        Pengaturan\n      </ion-title>\n    </ion-navbar>\n  </ion-header>\n\n<ion-content padding>\n\n  <ion-list inset>\n    <ion-item (click)="logOut()">\n        <button ion-button block>Log Out</button>\n    </ion-item>\n  </ion-list>\n\n\n</ion-content>\n'/*ion-inline-end:"C:\Users\Chris\source\Workspaces\paidpromote\src\pages\setting\setting.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */]])
    ], SettingPage);
    return SettingPage;
}());

//# sourceMappingURL=setting.js.map

/***/ }),

/***/ 204:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return VendorProfilePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__package_package__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ads_ads__ = __webpack_require__(105);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ionic_angular__ = __webpack_require__(11);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var VendorProfilePage = /** @class */ (function () {
    function VendorProfilePage(navCtrl) {
        this.navCtrl = navCtrl;
        this.regType = "vendor";
    }
    VendorProfilePage.prototype.backToAds = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_1__ads_ads__["a" /* AdsPage */]);
    };
    VendorProfilePage.prototype.backToPackage = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_0__package_package__["a" /* PackagePage */]);
    };
    VendorProfilePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["m" /* Component */])({
            selector: 'page-vendorprofile',template:/*ion-inline-start:"C:\Users\Chris\source\Workspaces\paidpromote\src\pages\vendorprofile\vendorprofile.html"*/'<ion-header>\n    <ion-navbar>\n      <ion-title>\n        Profil Vendor\n      </ion-title>\n    </ion-navbar>\n  </ion-header>\n\n<ion-content padding>\n\n  <!-- biodata -->\n  <ion-card >\n    <ion-card-header>\n      Biodata\n    </ion-card-header>\n    <ion-item>\n      Nama\n      <ion-note item-end>\n        Toko Jaya\n      </ion-note>\n    </ion-item>\n    <ion-item>\n      Alamat\n      <ion-note item-end>\n        Jalan Jaya Maju\n      </ion-note>\n    </ion-item>\n    <ion-item>\n      Kota\n      <ion-note item-end>\n        Surabaya\n      </ion-note>\n    </ion-item>\n    <ion-item>\n      Kontak\n      <ion-note item-end>\n        0811111111\n      </ion-note>\n    </ion-item>\n    <div padding>\n      <button ion-button block>Ubah Biodata</button>\n    </div>\n  </ion-card>\n  <!-- biodata -->\n\n  <!-- ads history -->\n  <ion-card >\n    <ion-card-header>\n      Daftar Iklan Terpasang\n    </ion-card-header>\n    <ion-card>\n      <ion-card-content>\n        Promo 20% penjualan besi\n      </ion-card-content>\n    </ion-card>\n    <ion-card>\n      <ion-card-content>\n        Promo 20% penjualan besi\n      </ion-card-content>\n    </ion-card>\n    <div padding>\n      <button (click)="backToAds()" ion-button block>Tambah Iklan</button>\n    </div>\n  </ion-card>\n  <!-- ads history -->\n\n  <!-- package -->\n  <ion-card >\n    <ion-card-header>\n      Sisa Paket\n    </ion-card-header>\n    <div padding>\n      <h2><b>Sisa 200 poin</b></h2>\n    </div>\n    <div padding>\n      <button (click)="backToPackage()" ion-button block>Tambah poin</button>\n    </div>\n  </ion-card>\n  <!-- package -->\n\n</ion-content>\n'/*ion-inline-end:"C:\Users\Chris\source\Workspaces\paidpromote\src\pages\vendorprofile\vendorprofile.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3_ionic_angular__["g" /* NavController */]])
    ], VendorProfilePage);
    return VendorProfilePage;
}());

//# sourceMappingURL=vendorprofile.js.map

/***/ }),

/***/ 205:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ModalAdsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_file_transfer__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_camera__ = __webpack_require__(35);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ModalAdsPage = /** @class */ (function () {
    function ModalAdsPage(navCtrl, viewCtrl, transfer, camera, loadingCtrl, toastCtrl) {
        this.navCtrl = navCtrl;
        this.viewCtrl = viewCtrl;
        this.transfer = transfer;
        this.camera = camera;
        this.loadingCtrl = loadingCtrl;
        this.toastCtrl = toastCtrl;
        this.regType = "vendor";
    }
    // get image
    ModalAdsPage.prototype.getImage = function () {
        var _this = this;
        var options = {
            quality: 100,
            destinationType: this.camera.DestinationType.FILE_URI,
            sourceType: this.camera.PictureSourceType.PHOTOLIBRARY
        };
        this.camera.getPicture(options).then(function (imageData) {
            _this.imageURI = imageData;
        }, function (err) {
            console.log(err);
            _this.presentToast(err);
        });
    };
    // get image
    ModalAdsPage.prototype.dismiss = function () {
        this.viewCtrl.dismiss();
    };
    ModalAdsPage.prototype.agree = function () {
        this.presentToast("Anda Menerima Pekerjaan ini");
        this.viewCtrl.dismiss();
    };
    ModalAdsPage.prototype.reject = function () {
        this.presentToast("Anda Menolak Pekerjaan ini");
        this.viewCtrl.dismiss();
    };
    ModalAdsPage.prototype.presentToast = function (msg) {
        var toast = this.toastCtrl.create({
            message: msg,
            duration: 3000,
            position: 'bottom'
        });
        toast.onDidDismiss(function () {
            console.log('Dismissed toast');
        });
        toast.present();
    };
    ModalAdsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-modalads',template:/*ion-inline-start:"C:\Users\Chris\source\Workspaces\paidpromote\src\pages\marketerads\modalads\modalads.html"*/'<ion-header>\n\n    <ion-toolbar>\n\n        <ion-title>\n\n            Deskripsi\n\n        </ion-title>\n\n        <ion-buttons start>\n\n            <button ion-button (click)="dismiss()">\n\n                <ion-icon name="close"></ion-icon>\n\n            </button>\n\n        </ion-buttons>\n\n    </ion-toolbar>\n\n</ion-header>\n\n\n\n<ion-content padding>\n\n    <ion-card>\n\n        <img src="assets/imgs/logo.png"/>\n\n        <ion-card-content>\n\n            <p>Iklan 1</p>\n\n        </ion-card-content>\n\n        <ion-row>\n\n            <ion-col col-6>\n\n                <button ion-button block (click)="agree()">Terima</button>\n\n            </ion-col>\n\n            <ion-col col-6>\n\n                <button ion-button block  color="danger" (click)="reject()">Tolak</button>\n\n            </ion-col>\n\n        </ion-row>\n\n    </ion-card>\n\n</ion-content>'/*ion-inline-end:"C:\Users\Chris\source\Workspaces\paidpromote\src\pages\marketerads\modalads\modalads.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* ViewController */],
            __WEBPACK_IMPORTED_MODULE_2__ionic_native_file_transfer__["a" /* FileTransfer */],
            __WEBPACK_IMPORTED_MODULE_3__ionic_native_camera__["a" /* Camera */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* ToastController */]])
    ], ModalAdsPage);
    return ModalAdsPage;
}());

//# sourceMappingURL=modalads.js.map

/***/ }),

/***/ 206:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MarketerProfilePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__marketerads_marketerads__ = __webpack_require__(106);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(11);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var MarketerProfilePage = /** @class */ (function () {
    function MarketerProfilePage(navCtrl) {
        this.navCtrl = navCtrl;
        this.regType = "vendor";
    }
    MarketerProfilePage.prototype.backToAds = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_0__marketerads_marketerads__["a" /* MarketerAdsPage */]);
    };
    MarketerProfilePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["m" /* Component */])({
            selector: 'page-marketerprofile',template:/*ion-inline-start:"C:\Users\Chris\source\Workspaces\paidpromote\src\pages\marketerprofile\marketerprofile.html"*/'<ion-header>\n    <ion-navbar>\n      <ion-title>\n        Profil Marketer\n      </ion-title>\n    </ion-navbar>\n  </ion-header>\n\n<ion-content padding>\n\n  <!-- biodata -->\n  <ion-card >\n    <ion-card-header>\n      Biodata\n    </ion-card-header>\n    <ion-item>\n      Nama\n      <ion-note item-end>\n        Toko Jaya\n      </ion-note>\n    </ion-item>\n    <ion-item>\n      Alamat\n      <ion-note item-end>\n        Jalan Jaya Maju\n      </ion-note>\n    </ion-item>\n    <ion-item>\n      Kota\n      <ion-note item-end>\n        Surabaya\n      </ion-note>\n    </ion-item>\n    <ion-item>\n      Kontak\n      <ion-note item-end>\n        0811111111\n      </ion-note>\n    </ion-item>\n    <div padding>\n      <button ion-button block>Ubah Biodata</button>\n    </div>\n  </ion-card>\n  <!-- biodata -->\n\n  <!-- marketer ads history -->\n  <ion-card >\n    <ion-card-header>\n      Daftar Iklan Tersebar\n    </ion-card-header>\n    <ion-card>\n      <ion-card-content>\n        Promo 20% penjualan besi\n      </ion-card-content>\n    </ion-card>\n    <ion-card>\n      <ion-card-content>\n        Promo 20% penjualan besi\n      </ion-card-content>\n    </ion-card>\n    <div padding>\n      <button (click)="backToAds()" ion-button block>Tambah Kerja</button>\n    </div>\n  </ion-card>\n  <!-- ads history -->\n\n  <!-- package -->\n  <ion-card >\n    <ion-card-header>\n      Poin\n    </ion-card-header>\n    <div padding>\n      <h2><b>Dapat 200 poin</b></h2>\n    </div>\n  </ion-card>\n  <!-- package -->\n\n</ion-content>\n'/*ion-inline-end:"C:\Users\Chris\source\Workspaces\paidpromote\src\pages\marketerprofile\marketerprofile.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["g" /* NavController */]])
    ], MarketerProfilePage);
    return MarketerProfilePage;
}());

//# sourceMappingURL=marketerprofile.js.map

/***/ }),

/***/ 207:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(208);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(230);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 230:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__pages_home_marketerhome__ = __webpack_require__(282);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_splash_screen__ = __webpack_require__(197);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_status_bar__ = __webpack_require__(199);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__app_component__ = __webpack_require__(280);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_home_home__ = __webpack_require__(201);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_login_login__ = __webpack_require__(103);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_register_register__ = __webpack_require__(200);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_ads_ads__ = __webpack_require__(105);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_package_package__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__pages_setting_setting__ = __webpack_require__(203);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__pages_vendorprofile_vendorprofile__ = __webpack_require__(204);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__pages_marketerprofile_marketerprofile__ = __webpack_require__(206);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__pages_marketerads_marketerads__ = __webpack_require__(106);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__pages_marketerads_modalads_modalads__ = __webpack_require__(205);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__pages_uploadmarketer_uploadmarketer__ = __webpack_require__(202);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__pages_uploadvendor_uploadvendor__ = __webpack_require__(104);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__ionic_native_file_transfer__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__ionic_native_file__ = __webpack_require__(281);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__ionic_native_camera__ = __webpack_require__(35);
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
        Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_7__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_8__pages_login_login__["a" /* LoginPage */],
                __WEBPACK_IMPORTED_MODULE_9__pages_register_register__["a" /* RegisterPage */],
                __WEBPACK_IMPORTED_MODULE_10__pages_ads_ads__["a" /* AdsPage */],
                __WEBPACK_IMPORTED_MODULE_11__pages_package_package__["a" /* PackagePage */],
                __WEBPACK_IMPORTED_MODULE_13__pages_vendorprofile_vendorprofile__["a" /* VendorProfilePage */],
                __WEBPACK_IMPORTED_MODULE_15__pages_marketerads_marketerads__["a" /* MarketerAdsPage */],
                __WEBPACK_IMPORTED_MODULE_14__pages_marketerprofile_marketerprofile__["a" /* MarketerProfilePage */],
                __WEBPACK_IMPORTED_MODULE_16__pages_marketerads_modalads_modalads__["a" /* ModalAdsPage */],
                __WEBPACK_IMPORTED_MODULE_18__pages_uploadvendor_uploadvendor__["a" /* UploadVendorPage */],
                __WEBPACK_IMPORTED_MODULE_17__pages_uploadmarketer_uploadmarketer__["a" /* UploadMarketerPage */],
                // just testing
                __WEBPACK_IMPORTED_MODULE_0__pages_home_marketerhome__["a" /* MarketerHomePage */],
                // just testing
                __WEBPACK_IMPORTED_MODULE_12__pages_setting_setting__["a" /* SettingPage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["d" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* MyApp */], {}, {
                    links: []
                })
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_3_ionic_angular__["b" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_7__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_8__pages_login_login__["a" /* LoginPage */],
                __WEBPACK_IMPORTED_MODULE_9__pages_register_register__["a" /* RegisterPage */],
                __WEBPACK_IMPORTED_MODULE_10__pages_ads_ads__["a" /* AdsPage */],
                __WEBPACK_IMPORTED_MODULE_11__pages_package_package__["a" /* PackagePage */],
                __WEBPACK_IMPORTED_MODULE_13__pages_vendorprofile_vendorprofile__["a" /* VendorProfilePage */],
                __WEBPACK_IMPORTED_MODULE_15__pages_marketerads_marketerads__["a" /* MarketerAdsPage */],
                __WEBPACK_IMPORTED_MODULE_14__pages_marketerprofile_marketerprofile__["a" /* MarketerProfilePage */],
                __WEBPACK_IMPORTED_MODULE_16__pages_marketerads_modalads_modalads__["a" /* ModalAdsPage */],
                __WEBPACK_IMPORTED_MODULE_18__pages_uploadvendor_uploadvendor__["a" /* UploadVendorPage */],
                __WEBPACK_IMPORTED_MODULE_17__pages_uploadmarketer_uploadmarketer__["a" /* UploadMarketerPage */],
                // just testing
                __WEBPACK_IMPORTED_MODULE_0__pages_home_marketerhome__["a" /* MarketerHomePage */],
                // just testing
                __WEBPACK_IMPORTED_MODULE_12__pages_setting_setting__["a" /* SettingPage */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_5__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_4__ionic_native_splash_screen__["a" /* SplashScreen */],
                { provide: __WEBPACK_IMPORTED_MODULE_2__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["c" /* IonicErrorHandler */] },
                __WEBPACK_IMPORTED_MODULE_19__ionic_native_file_transfer__["a" /* FileTransfer */],
                // FileUploadOptions,
                __WEBPACK_IMPORTED_MODULE_19__ionic_native_file_transfer__["b" /* FileTransferObject */],
                __WEBPACK_IMPORTED_MODULE_20__ionic_native_file__["a" /* File */],
                __WEBPACK_IMPORTED_MODULE_21__ionic_native_camera__["a" /* Camera */]
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 280:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(199);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(197);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_login_login__ = __webpack_require__(103);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var MyApp = /** @class */ (function () {
    function MyApp(platform, statusBar, splashScreen) {
        this.rootPage = __WEBPACK_IMPORTED_MODULE_4__pages_login_login__["a" /* LoginPage */];
        platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            statusBar.styleDefault();
            splashScreen.hide();
        });
    }
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"C:\Users\Chris\source\Workspaces\paidpromote\src\app\app.html"*/'<ion-nav [root]="rootPage"></ion-nav>\n'/*ion-inline-end:"C:\Users\Chris\source\Workspaces\paidpromote\src\app\app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 282:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MarketerHomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__uploadvendor_uploadvendor__ = __webpack_require__(104);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__uploadmarketer_uploadmarketer__ = __webpack_require__(202);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__setting_setting__ = __webpack_require__(203);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__vendorprofile_vendorprofile__ = __webpack_require__(204);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__package_package__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ads_ads__ = __webpack_require__(105);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__marketerads_marketerads__ = __webpack_require__(106);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__marketerprofile_marketerprofile__ = __webpack_require__(206);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_ionic_angular__ = __webpack_require__(11);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};










var MarketerHomePage = /** @class */ (function () {
    function MarketerHomePage(navCtrl) {
        this.navCtrl = navCtrl;
        // roots to any page
        this.ads = __WEBPACK_IMPORTED_MODULE_5__ads_ads__["a" /* AdsPage */];
        this.marketerAds = __WEBPACK_IMPORTED_MODULE_6__marketerads_marketerads__["a" /* MarketerAdsPage */];
        this.package = __WEBPACK_IMPORTED_MODULE_4__package_package__["a" /* PackagePage */];
        this.profile = __WEBPACK_IMPORTED_MODULE_3__vendorprofile_vendorprofile__["a" /* VendorProfilePage */];
        this.marketerProfile = __WEBPACK_IMPORTED_MODULE_7__marketerprofile_marketerprofile__["a" /* MarketerProfilePage */];
        this.uploadShare = __WEBPACK_IMPORTED_MODULE_1__uploadmarketer_uploadmarketer__["a" /* UploadMarketerPage */];
        this.uploadPay = __WEBPACK_IMPORTED_MODULE_0__uploadvendor_uploadvendor__["a" /* UploadVendorPage */];
        this.setting = __WEBPACK_IMPORTED_MODULE_2__setting_setting__["a" /* SettingPage */];
        this.regType = "marketer";
    }
    MarketerHomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_8__angular_core__["m" /* Component */])({
            selector: 'page-home',template:/*ion-inline-start:"C:\Users\Chris\source\Workspaces\paidpromote\src\pages\home\marketerhome.html"*/'\n\n<ion-content padding>\n\n  <!-- pages for marketer -->\n  <div *ngIf="regType == \'marketer\'">\n    <ion-tabs class="tabs-icon">\n      <ion-tab tabIcon="browsers" tabTitle="Iklan" [root]="marketerAds"></ion-tab>\n      <ion-tab tabIcon="cloud-upload" tabTitle="Unggah" [root]="uploadShare"></ion-tab>\n      <ion-tab tabIcon="contact" tabTitle="Profil" [root]="marketerProfile"></ion-tab>\n      <ion-tab tabIcon="settings" tabTitle="Pengaturan" [root]="setting"></ion-tab>\n    </ion-tabs>\n  </div>\n  <!-- pages for marketer -->\n\n  <!-- pages for vendor -->\n  <div *ngIf="regType == \'vendor\'">\n    <ion-tabs class="tabs-icon">\n      <ion-tab tabIcon="browsers" tabTitle="Iklan" [root]="ads"></ion-tab>\n      <ion-tab tabIcon="card" tabTitle="Paket" [root]="package"></ion-tab>\n      <ion-tab tabIcon="cloud-upload" tabTitle="Unggah" [root]="uploadPay"></ion-tab>\n      <ion-tab tabIcon="contact" tabTitle="Profil" [root]="profile"></ion-tab>\n      <ion-tab tabIcon="settings" tabTitle="Pengaturan" [root]="setting"></ion-tab>\n    </ion-tabs>\n  </div>\n  <!-- pages for vendor -->\n\n\n\n</ion-content>\n'/*ion-inline-end:"C:\Users\Chris\source\Workspaces\paidpromote\src\pages\home\marketerhome.html"*/
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_9_ionic_angular__["g" /* NavController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_9_ionic_angular__["g" /* NavController */]) === "function" && _a || Object])
    ], MarketerHomePage);
    return MarketerHomePage;
    var _a;
}());

//# sourceMappingURL=marketerhome.js.map

/***/ }),

/***/ 33:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PackagePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__uploadvendor_uploadvendor__ = __webpack_require__(104);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(11);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var PackagePage = /** @class */ (function () {
    function PackagePage(navCtrl, alertCtrl) {
        this.navCtrl = navCtrl;
        this.alertCtrl = alertCtrl;
        this.regType = "vendor";
    }
    PackagePage.prototype.submitPackageMini = function () {
        alert("you have mini package");
        this.presentPrompt();
    };
    PackagePage.prototype.submitPackageMedium = function () {
        alert("you have medium package");
        this.presentPrompt();
    };
    PackagePage.prototype.submitPackageMax = function () {
        alert("you have max package");
        this.presentPrompt();
    };
    PackagePage.prototype.presentPrompt = function () {
        var _this = this;
        var nextStep = this.alertCtrl.create({
            title: 'Konfirmasi',
            message: 'Lanjutkan ke tahap unggah bukti transfer ?',
            buttons: [
                {
                    text: 'Nanti',
                    handler: function (data) {
                        console.log('Batal');
                    }
                },
                {
                    text: 'Ok',
                    handler: function (data) {
                        _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_0__uploadvendor_uploadvendor__["a" /* UploadVendorPage */]);
                    }
                }
            ]
        });
        nextStep.present();
    };
    PackagePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["m" /* Component */])({
            selector: 'page-package',template:/*ion-inline-start:"C:\Users\Chris\source\Workspaces\paidpromote\src\pages\package\package.html"*/'<ion-header>\n    <ion-navbar>\n      <ion-title>\n        Pilih Paket\n      </ion-title>\n    </ion-navbar>\n  </ion-header>\n\n<ion-content padding>\n\n  <ion-card (click)="submitPackageMini()">\n    <ion-card-header>\n      <ion-item>\n        Promote Mini\n      </ion-item>\n    </ion-card-header>\n    <ion-card-content>\n      Beli 250 poin\n    </ion-card-content>\n  </ion-card>\n  \n  <ion-card (click)="submitPackageMedium()">\n    <ion-card-header>\n      <ion-item>\n        Promote Medium\n      </ion-item>\n    </ion-card-header>\n    <ion-card-content>\n      Beli 500 poin\n    </ion-card-content>\n  </ion-card>\n\n  <ion-card (click)="submitPackageMax()">\n    <ion-card-header>\n      <ion-item>\n        Promote Max\n      </ion-item>\n    </ion-card-header>\n    <ion-card-content>\n      Beli 1000 poin\n    </ion-card-content>\n  </ion-card>\n\n\n</ion-content>\n'/*ion-inline-end:"C:\Users\Chris\source\Workspaces\paidpromote\src\pages\package\package.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["a" /* AlertController */]])
    ], PackagePage);
    return PackagePage;
}());

//# sourceMappingURL=package.js.map

/***/ })

},[207]);
//# sourceMappingURL=main.js.map