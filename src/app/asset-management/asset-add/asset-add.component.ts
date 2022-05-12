import { error } from 'util';
import { AssetService } from '@shared/services/asset/asset.service';
import { Asset } from '@shared/models/asset.model';
import { AppState } from '@store/appstate';
import { Component, Inject, OnInit, TemplateRef } from '@angular/core';
import { ActionsSubject, Store } from '@ngrx/store';
import { createAsset, updateAsset } from '@store/asset/asset.actions';
import { ActivatedRoute, Router } from '@angular/router';
import { DOCUMENT } from '@angular/common';
import { getAllAssets } from '@store/asset/asset.selectors';
import { MatDialog } from '@angular/material/dialog';
import { MessageDialogComponent } from '@shared/common/dialogs/message-dialog/message-dialog.component';
import { ToastrService } from 'ngx-toastr';
import { Actions, ofType } from '@ngrx/effects';
import { catchError, filter, takeUntil } from 'rxjs/operators';
import { Subject, throwError } from 'rxjs';
import { DialogsService } from "../../../shared/common/dialogs/dialogs.service";
import { TranslateService } from '@ngx-translate/core';
@Component({
  selector: 'vt-asset-add',
  templateUrl: './asset-add.component.html',
  styleUrls: ['./asset-add.component.scss']
})


export class AssetAddComponent implements OnInit {

  ngDropdown = 1

  bannerType = '1';
  bannerName: string;
  bannerContent: string;
  imgUrl: string;
  buttonText: string;
  attachedLink: string;
  startActiveTime: Date;
  activedStatus: boolean;


  assetNameValue: string;
  assetIconValue: string;
  assetColorValue;
  assetStatusValue: string;

  assetId
  dataItem
  checkParam;
  priority;
  createdBy;
  createdDate;
  lastModifiedBy;
  lastModifiedDate;


  assetStatusOption: any[] = [
    { name: "Hoạt động", value: true },
    { name: "Không hoạt động", value: false }
  ]
  title = 'Notification Application';
  unsubscribe$: Subject<boolean> = new Subject<boolean>();
  constructor(
    private store: Store<AppState>,
    private route: ActivatedRoute,
    private toastr: ToastrService,
    private _actions$: Actions,
    private actionsSubject$: ActionsSubject,
    private dialogService: DialogsService,
    private translate: TranslateService,
    private assetSerive: AssetService,
    @Inject(DOCUMENT) private document: Document,
  ) { }

  ngOnInit() {
    this.assetId = this.route.snapshot.paramMap.get('id');
    this.assetId == '#' ? this.checkParam = true : this.checkParam = false

    this.store.select(getAllAssets).subscribe(res => {
      if (res.length > 0) {
        this.dataItem = res.find(data => data.id == this.assetId)
        this.assetNameValue = this.dataItem['assetName']
        this.assetColorValue = this.dataItem['textColor']
        this.assetIconValue = this.dataItem['imgUrl']
        this.assetStatusValue = this.dataItem['actived']
        this.priority = this.dataItem['priority']
        this.createdBy = this.dataItem['createdBy']
        this.createdDate = this.dataItem['createdDate']
        this.lastModifiedBy = this.dataItem['lastModifiedBy']
        this.lastModifiedDate = this.dataItem['lastModifiedDate']
      }
    });
  }

  successmsg(msg) {
    this.toastr.success(msg, '')
  }

  toastrwaring(msg) {
    this.toastr.warning(msg, '');
  }

  error(msg): void {
    this.toastr.warning(msg, '');
  }

  addNewAsset() {
    console.log(this.assetNameValue)
    console.log(this.assetColorValue)
    console.log(this.assetStatusValue);

    // this.dialogService.confirm('', this.translate.instant('Cập nhật thành công')).subscribe(next => {
    //   if (next) {

    //   }
    // });

    if ((this.assetIconValue != '') && (this.assetNameValue != '' && this.assetNameValue != undefined)) {



      this.dialogService.confirm('', this.translate.instant('Bạn có chắc chắn muốn cập nhật ?')).subscribe(next => {
        if (next) {

          if (!this.checkParam) {

            //upate
            const assetDTO = {
              assetName: this.assetNameValue,
              actived: this.assetStatusValue,
              imgUrl: "https://vtv1.mediacdn.vn/thumb_w/650/2021/2/18/photo-3-1613603568335203707649.jpg",
              textColor: this.assetColorValue,
              id: this.assetId,
              createdBy: this.createdBy,
              createdDate: this.createdDate,
              lastModifiedBy: this.lastModifiedBy,
              lastModifiedDate: this.lastModifiedDate,
              priority: this.priority
            }
            this.assetSerive.updateAsset(assetDTO).subscribe((data) => {
              if (data && data.status && data.status.message == "successful") {
                  this.toastr.success("Cập nhật thành công")
              } else if (data && data.status && data.status.message == "error") {
                  this.toastr.error(data.status.displayMessages[0].message)
              } else {

              }
            })

            // this.store.dispatch(updateAsset({ assetDTO }))
            // this._actions$.pipe(
            //   catchError(err => {
            //     console.log('Handling error locally and rethrowing it...', err);
            //     return throwError(err);
            //   })
            // )
            //   .subscribe(
            //     res => console.log('HTTP response', res),
            //     err => console.log('HTTP Error', err),
            //     () => console.log('HTTP request completed.')
            //   );

            //    this._actions$.subscribe((data) => {
            //   console.log(data)
            // })

          } else {

            //Add new asset
            const assetDTO = {
              assetName: this.assetNameValue,
              actived: this.assetStatusValue || true,
              imgUrl: "https://vtv1.mediacdn.vn/thumb_w/650/2021/2/18/photo-3-1613603568335203707649.jpg",
              textColor: this.assetColorValue || null,
              id: null,
              createdBy: null,
              createdDate: null,
              lastModifiedBy: null,
              lastModifiedDate: null,
              priority: null
            }

            this.assetSerive.createAsset(assetDTO).subscribe((data) => {
              console.log(data)
              if (data && data.status && data.status.message == "successful") {
                  this.toastr.success("Cập nhật thành công")
              } else if (data && data.status && data.status.message == "error") {
                  this.toastr.error(data.status.displayMessages[0].message)
              } else {

              }
            })

            // this.store.dispatch(createAsset({ assetDTO }))
            // this._actions$.pipe(
            //   catchError(err => {
            //     console.log('Handling error locally and rethrowing it...', err);
            //     return throwError(err);
            //   })
            // )
            //   .subscribe(
            //     res => console.log('HTTP response', res),
            //     err => console.log('HTTP Error', err),
            //     () => console.log('HTTP request completed.')
            //   );

          }



          // this._actions$.subscribe((data) => {
          //   console.log(data)
          // })
          // this._actions$.pipe(
          //   catchError((error: any) => {
          //     console.log(error);
          //     return throwError(error);
          //   })
          // );
        }
      });
      // this.router.navigateByUrl('/asset');
      // this.document.location.reload()
    } else {
      this.toastrwaring("Bạn chưa nhập đủ thông tin!")
    }

  }

  selectStatusOption($event) {
    this.assetStatusValue = $event.target.value
  }

}