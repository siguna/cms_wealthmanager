import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EndowListComponent } from './endow-list/endow-list.component';
import { FileUploadComponent } from "../upload-file/file-upload.component";

import { routes, EndowManagementRoutingModule } from './endow-management.routing.module';
import { EndowAddComponent } from './endow-add/endow-add.component';
import { EndowEditComponent } from './endow-edit/endow-edit.component';
import { EndowManagementComponent } from './endow-management.component';


@NgModule({
  declarations: [
    EndowAddComponent, 
    EndowEditComponent,
    EndowListComponent,
    EndowManagementComponent,
    FileUploadComponent
  ],
  imports: [
    CommonModule,
    EndowManagementRoutingModule,
  ],
  entryComponents: [
    EndowAddComponent, 
    EndowEditComponent,
    EndowListComponent,
    EndowManagementComponent,
  ],
  exports: [
  ]
})
export class EndowManagementModule {
  static routerMapComponent = routes;
}
