import * as tslib_1 from "tslib";
import { Component, EventEmitter, Output } from '@angular/core';
import { Router } from '@angular/router';
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
tslib_1.__decorate([
    Output()
], TopBarComponent.prototype, "humberger", void 0);
TopBarComponent = tslib_1.__decorate([
    Component({
        selector: 'vt-top-bar',
        template: "<!-- ============================================================== -->\r\n<!-- Topbar header - style you can find in pages.scss -->\r\n<!-- ============================================================== -->\r\n\r\n\r\n<nav class=\"navbar navbar-default navbar-static-top m-b-0\">\r\n    <div class=\"navbar-header\">\r\n        <div class=\"app-header__logo\">\r\n            <div class=\"logo-src\">\r\n                <img src=\"assets/images/logo.svg\" (click)=\"goToHomePage()\">\r\n            </div>\r\n            <div class=\"header__pane ml-auto\">\r\n                <div>\r\n                    <button id=\"nav_hamburger\" type=\"button\" (click)='close()' class=\"hamburger hamburger--elastic\">\r\n                        <span class=\"hamburger-box\">\r\n                            <span class=\"hamburger-inner\"></span>\r\n                        </span>\r\n                    </button>\r\n                </div>\r\n            </div>\r\n        </div>\r\n        <!-- /Logo -->\r\n        <div class=\"{{hide ? 'un-hidden-user' : 'hidden-user'}} nav navbar-top-links navbar-right pull-right\">\r\n            <vt-dropdown-user></vt-dropdown-user>\r\n            <vt-language-selector></vt-language-selector>\r\n        </div>\r\n        <!-- /.navbar-header -->\r\n        <!-- /.navbar-top-links -->\r\n        <!-- /.navbar-static-side -->\r\n    </div>\r\n</nav>\r\n<!-- End Top Navigation -->",
        styles: ["@media screen and (max-width:767.98px){.hidden-logo{width:0!important;transition:450ms ease-in-out}.logo-src{transition:450ms linear}.hidden-user{transform:translateY(-200px);opacity:0;transition:550ms linear}.un-hidden-user{transform:translateY(0);opacity:1;transition:550ms linear}.app-logo-none{max-width:0!important;transition:550ms linear}.app-header__logo{transition:550ms ease-in-out;justify-content:center}}.app-header__logo{width:300px}.logo-src{cursor:pointer}"]
    })
], TopBarComponent);
export { TopBarComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidG9wLWJhci5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9tb2JpbGUtbW9uZXktbGF5b3V0LyIsInNvdXJjZXMiOlsibGliL2xheW91dC90b3AtYmFyL3RvcC1iYXIuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQUMsU0FBUyxFQUFFLFlBQVksRUFBVSxNQUFNLEVBQUMsTUFBTSxlQUFlLENBQUM7QUFDdEUsT0FBTyxFQUFFLE1BQU0sRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBT3pDLElBQWEsZUFBZSxHQUE1QixNQUFhLGVBQWU7SUFJeEIsWUFBb0IsTUFBYztRQUFkLFdBQU0sR0FBTixNQUFNLENBQVE7UUFIakIsY0FBUyxHQUFHLElBQUksWUFBWSxFQUFPLENBQUM7UUFDOUMsU0FBSSxHQUFHLEtBQUssQ0FBQztJQUdwQixDQUFDO0lBRU0sUUFBUTtJQUNmLENBQUM7SUFFTSxLQUFLO1FBQ1IsSUFBSSxDQUFDLElBQUksR0FBRyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUM7UUFDdkIsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQ25DLENBQUM7SUFFTSxZQUFZO1FBQ2YsSUFBSSxDQUFDLE1BQU0sQ0FBQyxhQUFhLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUMvQixHQUFHLEVBQUUsQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLE1BQU0sRUFBRSxDQUNqQyxDQUFDO0lBQ04sQ0FBQztJQUVNLFVBQVU7UUFDYixNQUFNLENBQUMsUUFBUSxDQUFDLElBQUksR0FBRyxHQUFHLENBQUM7UUFDM0IsT0FBTyxDQUFDLEdBQUcsQ0FBQyxRQUFRLENBQUMsQ0FBQztJQUMxQixDQUFDO0NBRUosQ0FBQTs7WUF0QitCLE1BQU07O0FBSHhCO0lBQVQsTUFBTSxFQUFFO2tEQUE0QztBQUQ1QyxlQUFlO0lBTDNCLFNBQVMsQ0FBQztRQUNQLFFBQVEsRUFBRSxZQUFZO1FBQ3RCLHE1Q0FBdUM7O0tBRTFDLENBQUM7R0FDVyxlQUFlLENBMEIzQjtTQTFCWSxlQUFlIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb21wb25lbnQsIEV2ZW50RW1pdHRlciwgT25Jbml0LCBPdXRwdXR9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBSb3V0ZXIgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgICBzZWxlY3RvcjogJ3Z0LXRvcC1iYXInLFxyXG4gICAgdGVtcGxhdGVVcmw6ICcuL3RvcC1iYXIuY29tcG9uZW50Lmh0bWwnLFxyXG4gICAgc3R5bGVVcmxzOiBbJy4vdG9wLWJhci5jb21wb25lbnQuc2NzcyddLFxyXG59KVxyXG5leHBvcnQgY2xhc3MgVG9wQmFyQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcclxuICAgIEBPdXRwdXQoKSBwdWJsaWMgaHVtYmVyZ2VyID0gbmV3IEV2ZW50RW1pdHRlcjxhbnk+KCk7XHJcbiAgICBwdWJsaWMgaGlkZSA9IGZhbHNlO1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgcm91dGVyOiBSb3V0ZXIpIHtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgbmdPbkluaXQoKSB7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGNsb3NlKCkge1xyXG4gICAgICAgIHRoaXMuaGlkZSA9ICF0aGlzLmhpZGU7XHJcbiAgICAgICAgdGhpcy5odW1iZXJnZXIuZW1pdCh0aGlzLmhpZGUpO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBnb1RvSG9tZVBhZ2UoKSB7XHJcbiAgICAgICAgdGhpcy5yb3V0ZXIubmF2aWdhdGVCeVVybCgnLycpLnRoZW4oXHJcbiAgICAgICAgICAgICgpID0+IHdpbmRvdy5sb2NhdGlvbi5yZWxvYWQoKSxcclxuICAgICAgICApO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyByZWxvYWRQYWdlKCkge1xyXG4gICAgICAgIHdpbmRvdy5sb2NhdGlvbi5ocmVmID0gJy8nO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKCdyZWxvYWQnKTtcclxuICAgIH1cclxuXHJcbn1cclxuIl19