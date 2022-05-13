import { BannerService } from '@shared/services/banner/banner.service';
import { createBanner } from './../../../shared/store/banner/banner.actions';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, NgForm } from '@angular/forms';
import { Banner } from '@model/banner.model';
import { Store } from '@ngrx/store';
import { AppState } from '@store/appstate';
import { AngularEditorConfig } from '@kolkov/angular-editor';

@Component({
    selector: 'vt-banner-add',
    templateUrl: './banner-add.component.html',
    styleUrls: ['./banner-add.component.scss']
})
export class BannerAddComponent implements OnInit {

    public nameForm:FormGroup;

    htmlContent = '';

    
    checkActiveBanner = "1";
    bannerType = '1'
    bannerId: string;
    bannerName: string;
    bannerContent: string;
    imgUrl: string;
    buttonText: string;
    attachedLink: string;
    createdBy: string;
    lastModifiedBy: string;
    startActiveTime: string;
    finishActiveTime: string;
    actived: boolean = true;
    editorValue;
    constructor(
        private store: Store<AppState>,
        private bannerService: BannerService,
        private formBuilder: FormBuilder
    ) {
        this.nameForm = this.formBuilder.group({
            name: ''
          });
     }
    guidGenerator() {
        var S4 = function () {
            return (((1 + Math.random()) * 0x10000) | 0).toString(16).substring(1);
        };
        return S4() + S4() + '-' + S4() + '-' + S4() + '-' + S4() + '-' + S4() + S4() + S4();
    }

    listFormGroupLogo = ['1'];
    ngOnInit() { }
    onSelectActive(event) {
        this.actived = event.target.value == 'true' ? true : false
    }
    submitAddBannerForm(f: NgForm) {
        // const { value } = f;
        // value.bannerType = this.bannerType
        // value.actived = this.actived
        // value.startActiveTime = new Date(value.startActiveTime)
        // value.finishActiveTime = new Date(value.finishActiveTime)
        // console.log(value);

        // // this.store.dispatch(createBanner({banners}))
        // this.bannerService.createBanner(value).subscribe((res) => {
        //     console.log(res)
        // })
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

    getResult() {
        console.log("123", this.bannerName);
        console.log('it does nothing', this.nameForm.get('name').value);
    }

}
