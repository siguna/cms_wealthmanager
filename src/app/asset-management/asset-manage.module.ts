import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AssetManageRoutingModule, routes } from './asset-manage.routing.module';
import {DragDropModule} from '@angular/cdk/drag-drop';

import { AssetManageComponent } from "./asset-manage.component";
import { AssetListComponent } from './asset-list/asset-list.component';
import { AssetEditComponent } from './asset-edit/asset-edit.component';
import { AssetAddComponent } from './asset-add/asset-add.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AssetService } from '@shared/services/asset/asset.service';
import { AssetEffects } from '@store/asset/asset.effects';
import { assetReducer } from '@store/asset/asset.reducer';
// import { CustomSharedModule } from '@shared/custom-shared.module';
import { LayoutModule } from '../layout/layout.module';
import { CustomSharedModule } from '@shared/custom-shared.module';
import { FileUploadComponent } from '@shared/common/wealth/components/upload-file/file-upload.component';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { PaginationComponent } from '@shared/common/ui-component/datatables/pagination/pagination.component';
@NgModule({
  declarations: [
    AssetManageComponent, 
    AssetListComponent, 
    AssetEditComponent,
    AssetAddComponent,
    FileUploadComponent,
    PaginationComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    DragDropModule,
    // DatatablesModule,
    // LayoutModule,
    AssetManageRoutingModule,
    MatSlideToggleModule 
    // CustomSharedModule,
    // StoreModule.forFeature('assets', assetReducer),
    // EffectsModule.forFeature([AssetEffects])
  ],
  entryComponents: [
    AssetManageComponent, 
    AssetListComponent, 
    AssetEditComponent,
    AssetAddComponent,
    PaginationComponent
  ],
  providers: [AssetService],
  exports: [
    MatSlideToggleModule
    // LayoutModule
  ]
})
export class AssetManageModule {
  static routerMapComponent = routes;
}
