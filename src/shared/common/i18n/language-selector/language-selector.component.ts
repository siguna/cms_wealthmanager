import {Component, OnInit} from '@angular/core';
import {languages} from './languages.model';
import {TranslateService} from '@ngx-translate/core';
import { APP_CONFIG_TOKEN } from 'mobile-money';
// import {APP_CONFIG, STORAGE_KEY} from "../../../../app/app.config";
import { AppConfig } from "../../../../app/app.config";

@Component({
  selector: 'vt-language-selector',
  templateUrl: './language-selector.component.html',
  styleUrls:['./language-selector.component.scss']
})
export class LanguageSelectorComponent implements OnInit {

  public languages: Array<any>;
  public currentLanguage: any = {};

  constructor(private translate: TranslateService) {
    let lang = localStorage.getItem(AppConfig.STORAGE_KEY.currentLanguage);
    if(lang == undefined)
    {
      lang = AppConfig.APP_CONFIG.defaultLanguage;
    }
    this.translate.setDefaultLang(lang);
    this.translate.use(lang);
  }

  ngOnInit() {

    this.languages = languages;
    this.languages.forEach(item => {
      if (item.key == this.translate.currentLang) {
        this.currentLanguage = item;
      }
    });
  }

  setLanguage(language) {
    if (this.currentLanguage != undefined && this.currentLanguage.key == language.key) {
      return;
    }
    this.currentLanguage = language;
    localStorage.setItem(AppConfig.STORAGE_KEY.currentLanguage, language.key);
    window.location.reload();
  }

}
