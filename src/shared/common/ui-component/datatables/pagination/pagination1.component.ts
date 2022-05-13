import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {PageModel} from "../../../../models/page.model";
// import {APP_CONFIG} from "../../../app.config";
import { AppConfig } from "../../../../../app/app.config";

declare var $: any;
@Component({
    selector: 'vt-pagination1',
    templateUrl: './pagination1.component.html',
    styleUrls: ['./pagination1.component.scss']
})
export class PaginationComponent1 implements OnInit {
    @Output() public choosePage: EventEmitter<any> = new EventEmitter();
    @Output() public chooseRecordNumber: EventEmitter<any> = new EventEmitter();
    checked: boolean;
    paginationOption = AppConfig.APP_CONFIG.paginationOption;

    public dataItems: any[] = [];

    @Input() pageConfig : PageModel;

    totalPage : any;
    public startPage: any;
    public endPage: any;
    public increase: boolean;
    private nextPage: boolean;
    constructor() {

    }

    ngOnInit() {

        this.checkNextPage();
    }

    get pages(){
        this.startPage = 0;
        this.endPage = 0;
        if(this.pageConfig.totalItem>0)
        {
            this.totalPage = Math.ceil(this.pageConfig.totalItem / this.pageConfig.sizeOnPage);
        }
        else {
            this.totalPage = 0;
        }
        if (this.totalPage <= 10) {
            // less than 10 total pages so show all
            this.startPage = 1;
            this.endPage = this.totalPage;
        } else {
            // more than 10 total pages so calculate start and end pages
            if (this.pageConfig.current <= 6) {
                this.startPage = 1;
                this.endPage = 10;
            } else if (this.pageConfig.current + 4 >= this.totalPage) {
                this.startPage = this.totalPage - 9;
                this.endPage = this.totalPage;
            } else {
                this.startPage = this.pageConfig.current - 5;
                this.endPage = this.pageConfig.current + 4;
            }
        }
        return Array.from(Array((this.endPage + 1) - this.startPage).keys()).map(i => this.startPage + i);
    }


    setPage(page) {

        this.choosePage.emit(page);
    }

    setRecordNumber(event) {
        this.pageConfig.sizeOnPage = event.target.value;
        this.chooseRecordNumber.emit(this.pageConfig.sizeOnPage);
    }

    checkNextPage(){
        if(this.pageConfig.current === this.totalPage){
            this.nextPage = false;
        } else {
            this.nextPage = true;
        }
    }

    previousPage() {
        if(this.pageConfig.current===1)
            return;
        else{
            this.pageConfig.current = this.pageConfig.current-1;
            this.choosePage.emit(this.pageConfig.current);
        }
    }

    forwardPage(){
        if(this.pageConfig.current===this.totalPage)
            return;
        else{
            this.pageConfig.current = this.pageConfig.current+1;
            this.choosePage.emit(this.pageConfig.current);
        }
    }
}