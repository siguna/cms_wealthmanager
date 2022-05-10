import * as tslib_1 from "tslib";
import { ChangeDetectionStrategy, Component, ViewChild } from '@angular/core';
import { AutoLogoutService, NavTabService } from 'mobile-money';
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
export { MainComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9tb2JpbGUtbW9uZXktbGF5b3V0LyIsInNvdXJjZXMiOlsibGliL2xheW91dC9tYWluL21haW4uY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQW9CLHVCQUF1QixFQUFFLFNBQVMsRUFBRSxTQUFTLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDaEcsT0FBTyxFQUFFLGlCQUFpQixFQUFFLGFBQWEsRUFBRSxNQUFNLGNBQWMsQ0FBQztBQVNoRSxJQUFhLGFBQWEsR0FBMUIsTUFBYSxhQUFhO0lBT3RCLFlBQW9CLGFBQTRCLEVBQVUsaUJBQW9DO1FBQTFFLGtCQUFhLEdBQWIsYUFBYSxDQUFlO1FBQVUsc0JBQWlCLEdBQWpCLGlCQUFpQixDQUFtQjtRQUMxRixJQUFJLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxhQUFhLEVBQUUsRUFBRTtZQUN4QyxJQUFJLENBQUMsaUJBQWlCLENBQUMsS0FBSyxFQUFFLENBQUM7U0FDbEM7SUFDTCxDQUFDO0lBRU0sa0JBQWtCO0lBQ3pCLENBQUM7SUFFTSxjQUFjLENBQUMsTUFBa0I7UUFDcEMsTUFBTSxDQUFDLGNBQWMsRUFBRSxDQUFDO0lBQzVCLENBQUM7SUFFTSxTQUFTLENBQUMsTUFBVztRQUN4QixJQUFJLENBQUMsSUFBSSxHQUFHLE1BQU0sQ0FBQztRQUNuQixJQUFJLENBQUMsYUFBYSxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDaEQsQ0FBQztJQUVNLFdBQVcsQ0FBQyxNQUFNO1FBQ3JCLE1BQU0sWUFBWSxHQUFHLFFBQVEsQ0FBQyxjQUFjLENBQUMsZUFBZSxDQUFDLENBQUM7UUFDOUQsSUFBSSxDQUFDLFlBQVksQ0FBQyxRQUFRLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxFQUFFO1lBQ3ZDLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQztZQUN4QixJQUFJLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQztZQUNqQixJQUFJLENBQUMsYUFBYSxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7U0FDL0M7SUFDTCxDQUFDO0NBRUosQ0FBQTs7WUEzQnNDLGFBQWE7WUFBNkIsaUJBQWlCOztBQUx6RDtJQUFwQyxTQUFTLENBQUMsUUFBUSxFQUFFLEVBQUMsTUFBTSxFQUFFLElBQUksRUFBQyxDQUFDOzZDQUFpQztBQUY1RCxhQUFhO0lBTnpCLFNBQVMsQ0FBQztRQUNQLFFBQVEsRUFBRSxTQUFTO1FBQ25CLGtpRUFBb0M7UUFFcEMsZUFBZSxFQUFFLHVCQUF1QixDQUFDLE9BQU87O0tBQ25ELENBQUM7R0FDVyxhQUFhLENBa0N6QjtTQWxDWSxhQUFhIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQWZ0ZXJDb250ZW50SW5pdCwgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksIENvbXBvbmVudCwgVmlld0NoaWxkIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IEF1dG9Mb2dvdXRTZXJ2aWNlLCBOYXZUYWJTZXJ2aWNlIH0gZnJvbSAnbW9iaWxlLW1vbmV5JztcclxuaW1wb3J0IHsgVG9wQmFyQ29tcG9uZW50IH0gZnJvbSAnLi8uLi90b3AtYmFyL3RvcC1iYXIuY29tcG9uZW50JztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gICAgc2VsZWN0b3I6ICd2dC1tYWluJyxcclxuICAgIHRlbXBsYXRlVXJsOiAnLi9tYWluLmNvbXBvbmVudC5odG1sJyxcclxuICAgIHN0eWxlVXJsczogWycuL21haW4uY29tcG9uZW50LnNjc3MnXSxcclxuICAgIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuRGVmYXVsdCxcclxufSlcclxuZXhwb3J0IGNsYXNzIE1haW5Db21wb25lbnQgaW1wbGVtZW50cyBBZnRlckNvbnRlbnRJbml0IHtcclxuXHJcbiAgICBAVmlld0NoaWxkKCd0b3BCYXInLCB7c3RhdGljOiB0cnVlfSkgcHJpdmF0ZSB0b3BCYXI6IFRvcEJhckNvbXBvbmVudDtcclxuICAgIHB1YmxpYyBpc0xvYWRpbmc6IGJvb2xlYW47XHJcbiAgICBwdWJsaWMgaGlkZTogYm9vbGVhbjtcclxuICAgIHB1YmxpYyBhbGxvd091dHNpZGVDbGljazogYm9vbGVhbjtcclxuXHJcbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIG5hdlRhYlNlcnZpY2U6IE5hdlRhYlNlcnZpY2UsIHByaXZhdGUgYXV0b0xvZ291dFNlcnZpY2U6IEF1dG9Mb2dvdXRTZXJ2aWNlKSB7XHJcbiAgICAgICAgaWYgKHRoaXMuYXV0b0xvZ291dFNlcnZpY2UuZ2V0TGFzdEFjdGlvbigpKSB7XHJcbiAgICAgICAgICAgIHRoaXMuYXV0b0xvZ291dFNlcnZpY2UuY2hlY2soKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIG5nQWZ0ZXJDb250ZW50SW5pdCgpOiB2b2lkIHtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgY2xvc2VNb2JpbGVOYXYoJGV2ZW50OiBNb3VzZUV2ZW50KSB7XHJcbiAgICAgICAgJGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGNsaWNrSGlkZSgkZXZlbnQ6IGFueSkge1xyXG4gICAgICAgIHRoaXMuaGlkZSA9ICRldmVudDtcclxuICAgICAgICB0aGlzLm5hdlRhYlNlcnZpY2UuY2hhbmdlU2l6ZVRhYih0aGlzLmhpZGUpO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBvbkhpZGRlbk5hdigkZXZlbnQpIHtcclxuICAgICAgICBjb25zdCBoYW1idXJnZXJCdG4gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbmF2X2hhbWJ1cmdlcicpO1xyXG4gICAgICAgIGlmICghaGFtYnVyZ2VyQnRuLmNvbnRhaW5zKCRldmVudC50YXJnZXQpKSB7XHJcbiAgICAgICAgICAgIHRoaXMudG9wQmFyLmhpZGUgPSB0cnVlO1xyXG4gICAgICAgICAgICB0aGlzLmhpZGUgPSB0cnVlO1xyXG4gICAgICAgICAgICB0aGlzLm5hdlRhYlNlcnZpY2UuY2hhbmdlU2l6ZVRhYih0aGlzLmhpZGUpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbn1cclxuIl19