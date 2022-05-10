import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TabTwoComponent } from './tab-two/tab-two.component';
import { TabTwoRoutingModule, routes } from './tab-two-routing.module';
import { AssetListComponent } from '../asset-management/asset-list/asset-list.component';



@NgModule({
  declarations: [TabTwoComponent,AssetListComponent],
  imports: [
    CommonModule,
    TabTwoRoutingModule
  ],
  entryComponents: [TabTwoComponent,AssetListComponent]
})
export class DemoTabTwoModule {
  static routerMapComponent = routes;
}
