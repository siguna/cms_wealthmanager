import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterStateSerializer} from '@ngrx/router-store';
import {AccordionModule} from 'ngx-bootstrap/accordion';
import {AlertModule} from 'ngx-bootstrap/alert';
import {BsDropdownModule} from 'ngx-bootstrap/dropdown';
import {ButtonsModule} from 'ngx-bootstrap/buttons';
import {CollapseModule} from 'ngx-bootstrap/collapse';
import {ModalModule} from 'ngx-bootstrap/modal';
import {TooltipModule} from 'ngx-bootstrap/tooltip';
import {CustomSerializer} from '../store/router';
import {DialogsModule} from './dialogs/dialogs.module';
import {HttpClient} from '@angular/common/http';
import {TabsModule} from 'ngx-bootstrap/tabs';
import {PopoverModule} from 'ngx-bootstrap/popover';
// import {PanelsModule} from "../panel/panels.module";
import {UiComponentModule} from "./ui-component/ui-component.module";
import {ReactiveFormsModule} from "@angular/forms";
import {TranslateModule} from "@ngx-translate/core";
import {TranslateHttpLoader} from "@ngx-translate/http-loader";
import {I18nModule} from "./i18n/i18n.module";

export function createTranslateLoader(http: HttpClient) {
  return new TranslateHttpLoader(http, 'assets/langs/', '.json');
}

/**
 * Module for global imports
 */
@NgModule({
  declarations: [],
  imports: [
    CommonModule,

    // import ngx-bootstrap services here
    AccordionModule.forRoot(),
    AlertModule.forRoot(),
    BsDropdownModule.forRoot(),
    ButtonsModule.forRoot(),
    CollapseModule.forRoot(),
    ModalModule.forRoot(),
    TooltipModule.forRoot(),
    TabsModule.forRoot(),
    PopoverModule.forRoot(),
    DialogsModule, 
    // PanelsModule,
    UiComponentModule,
    ReactiveFormsModule,
    I18nModule
  ],
  exports:[DialogsModule,
    TranslateModule,
    I18nModule,
    // PanelsModule,
    UiComponentModule,
    ReactiveFormsModule,ModalModule],
  providers: [
    // use custom serializer to strip redundant router data
    { provide: RouterStateSerializer, useClass: CustomSerializer}
  ]

})
export class SharedModule {

}


