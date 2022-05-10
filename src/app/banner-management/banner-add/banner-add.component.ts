import { BannerService } from '@shared/services/banner/banner.service';
import { createBanner } from './../../../shared/store/banner/banner.actions';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Banner } from '@model/banner.model';
import { Store } from '@ngrx/store';
import { AppState } from '@store/appstate';

@Component({
    selector: 'vt-banner-add',
    templateUrl: './banner-add.component.html',
    styleUrls: ['./banner-add.component.scss']
})
export class BannerAddComponent implements OnInit {
    bannerType = '1';
    bannerName: string;
    bannerContent: string;
    imgUrl: string;
    buttonText: string;
    attachedLink: string;
    startActiveTime: Date;
    activedStatus: boolean;
    constructor(
      private store: Store<AppState>,
      private bannerService: BannerService
    ) {}
    guidGenerator() {
        var S4 = function () {
            return (((1 + Math.random()) * 0x10000) | 0).toString(16).substring(1);
        };
        return S4() + S4() + '-' + S4() + '-' + S4() + '-' + S4() + '-' + S4() + S4() + S4();
    }

    listFormGroupLogo = ['1'];
    ngOnInit() {}

    submitAddBannerForm(f: NgForm) {
        const { value } = f;
        const banner: Banner = {
            bannerType: this.bannerType,
            bannerName: value.bannerName,
            bannerContent: value.bannerContent,
            imgUrl: value.imgUrl ? value.imgUrl : 'https://jes.edu.vn/wp-content/uploads/2017/10/h%C3%ACnh-%E1%BA%A3nh.jpg',
            buttonText: value.buttonText,
            attachedLink: value.attachedLink,
            createdBy: 'admin',
            lastModifiedBy: 'admin',
            actived: value.actived === 'true' ? true : false,
            startActiveTime: '2022-03-17T16:29:35Z',
            finishActiveTime: '2022-05-19T16:29:36Z'
        };
        const banners = {
          body: {
            banner: banner
          }
        }
        // this.store.dispatch(createBanner({banners}))
        this.bannerService.createBanner(banners).subscribe((res) => {
          console.log(res)
        })
    }

    onSelectBanner(event: any) {
        this.bannerType = event.target.value;
    }

    onAddFormGroupLogo() {
        this.listFormGroupLogo.push(this.guidGenerator());
    }

    onRemoveAddLogo(index: any) {
        this.listFormGroupLogo = this.listFormGroupLogo.filter((item) => item !== index);
    }
}
