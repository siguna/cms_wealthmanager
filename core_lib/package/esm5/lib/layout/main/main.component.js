import * as tslib_1 from "tslib";
import { ChangeDetectionStrategy, Component, ViewChild } from '@angular/core';
import { AutoLogoutService, NavTabService } from 'mobile-money';
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
        { type: NavTabService },
        { type: AutoLogoutService }
    ]; };
    tslib_1.__decorate([
        ViewChild('topBar', { static: true })
    ], MainComponent.prototype, "topBar", void 0);
    MainComponent = tslib_1.__decorate([
        Component({
            selector: 'vt-main',
            template: "<div class=\"fix-header\">\r\n    <!-- ============================================================== -->\r\n    <!-- Preloader -->\r\n    <!-- ============================================================== -->\r\n\r\n    <div id=\"wrapper\">\r\n        <vt-top-bar #topBar (humberger)=\"clickHide($event)\"></vt-top-bar>\r\n        <vt-sidebar (onHiddenNav)=\"onHiddenNav($event)\" [beHide]=\"hide\"></vt-sidebar>\r\n    </div>\r\n    <!-- ============================================================== -->\r\n    <!-- Page Content -->\r\n    <!-- ============================================================== -->\r\n\r\n    <div id=\"page-wrapper\" class=\"{{hide ? 'page-wrapper-out' : 'page-wrapper'}}\">\r\n        <div class=\"container-fluid\">\r\n            <div class=\"row\">\r\n                <div id=\"main-tabs\" class=\"p-0 col-md-12 col-lg-12 col-sm-12 col-xs-12\">\r\n                    <div class=\"tab-page\">\r\n                        <vt-main-content></vt-main-content>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n            <div class=\"footer\">\r\n                <div class=\"text-center\">\r\n                    <p class=\"m-0\"><strong>\u00A9 2020</strong>\r\n                        Ph\u00E1t tri\u1EC3n b\u1EDFi <strong>Trung t\u00E2m C\u00F4ng ngh\u1EC7 - T\u1ED5ng C\u00F4ng ty D\u1ECBch v\u1EE5 s\u1ED1 </strong>\r\n                        B\u1EA3n quy\u1EC1n thu\u1ED9c <strong><a href=\"https://viettel.vn/\">T\u1EADp \u0111o\u00E0n C\u00F4ng nghi\u1EC7p - Vi\u1EC5n th\u00F4ng Qu\u00E2n \u0111\u1ED9i Viettel</a></strong></p>\r\n                </div>\r\n            </div>\r\n        </div>\r\n\r\n    </div>\r\n    <vt-loading-spinner [name]='\"root\"' [fullScreen]='true'></vt-loading-spinner>\r\n</div>\r\n\r\n<div *ngIf=\"isLoading\" class=\"spinner-container \">\r\n    <div class=\"spinner spiner-loading\">\r\n        <div class=\"spinner-border text-warning\" role=\"status\">\r\n            <span class=\"sr-only\">Loading...</span>\r\n        </div>\r\n    </div>\r\n</div>\r\n\r\n",
            changeDetection: ChangeDetectionStrategy.Default,
            styles: [".page-wrapper-out{margin-left:0!important;transition:350ms ease-in-out}.page-wrapper-out .footer{padding-left:15px}.page-wrapper{margin-left:300px;transition:350ms ease-in-out}@media screen and (max-width:992px){.page-wrapper,.page-wrapper-out{margin-left:0!important}}"]
        })
    ], MainComponent);
    return MainComponent;
}());
export { MainComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9tb2JpbGUtbW9uZXktbGF5b3V0LyIsInNvdXJjZXMiOlsibGliL2xheW91dC9tYWluL21haW4uY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQW9CLHVCQUF1QixFQUFFLFNBQVMsRUFBRSxTQUFTLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDaEcsT0FBTyxFQUFFLGlCQUFpQixFQUFFLGFBQWEsRUFBRSxNQUFNLGNBQWMsQ0FBQztBQVNoRTtJQU9JLHVCQUFvQixhQUE0QixFQUFVLGlCQUFvQztRQUExRSxrQkFBYSxHQUFiLGFBQWEsQ0FBZTtRQUFVLHNCQUFpQixHQUFqQixpQkFBaUIsQ0FBbUI7UUFDMUYsSUFBSSxJQUFJLENBQUMsaUJBQWlCLENBQUMsYUFBYSxFQUFFLEVBQUU7WUFDeEMsSUFBSSxDQUFDLGlCQUFpQixDQUFDLEtBQUssRUFBRSxDQUFDO1NBQ2xDO0lBQ0wsQ0FBQztJQUVNLDBDQUFrQixHQUF6QjtJQUNBLENBQUM7SUFFTSxzQ0FBYyxHQUFyQixVQUFzQixNQUFrQjtRQUNwQyxNQUFNLENBQUMsY0FBYyxFQUFFLENBQUM7SUFDNUIsQ0FBQztJQUVNLGlDQUFTLEdBQWhCLFVBQWlCLE1BQVc7UUFDeEIsSUFBSSxDQUFDLElBQUksR0FBRyxNQUFNLENBQUM7UUFDbkIsSUFBSSxDQUFDLGFBQWEsQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQ2hELENBQUM7SUFFTSxtQ0FBVyxHQUFsQixVQUFtQixNQUFNO1FBQ3JCLElBQU0sWUFBWSxHQUFHLFFBQVEsQ0FBQyxjQUFjLENBQUMsZUFBZSxDQUFDLENBQUM7UUFDOUQsSUFBSSxDQUFDLFlBQVksQ0FBQyxRQUFRLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxFQUFFO1lBQ3ZDLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQztZQUN4QixJQUFJLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQztZQUNqQixJQUFJLENBQUMsYUFBYSxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7U0FDL0M7SUFDTCxDQUFDOztnQkF6QmtDLGFBQWE7Z0JBQTZCLGlCQUFpQjs7SUFMekQ7UUFBcEMsU0FBUyxDQUFDLFFBQVEsRUFBRSxFQUFDLE1BQU0sRUFBRSxJQUFJLEVBQUMsQ0FBQztpREFBaUM7SUFGNUQsYUFBYTtRQU56QixTQUFTLENBQUM7WUFDUCxRQUFRLEVBQUUsU0FBUztZQUNuQixraUVBQW9DO1lBRXBDLGVBQWUsRUFBRSx1QkFBdUIsQ0FBQyxPQUFPOztTQUNuRCxDQUFDO09BQ1csYUFBYSxDQWtDekI7SUFBRCxvQkFBQztDQUFBLEFBbENELElBa0NDO1NBbENZLGFBQWEiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBBZnRlckNvbnRlbnRJbml0LCBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSwgQ29tcG9uZW50LCBWaWV3Q2hpbGQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgQXV0b0xvZ291dFNlcnZpY2UsIE5hdlRhYlNlcnZpY2UgfSBmcm9tICdtb2JpbGUtbW9uZXknO1xyXG5pbXBvcnQgeyBUb3BCYXJDb21wb25lbnQgfSBmcm9tICcuLy4uL3RvcC1iYXIvdG9wLWJhci5jb21wb25lbnQnO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgICBzZWxlY3RvcjogJ3Z0LW1haW4nLFxyXG4gICAgdGVtcGxhdGVVcmw6ICcuL21haW4uY29tcG9uZW50Lmh0bWwnLFxyXG4gICAgc3R5bGVVcmxzOiBbJy4vbWFpbi5jb21wb25lbnQuc2NzcyddLFxyXG4gICAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5EZWZhdWx0LFxyXG59KVxyXG5leHBvcnQgY2xhc3MgTWFpbkNvbXBvbmVudCBpbXBsZW1lbnRzIEFmdGVyQ29udGVudEluaXQge1xyXG5cclxuICAgIEBWaWV3Q2hpbGQoJ3RvcEJhcicsIHtzdGF0aWM6IHRydWV9KSBwcml2YXRlIHRvcEJhcjogVG9wQmFyQ29tcG9uZW50O1xyXG4gICAgcHVibGljIGlzTG9hZGluZzogYm9vbGVhbjtcclxuICAgIHB1YmxpYyBoaWRlOiBib29sZWFuO1xyXG4gICAgcHVibGljIGFsbG93T3V0c2lkZUNsaWNrOiBib29sZWFuO1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgbmF2VGFiU2VydmljZTogTmF2VGFiU2VydmljZSwgcHJpdmF0ZSBhdXRvTG9nb3V0U2VydmljZTogQXV0b0xvZ291dFNlcnZpY2UpIHtcclxuICAgICAgICBpZiAodGhpcy5hdXRvTG9nb3V0U2VydmljZS5nZXRMYXN0QWN0aW9uKCkpIHtcclxuICAgICAgICAgICAgdGhpcy5hdXRvTG9nb3V0U2VydmljZS5jaGVjaygpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgbmdBZnRlckNvbnRlbnRJbml0KCk6IHZvaWQge1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBjbG9zZU1vYmlsZU5hdigkZXZlbnQ6IE1vdXNlRXZlbnQpIHtcclxuICAgICAgICAkZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgY2xpY2tIaWRlKCRldmVudDogYW55KSB7XHJcbiAgICAgICAgdGhpcy5oaWRlID0gJGV2ZW50O1xyXG4gICAgICAgIHRoaXMubmF2VGFiU2VydmljZS5jaGFuZ2VTaXplVGFiKHRoaXMuaGlkZSk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIG9uSGlkZGVuTmF2KCRldmVudCkge1xyXG4gICAgICAgIGNvbnN0IGhhbWJ1cmdlckJ0biA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCduYXZfaGFtYnVyZ2VyJyk7XHJcbiAgICAgICAgaWYgKCFoYW1idXJnZXJCdG4uY29udGFpbnMoJGV2ZW50LnRhcmdldCkpIHtcclxuICAgICAgICAgICAgdGhpcy50b3BCYXIuaGlkZSA9IHRydWU7XHJcbiAgICAgICAgICAgIHRoaXMuaGlkZSA9IHRydWU7XHJcbiAgICAgICAgICAgIHRoaXMubmF2VGFiU2VydmljZS5jaGFuZ2VTaXplVGFiKHRoaXMuaGlkZSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxufVxyXG4iXX0=