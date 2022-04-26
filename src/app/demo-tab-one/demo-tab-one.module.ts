import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TabOneComponent } from './tab-one/tab-one.component';
import { TabOneCreateComponent } from './tab-one-create/tab-one-create.component';
import { TabOneRoutingModule, routes } from './tab-one-routing.module';



@NgModule({
  declarations: [TabOneComponent, TabOneCreateComponent],
  imports: [
    CommonModule,
    TabOneRoutingModule
  ],
  entryComponents: [TabOneComponent, TabOneCreateComponent]
})
export class DemoTabOneModule {
  static routerMapComponent = routes;
}
