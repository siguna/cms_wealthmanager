import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AccountService, makeSlideInOut, UserToken } from 'mobile-money';
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
DropdownUserComponent = tslib_1.__decorate([
    Component({
        // tslint:disable-next-line:component-selector
        selector: 'vt-dropdown-user',
        template: "<div *ngIf=\"user\" class=\"user\" [class.open]=\"isShowLogout\"  >\r\n  <a vtRipple ripple=\"true\" (click)=\"toggle()\" class=\"profile-pic\" href=\"javascript:void(0)\"> \r\n    <img src=\"assets/images/users/varun.jpg\" alt=\"user-img\" width=\"36\" class=\"img-circle\"></a>\r\n  <div vtClickOutside (clickOutside)=\"outSideClick()\" @slideInOut *ngIf=\"isShowLogout\" class=\"dropdown_logout\">\r\n    <a class=\" fw-500 p-2 item\" href=\"javascript:void(0)\" (click)=\"logout()\">\r\n      <span>{{'dropdownUser.logout'|translate}}</span>\r\n      <span class=\"float-right fw-n\">{{user.userInfo.userData.userName}}</span>\r\n    </a>\r\n  </div>\r\n</div>\r\n",
        animations: [makeSlideInOut()],
        styles: [".dropdown_logout{right:0;left:auto;position:absolute;top:60px;background:#ffff;border:1px solid #efefef;width:245px;padding:.5rem;box-shadow:0 3px 12px rgba(0,0,0,.05)!important}.dropdown_logout::before{content:\"\";top:-3px;right:21%;width:10px;height:10px;transform:rotateZ(45deg);background-color:#fff;position:absolute}.dropdown_logout .item{display:flex;justify-content:space-around;color:#000}.dropdown_logout .item:hover{background:#f5f5f5}.profile-pic{line-height:55px;float:right;padding:0 10px!important;margin-right:30px;margin-top:3px;border-radius:60%}.profile-pic img{margin-right:0;border-radius:50%}"]
    })
], DropdownUserComponent);
export { DropdownUserComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZHJvcGRvd24tdXNlci5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9tb2JpbGUtbW9uZXktbGF5b3V0LyIsInNvdXJjZXMiOlsibGliL2xheW91dC9kcm9wZG93bi11c2VyL2Ryb3Bkb3duLXVzZXIuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQUMsU0FBUyxFQUFvQixNQUFNLGVBQWUsQ0FBQztBQUMzRCxPQUFPLEVBQUMsTUFBTSxFQUFDLE1BQU0saUJBQWlCLENBQUM7QUFDdkMsT0FBTyxFQUFFLGNBQWMsRUFBRSxjQUFjLEVBQUUsU0FBUyxFQUFFLE1BQU0sY0FBYyxDQUFDO0FBUXpFLElBQWEscUJBQXFCLEdBQWxDLE1BQWEscUJBQXFCO0lBSTlCLFlBQW9CLFdBQTJCLEVBQVUsTUFBYztRQUFuRCxnQkFBVyxHQUFYLFdBQVcsQ0FBZ0I7UUFBVSxXQUFNLEdBQU4sTUFBTSxDQUFRO1FBQ25FLElBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDLFdBQVcsQ0FBQyxZQUFZLEVBQUUsQ0FBQztJQUNoRCxDQUFDO0lBRU0sUUFBUTtJQUNmLENBQUM7SUFFTSxNQUFNO1FBQ1QsSUFBSSxDQUFDLFdBQVcsQ0FBQyxTQUFTLEVBQUUsQ0FBQztRQUM3QixJQUFJLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxDQUFDLGdCQUFnQixDQUFDLENBQUMsQ0FBQztJQUM3QyxDQUFDO0lBQ00sTUFBTTtRQUNULElBQUksQ0FBQyxZQUFZLEdBQUcsQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDO0lBQzNDLENBQUM7SUFDTSxZQUFZO1FBQ2YsSUFBSSxDQUFDLFlBQVksR0FBRyxLQUFLLENBQUM7SUFDOUIsQ0FBQztJQUNNLFdBQVc7SUFDbEIsQ0FBQztDQUNKLENBQUE7O1lBbkJvQyxjQUFjO1lBQWtCLE1BQU07O0FBSjlELHFCQUFxQjtJQVBqQyxTQUFTLENBQUM7UUFDUCw4Q0FBOEM7UUFDOUMsUUFBUSxFQUFFLGtCQUFrQjtRQUM1Qix3cUJBQTZDO1FBRTdDLFVBQVUsRUFBRSxDQUFDLGNBQWMsRUFBRSxDQUFDOztLQUNqQyxDQUFDO0dBQ1cscUJBQXFCLENBdUJqQztTQXZCWSxxQkFBcUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbXBvbmVudCwgT25EZXN0cm95LCBPbkluaXR9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQge1JvdXRlcn0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcclxuaW1wb3J0IHsgQWNjb3VudFNlcnZpY2UsIG1ha2VTbGlkZUluT3V0LCBVc2VyVG9rZW4gfSBmcm9tICdtb2JpbGUtbW9uZXknO1xyXG5AQ29tcG9uZW50KHtcclxuICAgIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTpjb21wb25lbnQtc2VsZWN0b3JcclxuICAgIHNlbGVjdG9yOiAndnQtZHJvcGRvd24tdXNlcicsXHJcbiAgICB0ZW1wbGF0ZVVybDogJy4vZHJvcGRvd24tdXNlci5jb21wb25lbnQuaHRtbCcsXHJcbiAgICBzdHlsZVVybHM6IFsnLi9kcm9wZG93bi11c2VyLmNvbXBvbmVudC5zY3NzJ10sXHJcbiAgICBhbmltYXRpb25zOiBbbWFrZVNsaWRlSW5PdXQoKV0sXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBEcm9wZG93blVzZXJDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQsIE9uRGVzdHJveSB7XHJcblxyXG4gICAgcHVibGljIHVzZXI6IFVzZXJUb2tlbjtcclxuICAgIHB1YmxpYyBpc1Nob3dMb2dvdXQ6IGJvb2xlYW47XHJcbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIGF1dGhTZXJ2aWNlOiBBY2NvdW50U2VydmljZSwgcHJpdmF0ZSByb3V0ZXI6IFJvdXRlcikge1xyXG4gICAgICAgIHRoaXMudXNlciA9IHRoaXMuYXV0aFNlcnZpY2UuZ2V0VXNlclRva2VuKCk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIG5nT25Jbml0KCk6IHZvaWQge1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBsb2dvdXQoKSB7XHJcbiAgICAgICAgdGhpcy5hdXRoU2VydmljZS52c2FMb2dvdXQoKTtcclxuICAgICAgICB0aGlzLnJvdXRlci5uYXZpZ2F0ZShbJy9hY2NvdW50L2xvZ2luJ10pO1xyXG4gICAgfVxyXG4gICAgcHVibGljIHRvZ2dsZSgpIHtcclxuICAgICAgICB0aGlzLmlzU2hvd0xvZ291dCA9ICF0aGlzLmlzU2hvd0xvZ291dDtcclxuICAgIH1cclxuICAgIHB1YmxpYyBvdXRTaWRlQ2xpY2soKSB7XHJcbiAgICAgICAgdGhpcy5pc1Nob3dMb2dvdXQgPSBmYWxzZTtcclxuICAgIH1cclxuICAgIHB1YmxpYyBuZ09uRGVzdHJveSgpOiB2b2lkIHtcclxuICAgIH1cclxufVxyXG4iXX0=