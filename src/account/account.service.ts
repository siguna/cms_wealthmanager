import { Injectable } from '@angular/core';
import { HttpClient, HttpEvent} from '@angular/common/http';
import {BehaviorSubject, Observable} from 'rxjs';
import { UserToken } from '../shared/models/user-token';
import { environment } from '../environments/environment';
import {finalize, map, retry} from 'rxjs/operators';
import { Router } from '@angular/router';
// import {END_POINT, STORAGE_KEY} from '../app/app.config';
import {ApiResponse} from '../shared/models/api-response';
import {AccessibleFeature} from '../shared/models/accessible-feature';
import {error} from 'util';
import {AvailableAction} from '../shared/models/available-action';
import {NavigationItem} from '../shared/store/navigation';
import {NavigationItems} from '../app/app.navigation';
import { BsModalService } from 'ngx-bootstrap/modal';
import { AppConfig } from 'src/app/app.config';
import { END_POINT } from 'src/app/app.config';
// import { ApiService } from '@shared/services/common/api';
// import { UtilsService } from '@shared/services/common/utils.service';


@Injectable({
    providedIn: 'root'
})
export class AccountService {
    // tslint:disable-next-line:max-line-length
    datatemp = `


{
   "access_token":"c6e9294d-54ec-4441-b9df-1bd916dda890",
   "token_type":"bearer",
   "refresh_token":"98d843a5-ad03-4e34-a73f-239d615c2dca",
   "expires_in":3600,
   "scope":"read write trust",
   "userInfo":{
      "userData":{
         "userId":"250",
         "userRight":null,
         "userName":"DUCNT28",
         "password":"$2a$10$x27/Q5GsEh/QDzDos5cEq.SHjAobgUdP4LOp2jzZg2z3xuOVtd4nG",
         "status":"1",
         "email":null,
         "cellphone":null,
         "telephone":null,
         "gender":null,
         "lastChangePassword":null,
         "loginFailureCount":null,
         "identityCard":null,
         "fullName":"Nguyen Trung Duc",
         "userTypeId":null,
         "createDate":null,
         "locationId":null,
         "passwordChanged":null,
         "lastLogin":null,
         "profileId":null,
         "lastResetPassword":null,
         "ip":null,
         "deptId":null,
         "posId":null,
         "deptName":null,
         "ignoreCheckIp":null,
         "lastValidTime":null,
         "checkIpLan":null,
         "tempLockCount":null,
         "loginFailAllow":null,
         "temporaryLockTime":null,
         "maxTmpLockAday":null,
         "passwordValidTime":null,
         "userValidTime":null,
         "allowMultiIpLogin":null,
         "allowIp":null,
         "allowLoginTimeStart":null,
         "allowLoginTimeEnd":null,
         "id":null,
         "name":null,
         "needChangePassword":null,
         "timeToChangePassword":null,
         "checkId":null,
         "ipLan":null,
         "checkIp":null,
         "timeToPasswordExpire":null
      },
      "roles":[
         {
            "status":"1",
            "roleId":"9",
            "roleName":"Admin12",
            "description":null,
            "roleCode":"Admin12",
            "ipOfficeWan":null
         }
      ],
      "items":[
         {
            "_id":{
               "$oid":"5e19d79074150b0f8c2e96ee"
            },
            "title":"Validator",
            "routerLink":"/demo/validator"
         },
         {
            "_id":{
               "$oid":"5e19d79074150b0f8c2e96ed"
            },
            "title":"Message",
            "items":[
               {
                  "title":"Alert Message",
                  "routerLink":"/demo/message/alert"
               },
               {
                  "title":"Confirm Message",
                  "routerLink":"/demo/message/confirm"
               }
            ]
         },
         {
            "_id":{
               "$oid":"5e19d79074150b0f8c2e96ec"
            },
            "title":"Components",
            "tags":"component",
            "icon":"fal fa-info-circle",
            "items":[
               {
                  "title":"Dropdown List",
                  "tags":"dropdown list",
                  "routerLink":"/demo/components/dropdown-list"
               },
               {
                  "title":"Datepicker",
                  "tags":"datepicker",
                  "routerLink":"/demo/components/datepicker"
               },
               {
                  "title":"Textfield",
                  "tags":"textfield",
                  "routerLink":"/demo/components/textfield"
               },
               {
                  "title":"Checkbox",
                  "tags":"checkbox",
                  "routerLink":"/demo/components/checkbox"
               },
               {
                  "title":"Radio Button",
                  "tags":"radio button",
                  "routerLink":"/demo/components/radio-button"
               },
               {
                  "title":"Button",
                  "tags":"button",
                  "routerLink":"/demo/components/button"
               },
               {
                  "title":"Tooltips",
                  "tags":"tooltips",
                  "icon":"fal fa-info-circle",
                  "routerLink":"/demo/components/tooltips"
               },
               {
                  "title":"Data Table",
                  "tags":"data table",
                  "routerLink":"/demo/components/data-table"
               },
               {
                  "title":"Custom Table",
                  "tags":"custom table",
                  "routerLink":"/demo/components/custom-table"
               },
               {
                  "title":"File upload",
                  "tags":"file upload",
                  "routerLink":"/demo/components/file-upload"
               },
               {
                  "title":"On Off",
                  "tags":"on off",
                  "routerLink":"/demo/components/on-off"
               },
               {
                  "title":"Spinner",
                  "tags":"spinner",
                  "routerLink":"/demo/components/spinner"
               },
               {
                  "title":"Extended Configuration",
                  "tags":"ext, config",
                  "routerLink":"/demo/components/extended-configuration"
               }
            ],
            "navTitle":true
         },
         {
            "_id":{
               "$oid":"5e19d79074150b0f8c2e96ef"
            },
            "title":"i18n",
            "routerLink":"/demo/i18n"
         },
         {
            "_id":{
               "$oid":"5e1d8141fe295d1205edc744"
            },
            "title":"Hotkey",
            "tags":"hotkey",
            "routerLink":"/demo/hotkey"
         },
         {
            "_id":{
               "$oid":"5e414af64f7ef123341155e3"
            },
            "title":"Cấu hình",
            "tags":"cau hinh",
            "icon":"assets/images/ic_cau_hinh.svg",
            "items":[
               {
                  "title":"Cấu hình đối tác chi hộ",
                  "tags":"cau hinh doi tac chi ho",
                  "routerLink":"/chi-ho"
               }
            ],
            "navTitle":true
         }
      ]
   }
}

        `;
    private currentUserTokenSubject: BehaviorSubject<UserToken> = new BehaviorSubject<UserToken>(null);
    public currentUserToken: Observable<UserToken> = this.currentUserTokenSubject.asObservable();
    public currentAccessibleFeatures: BehaviorSubject<AccessibleFeature[]> = new BehaviorSubject<AccessibleFeature[]>([]);

    // tslint:disable-next-line:variable-name
    constructor(
        private http: HttpClient, 
        private router: Router, 
      //   private _api: ApiService, 
      //   private utils: UtilsService,
        private modalService : BsModalService) {
        const strUserToken = localStorage.getItem(AppConfig.STORAGE_KEY.userToken);
        if (strUserToken) {
            this.currentUserTokenSubject.next(JSON.parse(strUserToken));
        }
        const userFeatures = localStorage.getItem(AppConfig.STORAGE_KEY.features);
        if (userFeatures) {
            this.currentAccessibleFeatures.next(JSON.parse(userFeatures));
        }
    }

    public get currentUserValue(): UserToken {
        return this.currentUserTokenSubject.value;
    }

   //  login(username: string, password: string, cpcode: string): Observable<any> {
      //   return this._api.authenticate(END_POINT.authen, username, password, cpcode)
      //       .pipe(map((userToken: any) => {
      //           if (userToken) {
      //               this.accessToken = userToken.access_token;
      //               this.refreshToken = userToken.refresh_token;
      //               localStorage.setItem(AppConfig.STORAGE_KEY.userToken, JSON.stringify(userToken));
      //               this.currentUserTokenSubject.next(userToken);
      //           }
      //           return userToken;
      //       }));
   //  }

    logout() {
        localStorage.removeItem(AppConfig.STORAGE_KEY.userToken);
        localStorage.removeItem(AppConfig.STORAGE_KEY.access_token);
        this.currentUserTokenSubject.next(null);
        for (let i = 1; i <= this.modalService.getModalsCount(); i++) {
            this.modalService.hide(i);
        }
        this.router.navigateByUrl('/account/login');
    }

    getPasswordResetToken(formGroup): Observable<HttpEvent<any>> {
        return this.http.post<any>(`${environment.apiUrl}/api/reset-password`, formGroup);
    }

    resetPassword(formGroup, id: number, token: string) {
        return this.http.put<any>(`${environment.apiUrl}/api/reset-password?id=${id}&token=${token}`, formGroup);
    }

    changePassword(formGroup): Observable<HttpEvent<any>> {
        return this.http.patch<any>(`${environment.apiUrl}/api/change-password`, formGroup);
    }



    get accessToken(): any {
        return localStorage.getItem(AppConfig.STORAGE_KEY.access_token);
    }
    set accessToken(value) {
        localStorage.setItem(AppConfig.STORAGE_KEY.access_token, value);
    }
    get refreshToken(): any {
        return localStorage.getItem(AppConfig.STORAGE_KEY.refresh_token);
    }

    set refreshToken(value) {
        localStorage.setItem(AppConfig.STORAGE_KEY.refresh_token, value);
    }

   //  public doRefreshToken() {
   //      return this._api.doRefreshToken(END_POINT.authen, this.refreshToken);
   //  }

   //  getUserFeatures(userId: number) {
   //      return this._api.get(`${END_POINT.user_api}/${userId}/features`);
   //  }

    getFeatureBasedOnRouteUrl(routeUrl: string, accessibleFeatures: AccessibleFeature[]): AccessibleFeature {
        if (routeUrl.startsWith('/')) {
            routeUrl = routeUrl.substr(1);
        }
        if (!routeUrl) {
            return null;
        }
        let accessibleFeature = null;
        accessibleFeatures.forEach(
            feature => {
                if (routeUrl.startsWith(feature.featureUrl) && (feature.actionLst) && (feature.actionLst.filter(
                    (action) => action.name.toLowerCase() === 'view').length > 0)) {
                    accessibleFeature = feature;
                }
                if (feature.items && feature.items.length > 0) {
                    const accessibleChildFeature = this.getFeatureBasedOnRouteUrl(routeUrl, feature.items);
                    if (accessibleChildFeature) {
                        accessibleFeature = accessibleChildFeature;
                    }
                }
            }
        );
        return accessibleFeature;
    }
   //  checkAvailableActions(routeLink: string): AvailableAction {
   //      return this.getActionByNavItem(this.utils.getNavByRouteLink(routeLink));
   //  }
    getActionByNavItem(accessibleFeature: NavigationItem): AvailableAction {
        const availableActions = {
            view: false,
            create: false,
            edit: false,
            delete: false
        };
        if (accessibleFeature && accessibleFeature.actionLst && accessibleFeature.actionLst.length > 0) {
            accessibleFeature.actionLst.forEach(action => {
                switch (action.name.toLowerCase()) {
                    case 'view':
                        availableActions.view = true;
                        break;
                    case 'create':
                        availableActions.create = true;
                        break;
                    case 'edit':
                        availableActions.edit = true;
                        break;
                    case 'delete':
                        availableActions.delete = true;
                        break;
                }
            });
        }
        return availableActions;
    }

    public buildMenu() {
      //   return this._api.get(END_POINT.get_menu);
    }
}
