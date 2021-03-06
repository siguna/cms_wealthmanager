import { FuncsService } from '@shared/common/wealth/funcs.service';
import {
    AfterViewInit,
    ChangeDetectorRef,
    Component,
    ElementRef,
    Input,
    NgZone,
    OnInit,
    ViewChild,
    Output,
    EventEmitter
} from '@angular/core';
import {
    AssetEditComponent
} from '../asset-edit/asset-edit.component';
import {
    BsModalRef
} from 'ngx-bootstrap/modal';
import {
    BsModalService
} from 'ngx-bootstrap/modal';
import {
    UserService
} from '../../../shared/services/user.service';
import {
    TableColumnModel
} from '../../../shared/common/ui-component/datatables/models/tableColumn.model';
import {
    TableActionConfigModel
} from '../../../shared/common/ui-component/datatables/models/tableActionConfig.model';
import {
    DatatablesDirective
} from '../../../shared/common/ui-component/datatables/directives/datatables.directive';
import {
    TblCheckAllBtnDirective
} from '../../../shared/common/ui-component/datatables/directives/tbl-checkAll-btn.directive';
import {
    PageModel
} from '../../../shared/models/page.model';
import {
    DialogsService
} from '../../../shared/common/dialogs/dialogs.service';
import {
    TableActionModel
} from '../../../shared/common/ui-component/datatables/models/tableAction.model';
import {
    BannerService
} from '@shared/services/banner/banner.service';
import {
    Store
} from '@ngrx/store';
import {
    AppState
} from '@store/appstate';
import {
    getAllBanner,
    loadBanners
} from '@store/banner';
import {
    TranslateService
} from '@ngx-translate/core';



import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';
import { Router } from '@angular/router';
import { Banner } from '@model/banner.model';
import { ToastrService } from 'ngx-toastr';
import { Observable, Subscription } from 'rxjs';



interface Priority {
    id: number;
    priority: number;
}


declare var $: any;
@Component({
    selector: 'vt-banner-list',
    templateUrl: './banner-list.component.html',
    styleUrls: ['./banner-list.component.scss']
})
export class BannerListComponent implements OnInit {

    @Input() events: Observable<void>;

    ngAfterViewInit(): void { }
    @Input() listConfig: any;
    @Input() dataItems: any;
    @Input() pagination: PageModel;
    @Output() selectEvent = new EventEmitter();

    private eventsSubscription: Subscription;

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
    masterSelected = false;
    isChecked = true;
    idsSelected = new Set();
    activated: boolean;

    constructor(
        private userService: UserService,
        private messageBox: DialogsService,
        private translate: TranslateService,
        private store: Store<any>,
        private ref: ChangeDetectorRef,
        private bannerService: BannerService,
        private dialogService: DialogsService,
        private funcsService: FuncsService,
        private toastr: ToastrService,
        private router: Router
    ) {

        this.columnOption = [{
            columnName: 'ID',
            columnId: 'idCol',
            defaultVisible: true
        },
        {
            columnName: 'T??n c???u h??nh',
            columnId: 'bannerNameCol',
            defaultVisible: true
        },
        {
            columnName: 'Lo???i banner',
            columnId: 'bannerType',
            defaultVisible: true
        },
        {
            columnName: 'Tr???ng th??i',
            columnId: 'confirm',
            defaultVisible: true,
            allowSort: false
        },
        {
            columnName: 'Ng?????i t???o',
            columnId: 'createdBy',
            defaultVisible: true,
            allowSort: false
        },
        {
            columnName: 'Ng??y t???o',
            columnId: 'createdDate',
            defaultVisible: true
        },
        {
            columnName: 'Ng?????i c???p nh???t',
            columnId: 'lastModifiedBy',
            defaultVisible: true
        },
        {
            columnName: 'Ng??y c???p nh???t',
            columnId: 'lastModifiedDate',
            defaultVisible: true
        }
        ];
        this.actionConfig = {
            columns: this.columnOption,
            allowExport: true,
            allowFilter: true,
            allowZoom: true,
            actions: [{
                text: 'X??a',
                icon: 'assets/plugins/images/ic_delete.svg',
                actionId: 'delete'
            }]
        };
    }

    ngOnInit() {
        this.recordNumber = 10;
        this.store.dispatch(loadBanners())
        // this.bannerService.getBannerByType().subscribe((res) => {
        //     if(res && res.body){
        //         this.dataItems = res.body.banners;
        //     }
        // });

        this.store.select(getAllBanner).subscribe((res) => {
            console.log(res)
            if (res.length > 0) {
                this.dataItems = res;
                this.funcsService.getData(res);
                this.fillDataToTable(1);
                this.dataItems.filter((item) => {
                    this.activated = item['actived']
                })
            }
        });

        this.eventsSubscription = this.events.subscribe(() => {
            this.delete(this.assetSelectedId)
            console.log("X??a");
        });

    }

    ngOnDestroy() {
        this.eventsSubscription.unsubscribe();
    }

    sortByColumn($event: TableColumnModel) {
        this.funcsService
            .sortPaymentPartner(
                this.pagination.current,
                this.pagination.sizeOnPage,
                $event.columnId,
                $event.sortAsc
            )
            .subscribe((res) => {
                this.pagination = {
                    current: res[0].pageNumber,
                    sizeOnPage: res[0].itemOfPage,
                    totalItem: res[0].totalItemCount
                };
                this.dataItems = res[0].data;
            });
    }

    resetData($event: any) { }

    fillDataToTable(pageNumber) {
        this.funcsService
            .getLconfigPageNumberAndRecordNumber(pageNumber, this.recordNumber)
            .subscribe((res) => {
                this.pagination = {
                    current: res[0].pageNumber,
                    sizeOnPage: res[0].itemOfPage,
                    totalItem: res[0].totalItemCount
                };
                this.dataItems = res[0].data;
            });
    }

    setPage(event: any) {
        this.funcsService
            .getLconfigPageNumberAndRecordNumber(event, this.pagination.sizeOnPage)
            .subscribe((res) => {
                this.pagination = {
                    current: res[0].pageNumber,
                    sizeOnPage: res[0].itemOfPage,
                    totalItem: res[0].totalItemCount
                };
                this.dataItems = res[0].data;
                // this.tableOption = [{data: this.dataItems}];
            });
    }

    setRecordNumber(event: any) {
        this.funcsService
            .getLconfigPageNumberAndRecordNumber(this.pagination.current, event)
            .subscribe((res) => {
                this.pagination = {
                    current: res[0].pageNumber,
                    sizeOnPage: res[0].itemOfPage,
                    totalItem: res[0].totalItemCount
                };
                this.dataItems = res[0].data;
                // this.tableOption = [{data: this.dataItems}];
            });
    }

    deleteSelectedData(tableInstance: DatatablesDirective) {
        this.messageBox
            .confirm('X??a d??? li???u', 'B???n c?? ch???c ch???n mu???n x??a d??? li???u kh??ng?')
            .subscribe((next) => {
                if (next) {
                    this.funcsService
                        .removeListConfig(
                            tableInstance.getSelectedData(),
                            this.pagination.current,
                            this.pagination.sizeOnPage
                        )
                        .subscribe((res) => {
                            this.pagination = {
                                current: res[0].pageNumber,
                                sizeOnPage: res[0].itemOfPage,
                                totalItem: res[0].totalItemCount
                            };
                            this.dataItems = res[0].data;
                            this.checkedAll = false;
                            this.ref.detectChanges();
                        });
                }
            });
    }

    openDialogEdit(item: any) {
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

    onSelectData(id: any) {
        this.selectEvent.emit(id);
    }

    delete(item: any) {

        console.log("Gui data API", this.idsSelected);
        this.bannerService.deleteListBanner(Array.from(this.idsSelected)).subscribe((res) => {
            if (res.status.code === '200') {
                this.toastr.success("C???p nh???t th??nh c??ng")
            }
        }
        );

    }

    customActionListner($event: {
        action: TableActionConfigModel;
        datatableRef: DatatablesDirective;
    }) {
        // if ($event.action.actionId == 'delete') {
        //     this.deleteSelectedData($event.datatableRef);
        // }
    }

    onResize($event: boolean) {
        this.isResize = $event;
    }


    showStatusPopup(id, act) {
        this.messageBox.confirm('', this.translate.instant('B???n c?? ch???c ch???n mu???n active/ inactive lo???i t??i s???n ?')).subscribe(next => {
            if (next) {
                this.bannerService.updateStatus(id, !act).subscribe(res => {
                    console.log(res);
                });
            }
        });
    }

    checkUncheckAll(evt) {
        console.log(evt.target.checked);

        this.dataItems.forEach((c) => {
            c.isSelected = evt.target.checked;
            if (evt.target.checked) {
                this.idsSelected.add(c.id);
            } else {
                this.idsSelected.clear();
            }
        })
    }

    assetSelectedId
    isAllSelected(evt, index) {
        console.log("450", this.dataItems)
        this.dataItems[index].isSelected = evt.target.checked
        this.masterSelected = this.dataItems.every((item) => item.isSelected == true);

        console.log(this.masterSelected)
        console.log("tao mang ID");


        console.log("454", this.dataItems[index].id)
        this.assetSelectedId = this.dataItems[index].id

        if (this.idsSelected.has(this.dataItems[index].id))
            this.idsSelected.delete(this.dataItems[index].id);
        else
            this.idsSelected.add(this.dataItems[index].id)

    }

    sortList: Priority[] = [];

    onDrop(event: CdkDragDrop<Banner[]>) {
        moveItemInArray(this.dataItems, event.previousIndex, event.currentIndex);
        let priorityPrevious: Priority;
        let priorityCurrent: Priority;
        if (event.previousIndex == event.currentIndex) {
            return;
        }
        priorityPrevious = {
            id: this.dataItems[event.previousIndex].id,
            priority: this.dataItems[event.currentIndex].priority
        }
        priorityCurrent = {
            id: this.dataItems[event.currentIndex].id,
            priority: this.dataItems[event.previousIndex].priority
        }
        let sortList = [];
        sortList.push(priorityPrevious);
        sortList.push(priorityCurrent)
        setTimeout(() => {
            this.dialogService.confirm('', this.translate.instant('B???n c?? mu???n s???p x???p l???i ?')).subscribe(next => {
                if (next) {
                    this.bannerService.updateAssetList(sortList).subscribe(data => {
                        if (data && data.status && data.status.message == "successful") {
                            this.toastr.success("C???p nh???t th??nh c??ng")
                        } else if (data && data.status && data.status.message == "error") {
                            this.toastr.error(data.status.displayMessages[0].message)
                        } else { }
                    })
                } else {
                    let currentUrl = this.router.url;
                    this.router.routeReuseStrategy.shouldReuseRoute = () => false;
                    this.router.onSameUrlNavigation = 'reload';
                    this.router.navigate([currentUrl]);
                }
            });
        }, 50);

    }
}