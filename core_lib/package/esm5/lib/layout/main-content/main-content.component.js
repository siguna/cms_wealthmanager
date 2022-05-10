import * as tslib_1 from "tslib";
import { Component, HostListener, Inject, ViewChild } from '@angular/core';
import { ActivatedRoute, Router, RouterOutlet } from '@angular/router';
import { APP_CONFIG_TOKEN, Constants, makeSlideInOut, NavTabService, opacityAnimation, TabsComponent } from 'mobile-money';
import { Subject } from 'rxjs';
import { delay, distinctUntilChanged, takeUntil } from 'rxjs/operators';
var MainContentComponent = /** @class */ (function () {
    function MainContentComponent(router, route, navTabService, appConfigToken) {
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
    MainContentComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.activeTab$ = this.navTabService.getTabActiveItems();
        // data tabs change
        this.navTabService.getTabActiveItems().pipe(takeUntil(this.subscription)).subscribe(function (res) {
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
        this.navTabService.addTabListener$.pipe(delay(100), takeUntil(this.subscription), distinctUntilChanged()).subscribe(function (res) {
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
        this.navTabService.getLoadingStatus$().pipe(delay(200), takeUntil(this.subscription)).subscribe(function (res) {
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
        var prevTab = tslib_1.__assign({}, this.tabs[index - 1]);
        var nextTab;
        if (this.tabs.length >= 2) {
            nextTab = tslib_1.__assign({}, this.tabs[1]);
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
            return 5 * Constants.DEFAULT_TAB_WIDTH;
        }
        return numTab * Constants.DEFAULT_TAB_WIDTH;
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
        { type: Router },
        { type: ActivatedRoute },
        { type: NavTabService },
        { type: undefined, decorators: [{ type: Inject, args: [APP_CONFIG_TOKEN,] }] }
    ]; };
    tslib_1.__decorate([
        ViewChild('tabMenu', { static: false })
    ], MainContentComponent.prototype, "tabMenu", void 0);
    tslib_1.__decorate([
        HostListener('window:keydown', ['$event'])
    ], MainContentComponent.prototype, "spaceEvent", null);
    MainContentComponent = tslib_1.__decorate([
        Component({
            selector: 'vt-main-content',
            template: "<div *ngIf=\"showInTab\">\r\n    <ng-container *ngIf=\"(activeTab$| async) as activeTab\">\r\n        <vt-tabs [isAllowClose]='true' (onSelectTab)=\"onSelectTab($event)\" (onCloseTab)=\"onCloseTab($event)\" *ngIf=\"activeTab.length\" #tabMenu>\r\n            <vt-tab  [title]='tab.title' [active]='tab.isSelected' *ngFor=\"let tab of activeTab;\">\r\n                <ng-container [tabId]=\"tab.id\" vtLoadTab [moduleName]=\"tab.routerLink\"></ng-container>\r\n            </vt-tab>\r\n        </vt-tabs>\r\n    </ng-container>\r\n</div>\r\n<div *ngIf=\"!showInTab\" class=\"bg-home-page\">\r\n    <div class=\"introduce\">\r\n        <div class=\"intro-text\">\r\n            <h1 class=\"intro-primary\">\r\n                <span class=\"intro-text-main\">Th\u00FAc \u0111\u1EA9ythanh to\u00E1n \u0111i\u1EC7n t\u1EED\r\n                    tr\u00EAn to\u00E0n qu\u1ED1c</span>\r\n                <span class=\"intro-text-sub\">Viettel digital</span>\r\n            </h1>\r\n            <a href=\"https://viettelpay.vn/#\" class=\"btn-home-page btn--white btn--animated\">\u0110\u0103ng K\u00ED ViettelPay</a>\r\n        </div>\r\n    </div>\r\n</div>",
            animations: [makeSlideInOut(), opacityAnimation()],
            styles: [".scroll-under-tab{max-height:calc(100vh - 110px);overflow-y:auto;scrollbar-color:#8fbc8f #dcdcdc;scrollbar-width:thin}.tab-x{display:inline-block;height:1rem;cursor:pointer;width:1rem}.tab-x img{opacity:.4;transition:transform .25s,opacity .25s}.tab-x img:hover{transform:rotate(270deg);transition:.3s ease-in-out;opacity:.8}.tabItem{width:100%;display:flex!important;white-space:nowrap;border-radius:unset!important;justify-content:space-between;align-items:center;border-right:none}.tab-item{width:255px;height:38px;padding:8px;background-color:#fff;border-top:none;border-right:none;position:relative;z-index:1}.tab-item:hover.active{transition:1s}.tab-item a{max-width:250px;color:#6f6f6f}.tab-item.active a{color:#000}.tab-item-close{right:8px;top:10px;position:absolute;border:none;font-size:23px;z-index:3;width:16px;height:16px;text-align:center;border-radius:50%;cursor:pointer}.tab-item-close:hover{background:#d8d8d8}.main-tab-outlet{position:relative;min-height:80vh;overflow:hidden;scrollbar-width:thin;padding-bottom:30px}.tab-item-close img{width:8px;height:8px;margin-bottom:4px;opacity:.6;vertical-align:super}.bg-home-page{width:100%;height:90vh;background-image:url(assets/images/homepage_bg.png);background-repeat:no-repeat;background-size:cover;overflow:hidden}.intro-text{position:absolute;top:40%;left:23%;transform:translate(-50%,-50%);text-align:center;width:40%}.intro-primary{color:#0f79b8;text-transform:uppercase;-webkit-backface-visibility:hidden;backface-visibility:hidden}.intro-text-main{display:block;font-size:1.8rem;font-weight:700;letter-spacing:.2rem;-webkit-animation-name:moveInLeft;animation-name:moveInLeft;-webkit-animation-duration:1s;animation-duration:1s;-webkit-animation-timing-function:ease-out;animation-timing-function:ease-out}.intro-text-sub{display:block;font-size:.7rem;font-weight:600;letter-spacing:.2rem;-webkit-animation:1s ease-out moveInRight;animation:1s ease-out moveInRight}.btn-home-page{text-transform:uppercase;text-decoration:none;padding:1rem;display:inline-block;border-radius:10rem;transition:.2s;position:relative;font-size:1rem;border:none;cursor:pointer}.btn-home-page::after{content:\"\";display:inline-block;height:100%;width:100%;border-radius:10rem;position:absolute;top:0;left:0;z-index:-1;transition:.4s}.btn-home-page:hover{transform:translateY(-3px);box-shadow:0 1rem 2rem rgba(0,0,0,.2)}.btn--animated{-webkit-animation:.5s ease-out .75s backwards moveInBottom;animation:.5s ease-out .75s backwards moveInBottom}.btn--white{background-color:#2284be;color:#fff}.btn--white::after{background-color:#2284be}@-webkit-keyframes moveInLeft{0%{opacity:0;transform:translateX(-10rem)}80%{transform:translateX(1rem)}100%{opacity:1;transform:translate(0)}}@keyframes moveInLeft{0%{opacity:0;transform:translateX(-10rem)}80%{transform:translateX(1rem)}100%{opacity:1;transform:translate(0)}}@-webkit-keyframes moveInRight{0%{opacity:0;transform:translateX(10rem)}80%{transform:translateX(-1rem)}100%{opacity:1;transform:translate(0)}}@keyframes moveInRight{0%{opacity:0;transform:translateX(10rem)}80%{transform:translateX(-1rem)}100%{opacity:1;transform:translate(0)}}@-webkit-keyframes moveInBottom{0%{opacity:0;transform:translateY(3rem)}100%{opacity:1;transform:translate(0)}}@keyframes moveInBottom{0%{opacity:0;transform:translateY(3rem)}100%{opacity:1;transform:translate(0)}}"]
        }),
        tslib_1.__param(3, Inject(APP_CONFIG_TOKEN))
    ], MainContentComponent);
    return MainContentComponent;
}());
export { MainContentComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi1jb250ZW50LmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL21vYmlsZS1tb25leS1sYXlvdXQvIiwic291cmNlcyI6WyJsaWIvbGF5b3V0L21haW4tY29udGVudC9tYWluLWNvbnRlbnQuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQWlCLFNBQVMsRUFBRSxZQUFZLEVBQUUsTUFBTSxFQUFxQixTQUFTLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDN0csT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLEVBQUUsWUFBWSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDdkUsT0FBTyxFQUFFLGdCQUFnQixFQUFFLFNBQVMsRUFBRSxjQUFjLEVBQUUsYUFBYSxFQUFFLGdCQUFnQixFQUFFLGFBQWEsRUFBRSxNQUFNLGNBQWMsQ0FBQztBQUUzSCxPQUFPLEVBQWMsT0FBTyxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBQzNDLE9BQU8sRUFBRSxLQUFLLEVBQUUsb0JBQW9CLEVBQUUsU0FBUyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFVeEU7SUFjSSw4QkFBb0IsTUFBYyxFQUFVLEtBQXFCLEVBQVUsYUFBNEIsRUFDekQsY0FBYztRQUR4QyxXQUFNLEdBQU4sTUFBTSxDQUFRO1FBQVUsVUFBSyxHQUFMLEtBQUssQ0FBZ0I7UUFBVSxrQkFBYSxHQUFiLGFBQWEsQ0FBZTtRQUN6RCxtQkFBYyxHQUFkLGNBQWMsQ0FBQTtRQVpyRCxTQUFJLEdBQVUsRUFBRSxDQUFDO1FBRWpCLGlCQUFZLEdBQWlCLElBQUksT0FBTyxFQUFFLENBQUM7UUFFM0MsY0FBUyxHQUFHLElBQUksQ0FBQyxjQUFjLENBQUMsU0FBUyxDQUFDLFVBQVUsQ0FBQyxTQUFTLENBQUM7UUFDL0Qsd0JBQW1CLEdBQUcsU0FBUyxDQUFDLHNCQUFzQixDQUFDO1FBQ3ZELHVCQUFrQixHQUFHLENBQUMsQ0FBQztRQUd2QixnQkFBVyxHQUFHLEtBQUssQ0FBQztJ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QyxJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxNQUFNLElBQUksTUFBTSxDQUFDLEdBQUcsS0FBSyxHQUFHLENBQUMsRUFBRTtZQUNqRSxJQUFJLENBQUMsTUFBTSxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLFVBQVUsQ0FBQyxDQUFDO1NBQ3REO1FBQ0QsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLE1BQU0sSUFBSSxNQUFNLENBQUMsR0FBRyxLQUFLLEdBQUcsQ0FBQyxFQUFFO1lBQ2pFLElBQUksQ0FBQyxNQUFNLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsVUFBVSxDQUFDLENBQUM7U0FDdEQ7UUFDRCxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsTUFBTSxJQUFJLE1BQU0sQ0FBQyxHQUFHLEtBQUssR0FBRyxDQUFDLEVBQUU7WUFDakUsSUFBSSxDQUFDLE1BQU0sQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxVQUFVLENBQUMsQ0FBQztTQUN0RDtRQUNELElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxNQUFNLElBQUksTUFBTSxDQUFDLEdBQUcsS0FBSyxHQUFHLENBQUMsRUFBRTtZQUNqRSxJQUFJLENBQUMsTUFBTSxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLFVBQVUsQ0FBQyxDQUFDO1NBQ3REO1FBQ0QsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUMs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QUFDLENBQUE7T0FmNUIsb0JBQW9CLENBMkpoQztJQUFELDJCQUFDO0NBQUEsQUEzSkQsSUEySkM7U0EzSlksb0JBQW9CIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQWZ0ZXJWaWV3SW5pdCwgQ29tcG9uZW50LCBIb3N0TGlzdGVuZXIsIEluamVjdCwgT25EZXN0cm95LCBPbkluaXQsIFZpZXdDaGlsZCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBBY3RpdmF0ZWRSb3V0ZSwgUm91dGVyLCBSb3V0ZXJPdXRsZXQgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xyXG5pbXBvcnQgeyBBUFBfQ09ORklHX1RPS0VOLCBDb25zdGFudHMsIG1ha2VTbGlkZUluT3V0LCBOYXZUYWJTZXJ2aWNlLCBvcGFjaXR5QW5pbWF0aW9uLCBUYWJzQ29tcG9uZW50IH0gZnJvbSAnbW9iaWxlLW1vbmV5JztcclxuaW1wb3J0IHsgTmF2aWdhdGlvbkl0ZW0gfSBmcm9tICdtb2JpbGUtbW9uZXkvbGliL3NoYXJlZC9jb21tb24vbmF2LXRhYi9zdG9yZS9uYXZpZ2F0aW9uLXRhYic7XHJcbmltcG9ydCB7IE9ic2VydmFibGUsIFN1YmplY3QgfSBmcm9tICdyeGpzJztcclxuaW1wb3J0IHsgZGVsYXksIGRpc3RpbmN0VW50aWxDaGFuZ2VkLCB0YWtlVW50aWwgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XHJcblxyXG5kZWNsYXJlIHZhciAkOiBhbnk7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICAgIHNlbGVjdG9yOiAndnQtbWFpbi1jb250ZW50JyxcclxuICAgIHRlbXBsYXRlVXJsOiAnLi9tYWluLWNvbnRlbnQuY29tcG9uZW50Lmh0bWwnLFxyXG4gICAgc3R5bGVVcmxzOiBbJy4vbWFpbi1jb250ZW50LmNvbXBvbmVudC5zY3NzJ10sXHJcbiAgICBhbmltYXRpb25zOiBbbWFrZVNsaWRlSW5PdXQoKSwgb3BhY2l0eUFuaW1hdGlvbigpXSxcclxufSlcclxuZXhwb3J0IGNsYXNzIE1haW5Db250ZW50Q29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0LCBPbkRlc3Ryb3ksIEFmdGVyVmlld0luaXQge1xyXG4gICAgLy8gQFZpZXdDaGlsZCgnY2Fyb3VzZWwnLCB7IHN0YXRpYzogZmFsc2UgfSkgcHVibGljIGNhcm91c2VsOiBDYXJvdXNlbENvbXBvbmVudDtcclxuICAgIEBWaWV3Q2hpbGQoJ3RhYk1lbnUnLCB7IHN0YXRpYzogZmFsc2UgfSkgcHVibGljIHRhYk1lbnU6IFRhYnNDb21wb25lbnQ7XHJcbiAgICBwdWJsaWMgdGFiczogYW55W10gPSBbXTtcclxuICAgIHB1YmxpYyBhY3RpdmVUYWIkOiBPYnNlcnZhYmxlPE5hdmlnYXRpb25JdGVtW10+O1xyXG4gICAgcHVibGljIHN1YnNjcmlwdGlvbjogU3ViamVjdDxhbnk+ID0gbmV3IFN1YmplY3QoKTtcclxuXHJcbiAgICBwdWJsaWMgc2hvd0luVGFiID0gdGhpcy5hcHBDb25maWdUb2tlbi5hcHBDb25maWcuQVBQX0NPTkZJRy5zaG93SW5UYWI7XHJcbiAgICBwdWJsaWMgbGVuZ3RoVGFiSGluZGVuVGV4dCA9IENvbnN0YW50cy5MRU5HVEhfVEFCX0hJRERFTl9URVhUO1xyXG4gICAgcHVibGljIHByZXZpb3VzTGVuZ3RoVGFicyA9IDA7XHJcblxyXG4gICAgcHVibGljIGxvYWRlZE1lbnU6IGJvb2xlYW47XHJcbiAgICBwdWJsaWMgaXNSZW1vdmVUYWIgPSBmYWxzZTtcclxuXHJcbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIHJvdXRlcjogUm91dGVyLCBwcml2YXRlIHJvdXRlOiBBY3RpdmF0ZWRSb3V0ZSwgcHJpdmF0ZSBuYXZUYWJTZXJ2aWNlOiBOYXZUYWJTZXJ2aWNlLFxyXG4gICAgICAgICAgICAgICAgQEluamVjdChBUFBfQ09ORklHX1RPS0VOKSBwcml2YXRlIGFwcENvbmZpZ1Rva2VuKSB7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIG5nT25Jbml0KCkge1xyXG4gICAgICAgIHRoaXMuYWN0aXZlVGFiJCA9IHRoaXMubmF2VGFiU2VydmljZS5nZXRUYWJBY3RpdmVJdGVtcygpO1xyXG5cclxuICAgICAgICAvLyBkYXRhIHRhYnMgY2hhbmdlXHJcbiAgICAgICAgdGhpcy5uYXZUYWJTZXJ2aWNlLmdldFRhYkFjdGl2ZUl0ZW1zKCkucGlwZSh0YWtlVW50aWwodGhpcy5zdWJzY3JpcHRpb24pKS5zdWJzY3JpYmUoKHJlcykgPT4ge1xyXG4gICAgICAgICAgICBpZiAodGhpcy5sb2FkZWRNZW51KSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnByZXZpb3VzTGVuZ3RoVGFicyA9IHRoaXMudGFicy5sZW5ndGg7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgdGhpcy50YWJzID0gcmVzO1xyXG4gICAgICAgICAgICBpZiAodGhpcy50YWJzLmxlbmd0aCkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5zaG93SW5UYWIgPSB0cnVlO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5zaG93SW5UYWIgPSBmYWxzZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBuZ0FmdGVyVmlld0luaXQoKTogdm9pZCB7XHJcbiAgICAgICAgLy8gdHJhY2sgYWN0aW9uIGFkZCB0YWIgb3IgY2hhbmdlIHRhYlxyXG4gICAgICAgIHRoaXMubmF2VGFiU2VydmljZS5hZGRUYWJMaXN0ZW5lciQucGlwZShkZWxheSgxMDApLCB0YWtlVW50aWwodGhpcy5zdWJzY3JpcHRpb24pLCBkaXN0aW5jdFVudGlsQ2hhbmdlZCgpKS5zdWJzY3JpYmUoKHJlcykgPT4ge1xyXG4gICAgICAgICAgICBsZXQgY3VycmVudEluZGV4U2VsZWN0ZWRUYWIgPSB0aGlzLnRhYnMuZmluZEluZGV4KCh0YWIpID0+IHRhYi5pZCA9PT0gcmVzKTtcclxuICAgICAgICAgICAgaWYgKGN1cnJlbnRJbmRleFNlbGVjdGVkVGFiIDwgMCkge1xyXG4gICAgICAgICAgICAgICAgY3VycmVudEluZGV4U2VsZWN0ZWRUYWIgPSB0aGlzLnRhYnMuZmluZEluZGV4KCh0YWIpID0+IHRhYi5yb3V0ZXJMaW5rLmluY2x1ZGVzKHJlcykpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmIChjdXJyZW50SW5kZXhTZWxlY3RlZFRhYiA+PSAwKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5wcmV2aW91c0xlbmd0aFRhYnMgPCB0aGlzLnRhYnMubGVuZ3RoKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gdGhpcy5jYXJvdXNlbC5nb1RvU2VsZWN0ZWRJbmRleChjdXJyZW50SW5kZXhTZWxlY3RlZFRhYiwgdHJ1ZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy50YWJNZW51LnNlbGVjdFRhYihjdXJyZW50SW5kZXhTZWxlY3RlZFRhYiwgdHJ1ZSk7XHJcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmICghdGhpcy5pc1JlbW92ZVRhYikge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyB0aGlzLmNhcm91c2VsLmdvVG9TZWxlY3RlZEluZGV4KGN1cnJlbnRJbmRleFNlbGVjdGVkVGFiLCBmYWxzZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMudGFiTWVudS5zZWxlY3RUYWIoY3VycmVudEluZGV4U2VsZWN0ZWRUYWIsIGZhbHNlKTtcclxuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmlzUmVtb3ZlVGFiID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgdGhpcy5uYXZUYWJTZXJ2aWNlLmdldExvYWRpbmdTdGF0dXMkKCkucGlwZShkZWxheSgyMDApLCB0YWtlVW50aWwodGhpcy5zdWJzY3JpcHRpb24pKS5zdWJzY3JpYmUoKHJlcykgPT4ge1xyXG4gICAgICAgICAgICBpZiAocmVzKSB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBjdXJyZW50VXJsID0gdGhpcy5yb3V0ZXIudXJsLnN1YnN0cigxLCB0aGlzLnJvdXRlci51cmwubGVuZ3RoKTtcclxuICAgICAgICAgICAgICAgIGNvbnN0IHBhcmFtcyA9IHRoaXMucm91dGUuc25hcHNob3QucXVlcnlQYXJhbXM7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBjdXJyZW50VXJsTm9QYXJhbXMgPSBjdXJyZW50VXJsLnNwbGl0KCc/JylbMF07XHJcbiAgICAgICAgICAgICAgICB0aGlzLm5hdlRhYlNlcnZpY2UuYWRkQWN0aXZlVGFiQnlVcmwoY3VycmVudFVybE5vUGFyYW1zLCBwYXJhbXMpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5sb2FkZWRNZW51ID0gdHJ1ZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBvbkNsb3NlVGFiKGluZGV4KSB7XHJcbiAgICAgICAgdGhpcy5pc1JlbW92ZVRhYiA9IHRydWU7XHJcbiAgICAgICAgY29uc3QgY3VycmVudFRhYiA9IHRoaXMudGFic1tpbmRleF07XHJcbiAgICAgICAgY29uc3QgcHJldlRhYiA9IHsgLi4udGhpcy50YWJzW2luZGV4IC0gMV0gfTtcclxuICAgICAgICBsZXQgbmV4dFRhYjtcclxuICAgICAgICBpZiAodGhpcy50YWJzLmxlbmd0aCA+PSAyKSB7XHJcbiAgICAgICAgICAgIG5leHRUYWIgPSB7IC4uLnRoaXMudGFic1sxXSB9O1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoY3VycmVudFRhYi5pc1NlbGVjdGVkKSB7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLnRhYnMubGVuZ3RoID09PSAxKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLm5hdlRhYlNlcnZpY2UuYWRkQWN0aXZlVGFiKG51bGwpO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgaWYgKGluZGV4ID09PSAwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy50YWJNZW51LnNlbGVjdFRhYigxLCBmYWxzZSk7XHJcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMudGFiTWVudS5zZWxlY3RUYWIoaW5kZXggLSAxLCBmYWxzZSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5uYXZUYWJTZXJ2aWNlLnJlbW92ZUFjdGl2ZVRhYihjdXJyZW50VGFiKTtcclxuICAgICAgICB0aGlzLnRhYk1lbnUucmVtb3ZlVGFiKGluZGV4KTtcclxuICAgIH1cclxuXHJcbiAgICBASG9zdExpc3RlbmVyKCd3aW5kb3c6a2V5ZG93bicsIFsnJGV2ZW50J10pIHB1YmxpYyBzcGFjZUV2ZW50KCRldmVudDogYW55KSB7XHJcbiAgICAgICAgaWYgKCh0aGlzLnRhYnMubGVuZ3RoID4gMCkgJiYgKCRldmVudC5hbHRLZXkgJiYgJGV2ZW50LmtleSA9PT0gJzEnKSkge1xyXG4gICAgICAgICAgICB0aGlzLnJvdXRlci5uYXZpZ2F0ZUJ5VXJsKHRoaXMudGFic1swXS5yb3V0ZXJMaW5rKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKCh0aGlzLnRhYnMubGVuZ3RoID4gMSkgJiYgKCRldmVudC5hbHRLZXkgJiYgJGV2ZW50LmtleSA9PT0gJzInKSkge1xyXG4gICAgICAgICAgICB0aGlzLnJvdXRlci5uYXZpZ2F0ZUJ5VXJsKHRoaXMudGFic1sxXS5yb3V0ZXJMaW5rKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKCh0aGlzLnRhYnMubGVuZ3RoID4gMikgJiYgKCRldmVudC5hbHRLZXkgJiYgJGV2ZW50LmtleSA9PT0gJzMnKSkge1xyXG4gICAgICAgICAgICB0aGlzLnJvdXRlci5uYXZpZ2F0ZUJ5VXJsKHRoaXMudGFic1syXS5yb3V0ZXJMaW5rKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKCh0aGlzLnRhYnMubGVuZ3RoID4gMykgJiYgKCRldmVudC5hbHRLZXkgJiYgJGV2ZW50LmtleSA9PT0gJzQnKSkge1xyXG4gICAgICAgICAgICB0aGlzLnJvdXRlci5uYXZpZ2F0ZUJ5VXJsKHRoaXMudGFic1szXS5yb3V0ZXJMaW5rKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKCh0aGlzLnRhYnMubGVuZ3RoID4gNCkgJiYgKCRldmVudC5hbHRLZXkgJiYgJGV2ZW50LmtleSA9PT0gJzUnKSkge1xyXG4gICAgICAgICAgICB0aGlzLnJvdXRlci5uYXZpZ2F0ZUJ5VXJsKHRoaXMudGFic1s0XS5yb3V0ZXJMaW5rKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKCh0aGlzLnRhYnMubGVuZ3RoID4gNSkgJiYgKCRldmVudC5hbHRLZXkgJiYgJGV2ZW50LmtleSA9PT0gJzYnKSkge1xyXG4gICAgICAgICAgICB0aGlzLnJvdXRlci5uYXZpZ2F0ZUJ5VXJsKHRoaXMudGFic1s1XS5yb3V0ZXJMaW5rKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKCh0aGlzLnRhYnMubGVuZ3RoID4gNikgJiYgKCRldmVudC5hbHRLZXkgJiYgJGV2ZW50LmtleSA9PT0gJzcnKSkge1xyXG4gICAgICAgICAgICB0aGlzLnJvdXRlci5uYXZpZ2F0ZUJ5VXJsKHRoaXMudGFic1s2XS5yb3V0ZXJMaW5rKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKCh0aGlzLnRhYnMubGVuZ3RoID4gNykgJiYgKCRldmVudC5hbHRLZXkgJiYgJGV2ZW50LmtleSA9PT0gJzgnKSkge1xyXG4gICAgICAgICAgICB0aGlzLnJvdXRlci5uYXZpZ2F0ZUJ5VXJsKHRoaXMudGFic1s3XS5yb3V0ZXJMaW5rKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKCh0aGlzLnRhYnMubGVuZ3RoID4gOCkgJiYgKCRldmVudC5hbHRLZXkgJiYgJGV2ZW50LmtleSA9PT0gJzknKSkge1xyXG4gICAgICAgICAgICB0aGlzLnJvdXRlci5uYXZpZ2F0ZUJ5VXJsKHRoaXMudGFic1s4XS5yb3V0ZXJMaW5rKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKCh0aGlzLnRhYnMubGVuZ3RoID4gOSkgJiYgKCRldmVudC5hbHRLZXkgJiYgJGV2ZW50LmtleSA9PT0gJzAnKSkge1xyXG4gICAgICAgICAgICB0aGlzLnJvdXRlci5uYXZpZ2F0ZUJ5VXJsKHRoaXMudGFic1s5XS5yb3V0ZXJMaW5rKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKCh0aGlzLnRhYnMubGVuZ3RoID4gMTApICYmICgkZXZlbnQuYWx0S2V5ICYmICRldmVudC5rZXkgPT09ICctJykpIHtcclxuICAgICAgICAgICAgdGhpcy5yb3V0ZXIubmF2aWdhdGVCeVVybCh0aGlzLnRhYnNbMTBdLnJvdXRlckxpbmspO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoKHRoaXMudGFicy5sZW5ndGggPiAxMSkgJiYgKCRldmVudC5hbHRLZXkgJiYgJGV2ZW50LmtleSA9PT0gJz0nKSkge1xyXG4gICAgICAgICAgICB0aGlzLnJvdXRlci5uYXZpZ2F0ZUJ5VXJsKHRoaXMudGFic1sxMV0ucm91dGVyTGluayk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBvblNlbGVjdFRhYihpbmRleCkge1xyXG4gICAgICAgIHRoaXMubmF2VGFiU2VydmljZS50YWJUcmlnZ2VyQWN0aXZlKHRoaXMudGFic1tpbmRleF0pO1xyXG4gICAgICAgIC8vIGlmICghdGhpcy50YWJzW2luZGV4XS5tYXRjaGVkKSB7XHJcbiAgICAgICAgLy8gICAgIHRoaXMubmF2VGFiU2VydmljZS5hZGRBY3RpdmVUYWIodGhpcy50YWJzW2luZGV4XSk7XHJcbiAgICAgICAgLy8gfVxyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBnZXRXaWR0aFRhYihudW1UYWIpIHtcclxuICAgICAgICBpZiAobnVtVGFiIDwgNSkge1xyXG4gICAgICAgICAgICByZXR1cm4gNSAqIENvbnN0YW50cy5ERUZBVUxUX1RBQl9XSURUSDtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIG51bVRhYiAqIENvbnN0YW50cy5ERUZBVUxUX1RBQl9XSURUSDtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgcHJlcGFyZVJvdXRlKG91dGxldDogUm91dGVyT3V0bGV0KSB7XHJcbiAgICAgICAgcmV0dXJuIG91dGxldC5pc0FjdGl2YXRlZCA/IG91dGxldC5hY3RpdmF0ZWRSb3V0ZSA6ICcnO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyB0cmFja0J5Rm4oaW5kZXgsIGl0ZW0pIHsgcmV0dXJuIGluZGV4OyB9XHJcblxyXG4gICAgcHVibGljIG5nT25EZXN0cm95KCk6IHZvaWQge1xyXG4gICAgICAgIHRoaXMubmF2VGFiU2VydmljZS5yZXNldE5hdlRhYigpO1xyXG4gICAgICAgIHRoaXMuc3Vic2NyaXB0aW9uLm5leHQoKTtcclxuICAgICAgICB0aGlzLnN1YnNjcmlwdGlvbi5jb21wbGV0ZSgpO1xyXG4gICAgfVxyXG5cclxufVxyXG4iXX0=