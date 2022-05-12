import { async } from '@angular/core/testing';
import { Route, Router, ActivatedRoute } from '@angular/router';
import { AssetService } from '@shared/services/asset/asset.service';
import { AppState } from '@store/appstate';
import { Store } from '@ngrx/store';
import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from "@angular/forms";
import { Observable } from "rxjs";
import { Update } from '@ngrx/entity';
import { Asset } from '@shared/models/asset.model';
import { assetActionTypes, loadAssets } from '@store/asset/asset.actions';
import { getAllAssets } from '@store/asset/asset.selectors';
import { DOCUMENT, Location } from '@angular/common';
import { map } from 'rxjs/operators';

@Component({
  selector: 'vt-asset-edit',
  templateUrl: './asset-edit.component.html',
  styleUrls: ['./asset-edit.component.scss']
})
export class AssetEditComponent implements OnInit {

  assets$: Observable<Asset[]>;

  assetToBeUpdated: Asset;

  isUpdateActivated = false;

  assetNameValue: string;
  assetIconValue: string;
  assetColorValue: string;
  assetStatusValue: string;
  assetId;

  assetStatusOption: any[] = [
    { name: "Hoạt động", value: true },
    { name: "Ngừng hoạt động", value: false }
  ]

  dataItem;

  constructor(
    private fb: FormBuilder,
    private store: Store<AppState>,
    private assetService: AssetService,
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
      this.assetId = paramsId.id;
      console.log(this.assetId);
    });
  }
 data
  newFormGroup: FormGroup;
  ngOnInit() {

    this.activatedRoute.params.subscribe(paramsId => {
      this.assetId = paramsId.id;
      console.log(this.assetId);
      const assetId = this.assetId
    });
    this.store.dispatch(loadAssets())
    this.store.select(getAllAssets).subscribe(res => {
      console.log(res)
        if (res.length > 0) {
          this.dataItem = res.find(data => data.id == this.assetId)
          console.log(res.find(data => data.id == this.assetId))
          this.assetNameValue = this.dataItem['assetName']
          this.assetColorValue = this.dataItem['textColor']
          this.assetIconValue = this.dataItem['imgUrl']
          this.assetStatusValue = this.dataItem['actived']
          console.log(this.assetIconValue)
        }
    });

    // this.assetService.getAssetbyId(this.assetId).subscribe(
    //   res => {
    //     console.log(res)
    //     console.log(res.body)

    //     if (res.length > 0) {
    //         this.assetNameValue = res.body.assetDTO.assetName
    //         this.assetIconValue = res.body.assetDTO.imgUrl
    //         this.assetColorValue = res.body.assetDTO.textColor
    //         this.assetStatusValue = res.body.assetDTO.activated

    //     }
    // });

    console.log(this.assetIconValue)

  }

  showUpdateForm(asset: Asset) {
    this.assetToBeUpdated = { ...asset };
    this.isUpdateActivated = true;
  }

  showDetail() {

  }

  async updateAsset(updateForm) {
    const assetDTO: Asset = {
      assetName: this.assetNameValue,
      actived: this.assetStatusValue,
      imgUrl: "https://vtv1.mediacdn.vn/thumb_w/650/2021/2/18/photo-3-1613603568335203707649.jpg",
      textColor: "yellow",
      id: null,
      createdBy: null,
      createdDate: null,
      lastModifiedBy: null,
      lastModifiedDate: null,
      priority: null
    }

    // this.store.dispatch(assetActionTypes.updateAsset({ assetDTO }));

    await this.router.navigateByUrl('/asset');
    await this.document.location.reload()

    // this.isUpdateActivated = false;
    // this.assetToBeUpdated = null;
  }

  selectStatusOption($event) {
    this.assetStatusValue = $event.target.value
  }
}
