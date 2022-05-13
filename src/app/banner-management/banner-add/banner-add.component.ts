import {
    BannerService
} from '@shared/services/banner/banner.service';
import {
    createBanner
} from './../../../shared/store/banner/banner.actions';
import {
    Component,
    OnInit
} from '@angular/core';
import {
    FormBuilder,
    FormGroup,
    NgForm
} from '@angular/forms';
import {
    Banner,
    Logo
} from '@model/banner.model';
import {
    Store
} from '@ngrx/store';
import {
    AppState
} from '@store/appstate';
import {
    AngularEditorConfig
} from '@kolkov/angular-editor';

@Component({
    selector: 'vt-banner-add',
    templateUrl: './banner-add.component.html',
    styleUrls: ['./banner-add.component.scss']
})
export class BannerAddComponent implements OnInit {

    public nameForm: FormGroup;

    htmlContent = '';

    banner: Banner = {
        id: 0,
        createdBy: "admin",
        lastModifiedBy: "",
        lastModifiedDate: "",
        bannerType: "1",
        bannerName: "",
        bannerContent: "",
        imgUrl: "https://cdn.thukyluat.vn/nhch-images//CauHoi_Hinh/9eb6abaa-8cda-456c-ad66-26ba4da23ffe.jpg",
        buttonText: "",
        attachedLink: "",
        priority: 0,
        actived: true,
        startActiveTime: "",
        finishActiveTime: "",
        parentId: 0
    }


    constructor(
        private store: Store < AppState > ,
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

    listFormGroupLogo: any[] = ["1"];
    
    ngOnInit() {}
    onSelectActive(event) {
        this.banner.actived = event.target.value == 'true' ? true : false
    }
    
    logos: any[] = [];

    changeLogo(event, index) {
        const check = this.logos.find((item) => item.id === index);
        if (check) {
            check.imgUrl = event.target.value;
        } else {
            const item = {
                imgUrl: event.target.value,
                parrentId: null,
                id: index
            };
            this.logos.push(item);
        }
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
        this.banner.bannerType = event.target.value;
    }

    onAddFormGroupLogo() {
        this.listFormGroupLogo.push(this.guidGenerator());
    }

    onRemoveAddLogo(index: any) {
        this.listFormGroupLogo = this.listFormGroupLogo.filter((item) => item !== index);
    }

    clickSaveHandle() {
        const dataLogos = []
        if()
        this.logos.forEach((item) => {
          const bannerContent = (<HTMLInputElement>document.getElementById(item.id)).value;
          item.bannerContent = bannerContent;
          dataLogos.push(item)
        })

        console.log("banner ", this.banner);
        this.bannerService.createBanner(this.banner, dataLogos).subscribe(
            (data) => {
                console.log(data);
            }
        );

    }

}