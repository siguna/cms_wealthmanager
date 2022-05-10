import * as tslib_1 from "tslib";
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { ButtonsModule } from 'ngx-bootstrap/buttons';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { ModalModule } from 'ngx-bootstrap/modal';
import { RouterModule } from '@angular/router';
import { MainContentComponent } from './main-content/main-content.component';
import { ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from 'mobile-money';
import { DropdownUserComponent } from './dropdown-user/dropdown-user.component';
import { LeftSidebarModule } from './left-sidebar/left-sidebar.module';
import { MainComponent } from './main/main.component';
import { TopBarComponent } from './top-bar/top-bar.component';
var LayoutModule = /** @class */ (function () {
    function LayoutModule() {
    }
    LayoutModule = tslib_1.__decorate([
        NgModule({
            declarations: [
                TopBarComponent, MainContentComponent, DropdownUserComponent, MainComponent,
            ],
            imports: [
                CommonModule,
                RouterModule,
                BsDropdownModule,
                ModalModule,
                ButtonsModule,
                SharedModule,
                LeftSidebarModule,
                TranslateModule,
                ReactiveFormsModule,
            ],
            exports: [DropdownUserComponent, TopBarComponent, MainContentComponent, LeftSidebarModule, MainComponent],
        })
    ], LayoutModule);
    return LayoutModule;
}());
export { LayoutModule };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGF5b3V0Lm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL21vYmlsZS1tb25leS1sYXlvdXQvIiwic291cmNlcyI6WyJsaWIvbGF5b3V0L2xheW91dC5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBQyxZQUFZLEVBQUMsTUFBTSxpQkFBaUIsQ0FBQztBQUM3QyxPQUFPLEVBQUMsUUFBUSxFQUFDLE1BQU0sZUFBZSxDQUFDO0FBQ3ZDLE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSxxQkFBcUIsQ0FBQztBQUN0RCxPQUFPLEVBQUMsYUFBYSxFQUFDLE1BQU0sdUJBQXVCLENBQUM7QUFDcEQsT0FBTyxFQUFDLGdCQUFnQixFQUFDLE1BQU0sd0JBQXdCLENBQUM7QUFDeEQsT0FBTyxFQUFDLFdBQVcsRUFBQyxNQUFNLHFCQUFxQixDQUFDO0FBRWhELE9BQU8sRUFBQyxZQUFZLEVBQUMsTUFBTSxpQkFBaUIsQ0FBQztBQUM3QyxPQUFPLEVBQUMsb0JBQW9CLEVBQUMsTUFBTSx1Q0FBdUMsQ0FBQztBQUUzRSxPQUFPLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUNyRCxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0sY0FBYyxDQUFDO0FBQzVDLE9BQU8sRUFBQyxxQkFBcUIsRUFBQyxNQUFNLHlDQUF5QyxDQUFDO0FBQzlFLE9BQU8sRUFBQyxpQkFBaUIsRUFBQyxNQUFNLG9DQUFvQyxDQUFDO0FBQ3JFLE9BQU8sRUFBQyxhQUFhLEVBQUMsTUFBTSx1QkFBdUIsQ0FBQztBQUNwRCxPQUFPLEVBQUMsZUFBZSxFQUFDLE1BQU0sNkJBQTZCLENBQUM7QUFxQjVEO0lBQUE7SUFDQSxDQUFDO0lBRFksWUFBWTtRQW5CeEIsUUFBUSxDQUFDO1lBQ04sWUFBWSxFQUFFO2dCQUNWLGVBQWUsRUFBRSxvQkFBb0IsRUFBRSxxQkFBcUIsRUFBRSxhQUFhO2FBQzlFO1lBRUQsT0FBTyxFQUFFO2dCQUNMLFlBQVk7Z0JBQ1osWUFBWTtnQkFDWixnQkFBZ0I7Z0JBQ2hCLFdBQVc7Z0JBQ1gsYUFBYTtnQkFDYixZQUFZO2dCQUNaLGlCQUFpQjtnQkFDakIsZUFBZTtnQkFDZixtQkFBbUI7YUFFdEI7WUFDRCxPQUFPLEVBQUUsQ0FBQyxxQkFBcUIsRUFBRSxlQUFlLEVBQUUsb0JBQW9CLEVBQUUsaUJBQWlCLEVBQUUsYUFBYSxDQUFDO1NBQzVHLENBQUM7T0FDVyxZQUFZLENBQ3hCO0lBQUQsbUJBQUM7Q0FBQSxBQURELElBQ0M7U0FEWSxZQUFZIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb21tb25Nb2R1bGV9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XHJcbmltcG9ydCB7TmdNb2R1bGV9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBUcmFuc2xhdGVNb2R1bGUgfSBmcm9tICdAbmd4LXRyYW5zbGF0ZS9jb3JlJztcclxuaW1wb3J0IHtCdXR0b25zTW9kdWxlfSBmcm9tICduZ3gtYm9vdHN0cmFwL2J1dHRvbnMnO1xyXG5pbXBvcnQge0JzRHJvcGRvd25Nb2R1bGV9IGZyb20gJ25neC1ib290c3RyYXAvZHJvcGRvd24nO1xyXG5pbXBvcnQge01vZGFsTW9kdWxlfSBmcm9tICduZ3gtYm9vdHN0cmFwL21vZGFsJztcclxuXHJcbmltcG9ydCB7Um91dGVyTW9kdWxlfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xyXG5pbXBvcnQge01haW5Db250ZW50Q29tcG9uZW50fSBmcm9tICcuL21haW4tY29udGVudC9tYWluLWNvbnRlbnQuY29tcG9uZW50JztcclxuXHJcbmltcG9ydCB7IFJlYWN0aXZlRm9ybXNNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XHJcbmltcG9ydCB7IFNoYXJlZE1vZHVsZSB9IGZyb20gJ21vYmlsZS1tb25leSc7XHJcbmltcG9ydCB7RHJvcGRvd25Vc2VyQ29tcG9uZW50fSBmcm9tICcuL2Ryb3Bkb3duLXVzZXIvZHJvcGRvd24tdXNlci5jb21wb25lbnQnO1xyXG5pbXBvcnQge0xlZnRTaWRlYmFyTW9kdWxlfSBmcm9tICcuL2xlZnQtc2lkZWJhci9sZWZ0LXNpZGViYXIubW9kdWxlJztcclxuaW1wb3J0IHtNYWluQ29tcG9uZW50fSBmcm9tICcuL21haW4vbWFpbi5jb21wb25lbnQnO1xyXG5pbXBvcnQge1RvcEJhckNvbXBvbmVudH0gZnJvbSAnLi90b3AtYmFyL3RvcC1iYXIuY29tcG9uZW50JztcclxuXHJcbkBOZ01vZHVsZSh7XHJcbiAgICBkZWNsYXJhdGlvbnM6IFtcclxuICAgICAgICBUb3BCYXJDb21wb25lbnQsIE1haW5Db250ZW50Q29tcG9uZW50LCBEcm9wZG93blVzZXJDb21wb25lbnQsIE1haW5Db21wb25lbnQsXHJcbiAgICBdLFxyXG5cclxuICAgIGltcG9ydHM6IFtcclxuICAgICAgICBDb21tb25Nb2R1bGUsXHJcbiAgICAgICAgUm91dGVyTW9kdWxlLFxyXG4gICAgICAgIEJzRHJvcGRvd25Nb2R1bGUsXHJcbiAgICAgICAgTW9kYWxNb2R1bGUsXHJcbiAgICAgICAgQnV0dG9uc01vZHVsZSxcclxuICAgICAgICBTaGFyZWRNb2R1bGUsXHJcbiAgICAgICAgTGVmdFNpZGViYXJNb2R1bGUsXHJcbiAgICAgICAgVHJhbnNsYXRlTW9kdWxlLFxyXG4gICAgICAgIFJlYWN0aXZlRm9ybXNNb2R1bGUsXHJcblxyXG4gICAgXSxcclxuICAgIGV4cG9ydHM6IFtEcm9wZG93blVzZXJDb21wb25lbnQsIFRvcEJhckNvbXBvbmVudCwgTWFpbkNvbnRlbnRDb21wb25lbnQsIExlZnRTaWRlYmFyTW9kdWxlLCBNYWluQ29tcG9uZW50XSxcclxufSlcclxuZXhwb3J0IGNsYXNzIExheW91dE1vZHVsZSB7XHJcbn1cclxuIl19