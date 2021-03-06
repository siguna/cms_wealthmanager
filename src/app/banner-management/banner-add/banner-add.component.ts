import { Router } from '@angular/router';
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
import { ToastrService } from 'ngx-toastr';
import { DialogsService } from '@shared/common/dialogs/dialogs.service';
import { TranslateService } from '@ngx-translate/core';

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
        startActiveTime: new Date(),
        finishActiveTime: new Date(),
        parentId: 0
    }


    constructor(
        private store: Store<AppState>,
        private bannerService: BannerService,
        private toastr: ToastrService,
        private formBuilder: FormBuilder,
        private router: Router,
        private dialogService: DialogsService,
        private translate: TranslateService,
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

    ngOnInit() { }
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
        if (this.logos.length > 0) {
            this.logos.forEach((item) => {
                const bannerContent = (<HTMLInputElement>document.getElementById(item.id)).value;
                item.bannerContent = bannerContent;
                dataLogos.push(item)
            })
        }


        console.log("banner ", this.banner);
        // this.banner.finishActiveTime = new Date(this.banner.finishActiveTime);
        // this.banner.startActiveTime = new Date(this.banner.startActiveTime)

        this.dialogService.confirm('', this.translate.instant('B???n c?? ch???c ch???n mu???n c???p nh???t ?')).subscribe(next => {
            if (next) {

                this.bannerService.createBanner(this.banner, dataLogos).subscribe(
                    (data) => {
                        console.log(data);
                        if (data && data.status && data.status.message == "successful") {
                            this.toastr.success("C???p nh???t th??nh c??ng")
                            this.router.navigateByUrl('/asset');
                        } else if (data && data.status && data.status.message == "error") {
                            this.toastr.error(data.status.displayMessages[0].message)
                        } else {

                        }

                    }
                );
                //   if () {
                //     //upate
                //   } else {
                //     //Add new
                //   }

            }
        });
    }

}