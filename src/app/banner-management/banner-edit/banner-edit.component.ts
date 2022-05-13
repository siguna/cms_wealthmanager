import {
    ActivatedRoute,
    Router
} from '@angular/router';
import {
    BannerService
} from '@shared/services/banner/banner.service';
import {
    Store
} from '@ngrx/store';
import {
    AppState
} from '@store/appstate';
import {
    FormGroup
} from '@angular/forms';
import {
    Component,
    OnInit
} from '@angular/core';
import {
    getAllBanner,
    loadBanners
} from '@store/banner';
import {
    Logo
} from '@model/banner.model';
import { ToastrService } from 'ngx-toastr';

@Component({
    selector: 'vt-banner-edit',
    templateUrl: './banner-edit.component.html',
    styleUrls: ['./banner-edit.component.scss']
})
export class BannerEditComponent implements OnInit {
    public nameForm: FormGroup;
    checkActiveBanner = '1';
    bannerType = '1';
    bannerId: string;
    bannerName: string;
    bannerContent: string;
    imgUrl: string;
    buttonText: string;
    attachedLink: any;
    createdBy: string;
    lastModifiedBy: string;
    startActiveTime:  Date;
    finishActiveTime:  Date;
    actived: boolean = true;
    editorValue;
    constructor(
        private store: Store < AppState > ,
        private bannerService: BannerService,
        private activatedRoute: ActivatedRoute,
        private toastr: ToastrService,
        private router: Router
    ) {
        this.activatedRoute.params.subscribe((paramsId) => {
            this.bannerId = paramsId.id;
            console.log(this.bannerId);
        });
    }
    guidGenerator() {
        var S4 = function () {
            return (((1 + Math.random()) * 0x10000) | 0).toString(16).substring(1);
        };
        return S4() + S4() + '-' + S4() + '-' + S4() + '-' + S4() + '-' + S4() + S4() + S4();
    }

    listFormGroupLogo = ['1'];
    test: any = {};
    banner;
    dataItem;
    ngOnInit() {
        this.store.dispatch(loadBanners());
        this.bannerService.getBannerById(this.bannerId).subscribe((res) => {
            this.test = res.body.banner;
            this.bannerName = this.test.bannerName;
            this.banner = res.body.banner;
        });

        this.bannerName = this.test.bannerName;
        this.store.dispatch(loadBanners());
        this.store.select(getAllBanner).subscribe((res) => {
            if (res.length > 0) {
                console.log('saddsadsadsa', res);
                this.dataItem = res.find((item) => item.id == this.bannerId);
                if (this.dataItem) {
                    this.banner = {
                        ...this.dataItem
                    };
                    this.bannerName = this.dataItem.bannerName;
                    this.bannerType = this.dataItem.bannerType;
                    this.bannerContent = this.dataItem.bannerContent;
                    this.imgUrl = this.dataItem.imgUrl;
                    this.startActiveTime = this.dataItem.startActiveTime;
                    this.finishActiveTime = this.dataItem.finishActiveTime;
                    this.actived = this.dataItem.actived;
                    this.attachedLink = this.dataItem.attachedLink;
                    this.buttonText = this.dataItem.buttonText;
                    this.createdBy = this.dataItem.createdBy;
                    this.lastModifiedBy = this.dataItem.lastModifiedBy;
                    console.log('this.dataItem', this.dataItem);
                }
            }
        });
    }

    logos: any[] = [];

    changeLogo(event, index) {
        const check = this.logos.find((item) => item.id === index);
        if (check) {
            check.imgUrl = event.target.value;
        } else {
            const item = {
                imgUrl: event.target.value,
                parrentId: this.bannerId,
                id: index
            };
            this.logos.push(item);
        }
    }

    onSelectActive(event) {
        this.actived = event.target.value == 'true' ? true : false;
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
        const data = {
            ...this.banner,
            actived: this.actived
        };
        const dataLogos = []
        if (this.logos.length > 0) {
            this.logos.forEach((item) => {
                const bannerContent = ( < HTMLInputElement > document.getElementById(item.id)).value;
                item.bannerContent = bannerContent;
                dataLogos.push(item)
            })
        }
        this.banner.finishActiveTime = new Date(this.banner.finishActiveTime);
        this.banner.startActiveTime = new Date(this.banner.startActiveTime)

        this.bannerService.updateBanner(data, dataLogos).subscribe((res) => {
            if (res) {
              this.router.navigate(['/banner'])
            }

        })
    }
}