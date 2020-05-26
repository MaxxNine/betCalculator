(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html":
/*!**************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<app-navbar></app-navbar>\r\n<router-outlet></router-outlet>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/calculator/calculator.component.html":
/*!********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/calculator/calculator.component.html ***!
  \********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"register\">\r\n    <div class=\"container\">\r\n        <div class=\"row\">\r\n            <div class=\"col-md-3 register-left\">\r\n                <img src=\"https://i.ibb.co/KK38m8Y/cifrao.png\" alt=\"cifrao\" border=\"0\">               \r\n                <h3>Bem-vindo!!!</h3>\r\n                <p>\r\n                    Utilize com sabedoria! Para dúvidas de utilização acesse:\r\n                    <small class=\"text-dark font-weight-bold\"><i>lugar nenhum, não vou fazer manual, só me chama no WhatsApp mesmo!</i></small>\r\n                </p>\r\n            </div>\r\n            <div class=\"col-md-9 register-right\">\r\n                <ul class=\"nav nav-tabs nav-justified\" id=\"myTab\" role=\"tablist\">\r\n                    <li class=\"nav-item\">\r\n                        <span class=\"nav-link calc-tab cursor-pointer active\" id=\"comum-tab\" (click)=\"changeCalc(0)\" data-toggle=\"tab\" role=\"tab\">Comum</span>\r\n                    </li>\r\n                    <li class=\"nav-item\">\r\n                        <span class=\"nav-link calc-tab cursor-blocked text-light\" id=\"advanced-tab\" data-toggle=\"tab\" role=\"tab\">Avançada</span>\r\n                    </li>\r\n                </ul>\r\n                <div class=\"tab-content\" id=\"panel\">\r\n                    <div class=\"tab-pane\"  [ngClass]=\"{ 'active': !calc }\" *ngIf=\"!calc\" id=\"comum\" role=\"tabpanel\" aria-labelledby=\"comum-tab\">\r\n                        <h3 class=\"register-heading\">Calculadora Comum</h3>\r\n                        <form #f=\"ngForm\" (ngSubmit)=\"normalCalc()\">\r\n                            <div class=\"row register-form\">\r\n                                <div class=\"col-md-6\">\r\n                                    <div class=\"form-group\">\r\n                                        <input \r\n                                        type=\"text\" \r\n                                        id=\"oddA\" name=\"oddA\"\r\n                                        class=\"form-control\" \r\n                                        [(ngModel)]=\"siteA.oddA\" \r\n                                        placeholder=\"Site A - Time A: 1.90 *\" required/>\r\n                                    </div>\r\n                                    <div class=\"form-group\">\r\n                                        <input \r\n                                        type=\"text\" \r\n                                        id=\"oddB\" name=\"oddB\"\r\n                                        class=\"form-control\" \r\n                                        [(ngModel)]=\"siteA.oddB\" \r\n                                        placeholder=\"Site B - Time A: 1.90 *\" required/>\r\n                                    </div>                                                                                           \r\n                                    <div class=\"form-group\">\r\n                                        <input \r\n                                        type=\"text\" \r\n                                        id=\"gastoMax\" name=\"gastoMax\"\r\n                                        class=\"form-control\" \r\n                                        [(ngModel)]=\"gastoMax\" \r\n                                        placeholder=\"Gasto máximo: 100 *\" required/>\r\n                                    </div>                                                           \r\n                                </div>\r\n                                <div class=\"col-md-6\">\r\n                                    <div class=\"text-result\" *ngIf=\"solucaoA.gastoA1\">\r\n                                        <p class=\"result\">\r\n                                            <strong class=\"result-title\"> Efetue uma aposta de: </strong>\r\n                                            <strong class=\"result-body\"><span>{{ solucaoA.gastoA1 }}</span> em <span>{{ siteA.oddA }}</span> e\r\n                                            <span>{{ solucaoA.gastoA2 }}</span> em <span>{{ siteA.oddB }}</span></strong>\r\n\r\n                                            <strong class=\"result-title\"> O lucro será de: </strong>\r\n                                            <strong class=\"result-body\"><span>{{ lucro.reais }}</span> em <span>reais</span> e\r\n                                            <span>{{ lucro.porcentagem }}</span> em <span>porcentagem</span></strong>\r\n\r\n                                            <strong class=\"result-title\"> Valor final recebido: </strong>\r\n                                            <strong class=\"result-body\"><span>{{ valorRecebido }}</span></strong>\r\n                                        </p>\r\n                                    </div>\r\n                                    <button type=\"submit\" class=\"btnRegister\" [disabled]=\"f.invalid\">Calcular</button>\r\n                                </div>                            \r\n                            </div>\r\n                        </form>\r\n                    </div>\r\n                    <div class=\"tab-pane fade show\" id=\"advanced\" [ngClass]=\"{ 'active': calc }\" *ngIf=\"calc\" role=\"tabpanel\" aria-labelledby=\"advanced-tab\">\r\n                        <h3  class=\"register-heading\">Calculadora Avançada</h3>\r\n                        <div class=\"row register-form\">\r\n                            <div class=\"col-md-6\">\r\n                                <div class=\"form-group\">\r\n                                    <input type=\"text\" class=\"form-control\" placeholder=\"First Name *\" value=\"\" />\r\n                                </div>\r\n                                <div class=\"form-group\">\r\n                                    <input type=\"text\" class=\"form-control\" placeholder=\"Last Name *\" value=\"\" />\r\n                                </div>\r\n                                <div class=\"form-group\">\r\n                                    <input type=\"email\" class=\"form-control\" placeholder=\"Email *\" value=\"\" />\r\n                                </div>\r\n                                <div class=\"form-group\">\r\n                                    <input type=\"text\" maxlength=\"10\" minlength=\"10\" class=\"form-control\" placeholder=\"Phone *\" value=\"\" />\r\n                                </div>\r\n\r\n\r\n                            </div>\r\n                            <div class=\"col-md-6\">\r\n                                <div class=\"form-group\">\r\n                                    <input type=\"password\" class=\"form-control\" placeholder=\"Password *\" value=\"\" />\r\n                                </div>\r\n                                <div class=\"form-group\">\r\n                                    <input type=\"password\" class=\"form-control\" placeholder=\"Confirm Password *\" value=\"\" />\r\n                                </div>\r\n                                <div class=\"form-group\">\r\n                                    <select class=\"form-control\">\r\n                                        <option class=\"hidden\"  selected disabled>Please select your Sequrity Question</option>\r\n                                        <option>What is your Birthdate?</option>\r\n                                        <option>What is Your old Phone Number</option>\r\n                                        <option>What is your Pet Name?</option>\r\n                                    </select>\r\n                                </div>\r\n                                <div class=\"form-group\">\r\n                                    <input type=\"text\" class=\"form-control\" placeholder=\"`Answer *\" value=\"\" />\r\n                                </div>\r\n                                <input type=\"submit\" class=\"btnRegister\"  value=\"Calcular\"/>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n\r\n    </div>\r\n</div>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/history/history.component.html":
/*!**************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/history/history.component.html ***!
  \**************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<p>history works!</p>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/home/home.component.html":
/*!********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/home/home.component.html ***!
  \********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/login/login.component.html":
/*!**********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/login/login.component.html ***!
  \**********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<p>login works!</p>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/navbar/navbar.component.html":
/*!************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/navbar/navbar.component.html ***!
  \************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<nav class=\"navbar navbar-expand-lg navbar-dark bg-dark\">\n  <a class=\"navbar-brand calculator-text\" href=\"#\">Bet<span class=\"text-primary\">Calculator</span></a>\n  <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarSupportedContent\" aria-controls=\"navbarSupportedContent\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n    <span class=\"navbar-toggler-icon\"></span>\n  </button>\n\n  <div class=\"collapse navbar-collapse\" id=\"navbarSupportedContent\">\n    <ul class=\"navbar-nav mr-auto\">\n        <li class=\"nav-item\">\n            <a class=\"nav-link\" routerLinkActive=\"active\" routerLink=\"home\">Home</a>\n        </li>\n        <li class=\"nav-item\">\n            <a class=\"nav-link\" routerLinkActive=\"active\" routerLink=\"calculator\">Calculadora</a>      \n        </li>\n        <li class=\"nav-item\">\n            <a class=\"nav-link\" routerLinkActive=\"active\" routerLink=\"history\">Histórico</a>\n        </li>\n    </ul>\n    <form class=\"form-inline my-2 my-lg-0\">\n      <input class=\"form-control mr-sm-2\" type=\"search\" placeholder=\"Pesquisar\" disabled aria-label=\"Pesquisar\">\n      <button class=\"btn btn-outline-light my-2 my-sm-0 disabled\" disabled type=\"submit\">Pesquisar</button>\n    </form>\n  </div>\n</nav>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/not-found/not-found.component.html":
/*!******************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/not-found/not-found.component.html ***!
  \******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<p>not-found works!</p>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/profile/profile.component.html":
/*!**************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/profile/profile.component.html ***!
  \**************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<p>profile works!</p>\n");

/***/ }),

/***/ "./node_modules/tslib/tslib.es6.js":
/*!*****************************************!*\
  !*** ./node_modules/tslib/tslib.es6.js ***!
  \*****************************************/
/*! exports provided: __extends, __assign, __rest, __decorate, __param, __metadata, __awaiter, __generator, __createBinding, __exportStar, __values, __read, __spread, __spreadArrays, __await, __asyncGenerator, __asyncDelegator, __asyncValues, __makeTemplateObject, __importStar, __importDefault, __classPrivateFieldGet, __classPrivateFieldSet */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__extends", function() { return __extends; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__assign", function() { return __assign; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__rest", function() { return __rest; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__decorate", function() { return __decorate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__param", function() { return __param; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__metadata", function() { return __metadata; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__awaiter", function() { return __awaiter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__generator", function() { return __generator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__createBinding", function() { return __createBinding; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__exportStar", function() { return __exportStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__values", function() { return __values; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__read", function() { return __read; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spread", function() { return __spread; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spreadArrays", function() { return __spreadArrays; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__await", function() { return __await; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncGenerator", function() { return __asyncGenerator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncDelegator", function() { return __asyncDelegator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncValues", function() { return __asyncValues; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__makeTemplateObject", function() { return __makeTemplateObject; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importStar", function() { return __importStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importDefault", function() { return __importDefault; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__classPrivateFieldGet", function() { return __classPrivateFieldGet; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__classPrivateFieldSet", function() { return __classPrivateFieldSet; });
/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */
/* global Reflect, Promise */

var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return extendStatics(d, b);
};

function __extends(d, b) {
    extendStatics(d, b);
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}

var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    }
    return __assign.apply(this, arguments);
}

function __rest(s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
}

function __decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}

function __param(paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
}

function __metadata(metadataKey, metadataValue) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
}

function __awaiter(thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
}

function __generator(thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
}

function __createBinding(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}

function __exportStar(m, exports) {
    for (var p in m) if (p !== "default" && !exports.hasOwnProperty(p)) exports[p] = m[p];
}

function __values(o) {
    var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
    if (m) return m.call(o);
    if (o && typeof o.length === "number") return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
    throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
}

function __read(o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
}

function __spread() {
    for (var ar = [], i = 0; i < arguments.length; i++)
        ar = ar.concat(__read(arguments[i]));
    return ar;
}

function __spreadArrays() {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};

function __await(v) {
    return this instanceof __await ? (this.v = v, this) : new __await(v);
}

function __asyncGenerator(thisArg, _arguments, generator) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var g = generator.apply(thisArg, _arguments || []), i, q = [];
    return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
    function verb(n) { if (g[n]) i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
    function resume(n, v) { try { step(g[n](v)); } catch (e) { settle(q[0][3], e); } }
    function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
    function fulfill(value) { resume("next", value); }
    function reject(value) { resume("throw", value); }
    function settle(f, v) { if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]); }
}

function __asyncDelegator(o) {
    var i, p;
    return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
    function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v; } : f; }
}

function __asyncValues(o) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var m = o[Symbol.asyncIterator], i;
    return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
    function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
    function settle(resolve, reject, d, v) { Promise.resolve(v).then(function(v) { resolve({ value: v, done: d }); }, reject); }
}

function __makeTemplateObject(cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};

function __importStar(mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result.default = mod;
    return result;
}

function __importDefault(mod) {
    return (mod && mod.__esModule) ? mod : { default: mod };
}

function __classPrivateFieldGet(receiver, privateMap) {
    if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to get private field on non-instance");
    }
    return privateMap.get(receiver);
}

function __classPrivateFieldSet(receiver, privateMap, value) {
    if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to set private field on non-instance");
    }
    privateMap.set(receiver, value);
    return value;
}


/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _history_history_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./history/history.component */ "./src/app/history/history.component.ts");
/* harmony import */ var _calculator_calculator_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./calculator/calculator.component */ "./src/app/calculator/calculator.component.ts");
/* harmony import */ var _not_found_not_found_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./not-found/not-found.component */ "./src/app/not-found/not-found.component.ts");







const routes = [
    { path: '', component: _home_home_component__WEBPACK_IMPORTED_MODULE_3__["HomeComponent"] },
    { path: 'home', component: _home_home_component__WEBPACK_IMPORTED_MODULE_3__["HomeComponent"] },
    { path: 'history', component: _history_history_component__WEBPACK_IMPORTED_MODULE_4__["HistoryComponent"] },
    { path: 'calculator', component: _calculator_calculator_component__WEBPACK_IMPORTED_MODULE_5__["CalculatorComponent"] },
    { path: '**', component: _not_found_not_found_component__WEBPACK_IMPORTED_MODULE_6__["NotFoundComponent"] },
];
let AppRoutingModule = class AppRoutingModule {
};
AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], AppRoutingModule);



/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyJ9 */");

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let AppComponent = class AppComponent {
    constructor() {
        this.title = 'betCalculator';
    }
};
AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-root',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")).default]
    })
], AppComponent);



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./login/login.component */ "./src/app/login/login.component.ts");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _history_history_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./history/history.component */ "./src/app/history/history.component.ts");
/* harmony import */ var _calculator_calculator_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./calculator/calculator.component */ "./src/app/calculator/calculator.component.ts");
/* harmony import */ var _profile_profile_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./profile/profile.component */ "./src/app/profile/profile.component.ts");
/* harmony import */ var _not_found_not_found_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./not-found/not-found.component */ "./src/app/not-found/not-found.component.ts");
/* harmony import */ var _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./navbar/navbar.component */ "./src/app/navbar/navbar.component.ts");













let AppModule = class AppModule {
};
AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        declarations: [
            _app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"],
            _login_login_component__WEBPACK_IMPORTED_MODULE_6__["LoginComponent"],
            _home_home_component__WEBPACK_IMPORTED_MODULE_7__["HomeComponent"],
            _history_history_component__WEBPACK_IMPORTED_MODULE_8__["HistoryComponent"],
            _calculator_calculator_component__WEBPACK_IMPORTED_MODULE_9__["CalculatorComponent"],
            _profile_profile_component__WEBPACK_IMPORTED_MODULE_10__["ProfileComponent"],
            _not_found_not_found_component__WEBPACK_IMPORTED_MODULE_11__["NotFoundComponent"],
            _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_12__["NavbarComponent"]
        ],
        imports: [
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_4__["AppRoutingModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"]
        ],
        providers: [],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]]
    })
], AppModule);



/***/ }),

/***/ "./src/app/calculator/calculator.component.scss":
/*!******************************************************!*\
  !*** ./src/app/calculator/calculator.component.scss ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".register {\n  background: -webkit-linear-gradient(left, #007bff, #343a40);\n  padding: 3%;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  min-height: 90vh;\n}\n\n.register-left {\n  text-align: center;\n  color: #fff;\n  margin-top: 4%;\n}\n\n.register-left input {\n  border: none;\n  border-radius: 1.5rem;\n  padding: 2%;\n  width: 60%;\n  background: #f8f9fa;\n  font-weight: bold;\n  color: #383d41;\n  margin-top: 30%;\n  margin-bottom: 3%;\n  cursor: pointer;\n}\n\n.register-right {\n  background: #f8f9fa;\n  border-top-left-radius: 10% 50%;\n  border-bottom-left-radius: 10% 50%;\n}\n\n.register-left img {\n  margin-top: 15%;\n  margin-bottom: 5%;\n  width: 25%;\n  -webkit-animation: mover 2s infinite alternate;\n  animation: mover 1s infinite alternate;\n}\n\n@-webkit-keyframes mover {\n  0% {\n    transform: translateY(0);\n  }\n  100% {\n    transform: translateY(-20px);\n  }\n}\n\n@keyframes mover {\n  0% {\n    transform: translateY(0);\n  }\n  100% {\n    transform: translateY(-20px);\n  }\n}\n\n.register-left p {\n  font-weight: lighter;\n  padding: 12%;\n  margin-top: -9%;\n}\n\n.register .register-form {\n  padding: 10%;\n  margin-top: 10%;\n}\n\n.btnRegister {\n  border: none;\n  border-radius: 1.5rem;\n  padding: 2%;\n  background: #007bff;\n  color: #fff;\n  font-weight: 600;\n  width: 50%;\n  position: absolute;\n  bottom: 1rem;\n  right: 0;\n  cursor: pointer;\n}\n\n.register .nav-tabs {\n  margin-top: 3%;\n  border: none;\n  background: #007bff;\n  border-radius: 1.5rem;\n  width: 28%;\n  float: right;\n}\n\n.register .nav-tabs .nav-link {\n  padding: 2%;\n  height: 34px;\n  font-weight: 600;\n  color: #fff;\n  border-top-right-radius: 1.5rem;\n  border-bottom-right-radius: 1.5rem;\n}\n\n.register .nav-tabs .nav-link:hover {\n  border: none;\n}\n\n.register .nav-tabs .nav-link.active {\n  width: 100px;\n  color: #007bff;\n  border: 2px solid #007bff;\n  border-top-left-radius: 1.5rem;\n  border-bottom-left-radius: 1.5rem;\n}\n\n.register-heading {\n  text-align: center;\n  margin-top: 8%;\n  margin-bottom: -15%;\n  color: #495057;\n}\n\n.calc-tab:not(.active):hover {\n  border: 1px solid transparent !important;\n  border-right: none !important;\n}\n\nbutton.btnRegister:disabled {\n  opacity: 0.75;\n  cursor: inherit;\n}\n\n.result {\n  font-size: 0.825rem;\n  color: #5D5D5D;\n}\n\n.result strong {\n  display: block;\n}\n\n.result strong.result-body:not(span) {\n  font-weight: 400;\n}\n\n.result span {\n  color: #007bff;\n  font-style: italic;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY2FsY3VsYXRvci9EOlxcRGVza3RvcFxcTWF4XFxiZXRDYWxjdWxhdG9yXFxiZXRDYWxjdWxhdG9yL3NyY1xcYXBwXFxjYWxjdWxhdG9yXFxjYWxjdWxhdG9yLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9jYWxjdWxhdG9yL2NhbGN1bGF0b3IuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSwyREFBQTtFQUNBLFdBQUE7RUFDQSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtFQUNBLGdCQUFBO0FDQ0o7O0FEQ0E7RUFDSSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxjQUFBO0FDRUo7O0FEQUE7RUFDSSxZQUFBO0VBQ0EscUJBQUE7RUFDQSxXQUFBO0VBQ0EsVUFBQTtFQUNBLG1CQUFBO0VBQ0EsaUJBQUE7RUFDQSxjQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0VBQ0EsZUFBQTtBQ0dKOztBRERBO0VBQ0ksbUJBQUE7RUFDQSwrQkFBQTtFQUNBLGtDQUFBO0FDSUo7O0FERkE7RUFDSSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxVQUFBO0VBQ0EsOENBQUE7RUFDQSxzQ0FBQTtBQ0tKOztBREhBO0VBQ0k7SUFBSyx3QkFBQTtFQ09QO0VETkU7SUFBTyw0QkFBQTtFQ1NUO0FBQ0Y7O0FEUkE7RUFDSTtJQUFLLHdCQUFBO0VDV1A7RURWRTtJQUFPLDRCQUFBO0VDYVQ7QUFDRjs7QURaQTtFQUNJLG9CQUFBO0VBQ0EsWUFBQTtFQUNBLGVBQUE7QUNjSjs7QURaQTtFQUNJLFlBQUE7RUFDQSxlQUFBO0FDZUo7O0FEYkE7RUFDSSxZQUFBO0VBQ0EscUJBQUE7RUFDQSxXQUFBO0VBQ0EsbUJBQUE7RUFDQSxXQUFBO0VBQ0EsZ0JBQUE7RUFDQSxVQUFBO0VBQ0Esa0JBQUE7RUFDQSxZQUFBO0VBQ0EsUUFBQTtFQUNBLGVBQUE7QUNnQko7O0FEZEE7RUFDSSxjQUFBO0VBQ0EsWUFBQTtFQUNBLG1CQUFBO0VBQ0EscUJBQUE7RUFDQSxVQUFBO0VBQ0EsWUFBQTtBQ2lCSjs7QURmQTtFQUNJLFdBQUE7RUFDQSxZQUFBO0VBQ0EsZ0JBQUE7RUFDQSxXQUFBO0VBQ0EsK0JBQUE7RUFDQSxrQ0FBQTtBQ2tCSjs7QURoQkE7RUFDSSxZQUFBO0FDbUJKOztBRGpCQTtFQUNJLFlBQUE7RUFDQSxjQUFBO0VBQ0EseUJBQUE7RUFDQSw4QkFBQTtFQUNBLGlDQUFBO0FDb0JKOztBRGxCQTtFQUNJLGtCQUFBO0VBQ0EsY0FBQTtFQUNBLG1CQUFBO0VBQ0EsY0FBQTtBQ3FCSjs7QURsQkE7RUFDSSx3Q0FBQTtFQUNBLDZCQUFBO0FDcUJKOztBRGxCQTtFQUNJLGFBQUE7RUFDQSxlQUFBO0FDcUJKOztBRGxCQTtFQUNJLG1CQUFBO0VBQ0EsY0FBQTtBQ3FCSjs7QURuQkk7RUFDSSxjQUFBO0FDcUJSOztBRG5CUTtFQUNJLGdCQUFBO0FDcUJaOztBRGpCSTtFQUNJLGNBQUE7RUFDQSxrQkFBQTtBQ21CUiIsImZpbGUiOiJzcmMvYXBwL2NhbGN1bGF0b3IvY2FsY3VsYXRvci5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5yZWdpc3RlcntcclxuICAgIGJhY2tncm91bmQ6IC13ZWJraXQtbGluZWFyLWdyYWRpZW50KGxlZnQsICMwMDdiZmYsICMzNDNhNDApO1xyXG4gICAgcGFkZGluZzogMyU7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgbWluLWhlaWdodDo5MHZoO1xyXG59XHJcbi5yZWdpc3Rlci1sZWZ0e1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgY29sb3I6ICNmZmY7XHJcbiAgICBtYXJnaW4tdG9wOiA0JTtcclxufVxyXG4ucmVnaXN0ZXItbGVmdCBpbnB1dHtcclxuICAgIGJvcmRlcjogbm9uZTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDEuNXJlbTtcclxuICAgIHBhZGRpbmc6IDIlO1xyXG4gICAgd2lkdGg6IDYwJTtcclxuICAgIGJhY2tncm91bmQ6ICNmOGY5ZmE7XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgIGNvbG9yOiAjMzgzZDQxO1xyXG4gICAgbWFyZ2luLXRvcDogMzAlO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMyU7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbn1cclxuLnJlZ2lzdGVyLXJpZ2h0e1xyXG4gICAgYmFja2dyb3VuZDogI2Y4ZjlmYTtcclxuICAgIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDEwJSA1MCU7XHJcbiAgICBib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOiAxMCUgNTAlO1xyXG59XHJcbi5yZWdpc3Rlci1sZWZ0IGltZ3tcclxuICAgIG1hcmdpbi10b3A6IDE1JTtcclxuICAgIG1hcmdpbi1ib3R0b206IDUlO1xyXG4gICAgd2lkdGg6IDI1JTtcclxuICAgIC13ZWJraXQtYW5pbWF0aW9uOiBtb3ZlciAycyBpbmZpbml0ZSAgYWx0ZXJuYXRlO1xyXG4gICAgYW5pbWF0aW9uOiBtb3ZlciAxcyBpbmZpbml0ZSAgYWx0ZXJuYXRlO1xyXG59XHJcbkAtd2Via2l0LWtleWZyYW1lcyBtb3ZlciB7XHJcbiAgICAwJSB7IHRyYW5zZm9ybTogdHJhbnNsYXRlWSgwKTsgfVxyXG4gICAgMTAwJSB7IHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMjBweCk7IH1cclxufVxyXG5Aa2V5ZnJhbWVzIG1vdmVyIHtcclxuICAgIDAlIHsgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDApOyB9XHJcbiAgICAxMDAlIHsgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0yMHB4KTsgfVxyXG59XHJcbi5yZWdpc3Rlci1sZWZ0IHB7XHJcbiAgICBmb250LXdlaWdodDogbGlnaHRlcjtcclxuICAgIHBhZGRpbmc6IDEyJTtcclxuICAgIG1hcmdpbi10b3A6IC05JTtcclxufVxyXG4ucmVnaXN0ZXIgLnJlZ2lzdGVyLWZvcm17XHJcbiAgICBwYWRkaW5nOiAxMCU7XHJcbiAgICBtYXJnaW4tdG9wOiAxMCU7XHJcbn1cclxuLmJ0blJlZ2lzdGVye1xyXG4gICAgYm9yZGVyOiBub25lO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMS41cmVtO1xyXG4gICAgcGFkZGluZzogMiU7XHJcbiAgICBiYWNrZ3JvdW5kOiAjMDA3YmZmO1xyXG4gICAgY29sb3I6ICNmZmY7XHJcbiAgICBmb250LXdlaWdodDogNjAwO1xyXG4gICAgd2lkdGg6IDUwJTtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIGJvdHRvbTogMXJlbTtcclxuICAgIHJpZ2h0OiAwO1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG59XHJcbi5yZWdpc3RlciAubmF2LXRhYnN7XHJcbiAgICBtYXJnaW4tdG9wOiAzJTtcclxuICAgIGJvcmRlcjogbm9uZTtcclxuICAgIGJhY2tncm91bmQ6ICMwMDdiZmY7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxLjVyZW07XHJcbiAgICB3aWR0aDogMjglO1xyXG4gICAgZmxvYXQ6IHJpZ2h0O1xyXG59XHJcbi5yZWdpc3RlciAubmF2LXRhYnMgLm5hdi1saW5re1xyXG4gICAgcGFkZGluZzogMiU7XHJcbiAgICBoZWlnaHQ6IDM0cHg7XHJcbiAgICBmb250LXdlaWdodDogNjAwO1xyXG4gICAgY29sb3I6ICNmZmY7XHJcbiAgICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogMS41cmVtO1xyXG4gICAgYm9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6IDEuNXJlbTtcclxufVxyXG4ucmVnaXN0ZXIgLm5hdi10YWJzIC5uYXYtbGluazpob3ZlcntcclxuICAgIGJvcmRlcjogbm9uZTtcclxufVxyXG4ucmVnaXN0ZXIgLm5hdi10YWJzIC5uYXYtbGluay5hY3RpdmV7XHJcbiAgICB3aWR0aDogMTAwcHg7XHJcbiAgICBjb2xvcjogIzAwN2JmZjtcclxuICAgIGJvcmRlcjogMnB4IHNvbGlkICMwMDdiZmY7XHJcbiAgICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiAxLjVyZW07XHJcbiAgICBib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOiAxLjVyZW07XHJcbn1cclxuLnJlZ2lzdGVyLWhlYWRpbmd7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBtYXJnaW4tdG9wOiA4JTtcclxuICAgIG1hcmdpbi1ib3R0b206IC0xNSU7XHJcbiAgICBjb2xvcjogIzQ5NTA1NztcclxufVxyXG5cclxuLmNhbGMtdGFiOm5vdCguYWN0aXZlKTpob3ZlciB7XHJcbiAgICBib3JkZXI6MXB4IHNvbGlkIHRyYW5zcGFyZW50IWltcG9ydGFudDtcclxuICAgIGJvcmRlci1yaWdodDogbm9uZSFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbmJ1dHRvbi5idG5SZWdpc3RlcjpkaXNhYmxlZCB7XHJcbiAgICBvcGFjaXR5OiAuNzU7XHJcbiAgICBjdXJzb3I6IGluaGVyaXQ7XHJcbn1cclxuXHJcbi5yZXN1bHQge1xyXG4gICAgZm9udC1zaXplOiAwLjgyNXJlbTsgICAgXHJcbiAgICBjb2xvcjogIzVENUQ1RDtcclxuICAgIFxyXG4gICAgc3Ryb25nIHtcclxuICAgICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICYucmVzdWx0LWJvZHk6bm90KHNwYW4pIHtcclxuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDQwMDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgc3BhbiB7XHJcbiAgICAgICAgY29sb3I6ICMwMDdiZmY7XHJcbiAgICAgICAgZm9udC1zdHlsZTogaXRhbGljOyAgICAgICAgXHJcbiAgICB9XHJcbn0iLCIucmVnaXN0ZXIge1xuICBiYWNrZ3JvdW5kOiAtd2Via2l0LWxpbmVhci1ncmFkaWVudChsZWZ0LCAjMDA3YmZmLCAjMzQzYTQwKTtcbiAgcGFkZGluZzogMyU7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBtaW4taGVpZ2h0OiA5MHZoO1xufVxuXG4ucmVnaXN0ZXItbGVmdCB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgY29sb3I6ICNmZmY7XG4gIG1hcmdpbi10b3A6IDQlO1xufVxuXG4ucmVnaXN0ZXItbGVmdCBpbnB1dCB7XG4gIGJvcmRlcjogbm9uZTtcbiAgYm9yZGVyLXJhZGl1czogMS41cmVtO1xuICBwYWRkaW5nOiAyJTtcbiAgd2lkdGg6IDYwJTtcbiAgYmFja2dyb3VuZDogI2Y4ZjlmYTtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIGNvbG9yOiAjMzgzZDQxO1xuICBtYXJnaW4tdG9wOiAzMCU7XG4gIG1hcmdpbi1ib3R0b206IDMlO1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbi5yZWdpc3Rlci1yaWdodCB7XG4gIGJhY2tncm91bmQ6ICNmOGY5ZmE7XG4gIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDEwJSA1MCU7XG4gIGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6IDEwJSA1MCU7XG59XG5cbi5yZWdpc3Rlci1sZWZ0IGltZyB7XG4gIG1hcmdpbi10b3A6IDE1JTtcbiAgbWFyZ2luLWJvdHRvbTogNSU7XG4gIHdpZHRoOiAyNSU7XG4gIC13ZWJraXQtYW5pbWF0aW9uOiBtb3ZlciAycyBpbmZpbml0ZSBhbHRlcm5hdGU7XG4gIGFuaW1hdGlvbjogbW92ZXIgMXMgaW5maW5pdGUgYWx0ZXJuYXRlO1xufVxuXG5ALXdlYmtpdC1rZXlmcmFtZXMgbW92ZXIge1xuICAwJSB7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDApO1xuICB9XG4gIDEwMCUge1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMjBweCk7XG4gIH1cbn1cbkBrZXlmcmFtZXMgbW92ZXIge1xuICAwJSB7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDApO1xuICB9XG4gIDEwMCUge1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMjBweCk7XG4gIH1cbn1cbi5yZWdpc3Rlci1sZWZ0IHAge1xuICBmb250LXdlaWdodDogbGlnaHRlcjtcbiAgcGFkZGluZzogMTIlO1xuICBtYXJnaW4tdG9wOiAtOSU7XG59XG5cbi5yZWdpc3RlciAucmVnaXN0ZXItZm9ybSB7XG4gIHBhZGRpbmc6IDEwJTtcbiAgbWFyZ2luLXRvcDogMTAlO1xufVxuXG4uYnRuUmVnaXN0ZXIge1xuICBib3JkZXI6IG5vbmU7XG4gIGJvcmRlci1yYWRpdXM6IDEuNXJlbTtcbiAgcGFkZGluZzogMiU7XG4gIGJhY2tncm91bmQ6ICMwMDdiZmY7XG4gIGNvbG9yOiAjZmZmO1xuICBmb250LXdlaWdodDogNjAwO1xuICB3aWR0aDogNTAlO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGJvdHRvbTogMXJlbTtcbiAgcmlnaHQ6IDA7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuLnJlZ2lzdGVyIC5uYXYtdGFicyB7XG4gIG1hcmdpbi10b3A6IDMlO1xuICBib3JkZXI6IG5vbmU7XG4gIGJhY2tncm91bmQ6ICMwMDdiZmY7XG4gIGJvcmRlci1yYWRpdXM6IDEuNXJlbTtcbiAgd2lkdGg6IDI4JTtcbiAgZmxvYXQ6IHJpZ2h0O1xufVxuXG4ucmVnaXN0ZXIgLm5hdi10YWJzIC5uYXYtbGluayB7XG4gIHBhZGRpbmc6IDIlO1xuICBoZWlnaHQ6IDM0cHg7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIGNvbG9yOiAjZmZmO1xuICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogMS41cmVtO1xuICBib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czogMS41cmVtO1xufVxuXG4ucmVnaXN0ZXIgLm5hdi10YWJzIC5uYXYtbGluazpob3ZlciB7XG4gIGJvcmRlcjogbm9uZTtcbn1cblxuLnJlZ2lzdGVyIC5uYXYtdGFicyAubmF2LWxpbmsuYWN0aXZlIHtcbiAgd2lkdGg6IDEwMHB4O1xuICBjb2xvcjogIzAwN2JmZjtcbiAgYm9yZGVyOiAycHggc29saWQgIzAwN2JmZjtcbiAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogMS41cmVtO1xuICBib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOiAxLjVyZW07XG59XG5cbi5yZWdpc3Rlci1oZWFkaW5nIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBtYXJnaW4tdG9wOiA4JTtcbiAgbWFyZ2luLWJvdHRvbTogLTE1JTtcbiAgY29sb3I6ICM0OTUwNTc7XG59XG5cbi5jYWxjLXRhYjpub3QoLmFjdGl2ZSk6aG92ZXIge1xuICBib3JkZXI6IDFweCBzb2xpZCB0cmFuc3BhcmVudCAhaW1wb3J0YW50O1xuICBib3JkZXItcmlnaHQ6IG5vbmUgIWltcG9ydGFudDtcbn1cblxuYnV0dG9uLmJ0blJlZ2lzdGVyOmRpc2FibGVkIHtcbiAgb3BhY2l0eTogMC43NTtcbiAgY3Vyc29yOiBpbmhlcml0O1xufVxuXG4ucmVzdWx0IHtcbiAgZm9udC1zaXplOiAwLjgyNXJlbTtcbiAgY29sb3I6ICM1RDVENUQ7XG59XG4ucmVzdWx0IHN0cm9uZyB7XG4gIGRpc3BsYXk6IGJsb2NrO1xufVxuLnJlc3VsdCBzdHJvbmcucmVzdWx0LWJvZHk6bm90KHNwYW4pIHtcbiAgZm9udC13ZWlnaHQ6IDQwMDtcbn1cbi5yZXN1bHQgc3BhbiB7XG4gIGNvbG9yOiAjMDA3YmZmO1xuICBmb250LXN0eWxlOiBpdGFsaWM7XG59Il19 */");

/***/ }),

/***/ "./src/app/calculator/calculator.component.ts":
/*!****************************************************!*\
  !*** ./src/app/calculator/calculator.component.ts ***!
  \****************************************************/
/*! exports provided: CalculatorComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CalculatorComponent", function() { return CalculatorComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let CalculatorComponent = class CalculatorComponent {
    constructor() {
        this.siteA = {
            oddA: null,
            oddB: null
        };
        this.solucaoA = {
            gastoA1: null,
            gastoA2: null,
        };
        this.siteB = {
            oddA: null,
            oddB: null
        };
        this.lucro = {
            reais: null,
            porcentagem: null,
        };
        this.calc = 0;
    }
    ngOnInit() {
    }
    changeCalc(number) {
        this.calc = number;
    }
    normalCalc() {
        const K1 = parseFloat(this.siteA.oddA) / parseFloat(this.siteA.oddB);
        this.solucaoA.gastoA1 = (this.gastoMax / (K1 + 1)).toFixed(2);
        this.solucaoA.gastoA2 = (this.gastoMax - this.solucaoA.gastoA1).toFixed(2);
        this.valorRecebido = this.solucaoA.gastoA1 * this.siteA.oddA;
        this.lucro.reais = (this.valorRecebido - this.gastoMax).toFixed(2);
        this.lucro.porcentagem = (this.valorRecebido / this.gastoMax).toFixed(2);
    }
};
CalculatorComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-calculator',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./calculator.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/calculator/calculator.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./calculator.component.scss */ "./src/app/calculator/calculator.component.scss")).default]
    })
], CalculatorComponent);



/***/ }),

/***/ "./src/app/history/history.component.scss":
/*!************************************************!*\
  !*** ./src/app/history/history.component.scss ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2hpc3RvcnkvaGlzdG9yeS5jb21wb25lbnQuc2NzcyJ9 */");

/***/ }),

/***/ "./src/app/history/history.component.ts":
/*!**********************************************!*\
  !*** ./src/app/history/history.component.ts ***!
  \**********************************************/
/*! exports provided: HistoryComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HistoryComponent", function() { return HistoryComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let HistoryComponent = class HistoryComponent {
    constructor() { }
    ngOnInit() {
    }
};
HistoryComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-history',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./history.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/history/history.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./history.component.scss */ "./src/app/history/history.component.scss")).default]
    })
], HistoryComponent);



/***/ }),

/***/ "./src/app/home/home.component.scss":
/*!******************************************!*\
  !*** ./src/app/home/home.component.scss ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2hvbWUvaG9tZS5jb21wb25lbnQuc2NzcyJ9 */");

/***/ }),

/***/ "./src/app/home/home.component.ts":
/*!****************************************!*\
  !*** ./src/app/home/home.component.ts ***!
  \****************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let HomeComponent = class HomeComponent {
    constructor() { }
    ngOnInit() {
    }
};
HomeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-home',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./home.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/home/home.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./home.component.scss */ "./src/app/home/home.component.scss")).default]
    })
], HomeComponent);



/***/ }),

/***/ "./src/app/login/login.component.scss":
/*!********************************************!*\
  !*** ./src/app/login/login.component.scss ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2xvZ2luL2xvZ2luLmNvbXBvbmVudC5zY3NzIn0= */");

/***/ }),

/***/ "./src/app/login/login.component.ts":
/*!******************************************!*\
  !*** ./src/app/login/login.component.ts ***!
  \******************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let LoginComponent = class LoginComponent {
    constructor() { }
    ngOnInit() {
    }
};
LoginComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-login',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./login.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/login/login.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./login.component.scss */ "./src/app/login/login.component.scss")).default]
    })
], LoginComponent);



/***/ }),

/***/ "./src/app/navbar/navbar.component.scss":
/*!**********************************************!*\
  !*** ./src/app/navbar/navbar.component.scss ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".calculator-text {\n  font-style: italic;\n  font-family: \"Montserrat\", sans-serif;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbmF2YmFyL0Q6XFxEZXNrdG9wXFxNYXhcXGJldENhbGN1bGF0b3JcXGJldENhbGN1bGF0b3Ivc3JjXFxhcHBcXG5hdmJhclxcbmF2YmFyLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9uYXZiYXIvbmF2YmFyLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksa0JBQUE7RUFDQSxxQ0FBQTtBQ0NKIiwiZmlsZSI6InNyYy9hcHAvbmF2YmFyL25hdmJhci5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jYWxjdWxhdG9yLXRleHR7XHJcbiAgICBmb250LXN0eWxlOiBpdGFsaWM7ICAgXHJcbiAgICBmb250LWZhbWlseTogJ01vbnRzZXJyYXQnLCBzYW5zLXNlcmlmO1xyXG59IiwiLmNhbGN1bGF0b3ItdGV4dCB7XG4gIGZvbnQtc3R5bGU6IGl0YWxpYztcbiAgZm9udC1mYW1pbHk6IFwiTW9udHNlcnJhdFwiLCBzYW5zLXNlcmlmO1xufSJdfQ== */");

/***/ }),

/***/ "./src/app/navbar/navbar.component.ts":
/*!********************************************!*\
  !*** ./src/app/navbar/navbar.component.ts ***!
  \********************************************/
/*! exports provided: NavbarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavbarComponent", function() { return NavbarComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let NavbarComponent = class NavbarComponent {
    constructor() { }
    ngOnInit() {
    }
};
NavbarComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-navbar',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./navbar.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/navbar/navbar.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./navbar.component.scss */ "./src/app/navbar/navbar.component.scss")).default]
    })
], NavbarComponent);



/***/ }),

/***/ "./src/app/not-found/not-found.component.scss":
/*!****************************************************!*\
  !*** ./src/app/not-found/not-found.component.scss ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL25vdC1mb3VuZC9ub3QtZm91bmQuY29tcG9uZW50LnNjc3MifQ== */");

/***/ }),

/***/ "./src/app/not-found/not-found.component.ts":
/*!**************************************************!*\
  !*** ./src/app/not-found/not-found.component.ts ***!
  \**************************************************/
/*! exports provided: NotFoundComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NotFoundComponent", function() { return NotFoundComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let NotFoundComponent = class NotFoundComponent {
    constructor() { }
    ngOnInit() {
    }
};
NotFoundComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-not-found',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./not-found.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/not-found/not-found.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./not-found.component.scss */ "./src/app/not-found/not-found.component.scss")).default]
    })
], NotFoundComponent);



/***/ }),

/***/ "./src/app/profile/profile.component.scss":
/*!************************************************!*\
  !*** ./src/app/profile/profile.component.scss ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3Byb2ZpbGUvcHJvZmlsZS5jb21wb25lbnQuc2NzcyJ9 */");

/***/ }),

/***/ "./src/app/profile/profile.component.ts":
/*!**********************************************!*\
  !*** ./src/app/profile/profile.component.ts ***!
  \**********************************************/
/*! exports provided: ProfileComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfileComponent", function() { return ProfileComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let ProfileComponent = class ProfileComponent {
    constructor() { }
    ngOnInit() {
    }
};
ProfileComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-profile',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./profile.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/profile/profile.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./profile.component.scss */ "./src/app/profile/profile.component.scss")).default]
    })
], ProfileComponent);



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

const environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");





if (_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_3__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! D:\Desktop\Max\betCalculator\betCalculator\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map