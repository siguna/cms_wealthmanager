// import { Component, OnInit } from '@angular/core';
import {Component, ElementRef, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {ExcelService} from "../export-excel.service";
import {DialogsService} from "../../../dialogs/dialogs.service";
import {DomSanitizer} from "@angular/platform-browser";
import {TableColumnModel} from "../models/tableColumn.model";
import {TableActionConfigModel} from "../models/tableActionConfig.model";
import {DatatablesDirective} from "../directives/datatables.directive";
import {TableActionModel} from "../models/tableAction.model";

@Component({
  selector: 'vt-table-button',
  templateUrl: './table-button.component.html',
  styleUrls: ['./table-button.component.scss']
})
export class TableButtonComponent implements OnInit {

  @Input() actionConfig : TableActionConfigModel = new TableActionConfigModel();
  @Input() dataTableRef : DatatablesDirective;
  @Output() actionListener : EventEmitter<{action:TableActionModel,datatableRef : DatatablesDirective}> = new EventEmitter<{action: TableActionModel, datatableRef: DatatablesDirective}>();
  @Output() zoomListener : EventEmitter<boolean> = new EventEmitter<boolean>();
  isZoom : boolean;
   constructor(private el: ElementRef, 
    private excelService: ExcelService, 
    private dialogs: DialogsService,
               private sanitized: DomSanitizer) {
   }

   ngOnInit() {

   }

   exportAsXLSX(exportData) {
       this.excelService.exportAsExcelFile(exportData, 'export');
   }

   exportExcelSelectedData() {
       this.exportAsXLSX(this.dataTableRef.getSelectedData());
   }

   exportExcel() {
       this.exportAsXLSX(this.dataTableRef.dataItems);
   }

   changeVisible(column : TableColumnModel) {
       column.defaultVisible = !column.defaultVisible;
   }

   resize() {
       this.isZoom = !this.isZoom;
       this.zoomListener.emit(this.isZoom);
   }

   onActionListener(item: TableActionModel) {
       this.actionListener.emit({action:item,datatableRef : this.dataTableRef});
   }
}
