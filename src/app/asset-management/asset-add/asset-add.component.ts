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

@Component({
  selector: 'vt-asset-add',
  templateUrl: './asset-add.component.html',
  styleUrls: ['./asset-add.component.scss']
})


export class AssetAddComponent implements OnInit {

  assetNameValue: string;
  assetIconValue: string;
  assetColorValue: string;
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

    // console.log(this.assetNameValue)
    // console.log(this.assetColorValue)
    console.log(this.assetStatusValue)

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

    await this.store.dispatch(createAsset({assetDTO}));
    await this.router.navigateByUrl('/asset');
    await this.document.location.reload()
  }

}