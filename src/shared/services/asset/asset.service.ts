import { environment } from './../../../environments/environment';
import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Asset } from '@shared/models/asset.model';

@Injectable()
export class AssetService {

  constructor(private http: HttpClient) {
  }

  getAllAssets(): Observable<Asset[]> {
    console.log(1)
    return this.http.post<Asset[]>(`${environment.apiUrl}/api/asset/find-all`, {
      "body": {
        "assetDTO": {}
      }
    })
  }

  createAsset(assetDTO: Asset): Observable<Asset> {
    console.log(assetDTO)
    return this.http.post<Asset>(`${environment.apiUrl}/api/asset/create`, { "body": { assetDTO } });
  }

  deleteAsset(assetId: string): Observable<any> {
    return this.http.post<any>(`${environment.apiUrl}/api/asset/delete`, { "body": {  "id": assetId } });
  }

  updateAsset(assetId: string | number, changes: Partial<Asset>): Observable<any> {
    return this.http.put(`${environment.apiUrl}/api/asset/update` + assetId, changes);
  }

  updateAssetList(priorityList: Array<any>): Observable<any> {
    return this.http.post<any>(`${environment.apiUrl}/api/asset/update-list`, { "body": {  "sortList": priorityList } });
  }

  getAssetDetail(assetId: string): Observable<any> {
    console.log(40)
    console.log('assetId',assetId)
    return this.http.post<any>(`${environment.apiUrl}/api/asset/detail`, { "body": {  "id": assetId } });
  }

}