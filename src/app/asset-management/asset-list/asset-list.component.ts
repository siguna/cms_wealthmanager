import { async } from '@angular/core/testing';
import { ActivatedRoute, Router } from '@angular/router';
import { loadAssets } from './../../../shared/store/asset/asset.actions';
import { TranslateService } from '@ngx-translate/core';
import { FuncsService } from '@shared/common/wealth/funcs.service';
import { AssetService } from '@shared/services/asset/asset.service';
import { Store } from '@ngrx/store';
import { AfterViewInit, ChangeDetectorRef, Component, ElementRef, Inject, Input, NgZone, OnInit, ViewChild } from '@angular/core';
import { BsModalRef } from 'ngx-bootstrap/modal';
import { UserService } from "../../../shared/services/user.service";
import { TableColumnModel } from "../../../shared/common/ui-component/datatables/models/tableColumn.model";
import { TableActionConfigModel } from "../../../shared/common/ui-component/datatables/models/tableActionConfig.model";
import { DatatablesDirective } from "../../../shared/common/ui-component/datatables/directives/datatables.directive";
import { PageModel } from "../../../shared/models/page.model";
import { DialogsService } from "../../../shared/common/dialogs/dialogs.service";
import { TableActionModel } from "../../../shared/common/ui-component/datatables/models/tableAction.model";
import { AppState } from '@store/appstate';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Asset } from '@shared/models/asset.model';

import { getAllAssets } from '@store/asset/asset.selectors';
import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';
import { deleteAsset } from '@store/asset/asset.actions';
import { DOCUMENT } from '@angular/common';

declare var $: any;

@Component({
    selector: 'vt-asset-list',
    templateUrl: './asset-list.component.html',
    styleUrls: ['./asset-list.component.scss']
})
export class AssetListComponent implements OnInit, AfterViewInit {

    assets$: Observable<Asset[]>;

    ngAfterViewInit(): void { }

    @Input() listConfig: any;
    @Input() dataItems: any;
    @Input() pagination: PageModel;

    isResize: any;
    recordNumber: number;
    // pagination: any;
    // dataItems: any;
    columnOption: TableColumnModel[];
    bsModalRef: BsModalRef;
    // tableOption: any;
    dataSelected: any = [];
    actionConfig: TableActionConfigModel;
    checkedAll: boolean;
    constructor(@Inject(DOCUMENT) private document: Document,
        private userService: UserService, private messageBox: DialogsService, private ref: ChangeDetectorRef,
        private http: HttpClient,
        private assetService: AssetService,
        private store: Store<AppState>,
        private funcsService: FuncsService,
        private dialogService: DialogsService,
        private translate: TranslateService,
        private router: Router,
        private route:ActivatedRoute 

    ) {
        this.columnOption = [
            { columnName: 'ID', columnId: 'id', defaultVisible: true },
            { columnName: 'Tên tài sản', columnId: 'assetName', defaultVisible: true },
            { columnName: 'Trạng thái', columnId: 'confirm', defaultVisible: true, allowSort: false },
            { columnName: 'Người tạo', columnId: 'createdBy', defaultVisible: true, allowSort: false },
            { columnName: 'Ngày tạo', columnId: 'createdDate', defaultVisible: true },
            { columnName: 'Người cập nhật', columnId: 'lastModifiedBy', defaultVisible: true },
            { columnName: 'Ngày cập nhật', columnId: 'lastModifiedDate', defaultVisible: true },
        ];

        this.actionConfig = {
            columns: this.columnOption,
            allowExport: true,
            allowFilter: true,
            allowZoom: true,
            actions: [
                {
                    text: "Xóa",
                    icon: "assets/plugins/images/ic_delete.svg",
                    actionId: "delete",
                }
            ]
        }

        this.assets$ = this.store.select(getAllAssets);
    }

    ngOnInit() {
        this.recordNumber = 10;
        this.store.dispatch(loadAssets())
        this.store.select(getAllAssets).subscribe(res => {
            if (res.length > 0) {
                this.dataItems = res
            }
        });

        // this.assetService.getAllAssets().subscribe(data => {
        //     this.funcsService.getData(data);
        //     this.fillDataToTable(1)
        // }, err => {
        //     console.log(err);
        // }
        // )

    }

    sortByColumn($event: TableColumnModel) {
        this.userService.sortPaymentPartner(this.pagination.current, this.pagination.sizeOnPage, $event.columnId, $event.sortAsc).subscribe(res => {
            this.pagination = {
                current: res[0].pageNumber,
                sizeOnPage: res[0].itemOfPage,
                totalItem: res[0].totalItemCount,

            };
            this.dataItems = res[0].data;
        });
    }

    resetData($event: any) {
    }

    fillDataToTable(pageNumber) {
        this.userService.getLconfigPageNumberAndRecordNumber(pageNumber, this.recordNumber).subscribe(res => {
            this.pagination = {
                current: res[0].pageNumber,
                sizeOnPage: res[0].itemOfPage,
                totalItem: res[0].totalItemCount,

            };
            this.dataItems = res[0].data;
        });
    }

    setPage(event: any) {
        this.userService.getLconfigPageNumberAndRecordNumber(event, this.pagination.sizeOnPage).subscribe(res => {
            this.pagination = {
                current: res[0].pageNumber,
                sizeOnPage: res[0].itemOfPage,
                totalItem: res[0].totalItemCount,

            };
            this.dataItems = res[0].data;
            // this.tableOption = [{data: this.dataItems}];

        });
    }

    setRecordNumber(event: any) {
        this.userService.getLconfigPageNumberAndRecordNumber(this.pagination.current, event)
            .subscribe(res => {
                this.pagination = {
                    current: res[0].pageNumber,
                    sizeOnPage: res[0].itemOfPage,
                    totalItem: res[0].totalItemCount,

                };
                this.dataItems = res[0].data;
                // this.tableOption = [{data: this.dataItems}];
            });
    }

    deleteSelectedData(tableInstance: DatatablesDirective) {

        this.messageBox.confirm("Xóa dữ liệu", "Bạn có chắc chắn muốn xóa dữ liệu không?").subscribe(next => {
            if (next) {
                this.userService.removeListConfig(tableInstance.getSelectedData(), this.pagination.current, this.pagination.sizeOnPage).subscribe(res => {
                    this.pagination = {
                        current: res[0].pageNumber,
                        sizeOnPage: res[0].itemOfPage,
                        totalItem: res[0].totalItemCount,
                    };
                    this.dataItems = res[0].data;
                    this.checkedAll = false;
                    this.ref.detectChanges();
                })
            }
        });

    }
    priority: string;
    onDrop(event: CdkDragDrop<string[]>) {
        moveItemInArray(this.dataItems, event.previousIndex, event.currentIndex);
        this.dataItems.forEach((data, idx) => {
            data.order = idx + 1;
        });
    }

    openAssetEdit(item: any) {
        console.log(1)
        console.log(item)
        this.router.navigate(['/asset/edit-vtp', { state: { example: 'bar' } }]);
        // this.store.dispatch(getAssetDetail(1))
        // const initialState = {
        //     item,
        //     list: [
        //         'Open a modal with component',
        //         'Pass your data',
        //         'Do something else',
        //         '...'
        //     ],
        //     title: 'Modal with component'
        // };
        // this.bsModalRef = this.messageBox.modalService.show(AssetEditComponent, {class: 'modal-xl', initialState});
        // this.bsModalRef.content.closeBtnName = 'Close';
    }

    delete(item: any) {
        console.log(item)
        this.dialogService.confirm('', this.translate.instant('Bạn chắc chắn xóa ?')).subscribe(async next => {
            if (next) {
                // this.addFeatzure(template);
                const assetId = item.id
                await this.store.dispatch(deleteAsset({ assetId }))
                // this.funcsService.deleteLconfig(item, this.pagination.current, this.pagination.sizeOnPage).subscribe(res => {
                //     this.pagination = {
                //         current: res[0].pageNumber,
                //         sizeOnPage: res[0].itemOfPage,
                //         totalItem: res[0].totalItemCount,

                //     };
                //     this.dataItems = res[0].data;
                //     // this.tableOption = [{data: this.dataItems}];
                // });
                // this.store.dispatch(loadAssets);
                await this.document.location.reload()
            }
        });

    }


    customActionListner($event: { action: TableActionModel; datatableRef: DatatablesDirective }) {
        if ($event.action.actionId == "delete") {
            this.deleteSelectedData($event.datatableRef);
        }
    }

    onResize($event: boolean) {
        this.isResize = $event;
    }
}