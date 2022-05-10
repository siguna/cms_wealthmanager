import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
// import { FileUploadComponent } from '../upload-file/file-upload.component';
import { BannerManagementRoutingModule } from './banner-management.routing.module';
import { BannerManagementComponent } from './banner-management.component';
import { BannerAddComponent } from './banner-add/banner-add.component';
import { BannerEditComponent } from './banner-edit/banner-edit.component';
import { BannerListComponent } from './banner-list/banner-list.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PaginationComponent } from '@shared/common/ui-component/datatables/pagination/pagination.component';
@NgModule({
  declarations: [
    BannerManagementComponent,
    BannerListComponent,
    BannerAddComponent,
    BannerEditComponent,
    // PaginationComponent
  ],
  imports: [
    CommonModule,
    BannerManagementRoutingModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  entryComponents: [
    BannerManagementComponent,
    BannerListComponent,
    BannerAddComponent,
    BannerEditComponent,
    // PaginationComponent
  ],
  exports: [
    // PaginationComponent
  ]
})
export class BannerManagementModule { }
