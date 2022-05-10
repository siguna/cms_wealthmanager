import { __decorate, __param } from 'tslib';
import { ɵɵdefineInjectable, Injectable, Component, Inject, ViewChild, HostListener, ChangeDetectorRef, Input, EventEmitter, Output, ChangeDetectionStrategy, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { ButtonsModule } from 'ngx-bootstrap/buttons';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { ModalModule } from 'ngx-bootstrap/modal';
import { Router, ActivatedRoute, RouterModule } from '@angular/router';
import { Constants, NavTabService, APP_CONFIG_TOKEN, makeSlideInOut, opacityAnimation, AccountService, slideInOut, SharedModule, AutoLogoutService } from 'mobile-money';
import { Subject, Subscription } from 'rxjs';
import { takeUntil, delay, distinctUntilChanged } from 'rxjs/operators';
import { ReactiveFormsModule } from '@angular/forms';

let MobileMoneyLayoutService = class MobileMoneyLayoutService {
    constructor() { }
};
MobileMoneyLayoutService.ngInjectableDef = ɵɵdefineInjectable({ factory: function MobileMoneyLayoutService_Factory() { return new MobileMoneyLayoutService(); }, token: MobileMoneyLayoutService, providedIn: "root" });
MobileMoneyLayoutService = __decorate([
    Injectable({
        providedIn: 'root'
    })
], MobileMoneyLayoutService);

let MobileMoneyLayoutComponent = class MobileMoneyLayoutComponent {
    constructor() { }
    ngOnInit() {
    }
};
MobileMoneyLayoutComponent = __decorate([
    Component({
        selector: 'lib-mobile-money-layout',
        template: `
    <p>
      mobile-money-layout works!
    </p>
  `
    })
], MobileMoneyLayoutComponent);

let MainContentComponent = class MainContentComponent {
    constructor(router, route, navTabService, appConfigToken) {
        this.router = router;
        this.route = route;
        this.navTabService = navTabService;
        this.appConfigToken = appConfigToken;
        this.tabs = [];
        this.subscription = new Subject();
        this.showInTab = this.appConfigToken.appConfig.APP_CONFIG.showInTab;
        this.lengthTabHindenText = Constants.LENGTH_TAB_HIDDEN_TEXT;
        this.previousLengthTabs = 0;
        this.isRemoveTab = false;
    }
    ngOnInit() {
        this.activeTab$ = this.navTabService.getTabActiveItems();
        // data tabs change
        this.navTabService.getTabActiveItems().pipe(takeUntil(this.subscription)).subscribe((res) => {
            if (this.loadedMenu) {
                this.previousLengthTabs = this.tabs.length;
            }
            this.tabs = res;
            if (this.tabs.length) {
                this.showInTab = true;
            }
            else {
                this.showInTab = false;
            }
        });
    }
    ngAfterViewInit() {
        // track action add tab or change tab
        this.navTabService.addTabListener$.pipe(delay(100), takeUntil(this.subscription), distinctUntilChanged()).subscribe((res) => {
            let currentIndexSelectedTab = this.tabs.findIndex((tab) => tab.id === res);
            if (currentIndexSelectedTab < 0) {
                currentIndexSelectedTab = this.tabs.findIndex((tab) => tab.routerLink.includes(res));
            }
            if (currentIndexSelectedTab >= 0) {
                if (this.previousLengthTabs < this.tabs.length) {
                    // this.carousel.goToSelectedIndex(currentIndexSelectedTab, true);
                    this.tabMenu.selectTab(currentIndexSelectedTab, true);
                }
                else {
                    if (!this.isRemoveTab) {
                        // this.carousel.goToSelectedIndex(currentIndexSelectedTab, false);
                        this.tabMenu.selectTab(currentIndexSelectedTab, false);
                    }
                    else {
                        this.isRemoveTab = false;
                    }
                }
            }
        });
        this.navTabService.getLoadingStatus$().pipe(delay(200), takeUntil(this.subscription)).subscribe((res) => {
            if (res) {
                const currentUrl = this.router.url.substr(1, this.router.url.length);
                const params = this.route.snapshot.queryParams;
                const currentUrlNoParams = currentUrl.split('?')[0];
                this.navTabService.addActiveTabByUrl(currentUrlNoParams, params);
                this.loadedMenu = true;
            }
        });
    }
    onCloseTab(index) {
        this.isRemoveTab = true;
        const currentTab = this.tabs[index];
        const prevTab = Object.assign({}, this.tabs[index - 1]);
        let nextTab;
        if (this.tabs.length >= 2) {
            nextTab = Object.assign({}, this.tabs[1]);
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
    }
    spaceEvent($event) {
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
    }
    onSelectTab(index) {
        this.navTabService.tabTriggerActive(this.tabs[index]);
        // if (!this.tabs[index].matched) {
        //     this.navTabService.addActiveTab(this.tabs[index]);
        // }
    }
    getWidthTab(numTab) {
        if (numTab < 5) {
            return 5 * Constants.DEFAULT_TAB_WIDTH;
        }
        return numTab * Constants.DEFAULT_TAB_WIDTH;
    }
    prepareRoute(outlet) {
        return outlet.isActivated ? outlet.activatedRoute : '';
    }
    trackByFn(index, item) { return index; }
    ngOnDestroy() {
        this.navTabService.resetNavTab();
        this.subscription.next();
        this.subscription.complete();
    }
};
MainContentComponent.ctorParameters = () => [
    { type: Router },
    { type: ActivatedRoute },
    { type: NavTabService },
    { type: undefined, decorators: [{ type: Inject, args: [APP_CONFIG_TOKEN,] }] }
];
__decorate([
    ViewChild('tabMenu', { static: false })
], MainContentComponent.prototype, "tabMenu", void 0);
__decorate([
    HostListener('window:keydown', ['$event'])
], MainContentComponent.prototype, "spaceEvent", null);
MainContentComponent = __decorate([
    Component({
        selector: 'vt-main-content',
        template: "<div *ngIf=\"showInTab\">\r\n    <ng-container *ngIf=\"(activeTab$| async) as activeTab\">\r\n        <vt-tabs [isAllowClose]='true' (onSelectTab)=\"onSelectTab($event)\" (onCloseTab)=\"onCloseTab($event)\" *ngIf=\"activeTab.length\" #tabMenu>\r\n            <vt-tab  [title]='tab.title' [active]='tab.isSelected' *ngFor=\"let tab of activeTab;\">\r\n                <ng-container [tabId]=\"tab.id\" vtLoadTab [moduleName]=\"tab.routerLink\"></ng-container>\r\n            </vt-tab>\r\n        </vt-tabs>\r\n    </ng-container>\r\n</div>\r\n<div *ngIf=\"!showInTab\" class=\"bg-home-page\">\r\n    <div class=\"introduce\">\r\n        <div class=\"intro-text\">\r\n            <h1 class=\"intro-primary\">\r\n                <span class=\"intro-text-main\">Th\u00FAc \u0111\u1EA9ythanh to\u00E1n \u0111i\u1EC7n t\u1EED\r\n                    tr\u00EAn to\u00E0n qu\u1ED1c</span>\r\n                <span class=\"intro-text-sub\">Viettel digital</span>\r\n            </h1>\r\n            <a href=\"https://viettelpay.vn/#\" class=\"btn-home-page btn--white btn--animated\">\u0110\u0103ng K\u00ED ViettelPay</a>\r\n        </div>\r\n    </div>\r\n</div>",
        animations: [makeSlideInOut(), opacityAnimation()],
        styles: [".scroll-under-tab{max-height:calc(100vh - 110px);overflow-y:auto;scrollbar-color:#8fbc8f #dcdcdc;scrollbar-width:thin}.tab-x{display:inline-block;height:1rem;cursor:pointer;width:1rem}.tab-x img{opacity:.4;transition:transform .25s,opacity .25s}.tab-x img:hover{transform:rotate(270deg);transition:.3s ease-in-out;opacity:.8}.tabItem{width:100%;display:flex!important;white-space:nowrap;border-radius:unset!important;justify-content:space-between;align-items:center;border-right:none}.tab-item{width:255px;height:38px;padding:8px;background-color:#fff;border-top:none;border-right:none;position:relative;z-index:1}.tab-item:hover.active{transition:1s}.tab-item a{max-width:250px;color:#6f6f6f}.tab-item.active a{color:#000}.tab-item-close{right:8px;top:10px;position:absolute;border:none;font-size:23px;z-index:3;width:16px;height:16px;text-align:center;border-radius:50%;cursor:pointer}.tab-item-close:hover{background:#d8d8d8}.main-tab-outlet{position:relative;min-height:80vh;overflow:hidden;scrollbar-width:thin;padding-bottom:30px}.tab-item-close img{width:8px;height:8px;margin-bottom:4px;opacity:.6;vertical-align:super}.bg-home-page{width:100%;height:90vh;background-image:url(assets/images/homepage_bg.png);background-repeat:no-repeat;background-size:cover;overflow:hidden}.intro-text{position:absolute;top:40%;left:23%;transform:translate(-50%,-50%);text-align:center;width:40%}.intro-primary{color:#0f79b8;text-transform:uppercase;-webkit-backface-visibility:hidden;backface-visibility:hidden}.intro-text-main{display:block;font-size:1.8rem;font-weight:700;letter-spacing:.2rem;-webkit-animation-name:moveInLeft;animation-name:moveInLeft;-webkit-animation-duration:1s;animation-duration:1s;-webkit-animation-timing-function:ease-out;animation-timing-function:ease-out}.intro-text-sub{display:block;font-size:.7rem;font-weight:600;letter-spacing:.2rem;-webkit-animation:1s ease-out moveInRight;animation:1s ease-out moveInRight}.btn-home-page{text-transform:uppercase;text-decoration:none;padding:1rem;display:inline-block;border-radius:10rem;transition:.2s;position:relative;font-size:1rem;border:none;cursor:pointer}.btn-home-page::after{content:\"\";display:inline-block;height:100%;width:100%;border-radius:10rem;position:absolute;top:0;left:0;z-index:-1;transition:.4s}.btn-home-page:hover{transform:translateY(-3px);box-shadow:0 1rem 2rem rgba(0,0,0,.2)}.btn--animated{-webkit-animation:.5s ease-out .75s backwards moveInBottom;animation:.5s ease-out .75s backwards moveInBottom}.btn--white{background-color:#2284be;color:#fff}.btn--white::after{background-color:#2284be}@-webkit-keyframes moveInLeft{0%{opacity:0;transform:translateX(-10rem)}80%{transform:translateX(1rem)}100%{opacity:1;transform:translate(0)}}@keyframes moveInLeft{0%{opacity:0;transform:translateX(-10rem)}80%{transform:translateX(1rem)}100%{opacity:1;transform:translate(0)}}@-webkit-keyframes moveInRight{0%{opacity:0;transform:translateX(10rem)}80%{transform:translateX(-1rem)}100%{opacity:1;transform:translate(0)}}@keyframes moveInRight{0%{opacity:0;transform:translateX(10rem)}80%{transform:translateX(-1rem)}100%{opacity:1;transform:translate(0)}}@-webkit-keyframes moveInBottom{0%{opacity:0;transform:translateY(3rem)}100%{opacity:1;transform:translate(0)}}@keyframes moveInBottom{0%{opacity:0;transform:translateY(3rem)}100%{opacity:1;transform:translate(0)}}"]
    }),
    __param(3, Inject(APP_CONFIG_TOKEN))
], MainContentComponent);

let DropdownUserComponent = class DropdownUserComponent {
    constructor(authService, router) {
        this.authService = authService;
        this.router = router;
        this.user = this.authService.getUserToken();
    }
    ngOnInit() {
    }
    logout() {
        this.authService.vsaLogout();
        this.router.navigate(['/account/login']);
    }
    toggle() {
        this.isShowLogout = !this.isShowLogout;
    }
    outSideClick() {
        this.isShowLogout = false;
    }
    ngOnDestroy() {
    }
};
DropdownUserComponent.ctorParameters = () => [
    { type: AccountService },
    { type: Router }
];
DropdownUserComponent = __decorate([
    Component({
        // tslint:disable-next-line:component-selector
        selector: 'vt-dropdown-user',
        template: "<div *ngIf=\"user\" class=\"user\" [class.open]=\"isShowLogout\"  >\r\n  <a vtRipple ripple=\"true\" (click)=\"toggle()\" class=\"profile-pic\" href=\"javascript:void(0)\"> \r\n    <img src=\"assets/images/users/varun.jpg\" alt=\"user-img\" width=\"36\" class=\"img-circle\"></a>\r\n  <div vtClickOutside (clickOutside)=\"outSideClick()\" @slideInOut *ngIf=\"isShowLogout\" class=\"dropdown_logout\">\r\n    <a class=\" fw-500 p-2 item\" href=\"javascript:void(0)\" (click)=\"logout()\">\r\n      <span>{{'dropdownUser.logout'|translate}}</span>\r\n      <span class=\"float-right fw-n\">{{user.userInfo.userData.userName}}</span>\r\n    </a>\r\n  </div>\r\n</div>\r\n",
        animations: [makeSlideInOut()],
        styles: [".dropdown_logout{right:0;left:auto;position:absolute;top:60px;background:#ffff;border:1px solid #efefef;width:245px;padding:.5rem;box-shadow:0 3px 12px rgba(0,0,0,.05)!important}.dropdown_logout::before{content:\"\";top:-3px;right:21%;width:10px;height:10px;transform:rotateZ(45deg);background-color:#fff;position:absolute}.dropdown_logout .item{display:flex;justify-content:space-around;color:#000}.dropdown_logout .item:hover{background:#f5f5f5}.profile-pic{line-height:55px;float:right;padding:0 10px!important;margin-right:30px;margin-top:3px;border-radius:60%}.profile-pic img{margin-right:0;border-radius:50%}"]
    })
], DropdownUserComponent);

let MenuNavItemComponent = class MenuNavItemComponent {
    constructor(router, navTabService, change) {
        this.router = router;
        this.navTabService = navTabService;
        this.change = change;
        this.unsubscribe = new Subject();
        this.lenghtMenuHidden = Constants.LENGTH_MENU_HIDDEN_TEXT;
    }
    ngOnInit() {
        this.navTabService.tabTrigerActive$.pipe(takeUntil(this.unsubscribe)).subscribe((res) => {
            if (res && res.item) {
                if (res.item.id === this.item.id) {
                    // if (this.item.matched) {
                    setTimeout(() => { this.itemLink.nativeElement.click(); });
                    // } else {
                    this.navTabService.addActiveTab(this.item, res.params);
                    // }
                }
                if (res.item.parentId.length) {
                    if (res.item.parentId.findIndex((item) => item === this.item.id) > -1) {
                        setTimeout(() => {
                            if (!this.isOpen) {
                                this.onlyOpen = true;
                                this.itemToggle.nativeElement.click();
                            }
                        });
                    }
                }
            }
        });
    }
    toggleSection($event, item) {
        $event.preventDefault();
        this.navTabService.toggleMenuItems(item, item.mainMenu, this.onlyOpen);
        this.onlyOpen = false;
        this.change.detectChanges();
    }
    trackByFn(idx, item) {
        return item.title + '_' + idx;
    }
    onClick(item) {
        this.navTabService.addActiveTab(item);
        this.router.navigateByUrl(item.routerLink).catch(console.log);
    }
    ngOnDestroy() {
        this.unsubscribe.next();
        this.unsubscribe.complete();
    }
};
MenuNavItemComponent.ctorParameters = () => [
    { type: Router },
    { type: NavTabService },
    { type: ChangeDetectorRef }
];
__decorate([
    Input()
], MenuNavItemComponent.prototype, "item", void 0);
__decorate([
    Input()
], MenuNavItemComponent.prototype, "isActive", void 0);
__decorate([
    Input()
], MenuNavItemComponent.prototype, "isOpen", void 0);
__decorate([
    Input()
], MenuNavItemComponent.prototype, "isSelected", void 0);
__decorate([
    Input()
], MenuNavItemComponent.prototype, "txtSearch", void 0);
__decorate([
    ViewChild('itemLink', { static: false })
], MenuNavItemComponent.prototype, "itemLink", void 0);
__decorate([
    ViewChild('itemToggle', { static: false })
], MenuNavItemComponent.prototype, "itemToggle", void 0);
MenuNavItemComponent = __decorate([
    Component({
        // tslint:disable-next-line:component-selector
        selector: '[menu-nav-item]',
        template: "<div [hidden]=\"item.matched === false\">\r\n    <ng-container *ngIf=\"(item.items && item.items.length > 0)\">\r\n        <a #itemToggle class=\"hasChild menu-link\"\r\n            (click)=\"toggleSection($event, item)\">\r\n            <img class=\"metismenu-icon\" src=\"assets/images/{{ item.icon ?  item.icon : 'ic_function.svg' }}\">\r\n            <span vtTooltip [titleTooltip]='item.title' [posision]=\"'right'\" [isShow]='item.title.length >= (lenghtMenuHidden -(item.parentId ? item.parentId.length : 0)*2)'\r\n                 [vtHighlight]='txtSearch' [textDisplay]='item.title' [maxLengtTxt]=\"(lenghtMenuHidden - (item.parentId ? item.parentId.length : 0)*2)\"> {{ item.title}}</span>\r\n                 <i ><img class=\"{{ isOpen ? 'chevron-down-animate' : 'chevron-up-animate' }} arrow-items\" src=\"assets/images/next.svg\" /></i>\r\n        </a>\r\n        <ul @slideInOut *ngIf=\"isOpen\" class=\"d-block ov-h\">\r\n            <li menu-nav-item [txtSearch]='txtSearch' [class.open]=\"child.isSelected || (child.open && child.items.length)\" [isSelected]=\"child.isSelected\"\r\n                [isOpen]=\"child.open\" *ngFor=\"let child of item.items; trackBy: trackByFn\" [item]=\"child\">\r\n            </li>\r\n        </ul>\r\n    </ng-container>\r\n    <ng-container *ngIf=\"(!item.items || item.items.length == 0) && item.routerLink\">\r\n        <a #itemLink class=\"menu-link\"\r\n            (click)=\"onClick(item)\">\r\n            <img class=\"metismenu-icon\" src=\"assets/images/{{ item.icon ?  item.icon : 'ic_function.svg' }}\">\r\n            <span vtTooltip [titleTooltip]='item.title' [posision]=\"'right'\" [isShow]='item.title.length > (lenghtMenuHidden - (item.parentId ? item.parentId.length : 0)*2)'\r\n            [vtHighlight]='txtSearch' [textDisplay]='item.title' [maxLengtTxt]=\"(lenghtMenuHidden - (item.parentId ? item.parentId.length : 0)*2) \"> {{ item.title}}</span>\r\n        </a>\r\n    </ng-container>\r\n</div>",
        animations: [makeSlideInOut()],
        styles: [".menu-link{text-overflow:ellipsis;overflow:hidden}"]
    })
], MenuNavItemComponent);

let SidebarComponent = class SidebarComponent {
    constructor(navTabService, change) {
        this.navTabService = navTabService;
        this.change = change;
        this.sideNavOpen = 'in';
        // tslint:disable-next-line:no-output-on-prefix
        this.onHiddenNav = new EventEmitter();
        this.unsubcrible = new Subscription();
        this.disableOutsideClick = true;
    }
    onResize(event) {
        this.sizeChange();
    }
    ngOnInit() {
        this.sizeChange();
        this.vm$ = this.navTabService.getMenuItems();
        this.navTabService.loadMenuItems();
        this.unsubcrible = this.navTabService.getMenuItems().subscribe((res) => {
            if (this.change && !this.change.destroyed) {
                this.change.detectChanges();
            }
        });
    }
    trackByFn(idx, item) {
        return item.title + '_' + idx;
    }
    clearTxtSearch() {
        this.inputSearch.nativeElement.value = '';
        this.navTabService.searchMenuItemsByTitle('');
    }
    /**
     * animation navside
     * @author phongnv
     */
    toggleNavMenu() {
        return this.beHide ? 'out' : 'in';
    }
    handleKeyup($event, value) {
        this.navTabService.searchMenuItemsByTitle(value);
    }
    clickOutside($event) {
        this.onHiddenNav.emit($event);
    }
    sizeChange() {
        const clientWidth = document.documentElement.clientWidth;
        if (clientWidth < 1170) {
            console.log('allow outside click');
            this.disableOutsideClick = false;
        }
        else {
            this.disableOutsideClick = true;
        }
    }
    ngOnDestroy() {
        this.unsubcrible.unsubscribe();
    }
};
SidebarComponent.ctorParameters = () => [
    { type: NavTabService },
    { type: ChangeDetectorRef }
];
__decorate([
    Input()
], SidebarComponent.prototype, "beHide", void 0);
__decorate([
    Output()
], SidebarComponent.prototype, "onHiddenNav", void 0);
__decorate([
    ViewChild('input', { static: false })
], SidebarComponent.prototype, "inputSearch", void 0);
__decorate([
    HostListener('window:resize', ['$event'])
], SidebarComponent.prototype, "onResize", null);
SidebarComponent = __decorate([
    Component({
        selector: 'vt-sidebar',
        template: "<!-- ============================================================== -->\r\n<!-- Left Sidebar - style you can find in sidebar.scss  -->\r\n<!-- ============================================================== -->\r\n<div [@slideInOut]=\"toggleNavMenu()\" vtClickOutside (clickOutside)=\"clickOutside($event)\" [disableOutsideClick]=\"disableOutsideClick\" class=\"navbar-default sidebar\" role=\"navigation\">\r\n    <div class=\"sidebar-nav slimscrollsidebar\">\r\n        <div class=\"app-sidebar__inner\" *ngIf=\"vm$ | async as vm\">\r\n            <ul class=\"nav vertical-nav-menu\" id=\"side-menu\">\r\n                <li>\r\n                    <div class=\"search-box\">\r\n                        <input class=\"form-input ml-2 ng-pristine ng-valid ng-touched\" placeholder=\"T\u00ECm ki\u1EBFm\"\r\n                            name=\"searchTerm\" type=\"text\" #input (keyup)=\"handleKeyup($event, input.value)\">\r\n                        <span (click)=\"clearTxtSearch()\" *ngIf=\"input.value.length\" class=\"clear-search\"><img\r\n                                src=\"./assets/images/close.svg\" /></span>\r\n                    </div>\r\n\r\n                </li>\r\n                <li *ngFor=\"let item of vm; trackBy: trackByFn\" [class.active]=\"item.active\"\r\n                    [class.open]=\"item.isSelected || item.open\" menu-nav-item [txtSearch]='input.value' [item]=\"item\"\r\n                    [isOpen]=\"item.open\" [isSelected]=\"item.isSelected\">\r\n                </li>\r\n            </ul>\r\n        </div>\r\n\r\n    </div>\r\n\r\n</div>\r\n<!-- ============================================================== -->\r\n<!-- End Left Sidebar -->\r\n<!-- ============================================================== -->",
        changeDetection: ChangeDetectionStrategy.OnPush,
        animations: [slideInOut()],
        styles: [".sidebar{scrollbar-width:thin!important;overflow-y:overlay;scrollbar-color:#d2d2d2 linear-gradient(0deg,#17adb0 0,#0952be 100%)!important}.sidebar::-webkit-scrollbar{width:7px;background:-webkit-gradient(linear,left bottom,left top,from(#17adb0),to(#0952be))}.sidebar::-webkit-scrollbar-thumb{border-radius:10px;background:rgba(255,255,255,.5);box-shadow:0 0 6px rgba(0,0,0,.5)}.clear-search{position:absolute;right:-1px;top:26px;width:20px;height:20px;cursor:pointer}.clear-search img{width:8px;height:8px;opacity:.5}.nav .open>div>a:focus,.nav .open>div>a:hover,::ng-deep.nav .open>div>a{background:rgba(255,255,255,.2)}"]
    })
], SidebarComponent);

let LeftSidebarModule = class LeftSidebarModule {
};
LeftSidebarModule = __decorate([
    NgModule({
        declarations: [MenuNavItemComponent, SidebarComponent],
        imports: [
            CommonModule,
            RouterModule,
            SharedModule,
        ],
        exports: [SidebarComponent],
    })
], LeftSidebarModule);

let MainComponent = class MainComponent {
    constructor(navTabService, autoLogoutService) {
        this.navTabService = navTabService;
        this.autoLogoutService = autoLogoutService;
        if (this.autoLogoutService.getLastAction()) {
            this.autoLogoutService.check();
        }
    }
    ngAfterContentInit() {
    }
    closeMobileNav($event) {
        $event.preventDefault();
    }
    clickHide($event) {
        this.hide = $event;
        this.navTabService.changeSizeTab(this.hide);
    }
    onHiddenNav($event) {
        const hamburgerBtn = document.getElementById('nav_hamburger');
        if (!hamburgerBtn.contains($event.target)) {
            this.topBar.hide = true;
            this.hide = true;
            this.navTabService.changeSizeTab(this.hide);
        }
    }
};
MainComponent.ctorParameters = () => [
    { type: NavTabService },
    { type: AutoLogoutService }
];
__decorate([
    ViewChild('topBar', { static: true })
], MainComponent.prototype, "topBar", void 0);
MainComponent = __decorate([
    Component({
        selector: 'vt-main',
        template: "<div class=\"fix-header\">\r\n    <!-- ============================================================== -->\r\n    <!-- Preloader -->\r\n    <!-- ============================================================== -->\r\n\r\n    <div id=\"wrapper\">\r\n        <vt-top-bar #topBar (humberger)=\"clickHide($event)\"></vt-top-bar>\r\n        <vt-sidebar (onHiddenNav)=\"onHiddenNav($event)\" [beHide]=\"hide\"></vt-sidebar>\r\n    </div>\r\n    <!-- ============================================================== -->\r\n    <!-- Page Content -->\r\n    <!-- ============================================================== -->\r\n\r\n    <div id=\"page-wrapper\" class=\"{{hide ? 'page-wrapper-out' : 'page-wrapper'}}\">\r\n        <div class=\"container-fluid\">\r\n            <div class=\"row\">\r\n                <div id=\"main-tabs\" class=\"p-0 col-md-12 col-lg-12 col-sm-12 col-xs-12\">\r\n                    <div class=\"tab-page\">\r\n                        <vt-main-content></vt-main-content>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n            <div class=\"footer\">\r\n                <div class=\"text-center\">\r\n                    <p class=\"m-0\"><strong>\u00A9 2020</strong>\r\n                        Ph\u00E1t tri\u1EC3n b\u1EDFi <strong>Trung t\u00E2m C\u00F4ng ngh\u1EC7 - T\u1ED5ng C\u00F4ng ty D\u1ECBch v\u1EE5 s\u1ED1 </strong>\r\n                        B\u1EA3n quy\u1EC1n thu\u1ED9c <strong><a href=\"https://viettel.vn/\">T\u1EADp \u0111o\u00E0n C\u00F4ng nghi\u1EC7p - Vi\u1EC5n th\u00F4ng Qu\u00E2n \u0111\u1ED9i Viettel</a></strong></p>\r\n                </div>\r\n            </div>\r\n        </div>\r\n\r\n    </div>\r\n    <vt-loading-spinner [name]='\"root\"' [fullScreen]='true'></vt-loading-spinner>\r\n</div>\r\n\r\n<div *ngIf=\"isLoading\" class=\"spinner-container \">\r\n    <div class=\"spinner spiner-loading\">\r\n        <div class=\"spinner-border text-warning\" role=\"status\">\r\n            <span class=\"sr-only\">Loading...</span>\r\n        </div>\r\n    </div>\r\n</div>\r\n\r\n",
        changeDetection: ChangeDetectionStrategy.Default,
        styles: [".page-wrapper-out{margin-left:0!important;transition:350ms ease-in-out}.page-wrapper-out .footer{padding-left:15px}.page-wrapper{margin-left:300px;transition:350ms ease-in-out}@media screen and (max-width:992px){.page-wrapper,.page-wrapper-out{margin-left:0!important}}"]
    })
], MainComponent);

let TopBarComponent = class TopBarComponent {
    constructor(router) {
        this.router = router;
        this.humberger = new EventEmitter();
        this.hide = false;
    }
    ngOnInit() {
    }
    close() {
        this.hide = !this.hide;
        this.humberger.emit(this.hide);
    }
    goToHomePage() {
        this.router.navigateByUrl('/').then(() => window.location.reload());
    }
    reloadPage() {
        window.location.href = '/';
        console.log('reload');
    }
};
TopBarComponent.ctorParameters = () => [
    { type: Router }
];
__decorate([
    Output()
], TopBarComponent.prototype, "humberger", void 0);
TopBarComponent = __decorate([
    Component({
        selector: 'vt-top-bar',
        template: "<!-- ============================================================== -->\r\n<!-- Topbar header - style you can find in pages.scss -->\r\n<!-- ============================================================== -->\r\n\r\n\r\n<nav class=\"navbar navbar-default navbar-static-top m-b-0\">\r\n    <div class=\"navbar-header\">\r\n        <div class=\"app-header__logo\">\r\n            <div class=\"logo-src\">\r\n                <img src=\"assets/images/logo.svg\" (click)=\"goToHomePage()\">\r\n            </div>\r\n            <div class=\"header__pane ml-auto\">\r\n                <div>\r\n                    <button id=\"nav_hamburger\" type=\"button\" (click)='close()' class=\"hamburger hamburger--elastic\">\r\n                        <span class=\"hamburger-box\">\r\n                            <span class=\"hamburger-inner\"></span>\r\n                        </span>\r\n                    </button>\r\n                </div>\r\n            </div>\r\n        </div>\r\n        <!-- /Logo -->\r\n        <div class=\"{{hide ? 'un-hidden-user' : 'hidden-user'}} nav navbar-top-links navbar-right pull-right\">\r\n            <vt-dropdown-user></vt-dropdown-user>\r\n            <vt-language-selector></vt-language-selector>\r\n        </div>\r\n        <!-- /.navbar-header -->\r\n        <!-- /.navbar-top-links -->\r\n        <!-- /.navbar-static-side -->\r\n    </div>\r\n</nav>\r\n<!-- End Top Navigation -->",
        styles: ["@media screen and (max-width:767.98px){.hidden-logo{width:0!important;transition:450ms ease-in-out}.logo-src{transition:450ms linear}.hidden-user{transform:translateY(-200px);opacity:0;transition:550ms linear}.un-hidden-user{transform:translateY(0);opacity:1;transition:550ms linear}.app-logo-none{max-width:0!important;transition:550ms linear}.app-header__logo{transition:550ms ease-in-out;justify-content:center}}.app-header__logo{width:300px}.logo-src{cursor:pointer}"]
    })
], TopBarComponent);

let LayoutModule = class LayoutModule {
};
LayoutModule = __decorate([
    NgModule({
        declarations: [
            TopBarComponent, MainContentComponent, DropdownUserComponent, MainComponent,
        ],
        imports: [
            CommonModule,
            RouterModule,
            BsDropdownModule,
            ModalModule,
            ButtonsModule,
            SharedModule,
            LeftSidebarModule,
            TranslateModule,
            ReactiveFormsModule,
        ],
        exports: [DropdownUserComponent, TopBarComponent, MainContentComponent, LeftSidebarModule, MainComponent],
    })
], LayoutModule);

let MobileMoneyLayoutModule = class MobileMoneyLayoutModule {
};
MobileMoneyLayoutModule = __decorate([
    NgModule({
        declarations: [MobileMoneyLayoutComponent],
        imports: [
            LayoutModule
        ],
        exports: [MobileMoneyLayoutComponent, LayoutModule]
    })
], MobileMoneyLayoutModule);

/*
 * Public API Surface of mobile-money-layout
 */

/**
 * Generated bundle index. Do not edit.
 */

export { DropdownUserComponent, LayoutModule, LeftSidebarModule, MainComponent, MainContentComponent, MenuNavItemComponent, MobileMoneyLayoutComponent, MobileMoneyLayoutModule, MobileMoneyLayoutService, SidebarComponent, TopBarComponent };
//# sourceMappingURL=mobile-money-layout.js.map
