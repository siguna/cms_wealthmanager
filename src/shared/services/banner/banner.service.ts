import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
    providedIn: 'root'
})
export class BannerService {
   
    constructor(private http: HttpClient) {}
    getBannerByType(): Observable<any> {
        const data = {
            body: {
                bannerType: '1'
            }
        };
        return this.http.post<any>(`${environment.apiUrl}/api/banner/find-by-banner-type`, data);
    }

    createBanner(data: any): Observable<any> {
        return this.http.post<any>(`${environment.apiUrl}/api/banner/addBanner`, data);
    }

    removeListBanner(listIds: any): Observable<any> {
      return this.http.delete<any>(`${environment.apiUrl}/api/banner/find-by-banner-type`, listIds);
  }
}
