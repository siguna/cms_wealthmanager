import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Banner, Logo } from '@model/banner.model';
import { Observable } from 'rxjs';
import { map, tap } from 'rxjs/operators';
import { environment } from 'src/environments/environment';

@Injectable({
    providedIn: 'root'
})
export class BannerService {

    constructor(private http: HttpClient, private router:Router) {}
    getBannerByType(): Observable < any > {
        const data = {
            body: {
                bannerType: '1'
            }
        };
        return this.http.post<any>(`${environment.apiUrl}/api/banner/find-by-banner-type`, data);
    }

    createBanner(banner: Banner, logos: Logo[] = []): Observable<any> {
        let data = {
            body: {
                banner: banner,
                logos: logos
            }
        };
        return this.http.post<any>(`${environment.apiUrl}/api/banner/add-banner`, data);
    }

    updateBanner(banner: Banner): Observable<any> {
        return this.http.post<any>(`${environment.apiUrl}/api/banner/update-banner`, {
            body: {
                banner: banner
            }
        });
    }

    deleteBanner(bannerId: any): Observable<any> {
        let listIds = [];
        listIds.push(bannerId);
        const data = {
            body: {
                ids: listIds
            }
        };
        return this.http.post<any>(`${environment.apiUrl}/api/banner/delete-banners`, data);
    }

    deleteListBanner(listIds: []): Observable<any> {
        const data = {
            body: {
                ids: listIds
            }
        };
        return this.http.post<any>(`${environment.apiUrl}/api/banner/delete-banners`, data);
    }

    getBannerById(bannerId: any): Observable<any> {
        return this.http.post<any>(`${environment.apiUrl}/api/banner/find-by-id`, {
            body: {
                id: bannerId
            }
        });
    }

    updateStatus(bannerId: any, status: boolean): Observable<any> {
        let data = {
            body: {
                id: bannerId,
                active: status
            }
        };

        console.log('change banner status: ', data);
        return this.http.post<any>(`${environment.apiUrl}/api/banner/change-banner-status`, data);
    }

    getAllBannerSortedByPriority(): Observable<any> {
        let data = {
            body: {
                page: 0,
                size: 100
            }
        };
        return this.http.post<any>(`${environment.apiUrl}/api/banner/find-all-sort`, data);
    }

    updateAssetList(priorityList: Array<any>): Observable<any> {
        return this.http.post<any>(`${environment.apiUrl}/api/banner/sort-list-banner-by-priority`, { "body": { "sortList": priorityList } }).pipe(
          tap((assets: any) => {
            return this.router.navigateByUrl('/banner')
          }));
      }
}
