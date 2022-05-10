import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {environment} from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class NavigationService {

  constructor(private http: HttpClient) {}


  getNavigationItemListByUsername(username: string): Observable<any> {
    return this.http.get(`${environment.apiUrl}/navigation-item/list?username=${username}`);
  }
}
