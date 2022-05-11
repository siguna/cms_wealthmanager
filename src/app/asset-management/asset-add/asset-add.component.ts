import { Asset } from '@shared/models/asset.model';
import { AppState } from '@store/appstate';
import { Component, Inject, OnInit, TemplateRef } from '@angular/core';
import { Store } from '@ngrx/store';
import { createAsset } from '@store/asset/asset.actions';
import { ActivatedRoute, Router } from '@angular/router';
import { DOCUMENT } from '@angular/common';
import { getAllAssets } from '@store/asset/asset.selectors';

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

  assetStatusOption: any[] = [
    { name: "Hoạt động", value: true },
    { name: "Không hoạt động", value: false }
  ]

  constructor(
    private store: Store<AppState>,
    private router: Router,
    private route: ActivatedRoute,
    @Inject(DOCUMENT) private document: Document,
  ) { }

  ngOnInit() {
    this.assetId = this.route.snapshot.paramMap.get('id');

    this.store.select(getAllAssets).subscribe(res => {
      if (res.length > 0) {
        this.dataItem = res.find(data => data.id == this.assetId)
        console.log(res.find(data => data.id == this.assetId))
        this.assetNameValue = this.dataItem['assetName']
        this.assetColorValue = this.dataItem['textColor']
        this.assetIconValue = this.dataItem['imgUrl']
        this.assetStatusValue = this.dataItem['actived']
      }
    });
  }

  addNewAsset() {
    console.log(this.assetNameValue)
    console.log(this.assetColorValue)
    console.log(this.assetStatusValue);

    if (this.assetIconValue != '') {

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

      this.store.dispatch(createAsset({ assetDTO }));
      setTimeout(() => {
        this.router.navigateByUrl('/asset');
        this.document.location.reload()
      }, 2000);
    } else {

    }

  }

  selectStatusOption($event) {
    this.assetStatusValue = $event.target.value
  }

}