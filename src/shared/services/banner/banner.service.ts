import {
    HttpClient
} from '@angular/common/http';
import {
    Injectable
} from '@angular/core';
import {
    Observable
} from 'rxjs';
import {
    environment
} from 'src/environments/environment';

@Injectable({
    providedIn: 'root'
})
export class BannerService {

    constructor(private http: HttpClient) {}
    getBannerByType(): Observable < any > {
        const data = {
            body: {
                bannerType: '1'
            }
        };
        return this.http.post < any > (`${environment.apiUrl}/api/banner/find-by-banner-type`, data);
    }

    createBanner(banner: any): Observable < any > {
        return this.http.post < any > (`${environment.apiUrl}/api/banner/addBanner`, { "body": {  "banner": banner } });
    }
    updateBanner(banner: any): Observable < any > {
        return this.http.post < any > (`${environment.apiUrl}/api/banner/updateBanner`, { "body": {  "banner": banner } });
    }

    removeBanner(bannerId: any): Observable < any > {
        return this.http.post < any > (`${environment.apiUrl}/api/banner/deleteBannerById`, bannerId);
    }

    removeListBanner(listIds: any): Observable < any > {
        return this.http.post < any > (`${environment.apiUrl}/api/banner/find-by-banner-type`, listIds);
    }

    getBannerById(bannerId: any): Observable < any > {
        return this.http.post < any > (`${environment.apiUrl}/api/banner/find-by-id`, { "body": {  "id": bannerId } });
    }

    updateStatus(bannerId: any, status: boolean) : Observable<any>{
        let data = {
            "body": {
                "id": bannerId,
                "active": status
              }
        };

        console.log("change banner status: ",data); 
        return this.http.post<any> (`${environment.apiUrl}/api/banner/updateBannerByActive`,data)
    }

    getAllBannerSortedByPriority(): Observable < any > {
        return this.http.post < any > (`${environment.apiUrl}/api/banner/find-all-sort`,null); 
    }
}