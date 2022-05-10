import * as tslib_1 from "tslib";
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SharedModule } from 'mobile-money';
import { MenuNavItemComponent } from './nav-item/nav-item.component';
import { SidebarComponent } from './sidebar/sidebar.component';
var LeftSidebarModule = /** @class */ (function () {
    function LeftSidebarModule() {
    }
    LeftSidebarModule = tslib_1.__decorate([
        NgModule({
            declarations: [MenuNavItemComponent, SidebarComponent],
            imports: [
                CommonModule,
                RouterModule,
                SharedModule,
            ],
            exports: [SidebarComponent],
        })
    ], LeftSidebarModule);
    return LeftSidebarModule;
}());
export { LeftSidebarModule };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGVmdC1zaWRlYmFyLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL21vYmlsZS1tb25leS1sYXlvdXQvIiwic291cmNlcyI6WyJsaWIvbGF5b3V0L2xlZnQtc2lkZWJhci9sZWZ0LXNpZGViYXIubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQUMsWUFBWSxFQUFDLE1BQU0saUJBQWlCLENBQUM7QUFDN0MsT0FBTyxFQUFDLFFBQVEsRUFBQyxNQUFNLGVBQWUsQ0FBQztBQUN2QyxPQUFPLEVBQUMsWUFBWSxFQUFDLE1BQU0saUJBQWlCLENBQUM7QUFDN0MsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGNBQWMsQ0FBQztBQUM1QyxPQUFPLEVBQUMsb0JBQW9CLEVBQUMsTUFBTSwrQkFBK0IsQ0FBQztBQUNuRSxPQUFPLEVBQUMsZ0JBQWdCLEVBQUMsTUFBTSw2QkFBNkIsQ0FBQztBQVc3RDtJQUFBO0lBQ0EsQ0FBQztJQURZLGlCQUFpQjtRQVQ3QixRQUFRLENBQUM7WUFDTixZQUFZLEVBQUUsQ0FBQyxvQkFBb0IsRUFBRSxnQkFBZ0IsQ0FBQztZQUN0RCxPQUFPLEVBQUU7Z0JBQ0wsWUFBWTtnQkFDWixZQUFZO2dCQUNaLFlBQVk7YUFDZjtZQUNELE9BQU8sRUFBRSxDQUFDLGdCQUFnQixDQUFDO1NBQzlCLENBQUM7T0FDVyxpQkFBaUIsQ0FDN0I7SUFBRCx3QkFBQztDQUFBLEFBREQsSUFDQztTQURZLGlCQUFpQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29tbW9uTW9kdWxlfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xyXG5pbXBvcnQge05nTW9kdWxlfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHtSb3V0ZXJNb2R1bGV9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XHJcbmltcG9ydCB7IFNoYXJlZE1vZHVsZSB9IGZyb20gJ21vYmlsZS1tb25leSc7XHJcbmltcG9ydCB7TWVudU5hdkl0ZW1Db21wb25lbnR9IGZyb20gJy4vbmF2LWl0ZW0vbmF2LWl0ZW0uY29tcG9uZW50JztcclxuaW1wb3J0IHtTaWRlYmFyQ29tcG9uZW50fSBmcm9tICcuL3NpZGViYXIvc2lkZWJhci5jb21wb25lbnQnO1xyXG5cclxuQE5nTW9kdWxlKHtcclxuICAgIGRlY2xhcmF0aW9uczogW01lbnVOYXZJdGVtQ29tcG9uZW50LCBTaWRlYmFyQ29tcG9uZW50XSxcclxuICAgIGltcG9ydHM6IFtcclxuICAgICAgICBDb21tb25Nb2R1bGUsXHJcbiAgICAgICAgUm91dGVyTW9kdWxlLFxyXG4gICAgICAgIFNoYXJlZE1vZHVsZSxcclxuICAgIF0sXHJcbiAgICBleHBvcnRzOiBbU2lkZWJhckNvbXBvbmVudF0sXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBMZWZ0U2lkZWJhck1vZHVsZSB7XHJcbn1cclxuIl19