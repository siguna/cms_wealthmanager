import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ENDOW } from '@model/endow.model';
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EndowService {

  constructor(private http: HttpClient) { }
  endowData = [
    
  ]
  addEndow(data: ENDOW, currentPage, recordNumber){
  //   this.endowData.unshift(abc);
  //   const lConfig = this.lConfig.slice((currentPage - 1) * recordNumber, (currentPage) * recordNumber);
  //   const totalPage = Math.ceil(this.lConfig.length / recordNumber);
  //   const result = [{
  //       itemOfPage: recordNumber, totalItemCount: this.lConfig.length,
  //       pageNumber: currentPage, pageSize: totalPage, data: lConfig
  //   }];
  //   return of(result);
  }
}
