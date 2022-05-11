import { Asset } from '@shared/models/asset.model';
import { AppState } from '@store/appstate';
import { Component, Inject, OnInit, TemplateRef } from '@angular/core';
import { DialogsService } from '../../../shared/common/dialogs/dialogs.service';
import { TranslateService } from '@ngx-translate/core';
import { HttpClient } from '@angular/common/http';
import { Store } from '@ngrx/store';
import { AssetService } from '@shared/services/asset/asset.service';
import { createAsset } from '@store/asset/asset.actions';
import { Router } from '@angular/router';
import { DOCUMENT } from '@angular/common';
import { NgForm } from '@angular/forms';
import { Banner } from '@model/banner.model';

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

  assetStatusOption: any[] = [
    { name: "Hoạt động", value: true },
    { name: "Ngừng hoạt động", value: false }
  ]

  constructor(
    private dialogService: DialogsService,
    private translate: TranslateService,
    private http: HttpClient,
    private store: Store<AppState>,
    private assetService: AssetService,
    private router: Router,
    @Inject(DOCUMENT) private document: Document,
  ) {

  }

  ngOnInit() {
  }


  async addNew(template: TemplateRef<any>) {

    console.log(this.assetNameValue)
    console.log(this.assetColorValue)
    console.log(this.assetStatusValue);
    

    if (this.assetNameValue != '') {

      const assetDTO: Asset = {
        assetName: this.assetNameValue,
        actived: this.assetStatusValue,
        imgUrl: "https://vtv1.mediacdn.vn/thumb_w/650/2021/2/18/photo-3-1613603568335203707649.jpg",
        textColor: this.assetColorValue,
        id: null,
        createdBy: null,
        createdDate: null,
        lastModifiedBy: null,
        lastModifiedDate: null,
        priority: null
      }

      await this.store.dispatch(createAsset({ assetDTO }));
      await this.router.navigateByUrl('/asset');
      // await this.document.location.reload()
    } else {
       
    }

  }

  listFormGroupLogo = ['1'];
  // ngOnInit() {}

  submitAddBannerForm(f: NgForm) {

    // const { value } = f;
    // const banner: Banner = {
    //   bannerType: this.bannerType,
    //   bannerName: value.bannerName,
    //   bannerContent: value.bannerContent,
    //   imgUrl: value.imgUrl ? value.imgUrl : 'https://jes.edu.vn/wp-content/uploads/2017/10/h%C3%ACnh-%E1%BA%A3nh.jpg',
    //   buttonText: value.buttonText,
    //   attachedLink: value.attachedLink,
    //   createdBy: 'admin',
    //   lastModifiedBy: 'admin',
    //   actived: value.actived === 'true' ? true : false,
    //   startActiveTime: '2022-03-17T16:29:35Z',
    //   finishActiveTime: '2022-05-19T16:29:36Z'
    // };
    // const banners = {
    //   body: {
    //     banner: banner
    //   }
    // }
    // this.store.dispatch(createBanner({banners}))
    // this.bannerService.createBanner(banners).subscribe((res) => {
    //   console.log(res)
    // })
  }

  selectStatusOption($event) {
    this.assetStatusValue = $event.target.value
  }

}