import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'vt-banner-edit',
  templateUrl: './banner-edit.component.html',
  styleUrls: ['./banner-edit.component.scss']
})
export class BannerEditComponent implements OnInit {
  checkActiveBanner = "1";
  constructor() { }
  guidGenerator() {
    var S4 = function() {
       return (((1+Math.random())*0x10000)|0).toString(16).substring(1);
    };
    return (S4()+S4()+"-"+S4()+"-"+S4()+"-"+S4()+"-"+S4()+S4()+S4());
  }

  listFormGroupLogo = ["1"]
  ngOnInit() {

  }
  
  onSelectBanner(event: any) {
    this.checkActiveBanner = event.target.value
  }

  onAddFormGroupLogo(){
    this.listFormGroupLogo.push(this.guidGenerator())
  }

  onRemoveAddLogo(index: any){
    this.listFormGroupLogo = this.listFormGroupLogo.filter((item) => item !== index)
  }
}
