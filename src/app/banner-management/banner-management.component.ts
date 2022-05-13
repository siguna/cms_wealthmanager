import { FuncsService } from '@shared/common/wealth/funcs.service';
import { filter, map } from 'rxjs/operators';
import { Component, ElementRef, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import { DialogsService } from '../../shared/common/dialogs/dialogs.service';
import { TranslateService } from '@ngx-translate/core';
import { Subject } from 'rxjs';
import { AppState } from '@store/appstate';
import { Store } from '@ngrx/store';
import { loadBanners } from '@store/banner/banner.actions';
import { getAllBanner } from '@store/banner/banner.selectors';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'vt-banner-management',
  templateUrl: './banner-management.component.html',
  styleUrls: ['./banner-management.component.scss']
})
export class BannerManagementComponent implements OnInit {

  eventsSubject: Subject<void> = new Subject<void>();

  @Input() searchData;
    @Output() searchClick = new EventEmitter<any>();
    newFormGroup: FormGroup;
    userDev1 = 'userDev1';
    name = 'name';
    iPay: object[] = [{id: '1', name: 'ViettelPay'}, {id: '2', name: 'Vina'}, {id: '3', name: 'Mobi'}];
    dropListValue = '';
  constructor(
    private dialogService: DialogsService,
    private translate: TranslateService,
    private store: Store<AppState>,
    private funcsService: FuncsService,
    private fb: FormBuilder
  ) { }
  idValue;
  statusValue;
  configValue;
  dateValue;
  bannerTypeValue;
  fromDate;
  toDate;

  @ViewChild('element', { static: false }) btnClick: ElementRef<HTMLElement>;

  ngOnInit() {
    this.newFormGroup = this.fb.group(
      {
          name: [''],
          userDev1: ['']
      }
  );
  }

  setValue($event: any) {
    this.dropListValue = $event;
}

  deleteCondition() {
    this.idValue = ''
    this.statusValue = ''
    this.configValue = ''
    this.dateValue = ''
    this.bannerTypeValue = ''
    this.fromDate = ''
    this.toDate = ''
  }

  dataItem
  searchBanner() {

    console.log(51);
    this.search()
    this.store.dispatch(loadBanners())
    this.store.select(getAllBanner).subscribe((res: any) => {
      if (res.length > 0) {
        this.funcsService.getData(res)
      }
    });

    

    // console.log(this.store.select(getAllBanner).pipe(
    //   map(users => users.filter(user => user.id == this.idValue)),
    // ));
    


  }

  openModalWithComponent() {

    this.dialogService.confirm('', this.translate.instant('Bạn chắc chắn xóa ?')).subscribe(next => {
      if (next) {
        console.log(1)
        this.eventsSubject.next();
        // this.addFeatzure(template);
      }
    });

  }

  search() {
    let a;
    const nameForm = this.newFormGroup.controls['name'].value;
    const userDev = this.newFormGroup.controls['userDev1'].value;
    this.funcsService.advanceSearch1(this.dropListValue, nameForm, userDev).subscribe(next => {
        a = next;
    });
    this.searchClick.emit(a);

}

collapseSearch() {
    this.funcsService.searchExpand.next(false);
}

}
