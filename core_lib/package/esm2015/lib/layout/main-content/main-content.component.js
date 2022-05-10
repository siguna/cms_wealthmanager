import * as tslib_1 from "tslib";
import { Component, HostListener, Inject, ViewChild } from '@angular/core';
import { ActivatedRoute, Router, RouterOutlet } from '@angular/router';
import { APP_CONFIG_TOKEN, Constants, makeSlideInOut, NavTabService, opacityAnimation, TabsComponent } from 'mobile-money';
import { Subject } from 'rxjs';
import { delay, distinctUntilChanged, takeUntil } from 'rxjs/operators';
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
export { MainContentComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi1jb250ZW50LmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL21vYmlsZS1tb25leS1sYXlvdXQvIiwic291cmNlcyI6WyJsaWIvbGF5b3V0L21haW4tY29udGVudC9tYWluLWNvbnRlbnQuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQWlCLFNBQVMsRUFBRSxZQUFZLEVBQUUsTUFBTSxFQUFxQixTQUFTLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDN0csT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLEVBQUUsWUFBWSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDdkUsT0FBTyxFQUFFLGdCQUFnQixFQUFFLFNBQVMsRUFBRSxjQUFjLEVBQUUsYUFBYSxFQUFFLGdCQUFnQixFQUFFLGFBQWEsRUFBRSxNQUFNLGNBQWMsQ0FBQztBQUUzSCxPQUFPLEVBQWMsT0FBTyxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBQzNDLE9BQU8sRUFBRSxLQUFLLEVBQUUsb0JBQW9CLEVBQUUsU0FBUyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFVeEUsSUFBYSxvQkFBb0IsR0FBakMsTUFBYSxvQkFBb0I7SUFjN0IsWUFBb0IsTUFBYyxFQUFVLEtBQXFCLEVBQVUsYUFBNEIsRUFDekQsY0FBYztRQUR4QyxXQUFNLEdBQU4sTUFBTSxDQUFRO1FBQVUsVUFBSyxHQUFMLEtBQUssQ0FBZ0I7UUFBVSxrQkFBYSxHQUFiLGFBQWEsQ0FBZTtRQUN6RCxtQkFBYyxHQUFkLGNBQWMsQ0FBQTtRQVpyRCxTQUFJLEdBQVUsRUFBRSxDQUFDO1FBRWpCLGlCQUFZLEdBQWlCLElBQUksT0FBTyxFQUFFLENBQUM7UUFFM0MsY0FBUyxHQUFHLElBQUksQ0FBQyxjQUFjLENBQUMsU0FBUyxDQUFDLFVBQVUsQ0FBQyxTQUFTLENBQUM7UUFDL0Qsd0JBQW1CLEdBQUcsU0FBUyxDQUFDLHNCQUFzQixDQUFDO1FBQ3ZELHVCQUFrQixHQUFHLENBQUMsQ0FBQztRQUd2QixnQkFBVyxHQUFHLEtBQUssQ0FBQztJQUkzQixDQUFDO0lBRU0sUUFBUTtRQUNYLElBQUksQ0FBQyxVQUFVLEdBQUcsSUFBSSxDQUFDLGFBQWEsQ0FBQyxpQkFBaUIsRUFBRSxDQUFDO1FBRXpELG1CQUFtQjtRQUNuQixJQUFJLENBQUMsYUFBYSxDQUFDLGlCQUFpQixFQUFFLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLENBQUMsQ0FBQyxTQUFTLENBQUMsQ0FBQyxHQUFHLEVBQUUsRUFBRTtZQUN4RixJQUFJLElBQUksQ0FBQyxVQUFVLEVBQUU7Z0JBQ2pCLElBQUksQ0FBQyxrQkFBa0IsR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQzthQUM5QztZQUNELElBQUksQ0FBQyxJQUFJLEdBQUcsR0FBRyxDQUFDO1lBQ2hCLElBQUksSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLEVBQUU7Z0JBQ2xCLElBQUksQ0FBQyxTQUFTLEdBQUcsSUFBSSxDQUFDO2FBQ3pCO2lCQUFNO2dCQUNILElBQUksQ0FBQyxTQUFTLEdBQUcsS0FBSyxDQUFDO2FBQzFCO1FBQ0wsQ0FBQyxDQUFDLENBQUM7SUFDUCxDQUFDO0lBRU0sZUFBZTtRQUNsQixxQ0FBcUM7UUFDckMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxlQUFlLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsRUFBRSxTQUFTLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxFQUFFLG9CQUFvQixFQUFFLENBQUMsQ0FBQyxTQUFTLENBQUMsQ0FBQyxHQUFHLEVBQUUsRUFBRTtZQUN4SCxJQUFJLHVCQUF1QixHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUMsR0FBRyxFQUFFLEVBQUUsQ0FBQyxHQUFHLENBQUMsRUFBRSxLQUFLLEdBQUcsQ0FBQyxDQUFDO1lBQzNFLElBQUksdUJBQXVCLEdBQUcsQ0FBQyxFQUFFO2dCQUM3Qix1QkFBdUIsR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDLEdBQUcsRUFBRSxFQUFFLENBQUMsR0FBRyxDQUFDLFVBQVUsQ0FBQyxRQUFRLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQzthQUN4RjtZQUNELElBQUksdUJBQXVCLElBQUksQ0FBQyxFQUFFO2dCQUM5QixJQUFJLElBQUksQ0FBQyxrQkFBa0IsR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sRUFBRTtvQkFDNUMsa0VBQWtFO29CQUNsRSxJQUFJLENBQUMsT0FBTyxDQUFDLFNBQVMsQ0FBQyx1QkFBdUIsRUFBRSxJQUFJLENBQUMsQ0FBQztpQkFDekQ7cUJBQU07b0JBQ0gsSUFBSSxDQUFDLElBQUksQ0FBQyxXQUFXLEVBQUU7d0JBQ25CLG1FQUFtRTt3QkFDbkUsSUFBSSxDQUFDLE9BQU8sQ0FBQyxTQUFTLENBQUMsdUJBQXVCLEVBQUUsS0FBSyxDQUFDLENBQUM7cUJBQzFEO3lCQUFNO3dCQUNILElBQUksQ0FBQyxXQUFXLEdBQUcsS0FBSyxDQUFDO3FCQUM1QjtpQkFDSjthQUNKO1FBQ0wsQ0FBQyxDQUFDLENBQUM7UUFDSCxJQUFJLENBQUMsYUFBYSxDQUFDLGlCQUFpQixFQUFFLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsRUFBRSxTQUFTLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxDQUFDLENBQUMsU0FBUyxDQUFDLENBQUMsR0FBRyxFQUFFLEVBQUU7WUFDcEcsSUFBSSxHQUFHLEVBQUU7Z0JBQ0wsTUFBTSxVQUFVLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsTUFBTSxDQUFDLENBQUMsRUFBRSxJQUFJLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxNQUFNLENBQUMsQ0FBQztnQkFDckUsTUFBTSxNQUFNLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxRQUFRLENBQUMsV0FBVyxDQUFDO2dCQUMvQyxNQUFNLGtCQUFrQixHQUFHLFVBQVUsQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7Z0JBQ3BELElBQUksQ0FBQyxhQUFhLENBQUMsaUJBQWlCLENBQUMsa0JBQWtCLEVBQUUsTUFBTSxDQUFDLENBQUM7Z0JBQ2pFLElBQUksQ0FBQyxVQUFVLEdBQUcsSUFBSSxDQUFDO2FBQzFCO1FBQ0wsQ0FBQyxDQUFDLENBQUM7SUFDUCxDQUFDO0lBRU0sVUFBVSxDQUFDLEtBQUs7UUFDbkIsSUFBSSxDQUFDLFdBQVcsR0FBRyxJQUFJLENBQUM7UUFDeEIsTUFBTSxVQUFVLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUNwQyxNQUFNLE9BQU8scUJBQVEsSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLEdBQUcsQ0FBQyxDQUFDLENBQUUsQ0FBQztRQUM1QyxJQUFJLE9BQU8sQ0FBQztRQUNaLElBQUksSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLElBQUksQ0FBQyxFQUFFO1lBQ3ZCLE9BQU8scUJBQVEsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBRSxDQUFDO1NBQ2pDO1FBQ0QsSUFBSSxVQUFVLENBQUMsVUFBVSxFQUFFO1lBQ3ZCLElBQUksSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLEtBQUssQ0FBQyxFQUFFO2dCQUN4QixJQUFJLENBQUMsYUFBYSxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsQ0FBQzthQUN6QztpQkFBTTtnQkFDSCxJQUFJLEtBQUssS0FBSyxDQUFDLEVBQUU7b0JBQ2IsSUFBSSxDQUFDLE9BQU8sQ0FBQyxTQUFTLENBQUMsQ0FBQyxFQUFFLEtBQUssQ0FBQyxDQUFDO2lCQUNwQztxQkFBTTtvQkFDSCxJQUFJLENBQUMsT0FBTyxDQUFDLFNBQVMsQ0FBQyxLQUFLLEdBQUcsQ0FBQyxFQUFFLEtBQUssQ0FBQyxDQUFDO2lCQUM1QzthQUNKO1NBQ0o7UUFDRCxJQUFJLENBQUMsYUFBYSxDQUFDLGVBQWUsQ0FBQyxVQUFVLENBQUMsQ0FBQztRQUMvQyxJQUFJLENBQUMsT0FBTyxDQUFDLFNBQVMsQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUNsQyxDQUFDO0lBRWtELFVBQVUsQ0FBQyxNQUFXO1FBQ3JFLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxNQUFNLElBQUksTUFBTSxDQUFDLEdBQUcsS0FBSyxHQUFHLENBQUMsRUFBRTtZQUNqRSxJQUFJLENBQUMsTUFBTSxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLFVBQVUsQ0FBQyxDQUFDO1NBQ3REO1FBQ0QsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLE1BQU0sSUFBSSxNQUFNLENBQUMsR0FBRyxLQUFLLEdBQUcsQ0FBQyxFQUFFO1lBQ2pFLElBQUksQ0FBQyxNQUFNLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsVUFBVSxDQUFDLENBQUM7U0FDdEQ7UUFDRCxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsTUFBTSxJQUFJLE1BQU0sQ0FBQyxHQUFHLEtBQUssR0FBRyxDQUFDLEVBQUU7WUFDakUsSUFBSSxDQUFDLE1BQU0sQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxVQUFVLENBQUMsQ0FBQztTQUN0RDtRQUNELElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxNQUFNLElBQUksTUFBTSxDQUFDLEdBQUcsS0FBSyxHQUFHLENBQUMsRUFBRTtZQUNqRSxJQUFJLENBQUMsTUFBTSxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLFVBQVUsQ0FBQyxDQUFDO1NBQ3REO1FBQ0QsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLE1BQU0sSUFBSSxNQUFNLENBQUMsR0FBRyxLQUFLLEdBQUcsQ0FBQyxFQUFFO1lBQ2pFLElBQUksQ0FBQyxNQUFNLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsVUFBVSxDQUFDLENBQUM7U0FDdEQ7UUFDRCxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsTUFBTSxJQUFJLE1BQU0sQ0FBQyxHQUFHLEtBQUssR0FBRyxDQUFDLEVBQUU7WUFDakUsSUFBSSxDQUFDLE1BQU0sQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxVQUFVLENBQUMsQ0FBQztTQUN0RDtRQUNELElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxNQUFNLElBQUksTUFBTSxDQUFDLEdBQUcsS0FBSyxHQUFHLENBQUMsRUFBRTtZQUNqRSxJQUFJLENBQUMsTUFBTSxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLFVBQVUsQ0FBQyxDQUFDO1NBQ3REO1FBQ0QsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLE1BQU0sSUFBSSxNQUFNLENBQUMsR0FBRyxLQUFLLEdBQUcsQ0FBQyxFQUFFO1lBQ2pFLElBQUksQ0FBQyxNQUFNLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsVUFBVSxDQUFDLENBQUM7U0FDdEQ7UUFDRCxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQyxNQUFN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QkFBb0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBBZnRlclZpZXdJbml0LCBDb21wb25lbnQsIEhvc3RMaXN0ZW5lciwgSW5qZWN0LCBPbkRlc3Ryb3ksIE9uSW5pdCwgVmlld0NoaWxkIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IEFjdGl2YXRlZFJvdXRlLCBSb3V0ZXIsIFJvdXRlck91dGxldCB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XHJcbmltcG9ydCB7IEFQUF9DT05GSUdfVE9LRU4sIENvbnN0YW50cywgbWFrZVNsaWRlSW5PdXQsIE5hdlRhYlNlcnZpY2UsIG9wYWNpdHlBbmltYXRpb24sIFRhYnNDb21wb25lbnQgfSBmcm9tICdtb2JpbGUtbW9uZXknO1xyXG5pbXBvcnQgeyBOYXZpZ2F0aW9uSXRlbSB9IGZyb20gJ21vYmlsZS1tb25leS9saWIvc2hhcmVkL2NvbW1vbi9uYXYtdGFiL3N0b3JlL25hdmlnYXRpb24tdGFiJztcclxuaW1wb3J0IHsgT2JzZXJ2YWJsZSwgU3ViamVjdCB9IGZyb20gJ3J4anMnO1xyXG5pbXBvcnQgeyBkZWxheSwgZGlzdGluY3RVbnRpbENoYW5nZWQsIHRha2VVbnRpbCB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcclxuXHJcbmRlY2xhcmUgdmFyICQ6IGFueTtcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gICAgc2VsZWN0b3I6ICd2dC1tYWluLWNvbnRlbnQnLFxyXG4gICAgdGVtcGxhdGVVcmw6ICcuL21haW4tY29udGVudC5jb21wb25lbnQuaHRtbCcsXHJcbiAgICBzdHlsZVVybHM6IFsnLi9tYWluLWNvbnRlbnQuY29tcG9uZW50LnNjc3MnXSxcclxuICAgIGFuaW1hdGlvbnM6IFttYWtlU2xpZGVJbk91dCgpLCBvcGFjaXR5QW5pbWF0aW9uKCldLFxyXG59KVxyXG5leHBvcnQgY2xhc3MgTWFpbkNvbnRlbnRDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQsIE9uRGVzdHJveSwgQWZ0ZXJWaWV3SW5pdCB7XHJcbiAgICAvLyBAVmlld0NoaWxkKCdjYXJvdXNlbCcsIHsgc3RhdGljOiBmYWxzZSB9KSBwdWJsaWMgY2Fyb3VzZWw6IENhcm91c2VsQ29tcG9uZW50O1xyXG4gICAgQFZpZXdDaGlsZCgndGFiTWVudScsIHsgc3RhdGljOiBmYWxzZSB9KSBwdWJsaWMgdGFiTWVudTogVGFic0NvbXBvbmVudDtcclxuICAgIHB1YmxpYyB0YWJzOiBhbnlbXSA9IFtdO1xyXG4gICAgcHVibGljIGFjdGl2ZVRhYiQ6IE9ic2VydmFibGU8TmF2aWdhdGlvbkl0ZW1bXT47XHJcbiAgICBwdWJsaWMgc3Vic2NyaXB0aW9uOiBTdWJqZWN0PGFueT4gPSBuZXcgU3ViamVjdCgpO1xyXG5cclxuICAgIHB1YmxpYyBzaG93SW5UYWIgPSB0aGlzLmFwcENvbmZpZ1Rva2VuLmFwcENvbmZpZy5BUFBfQ09ORklHLnNob3dJblRhYjtcclxuICAgIHB1YmxpYyBsZW5ndGhUYWJIaW5kZW5UZXh0ID0gQ29uc3RhbnRzLkxFTkdUSF9UQUJfSElEREVOX1RFWFQ7XHJcbiAgICBwdWJsaWMgcHJldmlvdXNMZW5ndGhUYWJzID0gMDtcclxuXHJcbiAgICBwdWJsaWMgbG9hZGVkTWVudTogYm9vbGVhbjtcclxuICAgIHB1YmxpYyBpc1JlbW92ZVRhYiA9IGZhbHNlO1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgcm91dGVyOiBSb3V0ZXIsIHByaXZhdGUgcm91dGU6IEFjdGl2YXRlZFJvdXRlLCBwcml2YXRlIG5hdlRhYlNlcnZpY2U6IE5hdlRhYlNlcnZpY2UsXHJcbiAgICAgICAgICAgICAgICBASW5qZWN0KEFQUF9DT05GSUdfVE9LRU4pIHByaXZhdGUgYXBwQ29uZmlnVG9rZW4pIHtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgbmdPbkluaXQoKSB7XHJcbiAgICAgICAgdGhpcy5hY3RpdmVUYWIkID0gdGhpcy5uYXZUYWJTZXJ2aWNlLmdldFRhYkFjdGl2ZUl0ZW1zKCk7XHJcblxyXG4gICAgICAgIC8vIGRhdGEgdGFicyBjaGFuZ2VcclxuICAgICAgICB0aGlzLm5hdlRhYlNlcnZpY2UuZ2V0VGFiQWN0aXZlSXRlbXMoKS5waXBlKHRha2VVbnRpbCh0aGlzLnN1YnNjcmlwdGlvbikpLnN1YnNjcmliZSgocmVzKSA9PiB7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLmxvYWRlZE1lbnUpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMucHJldmlvdXNMZW5ndGhUYWJzID0gdGhpcy50YWJzLmxlbmd0aDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB0aGlzLnRhYnMgPSByZXM7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLnRhYnMubGVuZ3RoKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnNob3dJblRhYiA9IHRydWU7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnNob3dJblRhYiA9IGZhbHNlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIG5nQWZ0ZXJWaWV3SW5pdCgpOiB2b2lkIHtcclxuICAgICAgICAvLyB0cmFjayBhY3Rpb24gYWRkIHRhYiBvciBjaGFuZ2UgdGFiXHJcbiAgICAgICAgdGhpcy5uYXZUYWJTZXJ2aWNlLmFkZFRhYkxpc3RlbmVyJC5waXBlKGRlbGF5KDEwMCksIHRha2VVbnRpbCh0aGlzLnN1YnNjcmlwdGlvbiksIGRpc3RpbmN0VW50aWxDaGFuZ2VkKCkpLnN1YnNjcmliZSgocmVzKSA9PiB7XHJcbiAgICAgICAgICAgIGxldCBjdXJyZW50SW5kZXhTZWxlY3RlZFRhYiA9IHRoaXMudGFicy5maW5kSW5kZXgoKHRhYikgPT4gdGFiLmlkID09PSByZXMpO1xyXG4gICAgICAgICAgICBpZiAoY3VycmVudEluZGV4U2VsZWN0ZWRUYWIgPCAwKSB7XHJcbiAgICAgICAgICAgICAgICBjdXJyZW50SW5kZXhTZWxlY3RlZFRhYiA9IHRoaXMudGFicy5maW5kSW5kZXgoKHRhYikgPT4gdGFiLnJvdXRlckxpbmsuaW5jbHVkZXMocmVzKSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYgKGN1cnJlbnRJbmRleFNlbGVjdGVkVGFiID49IDApIHtcclxuICAgICAgICAgICAgICAgIGlmICh0aGlzLnByZXZpb3VzTGVuZ3RoVGFicyA8IHRoaXMudGFicy5sZW5ndGgpIHtcclxuICAgICAgICAgICAgICAgICAgICAvLyB0aGlzLmNhcm91c2VsLmdvVG9TZWxlY3RlZEluZGV4KGN1cnJlbnRJbmRleFNlbGVjdGVkVGFiLCB0cnVlKTtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnRhYk1lbnUuc2VsZWN0VGFiKGN1cnJlbnRJbmRleFNlbGVjdGVkVGFiLCB0cnVlKTtcclxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKCF0aGlzLmlzUmVtb3ZlVGFiKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIHRoaXMuY2Fyb3VzZWwuZ29Ub1NlbGVjdGVkSW5kZXgoY3VycmVudEluZGV4U2VsZWN0ZWRUYWIsIGZhbHNlKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy50YWJNZW51LnNlbGVjdFRhYihjdXJyZW50SW5kZXhTZWxlY3RlZFRhYiwgZmFsc2UpO1xyXG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuaXNSZW1vdmVUYWIgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgICAgICB0aGlzLm5hdlRhYlNlcnZpY2UuZ2V0TG9hZGluZ1N0YXR1cyQoKS5waXBlKGRlbGF5KDIwMCksIHRha2VVbnRpbCh0aGlzLnN1YnNjcmlwdGlvbikpLnN1YnNjcmliZSgocmVzKSA9PiB7XHJcbiAgICAgICAgICAgIGlmIChyZXMpIHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IGN1cnJlbnRVcmwgPSB0aGlzLnJvdXRlci51cmwuc3Vic3RyKDEsIHRoaXMucm91dGVyLnVybC5sZW5ndGgpO1xyXG4gICAgICAgICAgICAgICAgY29uc3QgcGFyYW1zID0gdGhpcy5yb3V0ZS5zbmFwc2hvdC5xdWVyeVBhcmFtcztcclxuICAgICAgICAgICAgICAgIGNvbnN0IGN1cnJlbnRVcmxOb1BhcmFtcyA9IGN1cnJlbnRVcmwuc3BsaXQoJz8nKVswXTtcclxuICAgICAgICAgICAgICAgIHRoaXMubmF2VGFiU2VydmljZS5hZGRBY3RpdmVUYWJCeVVybChjdXJyZW50VXJsTm9QYXJhbXMsIHBhcmFtcyk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmxvYWRlZE1lbnUgPSB0cnVlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIG9uQ2xvc2VUYWIoaW5kZXgpIHtcclxuICAgICAgICB0aGlzLmlzUmVtb3ZlVGFiID0gdHJ1ZTtcclxuICAgICAgICBjb25zdCBjdXJyZW50VGFiID0gdGhpcy50YWJzW2luZGV4XTtcclxuICAgICAgICBjb25zdCBwcmV2VGFiID0geyAuLi50aGlzLnRhYnNbaW5kZXggLSAxXSB9O1xyXG4gICAgICAgIGxldCBuZXh0VGFiO1xyXG4gICAgICAgIGlmICh0aGlzLnRhYnMubGVuZ3RoID49IDIpIHtcclxuICAgICAgICAgICAgbmV4dFRhYiA9IHsgLi4udGhpcy50YWJzWzFdIH07XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChjdXJyZW50VGFiLmlzU2VsZWN0ZWQpIHtcclxuICAgICAgICAgICAgaWYgKHRoaXMudGFicy5sZW5ndGggPT09IDEpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMubmF2VGFiU2VydmljZS5hZGRBY3RpdmVUYWIobnVsbCk7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBpZiAoaW5kZXggPT09IDApIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnRhYk1lbnUuc2VsZWN0VGFiKDEsIGZhbHNlKTtcclxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy50YWJNZW51LnNlbGVjdFRhYihpbmRleCAtIDEsIGZhbHNlKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLm5hdlRhYlNlcnZpY2UucmVtb3ZlQWN0aXZlVGFiKGN1cnJlbnRUYWIpO1xyXG4gICAgICAgIHRoaXMudGFiTWVudS5yZW1vdmVUYWIoaW5kZXgpO1xyXG4gICAgfVxyXG5cclxuICAgIEBIb3N0TGlzdGVuZXIoJ3dpbmRvdzprZXlkb3duJywgWyckZXZlbnQnXSkgcHVibGljIHNwYWNlRXZlbnQoJGV2ZW50OiBhbnkpIHtcclxuICAgICAgICBpZiAoKHRoaXMudGFicy5sZW5ndGggPiAwKSAmJiAoJGV2ZW50LmFsdEtleSAmJiAkZXZlbnQua2V5ID09PSAnMScpKSB7XHJcbiAgICAgICAgICAgIHRoaXMucm91dGVyLm5hdmlnYXRlQnlVcmwodGhpcy50YWJzWzBdLnJvdXRlckxpbmspO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoKHRoaXMudGFicy5sZW5ndGggPiAxKSAmJiAoJGV2ZW50LmFsdEtleSAmJiAkZXZlbnQua2V5ID09PSAnMicpKSB7XHJcbiAgICAgICAgICAgIHRoaXMucm91dGVyLm5hdmlnYXRlQnlVcmwodGhpcy50YWJzWzFdLnJvdXRlckxpbmspO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoKHRoaXMudGFicy5sZW5ndGggPiAyKSAmJiAoJGV2ZW50LmFsdEtleSAmJiAkZXZlbnQua2V5ID09PSAnMycpKSB7XHJcbiAgICAgICAgICAgIHRoaXMucm91dGVyLm5hdmlnYXRlQnlVcmwodGhpcy50YWJzWzJdLnJvdXRlckxpbmspO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoKHRoaXMudGFicy5sZW5ndGggPiAzKSAmJiAoJGV2ZW50LmFsdEtleSAmJiAkZXZlbnQua2V5ID09PSAnNCcpKSB7XHJcbiAgICAgICAgICAgIHRoaXMucm91dGVyLm5hdmlnYXRlQnlVcmwodGhpcy50YWJzWzNdLnJvdXRlckxpbmspO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoKHRoaXMudGFicy5sZW5ndGggPiA0KSAmJiAoJGV2ZW50LmFsdEtleSAmJiAkZXZlbnQua2V5ID09PSAnNScpKSB7XHJcbiAgICAgICAgICAgIHRoaXMucm91dGVyLm5hdmlnYXRlQnlVcmwodGhpcy50YWJzWzRdLnJvdXRlckxpbmspO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoKHRoaXMudGFicy5sZW5ndGggPiA1KSAmJiAoJGV2ZW50LmFsdEtleSAmJiAkZXZlbnQua2V5ID09PSAnNicpKSB7XHJcbiAgICAgICAgICAgIHRoaXMucm91dGVyLm5hdmlnYXRlQnlVcmwodGhpcy50YWJzWzVdLnJvdXRlckxpbmspO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoKHRoaXMudGFicy5sZW5ndGggPiA2KSAmJiAoJGV2ZW50LmFsdEtleSAmJiAkZXZlbnQua2V5ID09PSAnNycpKSB7XHJcbiAgICAgICAgICAgIHRoaXMucm91dGVyLm5hdmlnYXRlQnlVcmwodGhpcy50YWJzWzZdLnJvdXRlckxpbmspO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoKHRoaXMudGFicy5sZW5ndGggPiA3KSAmJiAoJGV2ZW50LmFsdEtleSAmJiAkZXZlbnQua2V5ID09PSAnOCcpKSB7XHJcbiAgICAgICAgICAgIHRoaXMucm91dGVyLm5hdmlnYXRlQnlVcmwodGhpcy50YWJzWzddLnJvdXRlckxpbmspO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoKHRoaXMudGFicy5sZW5ndGggPiA4KSAmJiAoJGV2ZW50LmFsdEtleSAmJiAkZXZlbnQua2V5ID09PSAnOScpKSB7XHJcbiAgICAgICAgICAgIHRoaXMucm91dGVyLm5hdmlnYXRlQnlVcmwodGhpcy50YWJzWzhdLnJvdXRlckxpbmspO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoKHRoaXMudGFicy5sZW5ndGggPiA5KSAmJiAoJGV2ZW50LmFsdEtleSAmJiAkZXZlbnQua2V5ID09PSAnMCcpKSB7XHJcbiAgICAgICAgICAgIHRoaXMucm91dGVyLm5hdmlnYXRlQnlVcmwodGhpcy50YWJzWzldLnJvdXRlckxpbmspO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoKHRoaXMudGFicy5sZW5ndGggPiAxMCkgJiYgKCRldmVudC5hbHRLZXkgJiYgJGV2ZW50LmtleSA9PT0gJy0nKSkge1xyXG4gICAgICAgICAgICB0aGlzLnJvdXRlci5uYXZpZ2F0ZUJ5VXJsKHRoaXMudGFic1sxMF0ucm91dGVyTGluayk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICgodGhpcy50YWJzLmxlbmd0aCA+IDExKSAmJiAoJGV2ZW50LmFsdEtleSAmJiAkZXZlbnQua2V5ID09PSAnPScpKSB7XHJcbiAgICAgICAgICAgIHRoaXMucm91dGVyLm5hdmlnYXRlQnlVcmwodGhpcy50YWJzWzExXS5yb3V0ZXJMaW5rKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIG9uU2VsZWN0VGFiKGluZGV4KSB7XHJcbiAgICAgICAgdGhpcy5uYXZUYWJTZXJ2aWNlLnRhYlRyaWdnZXJBY3RpdmUodGhpcy50YWJzW2luZGV4XSk7XHJcbiAgICAgICAgLy8gaWYgKCF0aGlzLnRhYnNbaW5kZXhdLm1hdGNoZWQpIHtcclxuICAgICAgICAvLyAgICAgdGhpcy5uYXZUYWJTZXJ2aWNlLmFkZEFjdGl2ZVRhYih0aGlzLnRhYnNbaW5kZXhdKTtcclxuICAgICAgICAvLyB9XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGdldFdpZHRoVGFiKG51bVRhYikge1xyXG4gICAgICAgIGlmIChudW1UYWIgPCA1KSB7XHJcbiAgICAgICAgICAgIHJldHVybiA1ICogQ29uc3RhbnRzLkRFRkFVTFRfVEFCX1dJRFRIO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gbnVtVGFiICogQ29uc3RhbnRzLkRFRkFVTFRfVEFCX1dJRFRIO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBwcmVwYXJlUm91dGUob3V0bGV0OiBSb3V0ZXJPdXRsZXQpIHtcclxuICAgICAgICByZXR1cm4gb3V0bGV0LmlzQWN0aXZhdGVkID8gb3V0bGV0LmFjdGl2YXRlZFJvdXRlIDogJyc7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHRyYWNrQnlGbihpbmRleCwgaXRlbSkgeyByZXR1cm4gaW5kZXg7IH1cclxuXHJcbiAgICBwdWJsaWMgbmdPbkRlc3Ryb3koKTogdm9pZCB7XHJcbiAgICAgICAgdGhpcy5uYXZUYWJTZXJ2aWNlLnJlc2V0TmF2VGFiKCk7XHJcbiAgICAgICAgdGhpcy5zdWJzY3JpcHRpb24ubmV4dCgpO1xyXG4gICAgICAgIHRoaXMuc3Vic2NyaXB0aW9uLmNvbXBsZXRlKCk7XHJcbiAgICB9XHJcblxyXG59XHJcbiJdfQ==