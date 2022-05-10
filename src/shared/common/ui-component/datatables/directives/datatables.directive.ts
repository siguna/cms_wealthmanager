import {Directive, ElementRef, Input, OnInit} from '@angular/core';
import {ExcelService} from '../export-excel.service';
import {DialogsService} from '../../../dialogs/dialogs.service';
import {DomSanitizer} from '@angular/platform-browser';

declare  var $: any;

@Directive({
  selector: '[vtTable]',
    exportAs : 'datatable'
})
export class DatatablesDirective implements OnInit {


    @Input() dataItems: any[] = [];
    public startIndex: any;
    public endIndex: any;
    public increase: boolean;
    fieldName: any = '';
    sortCondition: any = '';

    constructor(private el: ElementRef, 
        private excelService: ExcelService, 
        private dialogs: DialogsService,
                private sanitized: DomSanitizer) {

    }

    ngOnInit() {
        const a = {check: false};
        this.setDefaultChecked();

    }

    public getSelectedData(): any[] {
        const dataSelected = [];
        for (const item of this.dataItems) {
            if (item.checked) {
                dataSelected.push(item);
            }
        }
        return dataSelected;
    }


    setDefaultChecked() {
        const a = {checked: false};
        if (this.dataItems) {
            for (const y of this.dataItems) {
                Object.assign(y, a);
            }
        }
    }

}
