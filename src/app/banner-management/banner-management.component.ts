import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { DialogsService } from '../../shared/common/dialogs/dialogs.service';
import { TranslateService } from '@ngx-translate/core';
import { Subject } from 'rxjs';

@Component({
  selector: 'vt-banner-management',
  templateUrl: './banner-management.component.html',
  styleUrls: ['./banner-management.component.scss']
})
export class BannerManagementComponent implements OnInit {

  eventsSubject: Subject<void> = new Subject<void>();
  constructor(
    private dialogService: DialogsService,
    private translate: TranslateService
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

  }

  deleteCondition(){

  }

  searchBanner(){

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

}
