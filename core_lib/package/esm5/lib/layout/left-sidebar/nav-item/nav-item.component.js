import * as tslib_1 from "tslib";
import { ChangeDetectorRef, Component, ElementRef, Input, OnDestroy, OnInit, ViewChild, } from '@angular/core';
import { Router } from '@angular/router';
import { Constants, makeSlideInOut, NavTabService } from 'mobile-money';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
var MenuNavItemComponent = /** @class */ (function () {
    function MenuNavItemComponent(router, navTabService, change) {
        this.router = router;
        this.navTabService = navTabService;
        this.change = change;
        this.unsubscribe = new Subject();
        this.lenghtMenuHidden = Constants.LENGTH_MENU_HIDDEN_TEXT;
    }
    MenuNavItemComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.navTabService.tabTrigerActive$.pipe(takeUntil(this.unsubscribe)).subscribe(function (res) {
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
        { type: Router },
        { type: NavTabService },
        { type: ChangeDetectorRef }
    ]; };
    tslib_1.__decorate([
        Input()
    ], MenuNavItemComponent.prototype, "item", void 0);
    tslib_1.__decorate([
        Input()
    ], MenuNavItemComponent.prototype, "isActive", void 0);
    tslib_1.__decorate([
        Input()
    ], MenuNavItemComponent.prototype, "isOpen", void 0);
    tslib_1.__decorate([
        Input()
    ], MenuNavItemComponent.prototype, "isSelected", void 0);
    tslib_1.__decorate([
        Input()
    ], MenuNavItemComponent.prototype, "txtSearch", void 0);
    tslib_1.__decorate([
        ViewChild('itemLink', { static: false })
    ], MenuNavItemComponent.prototype, "itemLink", void 0);
    tslib_1.__decorate([
        ViewChild('itemToggle', { static: false })
    ], MenuNavItemComponent.prototype, "itemToggle", void 0);
    MenuNavItemComponent = tslib_1.__decorate([
        Component({
            // tslint:disable-next-line:component-selector
            selector: '[menu-nav-item]',
            template: "<div [hidden]=\"item.matched === false\">\r\n    <ng-container *ngIf=\"(item.items && item.items.length > 0)\">\r\n        <a #itemToggle class=\"hasChild menu-link\"\r\n            (click)=\"toggleSection($event, item)\">\r\n            <img class=\"metismenu-icon\" src=\"assets/images/{{ item.icon ?  item.icon : 'ic_function.svg' }}\">\r\n            <span vtTooltip [titleTooltip]='item.title' [posision]=\"'right'\" [isShow]='item.title.length >= (lenghtMenuHidden -(item.parentId ? item.parentId.length : 0)*2)'\r\n                 [vtHighlight]='txtSearch' [textDisplay]='item.title' [maxLengtTxt]=\"(lenghtMenuHidden - (item.parentId ? item.parentId.length : 0)*2)\"> {{ item.title}}</span>\r\n                 <i ><img class=\"{{ isOpen ? 'chevron-down-animate' : 'chevron-up-animate' }} arrow-items\" src=\"assets/images/next.svg\" /></i>\r\n        </a>\r\n        <ul @slideInOut *ngIf=\"isOpen\" class=\"d-block ov-h\">\r\n            <li menu-nav-item [txtSearch]='txtSearch' [class.open]=\"child.isSelected || (child.open && child.items.length)\" [isSelected]=\"child.isSelected\"\r\n                [isOpen]=\"child.open\" *ngFor=\"let child of item.items; trackBy: trackByFn\" [item]=\"child\">\r\n            </li>\r\n        </ul>\r\n    </ng-container>\r\n    <ng-container *ngIf=\"(!item.items || item.items.length == 0) && item.routerLink\">\r\n        <a #itemLink class=\"menu-link\"\r\n            (click)=\"onClick(item)\">\r\n            <img class=\"metismenu-icon\" src=\"assets/images/{{ item.icon ?  item.icon : 'ic_function.svg' }}\">\r\n            <span vtTooltip [titleTooltip]='item.title' [posision]=\"'right'\" [isShow]='item.title.length > (lenghtMenuHidden - (item.parentId ? item.parentId.length : 0)*2)'\r\n            [vtHighlight]='txtSearch' [textDisplay]='item.title' [maxLengtTxt]=\"(lenghtMenuHidden - (item.parentId ? item.parentId.length : 0)*2) \"> {{ item.title}}</span>\r\n        </a>\r\n    </ng-container>\r\n</div>",
            animations: [makeSlideInOut()],
            styles: [".menu-link{text-overflow:ellipsis;overflow:hidden}"]
        })
    ], MenuNavItemComponent);
    return MenuNavItemComponent;
}());
export { MenuNavItemComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmF2LWl0ZW0uY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vbW9iaWxlLW1vbmV5LWxheW91dC8iLCJzb3VyY2VzIjpbImxpYi9sYXlvdXQvbGVmdC1zaWRlYmFyL25hdi1pdGVtL25hdi1pdGVtLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUNILGlCQUFpQixFQUFFLFNBQVMsRUFDNUIsVUFBVSxFQUNWLEtBQUssRUFBRSxTQUFTLEVBQ2hCLE1BQU0sRUFDTixTQUFTLEdBQ1osTUFBTSxlQUFlLENBQUM7QUFDdkIsT0FBTyxFQUFFLE1BQU0sRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQ3pDLE9BQU8sRUFBRSxTQUFTLEVBQUUsY0FBYyxFQUFFLGFBQWEsRUFBRSxNQUFNLGNBQWMsQ0FBQztBQUV4RSxPQUFPLEVBQUUsT0FBTyxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBQy9CLE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQVUzQztJQWNJLDhCQUNZLE1BQWMsRUFDZCxhQUE0QixFQUM1QixNQUF5QjtRQUZ6QixXQUFNLEdBQU4sTUFBTSxDQUFRO1FBQ2Qsa0JBQWEsR0FBYixhQUFhLENBQWU7UUFDNUIsV0FBTSxHQUFOLE1BQU0sQ0FBbUI7UUFSN0IsZ0JBQVcsR0FBa0IsSUFBSSxPQUFPLEVBQUUsQ0FBQztRQUc1QyxxQkFBZ0IsR0FBRyxTQUFTLENBQUMsdUJBQXVCLENBQUM7SUFNeEQsQ0FBQztJQUVFLHVDQUFRLEdBQWY7UUFBQSxpQkFzQkM7UUFyQkcsSUFBSSxDQUFDLGFBQWEsQ0FBQyxnQkFBZ0IsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxVQUFDLEdBQUc7WUFDaEYsSUFBSSxHQUFHLElBQUksR0FBRyxDQUFDLElBQUksRUFBRTtnQkFDakIsSUFBSSxHQUFHLENBQUMsSUFBSSxDQUFDLEVBQUUsS0FB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Iiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcclxuICAgIENoYW5nZURldGVjdG9yUmVmLCBDb21wb25lbnQsXHJcbiAgICBFbGVtZW50UmVmLFxyXG4gICAgSW5wdXQsIE9uRGVzdHJveSxcclxuICAgIE9uSW5pdCxcclxuICAgIFZpZXdDaGlsZCxcclxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgUm91dGVyIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcclxuaW1wb3J0IHsgQ29uc3RhbnRzLCBtYWtlU2xpZGVJbk91dCwgTmF2VGFiU2VydmljZSB9IGZyb20gJ21vYmlsZS1tb25leSc7XHJcbmltcG9ydCB7IE5hdmlnYXRpb25JdGVtIH0gZnJvbSAnbW9iaWxlLW1vbmV5L2xpYi9zaGFyZWQvY29tbW9uL25hdi10YWIvc3RvcmUvbmF2aWdhdGlvbi10YWInO1xyXG5pbXBvcnQgeyBTdWJqZWN0IH0gZnJvbSAncnhqcyc7XHJcbmltcG9ydCB7IHRha2VVbnRpbCB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gICAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOmNvbXBvbmVudC1zZWxlY3RvclxyXG4gICAgc2VsZWN0b3I6ICdbbWVudS1uYXYtaXRlbV0nLFxyXG4gICAgdGVtcGxhdGVVcmw6ICcuL25hdi1pdGVtLmNvbXBvbmVudC5odG1sJyxcclxuICAgIHN0eWxlVXJsczogWycuL25hdi1pdGVtLmNvbXBvbmVudC5zY3NzJ10sXHJcbiAgICBhbmltYXRpb25zOiBbbWFrZVNsaWRlSW5PdXQoKV0sXHJcbiAgICAvLyBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaFxyXG59KVxyXG5leHBvcnQgY2xhc3MgTWVudU5hdkl0ZW1Db21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQsIE9uRGVzdHJveSB7XHJcblxyXG4gICAgQElucHV0KCkgcHVibGljIGl0ZW06IE5hdmlnYXRpb25JdGVtO1xyXG4gICAgQElucHV0KCkgcHVibGljIGlzQWN0aXZlOiBib29sZWFuO1xyXG4gICAgQElucHV0KCkgcHVibGljIGlzT3BlbjogYm9vbGVhbjtcclxuICAgIEBJbnB1dCgpIHB1YmxpYyBpc1NlbGVjdGVkOiBib29sZWFuO1xyXG4gICAgQElucHV0KCkgcHVibGljIHR4dFNlYXJjaDogc3RyaW5nO1xyXG4gICAgQFZpZXdDaGlsZCgnaXRlbUxpbmsnLCB7IHN0YXRpYzogZmFsc2UgfSkgcHVibGljIGl0ZW1MaW5rOiBFbGVtZW50UmVmO1xyXG4gICAgQFZpZXdDaGlsZCgnaXRlbVRvZ2dsZScsIHsgc3RhdGljOiBmYWxzZSB9KSBwdWJsaWMgaXRlbVRvZ2dsZTogRWxlbWVudFJlZjtcclxuICAgIHByaXZhdGUgdW5zdWJzY3JpYmU6IFN1YmplY3Q8dm9pZD4gPSBuZXcgU3ViamVjdCgpO1xyXG4gICAgcHVibGljIG9ubHlPcGVuOiBib29sZWFuO1xyXG5cclxuICAgIHB1YmxpYyBsZW5naHRNZW51SGlkZGVuID0gQ29uc3RhbnRzLkxFTkdUSF9NRU5VX0hJRERFTl9URVhUO1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKFxyXG4gICAgICAgIHByaXZhdGUgcm91dGVyOiBSb3V0ZXIsXHJcbiAgICAgICAgcHJpdmF0ZSBuYXZUYWJTZXJ2aWNlOiBOYXZUYWJTZXJ2aWNlLFxyXG4gICAgICAgIHByaXZhdGUgY2hhbmdlOiBDaGFuZ2VEZXRlY3RvclJlZixcclxuICAgICkgeyB9XHJcblxyXG4gICAgcHVibGljIG5nT25Jbml0KCk6IHZvaWQge1xyXG4gICAgICAgIHRoaXMubmF2VGFiU2VydmljZS50YWJUcmlnZXJBY3RpdmUkLnBpcGUodGFrZVVudGlsKHRoaXMudW5zdWJzY3JpYmUpKS5zdWJzY3JpYmUoKHJlcykgPT4ge1xyXG4gICAgICAgICAgICBpZiAocmVzICYmIHJlcy5pdGVtKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAocmVzLml0ZW0uaWQgPT09IHRoaXMuaXRlbS5pZCkge1xyXG4gICAgICAgICAgICAgICAgICAgIC8vIGlmICh0aGlzLml0ZW0ubWF0Y2hlZCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHsgdGhpcy5pdGVtTGluay5uYXRpdmVFbGVtZW50LmNsaWNrKCk7IH0pO1xyXG4gICAgICAgICAgICAgICAgICAgIC8vIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMubmF2VGFiU2VydmljZS5hZGRBY3RpdmVUYWIodGhpcy5pdGVtLCByZXMucGFyYW1zKTtcclxuICAgICAgICAgICAgICAgICAgICAvLyB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBpZiAocmVzLml0ZW0ucGFyZW50SWQubGVuZ3RoKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHJlcy5pdGVtLnBhcmVudElkLmZpbmRJbmRleCgoaXRlbSkgPT4gaXRlbSA9PT0gdGhpcy5pdGVtLmlkKSA+IC0xKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCF0aGlzLmlzT3Blbikge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMub25seU9wZW4gPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuaXRlbVRvZ2dsZS5uYXRpdmVFbGVtZW50LmNsaWNrKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyB0b2dnbGVTZWN0aW9uKCRldmVudCwgaXRlbSkge1xyXG4gICAgICAgICRldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgIHRoaXMubmF2VGFiU2VydmljZS50b2dnbGVNZW51SXRlbXMoaXRlbSwgaXRlbS5tYWluTWVudSwgdGhpcy5vbmx5T3Blbik7XHJcbiAgICAgICAgdGhpcy5vbmx5T3BlbiA9IGZhbHNlO1xyXG4gICAgICAgIHRoaXMuY2hhbmdlLmRldGVjdENoYW5nZXMoKTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgdHJhY2tCeUZuKGlkeDogbnVtYmVyLCBpdGVtOiBOYXZpZ2F0aW9uSXRlbSkge1xyXG4gICAgICAgIHJldHVybiBpdGVtLnRpdGxlICsgJ18nICsgaWR4O1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBvbkNsaWNrKGl0ZW06IE5hdmlnYXRpb25JdGVtKSB7XHJcbiAgICAgICAgdGhpcy5uYXZUYWJTZXJ2aWNlLmFkZEFjdGl2ZVRhYihpdGVtKTtcclxuICAgICAgICB0aGlzLnJvdXRlci5uYXZpZ2F0ZUJ5VXJsKGl0ZW0ucm91dGVyTGluaykuY2F0Y2goY29uc29sZS5sb2cpO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBuZ09uRGVzdHJveSgpOiB2b2lkIHtcclxuICAgICAgICB0aGlzLnVuc3Vic2NyaWJlLm5leHQoKTtcclxuICAgICAgICB0aGlzLnVuc3Vic2NyaWJlLmNvbXBsZXRlKCk7XHJcbiAgICB9XHJcblxyXG59XHJcbiJdfQ==