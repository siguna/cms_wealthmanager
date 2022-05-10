import {Injectable, Injector} from '@angular/core';
import {HttpClient, HttpHeaders, HttpParams} from '@angular/common/http';
import {map, timeout} from 'rxjs/operators';
import {Store} from '@ngrx/store';
import {TranslateService} from '@ngx-translate/core';
import {Observable} from 'rxjs';
import {environment} from "../../../environments/environment";
import {UserToken} from "../../models/user-token";
import { AppConfig } from 'src/app/app.config';
// import {APP_CONFIG, END_POINT, STORAGE_KEY} from "../../../app/app.config";

@Injectable()
export class ApiService {
    url: string = environment.apiUrl;
    authenUrl: string = environment.authenUrl;
    timeout = 7000;
    token: any;

    // tslint:disable-next-line:variable-name
    constructor(private _http: HttpClient, private store: Store<any>, public injector: Injector) {
    }

    get(pEndpoint: string, pOptions?: any, pHeaders?: any) {
        let headers = new HttpHeaders();
        let params = new HttpParams();

        let dHeaders = this.buildCommonHeader();

        if (pOptions) {
            Object.keys(pOptions).forEach(key => {
                params = params.append(key, pOptions[key]);
            });
        }

        if (pHeaders) {
            dHeaders = Object.assign(pHeaders, dHeaders);
        }

        Object.keys(dHeaders).forEach(key => {
            headers = headers.append(key, dHeaders[key]);
        });

        return this._http.get(this.url + '/' + pEndpoint, {headers, params}).pipe(
            timeout(this.timeout)
        );

    }

    authenticate(endpoint, username, password, cpcode) {
        const params = new HttpParams()
            .set('username', username)
            .set('password', password)
            .set('cpcode', cpcode)
            .set('grant_type', 'password');
        const headers = new HttpHeaders({
            'Content-type': 'application/x-www-form-urlencoded; charset=utf-8',
            'Access-Control-Allow-Origin': '*',
            Authorization: 'Basic ' + btoa(`${environment.clientId}:${environment.clientSecret}`)
        });
        return this._http.post<UserToken>(`${environment.authenUrl}/${endpoint}`, params, {headers});
    }

    public doRefreshToken(endpoint, refreshToken) {

        const httpOptions = {
            headers: new HttpHeaders({
                'Content-Type': 'application/x-www-form-urlencoded; charset=utf-8',
                'Authorization': 'Basic ' + btoa(`${environment.clientId}:${environment.clientSecret}`),
                'Access-Control-Allow-Origin': '*'
            })
        };

        let creds = 'refresh_token=' + refreshToken + '&grant_type=refresh_token';
        return this._http.put(`${environment.authenUrl}/${endpoint}/`, creds, httpOptions);
    }

    post(pEndpoint: string, pBody?: any, pOptions?: any, pHeaders?: any) {
        let headers = new HttpHeaders();
        let params = new HttpParams();

        let dHeaders = this.buildCommonHeader();

        if (pOptions) {
            Object.keys(pOptions).forEach(key => {
                params = params.append(key, pOptions[key]);
            });
        }

        if (pHeaders) {
            dHeaders = Object.assign(pHeaders, dHeaders);
        }

        Object.keys(dHeaders).forEach(key => {
            headers = headers.append(key, dHeaders[key]);
        });

        return this._http.post(this.url + '/' + pEndpoint, pBody, {headers, params}).pipe(
            timeout(this.timeout)
        );


    }

    put(endpoint: string, body?: any, pOptions?: any, pHeaders?: any) {
        let headers = new HttpHeaders();
        let params = new HttpParams();

        let dHeaders = this.buildCommonHeader();

        if (pOptions) {
            Object.keys(pOptions).forEach(key => {
                params = params.append(key, pOptions[key]);
            });
        }

        if (pHeaders) {
            dHeaders = Object.assign(pHeaders, dHeaders);
        }

        Object.keys(dHeaders).forEach(key => {
            headers = headers.append(key, dHeaders[key]);
        });

        return this._http.put(this.url + '/' + endpoint, body, {headers, params}).pipe(
            timeout(this.timeout)
        );
    }

    patch(endpoint: string, body?: any, pOptions?: any, pHeaders?: any) {
        let headers = new HttpHeaders();
        let params = new HttpParams();

        let dHeaders = this.buildCommonHeader();

        if (pOptions) {
            Object.keys(pOptions).forEach(key => {
                params = params.append(key, pOptions[key]);
            });
        }

        if (pHeaders) {
            dHeaders = Object.assign(pHeaders, dHeaders);
        }

        Object.keys(dHeaders).forEach(key => {
            headers = headers.append(key, dHeaders[key]);
        });
        return this._http.patch(this.url + '/' + endpoint, body, {headers, params}).pipe(
            timeout(this.timeout)
        );
    }

    delete(endpoint: string, pOptions?: any, pHeaders?: any): Observable<any> {
        let headers = new HttpHeaders();
        let params = new HttpParams();

        let dHeaders = this.buildCommonHeader();

        if (pOptions) {
            Object.keys(pOptions).forEach(key => {
                params = params.append(key, pOptions[key]);
            });
        }

        if (pHeaders) {
            dHeaders = Object.assign(pHeaders, dHeaders);
        }

        Object.keys(dHeaders).forEach(key => {
            headers = headers.append(key, dHeaders[key]);
        });

        return this._http.delete(this.url + '/' + endpoint, {headers, params}).pipe(
            timeout(this.timeout)
        );
    }

    private buildCommonHeader() {
        const accessToken = localStorage.getItem(AppConfig.STORAGE_KEY.access_token);
        if (accessToken) {
            const translate = this.injector.get(TranslateService);
            let lang = '';
            if (!translate) {
                lang = translate.currentLang;
            }
            lang = localStorage.getItem(AppConfig.STORAGE_KEY.currentLanguage);
            if (!lang) {
                lang = AppConfig.APP_CONFIG.defaultLanguage;
            }
            if (!lang) {
                lang = '';
            }
            return {
                Authorization: 'Bearer ' + accessToken,
                'Access-Control-Allow-Origin': '*',
                'Accept-Language': lang
            };
        } else {
            return {};
        }
    }
}

