import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {MenuNavItemComponent} from "./nav-item/nav-item.component";
import {MenuNavFilterComponent} from "./nav-filter/nav-filter.component";
import {SidebarComponent} from './sidebar/sidebar.component';
import {RouterModule} from "@angular/router";


@NgModule({
    declarations: [MenuNavItemComponent, MenuNavFilterComponent, SidebarComponent],
    imports: [
        CommonModule,
        RouterModule
    ],
    exports: [SidebarComponent]
})
export class LeftSidebarModule {
}