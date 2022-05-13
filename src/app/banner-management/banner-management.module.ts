import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
// import { FileUploadComponent } from '../upload-file/file-upload.component';
import { BannerManagementRoutingModule } from './banner-management.routing.module';
import { BannerManagementComponent } from './banner-management.component';
import { BannerAddComponent } from './banner-add/banner-add.component';
import { BannerEditComponent } from './banner-edit/banner-edit.component';
import { BannerListComponent } from './banner-list/banner-list.component';
import { BannerViewComponent } from './banner-view/banner-view.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PaginationComponent } from '@shared/common/ui-component/datatables/pagination/pagination.component';

import { BannerService } from '@shared/services/banner/banner.service';
import {DragDropModule} from '@angular/cdk/drag-drop';
import { CKEditorModule } from 'ngx-ckeditor';


@NgModule({
  declarations: [
    BannerManagementComponent,
    BannerListComponent,
    BannerAddComponent,
    BannerEditComponent,
    BannerViewComponent
    // PaginationComponent
  ],
  imports: [
    CommonModule,
    BannerManagementRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    DragDropModule,
    CKEditorModule
  ],
  entryComponents: [
    BannerManagementComponent,
    BannerListComponent,
    BannerAddComponent,
    BannerEditComponent,
    BannerViewComponent
    // PaginationComponent
  ],
  providers: [BannerService],
  exports: [
    // PaginationComponent
  ],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})
export class BannerManagementModule { }
