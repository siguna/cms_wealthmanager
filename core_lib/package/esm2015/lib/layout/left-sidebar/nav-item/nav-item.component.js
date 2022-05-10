import * as tslib_1 from "tslib";
import { ChangeDetectorRef, Component, ElementRef, Input, OnDestroy, OnInit, ViewChild, } from '@angular/core';
import { Router } from '@angular/router';
import { Constants, makeSlideInOut, NavTabService } from 'mobile-money';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
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
export { MenuNavItemComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmF2LWl0ZW0uY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vbW9iaWxlLW1vbmV5LWxheW91dC8iLCJzb3VyY2VzIjpbImxpYi9sYXlvdXQvbGVmdC1zaWRlYmFyL25hdi1pdGVtL25hdi1pdGVtLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUNILGlCQUFpQixFQUFFLFNBQVMsRUFDNUIsVUFBVSxFQUNWLEtBQUssRUFBRSxTQUFTLEVBQ2hCLE1BQU0sRUFDTixTQUFTLEdBQ1osTUFBTSxlQUFlLENBQUM7QUFDdkIsT0FBTyxFQUFFLE1BQU0sRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQ3pDLE9BQU8sRUFBRSxTQUFTLEVBQUUsY0FBYyxFQUFFLGFBQWEsRUFBRSxNQUFNLGNBQWMsQ0FBQztBQUV4RSxPQUFPLEVBQUUsT0FBTyxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBQy9CLE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQVUzQyxJQUFhLG9CQUFvQixHQUFqQyxNQUFhLG9CQUFvQjtJQWM3QixZQUNZLE1BQWMsRUFDZCxhQUE0QixFQUM1QixNQUF5QjtRQUZ6QixXQUFNLEdBQU4sTUFBTSxDQUFRO1FBQ2Qsa0JBQWEsR0FBYixhQUFhLENBQWU7UUFDNUIsV0FBTSxHQUFOLE1BQU0sQ0FBbUI7UUFSN0IsZ0JBQVcsR0FBa0IsSUFBSSxPQUFPLEVBQUUsQ0FBQztRQUc1QyxxQkFBZ0IsR0FBRyxTQUFTLENBQUMsdUJBQXVCLENBQUM7SUFNeEQsQ0FBQztJQUVFLFFBQVE7UUFDWCxJQUFJLENBQUMsYUFBYSxDQUFDLGdCQUFnQixDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDLENBQUMsU0FBUyxDQUFDLENBQUMsR0FBRyxFQUFFLEVBQUU7WUFDcEYsSUFBSSxHQUFHLElBQUksR0FBRyxDQUFDLElBQUksRUFBRTtnQkFDakIsSUFBSSxHQUFHLENBQUMsSUFBSSxDQUFDLEVBQUUsS0FBSyxJQUFJLENBQUMsSUFBSSxDQUFDLEVBQUUsRUFBRTtvQkFDOUIsMkJBQTJCO29CQUN2QixVQUFVLENBQUMsR0FBRyxFQUFFLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQyxhQUFhLENBQUMsS0FBSyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztvQkFDL0QsV0FBVztvQkFDUCxJQUFJLENBQUMsYUFBYSxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsSUFBSSxFQUFFLEdBQUcsQ0FBQyxNQUFNLENBQUMsQ0FBQztvQkFDM0QsSUFBSTtpQkFDUDtnQkFDRCxJQUFJLEdBQUcsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLE1BQU0sRUFBRTtvQkFDMUIsSUFBSSxHQUFHLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxTQUFTLENBQUMsQ0FBQyxJQUFJLEVBQUUsRUFBRSxDQUFDLElBQUksS0FBSyxJQUFJLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxHQUFHLENBQUMsQ0FBQyxFQUFFO3dCQUNuRSxVQUFVLENBQUMsR0FBRyxFQUFFOzRCQUNaLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxFQUFFO2dDQUNkLElBQUksQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFDO2dDQUNyQixJQUFJLENBQUMsVUFBVSxDQUFDLGFBQWEsQ0FBQyxLQUFLLEVBQUUsQ0FBQzs2QkFDekM7d0JBQ0wsQ0FBQyxDQUFDLENBQUM7cUJBQ047aUJBQ0o7YUFDSjtRQUNMLENBQUMsQ0FBQyxDQUFDO0lBQ1AsQ0FBQztJQUVNLGFBQWEsQ0FBQyxNQUFNLEVBQUUsSUFBSTtRQUM3QixNQUFNLENBQUMsY0FBYyxFQUFFLENBQUM7UUFDeEIsSUFBSSxDQUFDLGFBQWEsQ0FBQyxlQUFlLENBQUMsSUFBSSxFQUFFLElBQUksQ0FBQyxRQUFRLEVBQUUsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDO1FBQ3ZFLElBQUksQ0FBQyxRQUFRLEdBQUcsS0FBSyxDQUFDO1FBQ3RCLElBQUksQ0FBQyxNQUFNLENBQUMsYUFBYSxFQUFFLENBQUM7SUFDaEMsQ0FBQztJQUVNLFNBQVMsQ0FBQyxHQUFXLEVBQUUsSUFBb0I7UUFDOUMsT0FBTyxJQUFJLENBQUMsS0FBSyxHQUFHLEdBQUcsR0FBRyxHQUFHLENBQUM7SUFDbEMsQ0FBQztJQUVNLE9BQU8sQ0FBQyxJQUFvQjtRQUMvQixJQUFJLENBQUMsYUFBYSxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUN0QyxJQUFJLENBQUMsTUFBTSxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsQ0FBQztJQUNsRSxDQUFDO0lBRU0sV0FBVztRQUNkLElBQUksQ0FBQyxXQUFXLENBQUMsSUFBSSxFQUFFLENBQUM7UUFDeEIsSUFBSSxDQUFDLFdBQVcsQ0FBQyxRQUFRLEVBQUUsQ0FBQztJQUNoQyxDQUFDO0NBRUosQ0FBQTs7WUFsRHVCLE1BQU07WUFDQyxhQUFhO1lBQ3BCLGlCQUFpQjs7QUFmNUI7SUFBUixLQUFLLEVBQUU7a0RBQTZCO0FBQzVCO0lBQVIsS0FBSyxFQUFFO3NEQUEwQjtBQUN6QjtJQUFSLEtBQUssRUFBRTtvREFBd0I7QUFDdkI7SUFBUixLQUFLLEVBQUU7d0RBQTRCO0FBQzNCO0lBQVIsS0FBSyxFQUFFO3VEQUEwQjtBQUNRO0lBQXpDLFNBQVMsQ0FBQyxVQUFVLEVBQUUsRUFBRSxNQUFNLEVBQUUsS0FBSyxFQUFFLENBQUM7c0RBQTZCO0FBQzFCO0lBQTNDLFNBQVMsQ0FBQyxZQUFZLEVBQUUsRUFBRSxNQUFNLEVBQUUsS0FBSyxFQUFFLENBQUM7d0RBQStCO0FBUmpFLG9CQUFvQjtJQVJoQyxTQUFTLENBQUM7UUFDUCw4Q0FBOEM7UUFDOUMsUUFBUSxFQUFFLGlCQUFpQjtRQUMzQixnOERBQXdDO1FBRXhDLFVBQVUsRUFBRSxDQUFDLGNBQWMsRUFBRSxDQUFDOztLQUVqQyxDQUFDO0dBQ1csb0JBQW9CLENBaUVoQztTQWpFWSxvQkFBb0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xyXG4gICAgQ2hhbmdlRGV0ZWN0b3JSZWYsIENvbXBvbmVudCxcclxuICAgIEVsZW1lbnRSZWYsXHJcbiAgICBJbnB1dCwgT25EZXN0cm95LFxyXG4gICAgT25Jbml0LFxyXG4gICAgVmlld0NoaWxkLFxyXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBSb3V0ZXIgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xyXG5pbXBvcnQgeyBDb25zdGFudHMsIG1ha2VTbGlkZUluT3V0LCBOYXZUYWJTZXJ2aWNlIH0gZnJvbSAnbW9iaWxlLW1vbmV5JztcclxuaW1wb3J0IHsgTmF2aWdhdGlvbkl0ZW0gfSBmcm9tICdtb2JpbGUtbW9uZXkvbGliL3NoYXJlZC9jb21tb24vbmF2LXRhYi9zdG9yZS9uYXZpZ2F0aW9uLXRhYic7XHJcbmltcG9ydCB7IFN1YmplY3QgfSBmcm9tICdyeGpzJztcclxuaW1wb3J0IHsgdGFrZVVudGlsIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6Y29tcG9uZW50LXNlbGVjdG9yXHJcbiAgICBzZWxlY3RvcjogJ1ttZW51LW5hdi1pdGVtXScsXHJcbiAgICB0ZW1wbGF0ZVVybDogJy4vbmF2LWl0ZW0uY29tcG9uZW50Lmh0bWwnLFxyXG4gICAgc3R5bGVVcmxzOiBbJy4vbmF2LWl0ZW0uY29tcG9uZW50LnNjc3MnXSxcclxuICAgIGFuaW1hdGlvbnM6IFttYWtlU2xpZGVJbk91dCgpXSxcclxuICAgIC8vIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBNZW51TmF2SXRlbUNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCwgT25EZXN0cm95IHtcclxuXHJcbiAgICBASW5wdXQoKSBwdWJsaWMgaXRlbTogTmF2aWdhdGlvbkl0ZW07XHJcbiAgICBASW5wdXQoKSBwdWJsaWMgaXNBY3RpdmU6IGJvb2xlYW47XHJcbiAgICBASW5wdXQoKSBwdWJsaWMgaXNPcGVuOiBib29sZWFuO1xyXG4gICAgQElucHV0KCkgcHVibGljIGlzU2VsZWN0ZWQ6IGJvb2xlYW47XHJcbiAgICBASW5wdXQoKSBwdWJsaWMgdHh0U2VhcmNoOiBzdHJpbmc7XHJcbiAgICBAVmlld0NoaWxkKCdpdGVtTGluaycsIHsgc3RhdGljOiBmYWxzZSB9KSBwdWJsaWMgaXRlbUxpbms6IEVsZW1lbnRSZWY7XHJcbiAgICBAVmlld0NoaWxkKCdpdGVtVG9nZ2xlJywgeyBzdGF0aWM6IGZhbHNlIH0pIHB1YmxpYyBpdGVtVG9nZ2xlOiBFbGVtZW50UmVmO1xyXG4gICAgcHJpdmF0ZSB1bnN1YnNjcmliZTogU3ViamVjdDx2b2lkPiA9IG5ldyBTdWJqZWN0KCk7XHJcbiAgICBwdWJsaWMgb25seU9wZW46IGJvb2xlYW47XHJcblxyXG4gICAgcHVibGljIGxlbmdodE1lbnVIaWRkZW4gPSBDb25zdGFudHMuTEVOR1RIX01FTlVfSElEREVOX1RFWFQ7XHJcblxyXG4gICAgY29uc3RydWN0b3IoXHJcbiAgICAgICAgcHJpdmF0ZSByb3V0ZXI6IFJvdXRlcixcclxuICAgICAgICBwcml2YXRlIG5hdlRhYlNlcnZpY2U6IE5hdlRhYlNlcnZpY2UsXHJcbiAgICAgICAgcHJpdmF0ZSBjaGFuZ2U6IENoYW5nZURldGVjdG9yUmVmLFxyXG4gICAgKSB7IH1cclxuXHJcbiAgICBwdWJsaWMgbmdPbkluaXQoKTogdm9pZCB7XHJcbiAgICAgICAgdGhpcy5uYXZUYWJTZXJ2aWNlLnRhYlRyaWdlckFjdGl2ZSQucGlwZSh0YWtlVW50aWwodGhpcy51bnN1YnNjcmliZSkpLnN1YnNjcmliZSgocmVzKSA9PiB7XHJcbiAgICAgICAgICAgIGlmIChyZXMgJiYgcmVzLml0ZW0pIHtcclxuICAgICAgICAgICAgICAgIGlmIChyZXMuaXRlbS5pZCA9PT0gdGhpcy5pdGVtLmlkKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gaWYgKHRoaXMuaXRlbS5tYXRjaGVkKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4geyB0aGlzLml0ZW1MaW5rLm5hdGl2ZUVsZW1lbnQuY2xpY2soKTsgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5uYXZUYWJTZXJ2aWNlLmFkZEFjdGl2ZVRhYih0aGlzLml0ZW0sIHJlcy5wYXJhbXMpO1xyXG4gICAgICAgICAgICAgICAgICAgIC8vIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGlmIChyZXMuaXRlbS5wYXJlbnRJZC5sZW5ndGgpIHtcclxuICAgICAgICAgICAgICAgICAgICBpZiAocmVzLml0ZW0ucGFyZW50SWQuZmluZEluZGV4KChpdGVtKSA9PiBpdGVtID09PSB0aGlzLml0ZW0uaWQpID4gLTEpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoIXRoaXMuaXNPcGVuKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5vbmx5T3BlbiA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5pdGVtVG9nZ2xlLm5hdGl2ZUVsZW1lbnQuY2xpY2soKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHRvZ2dsZVNlY3Rpb24oJGV2ZW50LCBpdGVtKSB7XHJcbiAgICAgICAgJGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgdGhpcy5uYXZUYWJTZXJ2aWNlLnRvZ2dsZU1lbnVJdGVtcyhpdGVtLCBpdGVtLm1haW5NZW51LCB0aGlzLm9ubHlPcGVuKTtcclxuICAgICAgICB0aGlzLm9ubHlPcGVuID0gZmFsc2U7XHJcbiAgICAgICAgdGhpcy5jaGFuZ2UuZGV0ZWN0Q2hhbmdlcygpO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyB0cmFja0J5Rm4oaWR4OiBudW1iZXIsIGl0ZW06IE5hdmlnYXRpb25JdGVtKSB7XHJcbiAgICAgICAgcmV0dXJuIGl0ZW0udGl0bGUgKyAnXycgKyBpZHg7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIG9uQ2xpY2soaXRlbTogTmF2aWdhdGlvbkl0ZW0pIHtcclxuICAgICAgICB0aGlzLm5hdlRhYlNlcnZpY2UuYWRkQWN0aXZlVGFiKGl0ZW0pO1xyXG4gICAgICAgIHRoaXMucm91dGVyLm5hdmlnYXRlQnlVcmwoaXRlbS5yb3V0ZXJMaW5rKS5jYXRjaChjb25zb2xlLmxvZyk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIG5nT25EZXN0cm95KCk6IHZvaWQge1xyXG4gICAgICAgIHRoaXMudW5zdWJzY3JpYmUubmV4dCgpO1xyXG4gICAgICAgIHRoaXMudW5zdWJzY3JpYmUuY29tcGxldGUoKTtcclxuICAgIH1cclxuXHJcbn1cclxuIl19