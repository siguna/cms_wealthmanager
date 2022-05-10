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
let LayoutModule = class LayoutModule {
};
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
export { LayoutModule };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGF5b3V0Lm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL21vYmlsZS1tb25leS1sYXlvdXQvIiwic291cmNlcyI6WyJsaWIvbGF5b3V0L2xheW91dC5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBQyxZQUFZLEVBQUMsTUFBTSxpQkFBaUIsQ0FBQztBQUM3QyxPQUFPLEVBQUMsUUFBUSxFQUFDLE1BQU0sZUFBZSxDQUFDO0FBQ3ZDLE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSxxQkFBcUIsQ0FBQztBQUN0RCxPQUFPLEVBQUMsYUFBYSxFQUFDLE1BQU0sdUJBQXVCLENBQUM7QUFDcEQsT0FBTyxFQUFDLGdCQUFnQixFQUFDLE1BQU0sd0JBQXdCLENBQUM7QUFDeEQsT0FBTyxFQUFDLFdBQVcsRUFBQyxNQUFNLHFCQUFxQixDQUFDO0FBRWhELE9BQU8sRUFBQyxZQUFZLEVBQUMsTUFBTSxpQkFBaUIsQ0FBQztBQUM3QyxPQUFPLEVBQUMsb0JBQW9CLEVBQUMsTUFBTSx1Q0FBdUMsQ0FBQztBQUUzRSxPQUFPLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUNyRCxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0sY0FBYyxDQUFDO0FBQzVDLE9BQU8sRUFBQyxxQkFBcUIsRUFBQyxNQUFNLHlDQUF5QyxDQUFDO0FBQzlFLE9BQU8sRUFBQyxpQkFBaUIsRUFBQyxNQUFNLG9DQUFvQyxDQUFDO0FBQ3JFLE9BQU8sRUFBQyxhQUFhLEVBQUMsTUFBTSx1QkFBdUIsQ0FBQztBQUNwRCxPQUFPLEVBQUMsZUFBZSxFQUFDLE1BQU0sNkJBQTZCLENBQUM7QUFxQjVELElBQWEsWUFBWSxHQUF6QixNQUFhLFlBQVk7Q0FDeEIsQ0FBQTtBQURZLFlBQVk7SUFuQnhCLFFBQVEsQ0FBQztRQUNOLFlBQVksRUFBRTtZQUNWLGVBQWUsRUFBRSxvQkFBb0IsRUFBRSxxQkFBcUIsRUFBRSxhQUFhO1NBQzlFO1FBRUQsT0FBTyxFQUFFO1lBQ0wsWUFBWTtZQUNaLFlBQVk7WUFDWixnQkFBZ0I7WUFDaEIsV0FBVztZQUNYLGFBQWE7WUFDYixZQUFZO1lBQ1osaUJBQWlCO1lBQ2pCLGVBQWU7WUFDZixtQkFBbUI7U0FFdEI7UUFDRCxPQUFPLEVBQUUsQ0FBQyxxQkFBcUIsRUFBRSxlQUFlLEVBQUUsb0JBQW9CLEVBQUUsaUJBQWlCLEVBQUUsYUFBYSxDQUFDO0tBQzVHLENBQUM7R0FDVyxZQUFZLENBQ3hCO1NBRFksWUFBWSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29tbW9uTW9kdWxlfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xyXG5pbXBvcnQge05nTW9kdWxlfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgVHJhbnNsYXRlTW9kdWxlIH0gZnJvbSAnQG5neC10cmFuc2xhdGUvY29yZSc7XHJcbmltcG9ydCB7QnV0dG9uc01vZHVsZX0gZnJvbSAnbmd4LWJvb3RzdHJhcC9idXR0b25zJztcclxuaW1wb3J0IHtCc0Ryb3Bkb3duTW9kdWxlfSBmcm9tICduZ3gtYm9vdHN0cmFwL2Ryb3Bkb3duJztcclxuaW1wb3J0IHtNb2RhbE1vZHVsZX0gZnJvbSAnbmd4LWJvb3RzdHJhcC9tb2RhbCc7XHJcblxyXG5pbXBvcnQge1JvdXRlck1vZHVsZX0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcclxuaW1wb3J0IHtNYWluQ29udGVudENvbXBvbmVudH0gZnJvbSAnLi9tYWluLWNvbnRlbnQvbWFpbi1jb250ZW50LmNvbXBvbmVudCc7XHJcblxyXG5pbXBvcnQgeyBSZWFjdGl2ZUZvcm1zTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xyXG5pbXBvcnQgeyBTaGFyZWRNb2R1bGUgfSBmcm9tICdtb2JpbGUtbW9uZXknO1xyXG5pbXBvcnQge0Ryb3Bkb3duVXNlckNvbXBvbmVudH0gZnJvbSAnLi9kcm9wZG93bi11c2VyL2Ryb3Bkb3duLXVzZXIuY29tcG9uZW50JztcclxuaW1wb3J0IHtMZWZ0U2lkZWJhck1vZHVsZX0gZnJvbSAnLi9sZWZ0LXNpZGViYXIvbGVmdC1zaWRlYmFyLm1vZHVsZSc7XHJcbmltcG9ydCB7TWFpbkNvbXBvbmVudH0gZnJvbSAnLi9tYWluL21haW4uY29tcG9uZW50JztcclxuaW1wb3J0IHtUb3BCYXJDb21wb25lbnR9IGZyb20gJy4vdG9wLWJhci90b3AtYmFyLmNvbXBvbmVudCc7XHJcblxyXG5ATmdNb2R1bGUoe1xyXG4gICAgZGVjbGFyYXRpb25zOiBbXHJcbiAgICAgICAgVG9wQmFyQ29tcG9uZW50LCBNYWluQ29udGVudENvbXBvbmVudCwgRHJvcGRvd25Vc2VyQ29tcG9uZW50LCBNYWluQ29tcG9uZW50LFxyXG4gICAgXSxcclxuXHJcbiAgICBpbXBvcnRzOiBbXHJcbiAgICAgICAgQ29tbW9uTW9kdWxlLFxyXG4gICAgICAgIFJvdXRlck1vZHVsZSxcclxuICAgICAgICBCc0Ryb3Bkb3duTW9kdWxlLFxyXG4gICAgICAgIE1vZGFsTW9kdWxlLFxyXG4gICAgICAgIEJ1dHRvbnNNb2R1bGUsXHJcbiAgICAgICAgU2hhcmVkTW9kdWxlLFxyXG4gICAgICAgIExlZnRTaWRlYmFyTW9kdWxlLFxyXG4gICAgICAgIFRyYW5zbGF0ZU1vZHVsZSxcclxuICAgICAgICBSZWFjdGl2ZUZvcm1zTW9kdWxlLFxyXG5cclxuICAgIF0sXHJcbiAgICBleHBvcnRzOiBbRHJvcGRvd25Vc2VyQ29tcG9uZW50LCBUb3BCYXJDb21wb25lbnQsIE1haW5Db250ZW50Q29tcG9uZW50LCBMZWZ0U2lkZWJhck1vZHVsZSwgTWFpbkNvbXBvbmVudF0sXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBMYXlvdXRNb2R1bGUge1xyXG59XHJcbiJdfQ==