import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TabTwoComponent } from './tab-two/tab-two.component';
import { TabTwoRoutingModule, routes } from './tab-two-routing.module';



@NgModule({
  declarations: [TabTwoComponent],
  imports: [
    CommonModule,
    TabTwoRoutingModule
  ],
  entryComponents: [TabTwoComponent]
})
export class DemoTabTwoModule {
  static routerMapComponent = routes;
}
