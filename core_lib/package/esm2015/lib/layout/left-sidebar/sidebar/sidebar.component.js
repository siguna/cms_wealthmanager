import * as tslib_1 from "tslib";
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, ElementRef, EventEmitter, HostListener, Input, OnDestroy, OnInit, Output, ViewChild, ViewRef } from '@angular/core';
import { NavTabService, slideInOut } from 'mobile-money';
import { Subscription } from 'rxjs';
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
tslib_1.__decorate([
    Input()
], SidebarComponent.prototype, "beHide", void 0);
tslib_1.__decorate([
    Output()
], SidebarComponent.prototype, "onHiddenNav", void 0);
tslib_1.__decorate([
    ViewChild('input', { static: false })
], SidebarComponent.prototype, "inputSearch", void 0);
tslib_1.__decorate([
    HostListener('window:resize', ['$event'])
], SidebarComponent.prototype, "onResize", null);
SidebarComponent = tslib_1.__decorate([
    Component({
        selector: 'vt-sidebar',
        template: "<!-- ============================================================== -->\r\n<!-- Left Sidebar - style you can find in sidebar.scss  -->\r\n<!-- ============================================================== -->\r\n<div [@slideInOut]=\"toggleNavMenu()\" vtClickOutside (clickOutside)=\"clickOutside($event)\" [disableOutsideClick]=\"disableOutsideClick\" class=\"navbar-default sidebar\" role=\"navigation\">\r\n    <div class=\"sidebar-nav slimscrollsidebar\">\r\n        <div class=\"app-sidebar__inner\" *ngIf=\"vm$ | async as vm\">\r\n            <ul class=\"nav vertical-nav-menu\" id=\"side-menu\">\r\n                <li>\r\n                    <div class=\"search-box\">\r\n                        <input class=\"form-input ml-2 ng-pristine ng-valid ng-touched\" placeholder=\"T\u00ECm ki\u1EBFm\"\r\n                            name=\"searchTerm\" type=\"text\" #input (keyup)=\"handleKeyup($event, input.value)\">\r\n                        <span (click)=\"clearTxtSearch()\" *ngIf=\"input.value.length\" class=\"clear-search\"><img\r\n                                src=\"./assets/images/close.svg\" /></span>\r\n                    </div>\r\n\r\n                </li>\r\n                <li *ngFor=\"let item of vm; trackBy: trackByFn\" [class.active]=\"item.active\"\r\n                    [class.open]=\"item.isSelected || item.open\" menu-nav-item [txtSearch]='input.value' [item]=\"item\"\r\n                    [isOpen]=\"item.open\" [isSelected]=\"item.isSelected\">\r\n                </li>\r\n            </ul>\r\n        </div>\r\n\r\n    </div>\r\n\r\n</div>\r\n<!-- ============================================================== -->\r\n<!-- End Left Sidebar -->\r\n<!-- ============================================================== -->",
        changeDetection: ChangeDetectionStrategy.OnPush,
        animations: [slideInOut()],
        styles: [".sidebar{scrollbar-width:thin!important;overflow-y:overlay;scrollbar-color:#d2d2d2 linear-gradient(0deg,#17adb0 0,#0952be 100%)!important}.sidebar::-webkit-scrollbar{width:7px;background:-webkit-gradient(linear,left bottom,left top,from(#17adb0),to(#0952be))}.sidebar::-webkit-scrollbar-thumb{border-radius:10px;background:rgba(255,255,255,.5);box-shadow:0 0 6px rgba(0,0,0,.5)}.clear-search{position:absolute;right:-1px;top:26px;width:20px;height:20px;cursor:pointer}.clear-search img{width:8px;height:8px;opacity:.5}.nav .open>div>a:focus,.nav .open>div>a:hover,::ng-deep.nav .open>div>a{background:rgba(255,255,255,.2)}"]
    })
], SidebarComponent);
export { SidebarComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2lkZWJhci5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9tb2JpbGUtbW9uZXktbGF5b3V0LyIsInNvdXJjZXMiOlsibGliL2xheW91dC9sZWZ0LXNpZGViYXIvc2lkZWJhci9zaWRlYmFyLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFFLHVCQUF1QixFQUFFLGlCQUFpQixFQUFFLFNBQVMsRUFBRSxVQUFVLEVBQUUsWUFBWSxFQUFFLFlBQVksRUFDakcsS0FBSyxFQUFFLFNBQVMsRUFBRSxNQUFNLEVBQUUsTUFBTSxFQUFFLFNBQVMsRUFBRSxPQUFPLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDakYsT0FBTyxFQUFFLGFBQWEsRUFBRSxVQUFVLEVBQUUsTUFBTSxjQUFjLENBQUM7QUFFekQsT0FBTyxFQUFjLFlBQVksRUFBRSxNQUFNLE1BQU0sQ0FBQztBQVVoRCxJQUFhLGdCQUFnQixHQUE3QixNQUFhLGdCQUFnQjtJQVV6QixZQUNZLGFBQTRCLEVBQzVCLE1BQXlCO1FBRHpCLGtCQUFhLEdBQWIsYUFBYSxDQUFlO1FBQzVCLFdBQU0sR0FBTixNQUFNLENBQW1CO1FBWDlCLGdCQUFXLEdBQUcsSUFBSSxDQUFDO1FBRTFCLCtDQUErQztRQUM5QixnQkFBVyxHQUFHLElBQUksWUFBWSxFQUFFLENBQUM7UUFHM0MsZ0JBQVcsR0FBRyxJQUFJLFlBQVksRUFBRSxDQUFDO1FBQ2pDLHdCQUFtQixHQUFHLElBQUksQ0FBQztJQUtsQyxDQUFDO0lBR00sUUFBUSxDQUFDLEtBQUs7UUFDakIsSUFBSSxDQUFDLFVBQVUsRUFBRSxDQUFDO0lBQ3RCLENBQUM7SUFFTSxRQUFRO1FBQ1gsSUFBSSxDQUFDLFVBQVUsRUFBRSxDQUFDO1FBQ2xCLElBQUksQ0FBQyxHQUFHLEdBQUcsSUFBSSxDQUFDLGFBQWEsQ0FBQyxZQUFZLEVBQUUsQ0FBQztRQUM3QyxJQUFJLENBQUMsYUFBYSxDQUFDLGFBQWEsRUFBRSxDQUFDO1FBQ25DLElBQUksQ0FBQyxXQUFXLEdBQUcsSUFBSSxDQUFDLGFBQWEsQ0FBQyxZQUFZLEVBQUUsQ0FBQyxTQUFTLENBQUMsQ0FBQyxHQUFHLEVBQUUsRUFBRTtZQUNuRSxJQUFJLElBQUksQ0FBQyxNQUFNLElBQUksQ0FBRSxJQUFJLENBQUMsTUFBa0IsQ0FBQyxTQUFTLEVBQUU7Z0JBQ3BELElBQUksQ0FBQyxNQUFNLENBQUMsYUFBYSxFQUFFLENBQUM7YUFDL0I7UUFDTCxDQUFDLENBQUMsQ0FBQztJQUNQLENBQUM7SUFFTSxTQUFTLENBQUMsR0FBVyxFQUFFLElBQW9CO1FBQzlDLE9BQU8sSUFBSSxDQUFDLEtBQUssR0FBRyxHQUFHLEdBQUcsR0FBRyxDQUFDO0lBQ2xDLENBQUM7SUFFTSxjQUFjO1FBQ2pCLElBQUksQ0FBQyxXQUFXLENBQUMsYUFBYSxDQUFDLEtBQUssR0FBRyxFQUFFLENBQUM7UUFDMUMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxzQkFBc0IsQ0FBQyxFQUFFLENBQUMsQ0FBQztJQUNsRCxDQUFDO0lBRUQ7OztPQUdHO0lBQ0ksYUFBYTtRQUNoQixPQUFPLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDO0lBQ3RDLENBQUM7SUFFTSxXQUFXLENBQUMsTUFBcUIsRUFBRSxLQUFhO1FBQ25ELElBQUksQ0FBQyxhQUFhLENBQUMsc0JBQXNCLENBQUMsS0FBSyxDQUFDLENBQUM7SUFDckQsQ0FBQztJQUVNLFlBQVksQ0FBQyxNQUFNO1FBQ3RCLElBQUksQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDO0lBQ2xDLENBQUM7SUFFTSxVQUFVO1FBQ2IsTUFBTSxXQUFXLEdBQUcsUUFBUSxDQUFDLGVBQWUsQ0FBQyxXQUFXLENBQUM7UUFDekQsSUFBSSxXQUFXLEdBQUcsSUFBSSxFQUFFO1lBQ3BCLE9BQU8sQ0FBQyxHQUFHLENBQUMscUJBQXFCLENBQUMsQ0FBQztZQUNuQyxJQUFJLENBQUMsbUJBQW1CLEdBQUcsS0FBSyxDQUFDO1NBQ3BDO2FBQU07WUFDSCxJQUFJLENBQUMsbUJBQW1CLEdBQUcsSUFBSSxDQUFDO1NBQ25DO0lBQ0wsQ0FBQztJQUVNLFdBQVc7UUFDZCxJQUFJLENBQUMsV0FBVyxDQUFDLFdBQVcsRUFBRSxDQUFDO0lBQ25DLENBQUM7Q0FDSixDQUFBOztZQTFEOEIsYUFBYTtZQUNwQixpQkFBaUI7O0FBVjVCO0lBQVIsS0FBSyxFQUFFO2dEQUF3QjtBQUV0QjtJQUFULE1BQU0sRUFBRTtxREFBeUM7QUFDYjtJQUFwQyxTQUFTLENBQUMsT0FBTyxFQUFFLEVBQUMsTUFBTSxFQUFFLEtBQUssRUFBQyxDQUFDO3FEQUFnQztBQVdwRTtJQURDLFlBQVksQ0FBQyxlQUFlLEVBQUUsQ0FBQyxRQUFRLENBQUMsQ0FBQztnREFHekM7QUFsQlEsZ0JBQWdCO0lBUjVCLFNBQVMsQ0FBQztRQUNQLFFBQVEsRUFBRSxZQUFZO1FBQ3RCLDB1REFBdUM7UUFFdkMsZUFBZSxFQUFFLHVCQUF1QixDQUFDLE1BQU07UUFDL0MsVUFBVSxFQUFFLENBQUMsVUFBVSxFQUFFLENBQUM7O0tBQzdCLENBQUM7R0FFVyxnQkFBZ0IsQ0FxRTVCO1NBckVZLGdCQUFnQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENoYW5nZURldGVjdGlvblN0cmF0ZWd5LCBDaGFuZ2VEZXRlY3RvclJlZiwgQ29tcG9uZW50LCBFbGVtZW50UmVmLCBFdmVudEVtaXR0ZXIsIEhvc3RMaXN0ZW5lcixcclxuICAgICBJbnB1dCwgT25EZXN0cm95LCBPbkluaXQsIE91dHB1dCwgVmlld0NoaWxkLCBWaWV3UmVmIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IE5hdlRhYlNlcnZpY2UsIHNsaWRlSW5PdXQgfSBmcm9tICdtb2JpbGUtbW9uZXknO1xyXG5pbXBvcnQgeyBOYXZpZ2F0aW9uSXRlbSB9IGZyb20gJ21vYmlsZS1tb25leS9saWIvc2hhcmVkL2NvbW1vbi9uYXYtdGFiL3N0b3JlL25hdmlnYXRpb24tdGFiJztcclxuaW1wb3J0IHsgT2JzZXJ2YWJsZSwgU3Vic2NyaXB0aW9uIH0gZnJvbSAncnhqcyc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICAgIHNlbGVjdG9yOiAndnQtc2lkZWJhcicsXHJcbiAgICB0ZW1wbGF0ZVVybDogJy4vc2lkZWJhci5jb21wb25lbnQuaHRtbCcsXHJcbiAgICBzdHlsZVVybHM6IFsnLi9zaWRlYmFyLmNvbXBvbmVudC5zY3NzJ10sXHJcbiAgICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcclxuICAgIGFuaW1hdGlvbnM6IFtzbGlkZUluT3V0KCldLFxyXG59KVxyXG5cclxuZXhwb3J0IGNsYXNzIFNpZGViYXJDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQsIE9uRGVzdHJveSB7XHJcbiAgICBwdWJsaWMgc2lkZU5hdk9wZW4gPSAnaW4nO1xyXG4gICAgQElucHV0KCkgcHVibGljIGJlSGlkZTogYm9vbGVhbjtcclxuICAgIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTpuby1vdXRwdXQtb24tcHJlZml4XHJcbiAgICBAT3V0cHV0KCkgcHVibGljIG9uSGlkZGVuTmF2ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xyXG4gICAgQFZpZXdDaGlsZCgnaW5wdXQnLCB7c3RhdGljOiBmYWxzZX0pIHB1YmxpYyBpbnB1dFNlYXJjaDogRWxlbWVudFJlZjtcclxuICAgIHB1YmxpYyB2bSQ6IE9ic2VydmFibGU8TmF2aWdhdGlvbkl0ZW1bXT47XHJcbiAgICBwdWJsaWMgdW5zdWJjcmlibGUgPSBuZXcgU3Vic2NyaXB0aW9uKCk7XHJcbiAgICBwdWJsaWMgZGlzYWJsZU91dHNpZGVDbGljayA9IHRydWU7XHJcblxyXG4gICAgY29uc3RydWN0b3IoXHJcbiAgICAgICAgcHJpdmF0ZSBuYXZUYWJTZXJ2aWNlOiBOYXZUYWJTZXJ2aWNlLFxyXG4gICAgICAgIHByaXZhdGUgY2hhbmdlOiBDaGFuZ2VEZXRlY3RvclJlZikge1xyXG4gICAgfVxyXG5cclxuICAgIEBIb3N0TGlzdGVuZXIoJ3dpbmRvdzpyZXNpemUnLCBbJyRldmVudCddKVxyXG4gICAgcHVibGljIG9uUmVzaXplKGV2ZW50KSB7XHJcbiAgICAgICAgdGhpcy5zaXplQ2hhbmdlKCk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIG5nT25Jbml0KCk6IHZvaWQge1xyXG4gICAgICAgIHRoaXMuc2l6ZUNoYW5nZSgpO1xyXG4gICAgICAgIHRoaXMudm0kID0gdGhpcy5uYXZUYWJTZXJ2aWNlLmdldE1lbnVJdGVtcygpO1xyXG4gICAgICAgIHRoaXMubmF2VGFiU2VydmljZS5sb2FkTWVudUl0ZW1zKCk7XHJcbiAgICAgICAgdGhpcy51bnN1YmNyaWJsZSA9IHRoaXMubmF2VGFiU2VydmljZS5nZXRNZW51SXRlbXMoKS5zdWJzY3JpYmUoKHJlcykgPT4ge1xyXG4gICAgICAgICAgICBpZiAodGhpcy5jaGFuZ2UgJiYgISh0aGlzLmNoYW5nZSBhcyBWaWV3UmVmKS5kZXN0cm95ZWQpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuY2hhbmdlLmRldGVjdENoYW5nZXMoKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyB0cmFja0J5Rm4oaWR4OiBudW1iZXIsIGl0ZW06IE5hdmlnYXRpb25JdGVtKSB7XHJcbiAgICAgICAgcmV0dXJuIGl0ZW0udGl0bGUgKyAnXycgKyBpZHg7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGNsZWFyVHh0U2VhcmNoKCkge1xyXG4gICAgICAgIHRoaXMuaW5wdXRTZWFyY2gubmF0aXZlRWxlbWVudC52YWx1ZSA9ICcnO1xyXG4gICAgICAgIHRoaXMubmF2VGFiU2VydmljZS5zZWFyY2hNZW51SXRlbXNCeVRpdGxlKCcnKTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIGFuaW1hdGlvbiBuYXZzaWRlXHJcbiAgICAgKiBAYXV0aG9yIHBob25nbnZcclxuICAgICAqL1xyXG4gICAgcHVibGljIHRvZ2dsZU5hdk1lbnUoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuYmVIaWRlID8gJ291dCcgOiAnaW4nO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBoYW5kbGVLZXl1cCgkZXZlbnQ6IEtleWJvYXJkRXZlbnQsIHZhbHVlOiBzdHJpbmcpIHtcclxuICAgICAgICB0aGlzLm5hdlRhYlNlcnZpY2Uuc2VhcmNoTWVudUl0ZW1zQnlUaXRsZSh2YWx1ZSk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGNsaWNrT3V0c2lkZSgkZXZlbnQpIHtcclxuICAgICAgICB0aGlzLm9uSGlkZGVuTmF2LmVtaXQoJGV2ZW50KTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgc2l6ZUNoYW5nZSgpIHtcclxuICAgICAgICBjb25zdCBjbGllbnRXaWR0aCA9IGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5jbGllbnRXaWR0aDtcclxuICAgICAgICBpZiAoY2xpZW50V2lkdGggPCAxMTcwKSB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdhbGxvdyBvdXRzaWRlIGNsaWNrJyk7XHJcbiAgICAgICAgICAgIHRoaXMuZGlzYWJsZU91dHNpZGVDbGljayA9IGZhbHNlO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHRoaXMuZGlzYWJsZU91dHNpZGVDbGljayA9IHRydWU7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBuZ09uRGVzdHJveSgpOiB2b2lkIHtcclxuICAgICAgICB0aGlzLnVuc3ViY3JpYmxlLnVuc3Vic2NyaWJlKCk7XHJcbiAgICB9XHJcbn1cclxuIl19