import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import {CommonModule} from '@angular/common';
import {BsDropdownModule} from 'ngx-bootstrap/dropdown';
import {ModalModule} from 'ngx-bootstrap/modal';
import {ButtonsModule} from 'ngx-bootstrap/buttons';
import { FormsModule } from '@angular/forms';
import {SharedModule} from '../../shared/common/shared.module';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

import {MainComponent} from './main/main.component';
import { MainContentComponent } from './main-content/main-content.component';
import { TopBarComponent } from './top-bar/top-bar.component';
// import { SidebarComponent } from './left-sidebar/sidebar/sidebar.component';

// import {AccountModule} from '../../account/account.module';

import {LeftSidebarModule} from './left-sidebar/left-sidebar.module';
// import {DropdownUserComponent} from './dropdown-user/dropdown-user.component';
// import {TabScrollModule} from "ngx-tab-scroll";
// import {AngularResizedEventModule} from "angular-resize-event";
// import { FileUploadComponent } from "../upload-file/file-upload.component";

@NgModule({
    declarations: [
        // TopBarComponent, 
        // DropdownUserComponent
        MainComponent,
        MainContentComponent,
        TopBarComponent,
        // SidebarComponent, 
        // FileUploadComponent
    ],

    imports: [
        CommonModule,
        RouterModule,
        // TabScrollModule.forRoot({
        //     autoRecalculate: false,
        //     showDropDown: false,
        //     showTooltips: false
        // }),
        // AngularResizedEventModule,
        BsDropdownModule,
        ModalModule,
        ButtonsModule,
        SharedModule,
        NgbModule, 
        FormsModule,
        LeftSidebarModule, 
        // AccountModule, 
        // TabScrollModule,
    ],
    entryComponents: [
        // FileUploadComponent
    ],
    exports: [
        MainComponent, 
        // DropdownUserComponent, 
        // TopBarComponent, 
        // MainContentComponent, 
        // FileUploadComponent
    ],
})
export class LayoutModule {
}
