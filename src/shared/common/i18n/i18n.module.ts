import {NgModule} from '@angular/core';
import { CommonModule } from '@angular/common';
import {LanguageSelectorComponent} from "./language-selector";
import { BsDropdownModule} from "ngx-bootstrap/dropdown";


@NgModule({
  declarations: [LanguageSelectorComponent],
  imports: [
    CommonModule,BsDropdownModule,

  ],
  exports:[LanguageSelectorComponent]
})
export class I18nModule {

}
