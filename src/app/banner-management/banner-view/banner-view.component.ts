import { DialogsService } from './../../../shared/common/dialogs/dialogs.service';
import { loadBanners } from './../../../shared/store/banner/banner.actions';
import { async } from '@angular/core/testing';
import { Route, Router, ActivatedRoute } from '@angular/router';
import { BannerService } from '@shared/services/banner/banner.service';
import { AppState } from '@store/appstate';
import { Store } from '@ngrx/store';
import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Observable } from 'rxjs';
import { Update } from '@ngrx/entity';
import { Banner } from '@shared/models/banner.model';
import { DOCUMENT, Location } from '@angular/common';
import { map, take } from 'rxjs/operators';
import { getAllBanner } from '@store/banner/banner.selectors';

@Component({
    selector: 'vt-banner-view',
    templateUrl: './banner-view.component.html',
    styleUrls: ['./banner-view.component.scss']
})
export class BannerViewComponent implements OnInit {
    test?: any;
    checkActiveBanner = '';
    bannerId;
    bannerTypeName;
    banner: any = {
        actived: true,
        attachedLink: '',
        bannerName: '',
        bannerType: '',
        buttonText: '',
        createdBy: '',
        createdDate: '',
        finishActiveTime: '',
        id: 0,
        bannerContent: '',
        imgUrl: '',
        lastModifiedBy: '',
        lastModifiedDate: '',
        priority: 0,
        startActiveTime: ''
    };
    actived: boolean;

    constructor(
        private fb: FormBuilder,
        private store: Store<AppState>,
        private bannerService: BannerService,
        private route: Router,
        private activatedRoute: ActivatedRoute,
        private router: Router,
        private messageBox: DialogsService,
        private location: Location,
        @Inject(DOCUMENT) private document: Document
    ) {
        // this.assets$ = this.store.select(getAllAssets);
        // this.route.params.subscribe(params => {
        //   console.log(params);
        // });

        console.log(this.route);
        this.activatedRoute.params.subscribe((paramsId) => {
            this.bannerId = paramsId.id;
            console.log(this.bannerId);
        });
    }

    viewtest(): string {
        return this.test;
    }

    guidGenerator() {
        var S4 = function () {
            return (((1 + Math.random()) * 0x10000) | 0).toString(16).substring(1);
        };
        return S4() + S4() + '-' + S4() + '-' + S4() + '-' + S4() + '-' + S4() + S4() + S4();
    }

    listFormGroupLogo = ['1'];

    dataItem;
    logos: any[] = []
    
    ngOnInit() {
        // this.store.dispatch(loadAssets())
        // const data = this.bannerService.getBannerById(this.bannerId).pipe(take(1)).toPromise();
        // this.test = data.body.banner.bannerType;
        this.bannerService.getBannerById(this.bannerId).subscribe((res) => {
          console.log(res);
          
          if(res.body.logos && res.body.logos.length > 0){
            localStorage.setItem('logos', JSON.stringify(res.body.logos))
            
            this.logos = res.body.logos
          }
        })

        this.store.dispatch(loadBanners())
        this.store.select(getAllBanner).subscribe((res: any) => {
            if (res.length > 0) {
                console.log("sadsdádsa", res);
                this.dataItem = res.find((data) => data.id == this.bannerId);
                console.log(this.dataItem);

                if (this.dataItem) {
                    // this.banner = data.body.banner;
                    switch (this.dataItem.bannerType) {
                        case '1':
                            this.bannerTypeName = 'Onboarding';
                            break;
                        case '2':
                            this.bannerTypeName = 'Trang chủ';
                            break;
                        case '3':
                            this.bannerTypeName = 'Thu chi trong tháng';
                            break;
                        default:
                            break;
                    }
                    console.log(this.bannerTypeName);
                }
                this.banner = {
                    ...this.dataItem,
                    bannerType: this.bannerTypeName
                };
                console.log(this.banner);
            }
        });

        let that = this;
        this.bannerService.getBannerById(this.bannerId).subscribe((data) => {
            // this.test = data.body.banner.bannerType;
            console.log(this.test);
            that.banner = data.body.banner;
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
        });
       
        this.logos = JSON.parse(localStorage.getItem('logos'))
    }

    onDeleteBanner(){
      this.messageBox.confirm("Xóa dữ liệu", "Bạn có chắc chắn muốn xóa dữ liệu không?").subscribe(next => {
        if (next) {
          this.bannerService.deleteBanner(this.bannerId).subscribe((res) => {
            this.store.dispatch(loadBanners())
            this.router.navigate(['/banner'])
          })
        }
    });
      
    }

    onSelectBanner(event: any) {
        this.checkActiveBanner = event.target.value;
    }

    onAddFormGroupLogo() {
        this.listFormGroupLogo.push(this.guidGenerator());
    }

    onRemoveAddLogo(index: any) {
        this.listFormGroupLogo = this.listFormGroupLogo.filter((item) => item !== index);
    }
}
