import {
  async
} from '@angular/core/testing';
import {
  Route,
  Router,
  ActivatedRoute
} from '@angular/router';
import {
  BannerService
} from '@shared/services/banner/banner.service';
import {
  AppState
} from '@store/appstate';
import {
  Store
} from '@ngrx/store';
import {
  Component,
  Inject,
  OnInit
} from '@angular/core';
import {
  FormBuilder,
  FormGroup
} from "@angular/forms";
import {
  Observable
} from "rxjs";
import {
  Update
} from '@ngrx/entity';
import {
  Banner
} from '@shared/models/banner.model';
import {
  DOCUMENT,
  Location
} from '@angular/common';
import {
  map
} from 'rxjs/operators';


@Component({
  selector: 'vt-banner-view',
  templateUrl: './banner-view.component.html',
  styleUrls: ['./banner-view.component.scss']
})
export class BannerViewComponent implements OnInit {
  test?: any;
  checkActiveBanner = "1";
  bannerId;
  bannerTypeName;
  banner: any = {
    actived: true,
    attachedLink: "",
    bannerName: "",
    bannerType: "",
    buttonText: "",
    createdBy: "",
    createdDate: "",
    finishActiveTime: "",
    id: 0,
    imgUrl: "",
    lastModifiedBy: "",
    lastModifiedDate: "",
    priority: 0,
    startActiveTime: "",
  }
  actived: boolean



  constructor(
    private fb: FormBuilder,
    private store: Store < AppState > ,
    private bannerService: BannerService,
    private route: Router,
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private location: Location,
    @Inject(DOCUMENT) private document: Document,
  ) {
    // this.assets$ = this.store.select(getAllAssets);
    // this.route.params.subscribe(params => {
    //   console.log(params);
    // });

    console.log(this.route)
    this.activatedRoute.params.subscribe(paramsId => {
      this.bannerId = paramsId.id;
      console.log(this.bannerId);
    });
  }

  viewtest() : string {
    return this.test;
  }

  guidGenerator() {
    var S4 = function () {
      return (((1 + Math.random()) * 0x10000) | 0).toString(16).substring(1);
    };
    return (S4() + S4() + "-" + S4() + "-" + S4() + "-" + S4() + "-" + S4() + S4() + S4());
  }

  listFormGroupLogo = ["1"]
  ngOnInit() {
    console.log("init view banner");
    // this.store.dispatch(loadAssets())
    let that = this;
    this.bannerService.getBannerById(this.bannerId).subscribe(data => {
      this.test = data.body.banner.bannerType;
      console.log(this.test)
      that.banner = data.body.banner
      // if(data.body.banner.bannerType){
      //   this.banner = data.body.banner;
      //   // switch (data.body.banner.bannerType) {
      //   //   case '1':
      //   //     this.bannerTypeName = 'Onboarding'
      //   //     break;
      //   //   case '2':
      //   //     this.bannerTypeName = 'Trang chủ'
      //   //     break;
      //   //   case '3':
      //   //     this.bannerTypeName = 'Thu chi trong tháng'
      //   //     break;
      //   //   default:
      //   //     break;
      //   // }
      //   console.log("data.body.banner", data.body.banner);
        
      //   this.banner = data.body.banner;
      // }
      
    })
  }

  onSelectBanner(event: any) {
    this.checkActiveBanner = event.target.value
  }

  onAddFormGroupLogo() {
    this.listFormGroupLogo.push(this.guidGenerator())
  }

  onRemoveAddLogo(index: any) {
    this.listFormGroupLogo = this.listFormGroupLogo.filter((item) => item !== index)
  }
}