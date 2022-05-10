import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ExcelService} from "./export-excel.service";
// import {PaginationComponent} from "./pagination/pagination.component";
import {TableButtonComponent} from "./table-button/table-button.component";
// import {DatatablesDirective} from "./directives/datatables.directive";
// import {TableColDefDirective} from "./directives/table-col-def.directive";
// import {TblCheckAllBtnDirective} from './directives/tbl-checkAll-btn.directive';
// import {TblCheckBtnDirective} from './directives/tbl-check-btn.directive';


@NgModule({
  declarations: [
    // PaginationComponent, 
    TableButtonComponent,
    // DatatablesDirective, 
    // TableColDefDirective, 
    // TblCheckAllBtnDirective, 
    // TblCheckBtnDirective
  ],
  imports: [
    CommonModule
  ],
    exports: [
        TableButtonComponent,
        // PaginationComponent,
        // DatatablesDirective,
        // TableColDefDirective,
        // TblCheckAllBtnDirective,
        // TblCheckBtnDirective,


    ],
  providers: [ExcelService]
})
export class DatatablesModule { }
