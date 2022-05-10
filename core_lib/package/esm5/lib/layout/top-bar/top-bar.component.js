import * as tslib_1 from "tslib";
import { Component, EventEmitter, Output } from '@angular/core';
import { Router } from '@angular/router';
var TopBarComponent = /** @class */ (function () {
    function TopBarComponent(router) {
        this.router = router;
        this.humberger = new EventEmitter();
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
        { type: Router }
    ]; };
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
    return TopBarComponent;
}());
export { TopBarComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidG9wLWJhci5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9tb2JpbGUtbW9uZXktbGF5b3V0LyIsInNvdXJjZXMiOlsibGliL2xheW91dC90b3AtYmFyL3RvcC1iYXIuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQUMsU0FBUyxFQUFFLFlBQVksRUFBVSxNQUFNLEVBQUMsTUFBTSxlQUFlLENBQUM7QUFDdEUsT0FBTyxFQUFFLE1BQU0sRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBT3pDO0lBSUkseUJBQW9CLE1BQWM7UUFBZCxXQUFNLEdBQU4sTUFBTSxDQUFRO1FBSGpCLGNBQVMsR0FBRyxJQUFJLFlBQVksRUFBTyxDQUFDO1FBQzlDLFNBQUksR0FBRyxLQUFLLENBQUM7SUFHcEIsQ0FBQztJQUVNLGtDQUFRLEdBQWY7SUFDQSxDQUFDO0lBRU0sK0JBQUssR0FBWjtRQUNJLElBQUksQ0FBQyxJQUFJLEdBQUcsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDO1FBQ3ZCLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUNuQyxDQUFDO0lBRU0sc0NBQVksR0FBbkI7UUFDSSxJQUFJLENBQUMsTUFBTSxDQUFDLGFBQWEsQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQy9CLGNBQU0sT0FBQSxNQUFNLENBQUMsUUFBUSxDQUFDLE1BQU0sRUFBRSxFQUF4QixDQUF3QixDQUNqQyxDQUFDO0lBQ04sQ0FBQztJQUVNLG9DQUFVLEdBQWpCO1FBQ0ksTUFBTSxDQUFDLFFBQVEsQ0FBQyxJQUFJLEdBQUcsR0FBRyxDQUFDO1FBQzNCLE9BQU8sQ0FBQyxHQUFHLENBQUMsUUFBUSxDQUFDLENBQUM7SUFDMUIsQ0FBQzs7Z0JBcEIyQixNQUFNOztJQUh4QjtRQUFULE1BQU0sRUFBRTtzREFBNEM7SUFENUMsZUFBZTtRQUwzQixTQUFTLENBQUM7WUFDUCxRQUFRLEVBQUUsWUFBWTtZQUN0QixxNUNBQXVDOztTQUUxQyxDQUFDO09BQ1csZUFBZSxDQTBCM0I7SUFBRCxzQkFBQztDQUFBLEFBMUJELElBMEJDO1NBMUJZLGVBQWUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbXBvbmVudCwgRXZlbnRFbWl0dGVyLCBPbkluaXQsIE91dHB1dH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IFJvdXRlciB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICAgIHNlbGVjdG9yOiAndnQtdG9wLWJhcicsXHJcbiAgICB0ZW1wbGF0ZVVybDogJy4vdG9wLWJhci5jb21wb25lbnQuaHRtbCcsXHJcbiAgICBzdHlsZVVybHM6IFsnLi90b3AtYmFyLmNvbXBvbmVudC5zY3NzJ10sXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBUb3BCYXJDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xyXG4gICAgQE91dHB1dCgpIHB1YmxpYyBodW1iZXJnZXIgPSBuZXcgRXZlbnRFbWl0dGVyPGFueT4oKTtcclxuICAgIHB1YmxpYyBoaWRlID0gZmFsc2U7XHJcblxyXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSByb3V0ZXI6IFJvdXRlcikge1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBuZ09uSW5pdCgpIHtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgY2xvc2UoKSB7XHJcbiAgICAgICAgdGhpcy5oaWRlID0gIXRoaXMuaGlkZTtcclxuICAgICAgICB0aGlzLmh1bWJlcmdlci5lbWl0KHRoaXMuaGlkZSk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGdvVG9Ib21lUGFnZSgpIHtcclxuICAgICAgICB0aGlzLnJvdXRlci5uYXZpZ2F0ZUJ5VXJsKCcvJykudGhlbihcclxuICAgICAgICAgICAgKCkgPT4gd2luZG93LmxvY2F0aW9uLnJlbG9hZCgpLFxyXG4gICAgICAgICk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHJlbG9hZFBhZ2UoKSB7XHJcbiAgICAgICAgd2luZG93LmxvY2F0aW9uLmhyZWYgPSAnLyc7XHJcbiAgICAgICAgY29uc29sZS5sb2coJ3JlbG9hZCcpO1xyXG4gICAgfVxyXG5cclxufVxyXG4iXX0=