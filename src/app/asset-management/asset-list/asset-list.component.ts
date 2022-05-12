import { filter } from 'rxjs/operators';
import { async } from '@angular/core/testing';
import { ActivatedRoute, Router } from '@angular/router';
import { loadAssets, updateAsset } from './../../../shared/store/asset/asset.actions';
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
import { Observable, Subscription } from 'rxjs';
import { Asset } from '@shared/models/asset.model';

import { getAllAssets } from '@store/asset/asset.selectors';
import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';
import { deleteAsset } from '@store/asset/asset.actions';
import { DOCUMENT } from '@angular/common';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';

declare var $: any;

interface Priority {
    id: number;
    priority: number;
}

@Component({
    selector: 'vt-asset-list',
    templateUrl: './asset-list.component.html',
    styleUrls: ['./asset-list.component.scss']
})
export class AssetListComponent implements OnInit, AfterViewInit {
    masterSelected = false;

    assets$: Observable<Asset[]>;

    ngAfterViewInit(): void { }

    @Input() listConfig: any;
    @Input() dataItems: any;
    @Input() pagination: PageModel;

    private eventsSubscription: Subscription;

    @Input() events: Observable<void>;

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

    isChecked = true;
    formGroup: FormGroup;
    activated: boolean;

    constructor(@Inject(DOCUMENT) private document: Document,
        private userService: UserService, private messageBox: DialogsService, private ref: ChangeDetectorRef,
        private http: HttpClient,
        private assetService: AssetService,
        private store: Store<AppState>,
        private funcsService: FuncsService,
        private dialogService: DialogsService,
        private translate: TranslateService,
        private router: Router,
        private route: ActivatedRoute,
        private toastr: ToastrService,
        private assetSerive: AssetService,
        formBuilder: FormBuilder
    ) {
        this.formGroup = formBuilder.group({
            enableWifi: '',
            acceptTerms: ['', Validators.requiredTrue],
        });

        this.columnOption = [
            { columnName: 'ID', columnId: 'assetId', defaultVisible: true },
            { columnName: 'Tên tài sản', columnId: 'assetNameId', defaultVisible: true },
            { columnName: 'Trạng thái', columnId: 'confirm', defaultVisible: true, allowSort: false },
            { columnName: 'Người tạo', columnId: 'createdBy', defaultVisible: true, allowSort: false },
            { columnName: 'Ngày tạo', columnId: 'createdDateId', defaultVisible: true },
            { columnName: 'Người cập nhật', columnId: 'lastModifiedBy', defaultVisible: true },
            { columnName: 'Ngày cập nhật', columnId: 'lastModifiedDateId', defaultVisible: true },
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
                console.log(this.dataItems)
                this.dataItems.filter((item) => {
                    this.activated = item['actived']
                }
                )
                // this.fillDataToTable(1)
            }
        });

        this.assetService.getAllAssets().subscribe(data => {
            this.funcsService.getData(data);
            this.fillDataToTable(1)
        }, err => {
            console.log(err);
        }
        )

        this.eventsSubscription = this.events.subscribe(() => {
            console.log(2);
            this.delete('')
        });

    }

    ngOnDestroy() {
        this.eventsSubscription.unsubscribe();
    }

    showStatusPopup(item) {
        this.dialogService.confirm('', this.translate.instant('Bạn có chắc chắn muốn active/ inactive loại tài sản ?')).subscribe(next => {
            if (next) {
                const assetDTO: Asset = {
                    ...item,
                    actived: !item.actived
                }
                // this.store.dispatch(updateAsset({ assetDTO }))
                this.assetSerive.updateAsset(assetDTO).subscribe((data) => {
                    if (data && data.status && data.status.message == "successful") {
                        this.toastr.success("Cập nhật thành công")
                    } else if (data && data.status && data.status.message == "error") {
                        this.toastr.error(data.status.displayMessages[0].message)
                    } else {

                    }
                })
            } else {
                this.router.navigateByUrl('/asset');
            }
        });
    }

    sortByColumn($event: TableColumnModel) {
        this.funcsService.sortPaymentPartner(this.pagination.current, this.pagination.sizeOnPage, $event.columnId, $event.sortAsc).subscribe(res => {
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
        this.funcsService.getLconfigPageNumberAndRecordNumber(pageNumber, this.recordNumber).subscribe(res => {
            this.pagination = {
                current: res[0].pageNumber,
                sizeOnPage: res[0].itemOfPage,
                totalItem: res[0].totalItemCount,

            };
            this.dataItems = res[0].data;
        });
    }

    setPage(event: any) {
        this.funcsService.getLconfigPageNumberAndRecordNumber(event, this.pagination.sizeOnPage).subscribe(res => {
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
        this.funcsService.getLconfigPageNumberAndRecordNumber(this.pagination.current, event)
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
                this.funcsService.removeListConfig(tableInstance.getSelectedData(), this.pagination.current, this.pagination.sizeOnPage).subscribe(res => {
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
    sortList: Priority[] = [];

    onDrop(event: CdkDragDrop<string[]>) {
        moveItemInArray(this.dataItems, event.previousIndex, event.currentIndex);

        let priority: Priority;
        this.dataItems.forEach((data, idx) => {
            console.log(data)
            console.log(data.order);

            if (data.order = idx) {
                console.log(data.id)
                priority = {
                    id: data.id,
                    priority: data.priority,
                };
            }
            data.order = idx + 1;

        });
        this.sortList.push(priority)
        console.log(this.sortList)
        setTimeout(() => {
            this.dialogService.confirm('', this.translate.instant('Bạn có muốn sắp xếp lại ?')).subscribe(next => {
                if (next) {
                    // this.assetService.updateAssetList({sortList})
                }
            });
        }, 2000);

    }

    openAssetEdit(item: any, type: string) {
        console.log(type)
        console.log(item)
        // const assetId = item

        // this.router.navigate(['/asset/edit-vtp', {id: item}]);

        //     this.assetService.getAssetDetail({ assetId }))

        // this.router.navigate(['/asset/edit-vtp', { state: { example: 'bar' } }]);
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

    assetSelectedId
    async delete(item: any) {
        // console.log("273", item)
        console.log(this.assetSelectedId);

        const assetId = this.assetSelectedId
        await this.store.dispatch(deleteAsset({ assetId }))

        // this.dialogService.confirm('', this.translate.instant('Bạn chắc chắn xóa ??')).subscribe(async next => {
        //     if (next) {
        //         // this.addFeatzure(template);
        //         console.log(this.assetSelectedId);

        //         const assetId = this.assetSelectedId

        //         await this.store.dispatch(deleteAsset({ assetId }))
        //         // this.funcsService.deleteLconfig(item, this.pagination.current, this.pagination.sizeOnPage).subscribe(res => {
        //         //     this.pagination = {
        //         //         current: res[0].pageNumber,
        //         //         sizeOnPage: res[0].itemOfPage,
        //         //         totalItem: res[0].totalItemCount,

        //         //     };
        //         //     this.dataItems = res[0].data;
        //         //     // this.tableOption = [{data: this.dataItems}];
        //         // });
        //         // this.store.dispatch(loadAssets);
        //         await this.document.location.reload()
        //     }
        // });

    }


    customActionListner($event: { action: TableActionModel; datatableRef: DatatablesDirective }) {
        if ($event.action.actionId == "delete") {
            this.deleteSelectedData($event.datatableRef);
        }
    }

    onResize($event: boolean) {
        this.isResize = $event;
    }

    checkUncheckAll(evt) {
        this.dataItems.forEach((c) => c.isSelected = evt.target.checked)
    }

    isAllSelected(evt, index) {
        this.dataItems[index].isSelected = evt.target.checked
        this.masterSelected = this.dataItems.every((item) => item.isSelected == true);

        console.log(this.dataItems[index].id)
        this.assetSelectedId = this.dataItems[index].id
    }
}