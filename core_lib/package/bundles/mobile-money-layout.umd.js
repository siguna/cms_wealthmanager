(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('@angular/common'), require('@ngx-translate/core'), require('ngx-bootstrap/buttons'), require('ngx-bootstrap/dropdown'), require('ngx-bootstrap/modal'), require('@angular/router'), require('mobile-money'), require('rxjs'), require('rxjs/operators'), require('@angular/forms')) :
    typeof define === 'function' && define.amd ? define('mobile-money-layout', ['exports', '@angular/core', '@angular/common', '@ngx-translate/core', 'ngx-bootstrap/buttons', 'ngx-bootstrap/dropdown', 'ngx-bootstrap/modal', '@angular/router', 'mobile-money', 'rxjs', 'rxjs/operators', '@angular/forms'], factory) :
    (global = global || self, factory(global['mobile-money-layout'] = {}, global.ng.core, global.ng.common, global.core$1, global.buttons, global.dropdown, global.modal, global.ng.router, global.mobileMoney, global.rxjs, global.rxjs.operators, global.ng.forms));
}(this, (function (exports, core, common, core$1, buttons, dropdown, modal, router, mobileMoney, rxjs, operators, forms) { 'use strict';

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
        };
        return __assign.apply(this, arguments);
    };

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

    var MobileMoneyLayoutService = /** @class */ (function () {
        function MobileMoneyLayoutService() {
        }
        MobileMoneyLayoutService.ngInjectableDef = core.ɵɵdefineInjectable({ factory: function MobileMoneyLayoutService_Factory() { return new MobileMoneyLayoutService(); }, token: MobileMoneyLayoutService, providedIn: "root" });
        MobileMoneyLayoutService = __decorate([
            core.Injectable({
                providedIn: 'root'
            })
        ], MobileMoneyLayoutService);
        return MobileMoneyLayoutService;
    }());

    var MobileMoneyLayoutComponent = /** @class */ (function () {
        function MobileMoneyLayoutComponent() {
        }
        MobileMoneyLayoutComponent.prototype.ngOnInit = function () {
        };
        MobileMoneyLayoutComponent = __decorate([
            core.Component({
                selector: 'lib-mobile-money-layout',
                template: "\n    <p>\n      mobile-money-layout works!\n    </p>\n  "
            })
        ], MobileMoneyLayoutComponent);
        return MobileMoneyLayoutComponent;
    }());

    var MainContentComponent = /** @class */ (function () {
        function MainContentComponent(router, route, navTabService, appConfigToken) {
            this.router = router;
            this.route = route;
            this.navTabService = navTabService;
            this.appConfigToken = appConfigToken;
            this.tabs = [];
            this.subscription = new rxjs.Subject();
            this.showInTab = this.appConfigToken.appConfig.APP_CONFIG.showInTab;
            this.lengthTabHindenText = mobileMoney.Constants.LENGTH_TAB_HIDDEN_TEXT;
            this.previousLengthTabs = 0;
            this.isRemoveTab = false;
        }
        MainContentComponent.prototype.ngOnInit = function () {
            var _this = this;
            this.activeTab$ = this.navTabService.getTabActiveItems();
            // data tabs change
            this.navTabService.getTabActiveItems().pipe(operators.takeUntil(this.subscription)).subscribe(function (res) {
                if (_this.loadedMenu) {
                    _this.previousLengthTabs = _this.tabs.length;
                }
                _this.tabs = res;
                if (_this.tabs.length) {
                    _this.showInTab = true;
                }
                else {
                    _this.showInTab = false;
                }
            });
        };
        MainContentComponent.prototype.ngAfterViewInit = function () {
            var _this = this;
            // track action add tab or change tab
            this.navTabService.addTabListener$.pipe(operators.delay(100), operators.takeUntil(this.subscription), operators.distinctUntilChanged()).subscribe(function (res) {
                var currentIndexSelectedTab = _this.tabs.findIndex(function (tab) { return tab.id === res; });
                if (currentIndexSelectedTab < 0) {
                    currentIndexSelectedTab = _this.tabs.findIndex(function (tab) { return tab.routerLink.includes(res); });
                }
                if (currentIndexSelectedTab >= 0) {
                    if (_this.previousLengthTabs < _this.tabs.length) {
                        // this.carousel.goToSelectedIndex(currentIndexSelectedTab, true);
                        _this.tabMenu.selectTab(currentIndexSelectedTab, true);
                    }
                    else {
                        if (!_this.isRemoveTab) {
                            // this.carousel.goToSelectedIndex(currentIndexSelectedTab, false);
                            _this.tabMenu.selectTab(currentIndexSelectedTab, false);
                        }
                        else {
                            _this.isRemoveTab = false;
                        }
                    }
                }
            });
            this.navTabService.getLoadingStatus$().pipe(operators.delay(200), operators.takeUntil(this.subscription)).subscribe(function (res) {
                if (res) {
                    var currentUrl = _this.router.url.substr(1, _this.router.url.length);
                    var params = _this.route.snapshot.queryParams;
                    var currentUrlNoParams = currentUrl.split('?')[0];
                    _this.navTabService.addActiveTabByUrl(currentUrlNoParams, params);
                    _this.loadedMenu = true;
                }
            });
        };
        MainContentComponent.prototype.onCloseTab = function (index) {
            this.isRemoveTab = true;
            var currentTab = this.tabs[index];
            var prevTab = __assign({}, this.tabs[index - 1]);
            var nextTab;
            if (this.tabs.length >= 2) {
                nextTab = __assign({}, this.tabs[1]);
            }
            if (currentTab.isSelected) {
                if (this.tabs.length === 1) {
                    this.navTabService.addActiveTab(null);
                }
                else {
                    if (index === 0) {
                        this.tabMenu.selectTab(1, false);
                    }
                    else {
                        this.tabMenu.selectTab(index - 1, false);
                    }
                }
            }
            this.navTabService.removeActiveTab(currentTab);
            this.tabMenu.removeTab(index);
        };
        MainContentComponent.prototype.spaceEvent = function ($event) {
            if ((this.tabs.length > 0) && ($event.altKey && $event.key === '1')) {
                this.router.navigateByUrl(this.tabs[0].routerLink);
            }
            if ((this.tabs.length > 1) && ($event.altKey && $event.key === '2')) {
                this.router.navigateByUrl(this.tabs[1].routerLink);
            }
            if ((this.tabs.length > 2) && ($event.altKey && $event.key === '3')) {
                this.router.navigateByUrl(this.tabs[2].routerLink);
            }
            if ((this.tabs.length > 3) && ($event.altKey && $event.key === '4')) {
                this.router.navigateByUrl(this.tabs[3].routerLink);
            }
            if ((this.tabs.length > 4) && ($event.altKey && $event.key === '5')) {
                this.router.navigateByUrl(this.tabs[4].routerLink);
            }
            if ((this.tabs.length > 5) && ($event.altKey && $event.key === '6')) {
                this.router.navigateByUrl(this.tabs[5].routerLink);
            }
            if ((this.tabs.length > 6) && ($event.altKey && $event.key === '7')) {
                this.router.navigateByUrl(this.tabs[6].routerLink);
            }
            if ((this.tabs.length > 7) && ($event.altKey && $event.key === '8')) {
                this.router.navigateByUrl(this.tabs[7].routerLink);
            }
            if ((this.tabs.length > 8) && ($event.altKey && $event.key === '9')) {
                this.router.navigateByUrl(this.tabs[8].routerLink);
            }
            if ((this.tabs.length > 9) && ($event.altKey && $event.key === '0')) {
                this.router.navigateByUrl(this.tabs[9].routerLink);
            }
            if ((this.tabs.length > 10) && ($event.altKey && $event.key === '-')) {
                this.router.navigateByUrl(this.tabs[10].routerLink);
            }
            if ((this.tabs.length > 11) && ($event.altKey && $event.key === '=')) {
                this.router.navigateByUrl(this.tabs[11].routerLink);
            }
        };
        MainContentComponent.prototype.onSelectTab = function (index) {
            this.navTabService.tabTriggerActive(this.tabs[index]);
            // if (!this.tabs[index].matched) {
            //     this.navTabService.addActiveTab(this.tabs[index]);
            // }
        };
        MainContentComponent.prototype.getWidthTab = function (numTab) {
            if (numTab < 5) {
                return 5 * mobileMoney.Constants.DEFAULT_TAB_WIDTH;
            }
            return numTab * mobileMoney.Constants.DEFAULT_TAB_WIDTH;
        };
        MainContentComponent.prototype.prepareRoute = function (outlet) {
            return outlet.isActivated ? outlet.activatedRoute : '';
        };
        MainContentComponent.prototype.trackByFn = function (index, item) { return index; };
        MainContentComponent.prototype.ngOnDestroy = function () {
            this.navTabService.resetNavTab();
            this.subscription.next();
            this.subscription.complete();
        };
        MainContentComponent.ctorParameters = function () { return [
            { type: router.Router },
            { type: router.ActivatedRoute },
            { type: mobileMoney.NavTabService },
            { type: undefined, decorators: [{ type: core.Inject, args: [mobileMoney.APP_CONFIG_TOKEN,] }] }
        ]; };
        __decorate([
            core.ViewChild('tabMenu', { static: false })
        ], MainContentComponent.prototype, "tabMenu", void 0);
        __decorate([
            core.HostListener('window:keydown', ['$event'])
        ], MainContentComponent.prototype, "spaceEvent", null);
        MainContentComponent = __decorate([
            core.Component({
                selector: 'vt-main-content',
                template: "<div *ngIf=\"showInTab\">\r\n    <ng-container *ngIf=\"(activeTab$| async) as activeTab\">\r\n        <vt-tabs [isAllowClose]='true' (onSelectTab)=\"onSelectTab($event)\" (onCloseTab)=\"onCloseTab($event)\" *ngIf=\"activeTab.length\" #tabMenu>\r\n            <vt-tab  [title]='tab.title' [active]='tab.isSelected' *ngFor=\"let tab of activeTab;\">\r\n                <ng-container [tabId]=\"tab.id\" vtLoadTab [moduleName]=\"tab.routerLink\"></ng-container>\r\n            </vt-tab>\r\n        </vt-tabs>\r\n    </ng-container>\r\n</div>\r\n<div *ngIf=\"!showInTab\" class=\"bg-home-page\">\r\n    <div class=\"introduce\">\r\n        <div class=\"intro-text\">\r\n            <h1 class=\"intro-primary\">\r\n                <span class=\"intro-text-main\">Th\u00FAc \u0111\u1EA9ythanh to\u00E1n \u0111i\u1EC7n t\u1EED\r\n                    tr\u00EAn to\u00E0n qu\u1ED1c</span>\r\n                <span class=\"intro-text-sub\">Viettel digital</span>\r\n            </h1>\r\n            <a href=\"https://viettelpay.vn/#\" class=\"btn-home-page btn--white btn--animated\">\u0110\u0103ng K\u00ED ViettelPay</a>\r\n        </div>\r\n    </div>\r\n</div>",
                animations: [mobileMoney.makeSlideInOut(), mobileMoney.opacityAnimation()],
                styles: [".scroll-under-tab{max-height:calc(100vh - 110px);overflow-y:auto;scrollbar-color:#8fbc8f #dcdcdc;scrollbar-width:thin}.tab-x{display:inline-block;height:1rem;cursor:pointer;width:1rem}.tab-x img{opacity:.4;transition:transform .25s,opacity .25s}.tab-x img:hover{transform:rotate(270deg);transition:.3s ease-in-out;opacity:.8}.tabItem{width:100%;display:flex!important;white-space:nowrap;border-radius:unset!important;justify-content:space-between;align-items:center;border-right:none}.tab-item{width:255px;height:38px;padding:8px;background-color:#fff;border-top:none;border-right:none;position:relative;z-index:1}.tab-item:hover.active{transition:1s}.tab-item a{max-width:250px;color:#6f6f6f}.tab-item.active a{color:#000}.tab-item-close{right:8px;top:10px;position:absolute;border:none;font-size:23px;z-index:3;width:16px;height:16px;text-align:center;border-radius:50%;cursor:pointer}.tab-item-close:hover{background:#d8d8d8}.main-tab-outlet{position:relative;min-height:80vh;overflow:hidden;scrollbar-width:thin;padding-bottom:30px}.tab-item-close img{width:8px;height:8px;margin-bottom:4px;opacity:.6;vertical-align:super}.bg-home-page{width:100%;height:90vh;background-image:url(assets/images/homepage_bg.png);background-repeat:no-repeat;background-size:cover;overflow:hidden}.intro-text{position:absolute;top:40%;left:23%;transform:translate(-50%,-50%);text-align:center;width:40%}.intro-primary{color:#0f79b8;text-transform:uppercase;-webkit-backface-visibility:hidden;backface-visibility:hidden}.intro-text-main{display:block;font-size:1.8rem;font-weight:700;letter-spacing:.2rem;-webkit-animation-name:moveInLeft;animation-name:moveInLeft;-webkit-animation-duration:1s;animation-duration:1s;-webkit-animation-timing-function:ease-out;animation-timing-function:ease-out}.intro-text-sub{display:block;font-size:.7rem;font-weight:600;letter-spacing:.2rem;-webkit-animation:1s ease-out moveInRight;animation:1s ease-out moveInRight}.btn-home-page{text-transform:uppercase;text-decoration:none;padding:1rem;display:inline-block;border-radius:10rem;transition:.2s;position:relative;font-size:1rem;border:none;cursor:pointer}.btn-home-page::after{content:\"\";display:inline-block;height:100%;width:100%;border-radius:10rem;position:absolute;top:0;left:0;z-index:-1;transition:.4s}.btn-home-page:hover{transform:translateY(-3px);box-shadow:0 1rem 2rem rgba(0,0,0,.2)}.btn--animated{-webkit-animation:.5s ease-out .75s backwards moveInBottom;animation:.5s ease-out .75s backwards moveInBottom}.btn--white{background-color:#2284be;color:#fff}.btn--white::after{background-color:#2284be}@-webkit-keyframes moveInLeft{0%{opacity:0;transform:translateX(-10rem)}80%{transform:translateX(1rem)}100%{opacity:1;transform:translate(0)}}@keyframes moveInLeft{0%{opacity:0;transform:translateX(-10rem)}80%{transform:translateX(1rem)}100%{opacity:1;transform:translate(0)}}@-webkit-keyframes moveInRight{0%{opacity:0;transform:translateX(10rem)}80%{transform:translateX(-1rem)}100%{opacity:1;transform:translate(0)}}@keyframes moveInRight{0%{opacity:0;transform:translateX(10rem)}80%{transform:translateX(-1rem)}100%{opacity:1;transform:translate(0)}}@-webkit-keyframes moveInBottom{0%{opacity:0;transform:translateY(3rem)}100%{opacity:1;transform:translate(0)}}@keyframes moveInBottom{0%{opacity:0;transform:translateY(3rem)}100%{opacity:1;transform:translate(0)}}"]
            }),
            __param(3, core.Inject(mobileMoney.APP_CONFIG_TOKEN))
        ], MainContentComponent);
        return MainContentComponent;
    }());

    var DropdownUserComponent = /** @class */ (function () {
        function DropdownUserComponent(authService, router) {
            this.authService = authService;
            this.router = router;
            this.user = this.authService.getUserToken();
        }
        DropdownUserComponent.prototype.ngOnInit = function () {
        };
        DropdownUserComponent.prototype.logout = function () {
            this.authService.vsaLogout();
            this.router.navigate(['/account/login']);
        };
        DropdownUserComponent.prototype.toggle = function () {
            this.isShowLogout = !this.isShowLogout;
        };
        DropdownUserComponent.prototype.outSideClick = function () {
            this.isShowLogout = false;
        };
        DropdownUserComponent.prototype.ngOnDestroy = function () {
        };
        DropdownUserComponent.ctorParameters = function () { return [
            { type: mobileMoney.AccountService },
            { type: router.Router }
        ]; };
        DropdownUserComponent = __decorate([
            core.Component({
                // tslint:disable-next-line:component-selector
                selector: 'vt-dropdown-user',
                template: "<div *ngIf=\"user\" class=\"user\" [class.open]=\"isShowLogout\"  >\r\n  <a vtRipple ripple=\"true\" (click)=\"toggle()\" class=\"profile-pic\" href=\"javascript:void(0)\"> \r\n    <img src=\"assets/images/users/varun.jpg\" alt=\"user-img\" width=\"36\" class=\"img-circle\"></a>\r\n  <div vtClickOutside (clickOutside)=\"outSideClick()\" @slideInOut *ngIf=\"isShowLogout\" class=\"dropdown_logout\">\r\n    <a class=\" fw-500 p-2 item\" href=\"javascript:void(0)\" (click)=\"logout()\">\r\n      <span>{{'dropdownUser.logout'|translate}}</span>\r\n      <span class=\"float-right fw-n\">{{user.userInfo.userData.userName}}</span>\r\n    </a>\r\n  </div>\r\n</div>\r\n",
                animations: [mobileMoney.makeSlideInOut()],
                styles: [".dropdown_logout{right:0;left:auto;position:absolute;top:60px;background:#ffff;border:1px solid #efefef;width:245px;padding:.5rem;box-shadow:0 3px 12px rgba(0,0,0,.05)!important}.dropdown_logout::before{content:\"\";top:-3px;right:21%;width:10px;height:10px;transform:rotateZ(45deg);background-color:#fff;position:absolute}.dropdown_logout .item{display:flex;justify-content:space-around;color:#000}.dropdown_logout .item:hover{background:#f5f5f5}.profile-pic{line-height:55px;float:right;padding:0 10px!important;margin-right:30px;margin-top:3px;border-radius:60%}.profile-pic img{margin-right:0;border-radius:50%}"]
            })
        ], DropdownUserComponent);
        return DropdownUserComponent;
    }());

    var MenuNavItemComponent = /** @class */ (function () {
        function MenuNavItemComponent(router, navTabService, change) {
            this.router = router;
            this.navTabService = navTabService;
            this.change = change;
            this.unsubscribe = new rxjs.Subject();
            this.lenghtMenuHidden = mobileMoney.Constants.LENGTH_MENU_HIDDEN_TEXT;
        }
        MenuNavItemComponent.prototype.ngOnInit = function () {
            var _this = this;
            this.navTabService.tabTrigerActive$.pipe(operators.takeUntil(this.unsubscribe)).subscribe(function (res) {
                if (res && res.item) {
                    if (res.item.id === _this.item.id) {
                        // if (this.item.matched) {
                        setTimeout(function () { _this.itemLink.nativeElement.click(); });
                        // } else {
                        _this.navTabService.addActiveTab(_this.item, res.params);
                        // }
                    }
                    if (res.item.parentId.length) {
                        if (res.item.parentId.findIndex(function (item) { return item === _this.item.id; }) > -1) {
                            setTimeout(function () {
                                if (!_this.isOpen) {
                                    _this.onlyOpen = true;
                                    _this.itemToggle.nativeElement.click();
                                }
                            });
                        }
                    }
                }
            });
        };
        MenuNavItemComponent.prototype.toggleSection = function ($event, item) {
            $event.preventDefault();
            this.navTabService.toggleMenuItems(item, item.mainMenu, this.onlyOpen);
            this.onlyOpen = false;
            this.change.detectChanges();
        };
        MenuNavItemComponent.prototype.trackByFn = function (idx, item) {
            return item.title + '_' + idx;
        };
        MenuNavItemComponent.prototype.onClick = function (item) {
            this.navTabService.addActiveTab(item);
            this.router.navigateByUrl(item.routerLink).catch(console.log);
        };
        MenuNavItemComponent.prototype.ngOnDestroy = function () {
            this.unsubscribe.next();
            this.unsubscribe.complete();
        };
        MenuNavItemComponent.ctorParameters = function () { return [
            { type: router.Router },
            { type: mobileMoney.NavTabService },
            { type: core.ChangeDetectorRef }
        ]; };
        __decorate([
            core.Input()
        ], MenuNavItemComponent.prototype, "item", void 0);
        __decorate([
            core.Input()
        ], MenuNavItemComponent.prototype, "isActive", void 0);
        __decorate([
            core.Input()
        ], MenuNavItemComponent.prototype, "isOpen", void 0);
        __decorate([
            core.Input()
        ], MenuNavItemComponent.prototype, "isSelected", void 0);
        __decorate([
            core.Input()
        ], MenuNavItemComponent.prototype, "txtSearch", void 0);
        __decorate([
            core.ViewChild('itemLink', { static: false })
        ], MenuNavItemComponent.prototype, "itemLink", void 0);
        __decorate([
            core.ViewChild('itemToggle', { static: false })
        ], MenuNavItemComponent.prototype, "itemToggle", void 0);
        MenuNavItemComponent = __decorate([
            core.Component({
                // tslint:disable-next-line:component-selector
                selector: '[menu-nav-item]',
                template: "<div [hidden]=\"item.matched === false\">\r\n    <ng-container *ngIf=\"(item.items && item.items.length > 0)\">\r\n        <a #itemToggle class=\"hasChild menu-link\"\r\n            (click)=\"toggleSection($event, item)\">\r\n            <img class=\"metismenu-icon\" src=\"assets/images/{{ item.icon ?  item.icon : 'ic_function.svg' }}\">\r\n            <span vtTooltip [titleTooltip]='item.title' [posision]=\"'right'\" [isShow]='item.title.length >= (lenghtMenuHidden -(item.parentId ? item.parentId.length : 0)*2)'\r\n                 [vtHighlight]='txtSearch' [textDisplay]='item.title' [maxLengtTxt]=\"(lenghtMenuHidden - (item.parentId ? item.parentId.length : 0)*2)\"> {{ item.title}}</span>\r\n                 <i ><img class=\"{{ isOpen ? 'chevron-down-animate' : 'chevron-up-animate' }} arrow-items\" src=\"assets/images/next.svg\" /></i>\r\n        </a>\r\n        <ul @slideInOut *ngIf=\"isOpen\" class=\"d-block ov-h\">\r\n            <li menu-nav-item [txtSearch]='txtSearch' [class.open]=\"child.isSelected || (child.open && child.items.length)\" [isSelected]=\"child.isSelected\"\r\n                [isOpen]=\"child.open\" *ngFor=\"let child of item.items; trackBy: trackByFn\" [item]=\"child\">\r\n            </li>\r\n        </ul>\r\n    </ng-container>\r\n    <ng-container *ngIf=\"(!item.items || item.items.length == 0) && item.routerLink\">\r\n        <a #itemLink class=\"menu-link\"\r\n            (click)=\"onClick(item)\">\r\n            <img class=\"metismenu-icon\" src=\"assets/images/{{ item.icon ?  item.icon : 'ic_function.svg' }}\">\r\n            <span vtTooltip [titleTooltip]='item.title' [posision]=\"'right'\" [isShow]='item.title.length > (lenghtMenuHidden - (item.parentId ? item.parentId.length : 0)*2)'\r\n            [vtHighlight]='txtSearch' [textDisplay]='item.title' [maxLengtTxt]=\"(lenghtMenuHidden - (item.parentId ? item.parentId.length : 0)*2) \"> {{ item.title}}</span>\r\n        </a>\r\n    </ng-container>\r\n</div>",
                animations: [mobileMoney.makeSlideInOut()],
                styles: [".menu-link{text-overflow:ellipsis;overflow:hidden}"]
            })
        ], MenuNavItemComponent);
        return MenuNavItemComponent;
    }());

    var SidebarComponent = /** @class */ (function () {
        function SidebarComponent(navTabService, change) {
            this.navTabService = navTabService;
            this.change = change;
            this.sideNavOpen = 'in';
            // tslint:disable-next-line:no-output-on-prefix
            this.onHiddenNav = new core.EventEmitter();
            this.unsubcrible = new rxjs.Subscription();
            this.disableOutsideClick = true;
        }
        SidebarComponent.prototype.onResize = function (event) {
            this.sizeChange();
        };
        SidebarComponent.prototype.ngOnInit = function () {
            var _this = this;
            this.sizeChange();
            this.vm$ = this.navTabService.getMenuItems();
            this.navTabService.loadMenuItems();
            this.unsubcrible = this.navTabService.getMenuItems().subscribe(function (res) {
                if (_this.change && !_this.change.destroyed) {
                    _this.change.detectChanges();
                }
            });
        };
        SidebarComponent.prototype.trackByFn = function (idx, item) {
            return item.title + '_' + idx;
        };
        SidebarComponent.prototype.clearTxtSearch = function () {
            this.inputSearch.nativeElement.value = '';
            this.navTabService.searchMenuItemsByTitle('');
        };
        /**
         * animation navside
         * @author phongnv
         */
        SidebarComponent.prototype.toggleNavMenu = function () {
            return this.beHide ? 'out' : 'in';
        };
        SidebarComponent.prototype.handleKeyup = function ($event, value) {
            this.navTabService.searchMenuItemsByTitle(value);
        };
        SidebarComponent.prototype.clickOutside = function ($event) {
            this.onHiddenNav.emit($event);
        };
        SidebarComponent.prototype.sizeChange = function () {
            var clientWidth = document.documentElement.clientWidth;
            if (clientWidth < 1170) {
                console.log('allow outside click');
                this.disableOutsideClick = false;
            }
            else {
                this.disableOutsideClick = true;
            }
        };
        SidebarComponent.prototype.ngOnDestroy = function () {
            this.unsubcrible.unsubscribe();
        };
        SidebarComponent.ctorParameters = function () { return [
            { type: mobileMoney.NavTabService },
            { type: core.ChangeDetectorRef }
        ]; };
        __decorate([
            core.Input()
        ], SidebarComponent.prototype, "beHide", void 0);
        __decorate([
            core.Output()
        ], SidebarComponent.prototype, "onHiddenNav", void 0);
        __decorate([
            core.ViewChild('input', { static: false })
        ], SidebarComponent.prototype, "inputSearch", void 0);
        __decorate([
            core.HostListener('window:resize', ['$event'])
        ], SidebarComponent.prototype, "onResize", null);
        SidebarComponent = __decorate([
            core.Component({
                selector: 'vt-sidebar',
                template: "<!-- ============================================================== -->\r\n<!-- Left Sidebar - style you can find in sidebar.scss  -->\r\n<!-- ============================================================== -->\r\n<div [@slideInOut]=\"toggleNavMenu()\" vtClickOutside (clickOutside)=\"clickOutside($event)\" [disableOutsideClick]=\"disableOutsideClick\" class=\"navbar-default sidebar\" role=\"navigation\">\r\n    <div class=\"sidebar-nav slimscrollsidebar\">\r\n        <div class=\"app-sidebar__inner\" *ngIf=\"vm$ | async as vm\">\r\n            <ul class=\"nav vertical-nav-menu\" id=\"side-menu\">\r\n                <li>\r\n                    <div class=\"search-box\">\r\n                        <input class=\"form-input ml-2 ng-pristine ng-valid ng-touched\" placeholder=\"T\u00ECm ki\u1EBFm\"\r\n                            name=\"searchTerm\" type=\"text\" #input (keyup)=\"handleKeyup($event, input.value)\">\r\n                        <span (click)=\"clearTxtSearch()\" *ngIf=\"input.value.length\" class=\"clear-search\"><img\r\n                                src=\"./assets/images/close.svg\" /></span>\r\n                    </div>\r\n\r\n                </li>\r\n                <li *ngFor=\"let item of vm; trackBy: trackByFn\" [class.active]=\"item.active\"\r\n                    [class.open]=\"item.isSelected || item.open\" menu-nav-item [txtSearch]='input.value' [item]=\"item\"\r\n                    [isOpen]=\"item.open\" [isSelected]=\"item.isSelected\">\r\n                </li>\r\n            </ul>\r\n        </div>\r\n\r\n    </div>\r\n\r\n</div>\r\n<!-- ============================================================== -->\r\n<!-- End Left Sidebar -->\r\n<!-- ============================================================== -->",
                changeDetection: core.ChangeDetectionStrategy.OnPush,
                animations: [mobileMoney.slideInOut()],
                styles: [".sidebar{scrollbar-width:thin!important;overflow-y:overlay;scrollbar-color:#d2d2d2 linear-gradient(0deg,#17adb0 0,#0952be 100%)!important}.sidebar::-webkit-scrollbar{width:7px;background:-webkit-gradient(linear,left bottom,left top,from(#17adb0),to(#0952be))}.sidebar::-webkit-scrollbar-thumb{border-radius:10px;background:rgba(255,255,255,.5);box-shadow:0 0 6px rgba(0,0,0,.5)}.clear-search{position:absolute;right:-1px;top:26px;width:20px;height:20px;cursor:pointer}.clear-search img{width:8px;height:8px;opacity:.5}.nav .open>div>a:focus,.nav .open>div>a:hover,::ng-deep.nav .open>div>a{background:rgba(255,255,255,.2)}"]
            })
        ], SidebarComponent);
        return SidebarComponent;
    }());

    var LeftSidebarModule = /** @class */ (function () {
        function LeftSidebarModule() {
        }
        LeftSidebarModule = __decorate([
            core.NgModule({
                declarations: [MenuNavItemComponent, SidebarComponent],
                imports: [
                    common.CommonModule,
                    router.RouterModule,
                    mobileMoney.SharedModule,
                ],
                exports: [SidebarComponent],
            })
        ], LeftSidebarModule);
        return LeftSidebarModule;
    }());

    var MainComponent = /** @class */ (function () {
        function MainComponent(navTabService, autoLogoutService) {
            this.navTabService = navTabService;
            this.autoLogoutService = autoLogoutService;
            if (this.autoLogoutService.getLastAction()) {
                this.autoLogoutService.check();
            }
        }
        MainComponent.prototype.ngAfterContentInit = function () {
        };
        MainComponent.prototype.closeMobileNav = function ($event) {
            $event.preventDefault();
        };
        MainComponent.prototype.clickHide = function ($event) {
            this.hide = $event;
            this.navTabService.changeSizeTab(this.hide);
        };
        MainComponent.prototype.onHiddenNav = function ($event) {
            var hamburgerBtn = document.getElementById('nav_hamburger');
            if (!hamburgerBtn.contains($event.target)) {
                this.topBar.hide = true;
                this.hide = true;
                this.navTabService.changeSizeTab(this.hide);
            }
        };
        MainComponent.ctorParameters = function () { return [
            { type: mobileMoney.NavTabService },
            { type: mobileMoney.AutoLogoutService }
        ]; };
        __decorate([
            core.ViewChild('topBar', { static: true })
        ], MainComponent.prototype, "topBar", void 0);
        MainComponent = __decorate([
            core.Component({
                selector: 'vt-main',
                template: "<div class=\"fix-header\">\r\n    <!-- ============================================================== -->\r\n    <!-- Preloader -->\r\n    <!-- ============================================================== -->\r\n\r\n    <div id=\"wrapper\">\r\n        <vt-top-bar #topBar (humberger)=\"clickHide($event)\"></vt-top-bar>\r\n        <vt-sidebar (onHiddenNav)=\"onHiddenNav($event)\" [beHide]=\"hide\"></vt-sidebar>\r\n    </div>\r\n    <!-- ============================================================== -->\r\n    <!-- Page Content -->\r\n    <!-- ============================================================== -->\r\n\r\n    <div id=\"page-wrapper\" class=\"{{hide ? 'page-wrapper-out' : 'page-wrapper'}}\">\r\n        <div class=\"container-fluid\">\r\n            <div class=\"row\">\r\n                <div id=\"main-tabs\" class=\"p-0 col-md-12 col-lg-12 col-sm-12 col-xs-12\">\r\n                    <div class=\"tab-page\">\r\n                        <vt-main-content></vt-main-content>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n            <div class=\"footer\">\r\n                <div class=\"text-center\">\r\n                    <p class=\"m-0\"><strong>\u00A9 2020</strong>\r\n                        Ph\u00E1t tri\u1EC3n b\u1EDFi <strong>Trung t\u00E2m C\u00F4ng ngh\u1EC7 - T\u1ED5ng C\u00F4ng ty D\u1ECBch v\u1EE5 s\u1ED1 </strong>\r\n                        B\u1EA3n quy\u1EC1n thu\u1ED9c <strong><a href=\"https://viettel.vn/\">T\u1EADp \u0111o\u00E0n C\u00F4ng nghi\u1EC7p - Vi\u1EC5n th\u00F4ng Qu\u00E2n \u0111\u1ED9i Viettel</a></strong></p>\r\n                </div>\r\n            </div>\r\n        </div>\r\n\r\n    </div>\r\n    <vt-loading-spinner [name]='\"root\"' [fullScreen]='true'></vt-loading-spinner>\r\n</div>\r\n\r\n<div *ngIf=\"isLoading\" class=\"spinner-container \">\r\n    <div class=\"spinner spiner-loading\">\r\n        <div class=\"spinner-border text-warning\" role=\"status\">\r\n            <span class=\"sr-only\">Loading...</span>\r\n        </div>\r\n    </div>\r\n</div>\r\n\r\n",
                changeDetection: core.ChangeDetectionStrategy.Default,
                styles: [".page-wrapper-out{margin-left:0!important;transition:350ms ease-in-out}.page-wrapper-out .footer{padding-left:15px}.page-wrapper{margin-left:300px;transition:350ms ease-in-out}@media screen and (max-width:992px){.page-wrapper,.page-wrapper-out{margin-left:0!important}}"]
            })
        ], MainComponent);
        return MainComponent;
    }());

    var TopBarComponent = /** @class */ (function () {
        function TopBarComponent(router) {
            this.router = router;
            this.humberger = new core.EventEmitter();
            this.hide = false;
        }
        TopBarComponent.prototype.ngOnInit = function () {
        };
        TopBarComponent.prototype.close = function () {
            this.hide = !this.hide;
            this.humberger.emit(this.hide);
        };
        TopBarComponent.prototype.goToHomePage = function () {
            this.router.navigateByUrl('/').then(function () { return window.location.reload(); });
        };
        TopBarComponent.prototype.reloadPage = function () {
            window.location.href = '/';
            console.log('reload');
        };
        TopBarComponent.ctorParameters = function () { return [
            { type: router.Router }
        ]; };
        __decorate([
            core.Output()
        ], TopBarComponent.prototype, "humberger", void 0);
        TopBarComponent = __decorate([
            core.Component({
                selector: 'vt-top-bar',
                template: "<!-- ============================================================== -->\r\n<!-- Topbar header - style you can find in pages.scss -->\r\n<!-- ============================================================== -->\r\n\r\n\r\n<nav class=\"navbar navbar-default navbar-static-top m-b-0\">\r\n    <div class=\"navbar-header\">\r\n        <div class=\"app-header__logo\">\r\n            <div class=\"logo-src\">\r\n                <img src=\"assets/images/logo.svg\" (click)=\"goToHomePage()\">\r\n            </div>\r\n            <div class=\"header__pane ml-auto\">\r\n                <div>\r\n                    <button id=\"nav_hamburger\" type=\"button\" (click)='close()' class=\"hamburger hamburger--elastic\">\r\n                        <span class=\"hamburger-box\">\r\n                            <span class=\"hamburger-inner\"></span>\r\n                        </span>\r\n                    </button>\r\n                </div>\r\n            </div>\r\n        </div>\r\n        <!-- /Logo -->\r\n        <div class=\"{{hide ? 'un-hidden-user' : 'hidden-user'}} nav navbar-top-links navbar-right pull-right\">\r\n            <vt-dropdown-user></vt-dropdown-user>\r\n            <vt-language-selector></vt-language-selector>\r\n        </div>\r\n        <!-- /.navbar-header -->\r\n        <!-- /.navbar-top-links -->\r\n        <!-- /.navbar-static-side -->\r\n    </div>\r\n</nav>\r\n<!-- End Top Navigation -->",
                styles: ["@media screen and (max-width:767.98px){.hidden-logo{width:0!important;transition:450ms ease-in-out}.logo-src{transition:450ms linear}.hidden-user{transform:translateY(-200px);opacity:0;transition:550ms linear}.un-hidden-user{transform:translateY(0);opacity:1;transition:550ms linear}.app-logo-none{max-width:0!important;transition:550ms linear}.app-header__logo{transition:550ms ease-in-out;justify-content:center}}.app-header__logo{width:300px}.logo-src{cursor:pointer}"]
            })
        ], TopBarComponent);
        return TopBarComponent;
    }());

    var LayoutModule = /** @class */ (function () {
        function LayoutModule() {
        }
        LayoutModule = __decorate([
            core.NgModule({
                declarations: [
                    TopBarComponent, MainContentComponent, DropdownUserComponent, MainComponent,
                ],
                imports: [
                    common.CommonModule,
                    router.RouterModule,
                    dropdown.BsDropdownModule,
                    modal.ModalModule,
                    buttons.ButtonsModule,
                    mobileMoney.SharedModule,
                    LeftSidebarModule,
                    core$1.TranslateModule,
                    forms.ReactiveFormsModule,
                ],
                exports: [DropdownUserComponent, TopBarComponent, MainContentComponent, LeftSidebarModule, MainComponent],
            })
        ], LayoutModule);
        return LayoutModule;
    }());

    var MobileMoneyLayoutModule = /** @class */ (function () {
        function MobileMoneyLayoutModule() {
        }
        MobileMoneyLayoutModule = __decorate([
            core.NgModule({
                declarations: [MobileMoneyLayoutComponent],
                imports: [
                    LayoutModule
                ],
                exports: [MobileMoneyLayoutComponent, LayoutModule]
            })
        ], MobileMoneyLayoutModule);
        return MobileMoneyLayoutModule;
    }());

    exports.DropdownUserComponent = DropdownUserComponent;
    exports.LayoutModule = LayoutModule;
    exports.LeftSidebarModule = LeftSidebarModule;
    exports.MainComponent = MainComponent;
    exports.MainContentComponent = MainContentComponent;
    exports.MenuNavItemComponent = MenuNavItemComponent;
    exports.MobileMoneyLayoutComponent = MobileMoneyLayoutComponent;
    exports.MobileMoneyLayoutModule = MobileMoneyLayoutModule;
    exports.MobileMoneyLayoutService = MobileMoneyLayoutService;
    exports.SidebarComponent = SidebarComponent;
    exports.TopBarComponent = TopBarComponent;

    Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=mobile-money-layout.umd.js.map
