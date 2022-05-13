import { ChangeDetectorRef, Component, ElementRef, forwardRef, HostListener, OnInit, ViewChild } from '@angular/core';
import { NavigationCancel, NavigationEnd, NavigationError, NavigationStart, Router } from '@angular/router';
import { TabService } from '../../../shared/services/common/tab.service';
import { NavigationItem, reloadAllItems } from '../../../shared/store/navigation';
import { UserToken } from '../../../shared/models/user-token';
import { Subject, Subscription } from 'rxjs';
import { NavigationService } from '../../../shared/services/common/navigation.service';
import { AccountService } from '../../../account/account.service';
// import {APP_CONFIG, STORAGE_KEY} from "../../app.config";
import { TabScrollComponent } from "ngx-tab-scroll";
import { TabModel } from "../../../shared/models/tab.model";

import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';

import { FormBuilder, FormGroup } from '@angular/forms';
import { BsModalRef } from 'ngx-bootstrap/modal';
import { BsModalService } from 'ngx-bootstrap/modal';
import { AssetAddComponent } from './asset-add/asset-add.component';
import { SearchModel } from "../../shared/models/searchModel";
import { UserService } from "../../shared/services/user.service";
import { MatDialog } from '@angular/material';
import { DialogsService } from '../../shared/common/dialogs/dialogs.service';
import { TranslateService } from '@ngx-translate/core';

declare var $: any;

@Component({
  selector: 'vt-asset-manage',
  templateUrl: './asset-manage.component.html',
  styleUrls: ['./asset-manage.component.scss']
})
export class AssetManageComponent implements OnInit {
  // currentUser: UserToken;
  url = '';
  titles: any[] = [];
  items: any[] = [];
  item: any[] = [];
  private activeTabUrl: string;
  @ViewChild('loading', { static: false }) button: ElementRef<HTMLElement>;
  tabs: any[];
  event$: any;
  message: boolean;
  // navigationItems: NavigationItem[];
  subscription: Subscription = new Subscription();
  // showInTab = APP_CONFIG.showInTab

  recordNumber: number;
  pagination: any;
  dataItems: any;
  columnOption: any;
  // searchList: SearchModel;
  LPay = '';
  dropListValue = '';
  province = '';
  name1: string;
  iPay: object[] = [{ id: '1', name: 'ViettelPay' }, { id: '2', name: 'Vina' }, { id: '3', name: 'Mobi' }];
  private searchExpandSubscription: Subscription;

  eventsSubject: Subject<void> = new Subject<void>();

  searchExpand: boolean = true;

  constructor(
    // private tabService: TabService, 
    // private itemService: NavigationService,
    private router: Router,
    private cdRef: ChangeDetectorRef,
    // private accountService: AccountService
    private http: HttpClient,
    private fb: FormBuilder,
    private modalService: BsModalService,
    private dialogRef: MatDialog,
    private dialogService: DialogsService,
    private translate: TranslateService
  ) {
  }

  newFormGroup: FormGroup;
  userDev: string;
  tableOption: any;
  isResize: any;
  bsModalRef: BsModalRef;
  arrConfig: any;

  // @ViewChild('tabScroll', {static: false}) tabScroll: TabScrollComponent;
  @ViewChild('element', { static: false }) btnClick: ElementRef<HTMLElement>;


  reCalcScroll() {
    // this.tabScroll.api.doRecalculate();
  }

  scrollIntoView(n?: number) {
    // this.tabScroll.api.scrollTabIntoView(n);
  }

  ngOnInit() {
    // this.tabs = this.tabService.tabs;
    // this.tabService.activeTab$.subscribe(_ => this.activeTabUrl = _);
    // this.tabService.currentMessage.subscribe((message) => {
    //     this.message = message;
    //     if (this.message) {
    //         this.onResized();
    //     }
    // });

    this.recordNumber = 10;
    this.newFormGroup = this.fb.group(
      {
        name: [''],
        userDev1: ['']
      }
    );
    this.modalService.onHide.subscribe((e) => {
    });
    // this.arrConfig = this.userService.getListConfig();
  }

  closeTab(index: number, event: Event) {
    console.log(event, "closeTab event");
    // this.tabService.deleteTab(index);
    if (index > 0) {
      this.router.navigateByUrl(this.tabs[index - 1].routerLink);
      // localStorage.setItem(STORAGE_KEY.currentFeature,JSON.stringify({featureId: this.tabs[index - 1].featureId}));
      event.preventDefault();
    } else if (index === 0 && this.tabs.length > 1) {
      this.router.navigateByUrl(this.tabs[index].routerLink);
      // localStorage.setItem(STORAGE_KEY.currentFeature,JSON.stringify({featureId: this.tabs[index].featureId}));
    } else if (!index && this.tabs.length === 0) {
      this.router.navigateByUrl('/');
    }
    event.preventDefault();
  }

  onTabChange(event) {
    console.log(event, "event");
    this.reCalcScroll();
    this.event$ = event;
    this.router.navigateByUrl(event.nextId);
  }

  @HostListener('window:keydown', ['$event']) spaceEvent($event: any) {
    if ((this.tabs.length > 0) && ($event.altKey && $event.key === '1')) {
      this.router.navigateByUrl(this.tabs[0].routerLink);
    }
    if ((this.tabs.length > 1) && ($event.altKey && $event.key === '2')) {
      this.router.navigateByUrl(this.tabs[1].routerLink);
    }
    if ((this.tabs.length > 2) && ($event.altKey && $event.key === '3')) {
      this.router.navigateByUrl(this.tabs[2].routerLink);
    }
    if ((this.tabs.length > 3) && ($event.altKey && $event.key === '4')) {
      this.router.navigateByUrl(this.tabs[3].routerLink);
    }
    if ((this.tabs.length > 4) && ($event.altKey && $event.key === '5')) {
      this.router.navigateByUrl(this.tabs[4].routerLink);
    }
    if ((this.tabs.length > 5) && ($event.altKey && $event.key === '6')) {
      this.router.navigateByUrl(this.tabs[5].routerLink);
    }
    if ((this.tabs.length > 6) && ($event.altKey && $event.key === '7')) {
      this.router.navigateByUrl(this.tabs[6].routerLink);
    }
    if ((this.tabs.length > 7) && ($event.altKey && $event.key === '8')) {
      this.router.navigateByUrl(this.tabs[7].routerLink);
    }
    if ((this.tabs.length > 8) && ($event.altKey && $event.key === '9')) {
      this.router.navigateByUrl(this.tabs[8].routerLink);
    }
    if ((this.tabs.length > 9) && ($event.altKey && $event.key === '0')) {
      this.router.navigateByUrl(this.tabs[9].routerLink);
    }
    if ((this.tabs.length > 10) && ($event.altKey && $event.key === '-')) {
      this.router.navigateByUrl(this.tabs[10].routerLink);
    }
    if ((this.tabs.length > 11) && ($event.altKey && $event.key === '=')) {
      this.router.navigateByUrl(this.tabs[11].routerLink);
    }
  }

  onResized() {
    setTimeout(() => {
      window.dispatchEvent(new Event('resize'));
      try {
        // this.tabScroll.api.doRecalculate();
      } catch (e) {
      }

    }, 400);
  }
  // changeTab(tab : TabModel){
  //     localStorage.setItem(STORAGE_KEY.currentFeature,JSON.stringify({featureId: tab.featureId}));
  // }

  getNavigationItemListByUsername(username: string): Observable<any> {
    return this.http.get(`${environment.apiUrl}/navigation-item/list?username=${username}`);
  }

  openModalWithComponent() {

    this.dialogService.confirm('', this.translate.instant('Bạn chắc chắn xóa ?')).subscribe(next => {
      if (next) {
        console.log(1)
        debugger
        this.eventsSubject.next();
      }
    });
  }

  
}
