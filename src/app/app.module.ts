import { AssetService } from '@shared/services/asset/asset.service';
import { Injector, NgModule } from '@angular/core';
import { FuncsService } from '@shared/common/wealth/funcs.service';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
// import { FormsModule } from '@angular/forms';
import { HTTP_INTERCEPTORS, HttpClient, HttpClientModule } from '@angular/common/http';
import { TranslateLoader, TranslateModule, TranslateService } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule, LocationStrategy, PathLocationStrategy } from '@angular/common';
// import { ApiService } from '@shared/services/common/api';
import { UserService } from '../shared/services/user.service';
import { ExcelService } from '../shared/common/ui-component/datatables/export-excel.service';

import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '../environments/environment';
import { StoreRouterConnectingModule } from '@ngrx/router-store';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {
    ErrorPageModule, 
    ApiService,
    ErrorInterceptor, LAZY_MODULES_MAP, APP_CONFIG_TOKEN, MobileMoneyModule, AccountModule, UtilsService, PaginationComponent, 
} from 'mobile-money';
// import { LayoutModule } from 'mobile-money-layout';
import { reducers, metaReducers, effects } from '@shared/store';
import { CustomSharedModule } from '@shared/custom-shared.module';
import { MenuConfigNavigate } from './menu-config';
import { AppConfig } from './app.config';
import { MaterialModule } from '@shared/common/wealth/material.module';
import {MatSlideToggleModule, MatCheckboxModule} from '@angular/material'
import { FormsModule } from '@angular/forms';
// import { UtilsService } from '@shared/services/common/utils.service';
import { ReactiveFormsModule } from '@angular/forms';
import { NgxColorsModule } from 'ngx-colors';

export function createTranslateLoader(http: HttpClient) {
    return new TranslateHttpLoader(http, 'assets/langs/', '.json');
}

@NgModule({

    declarations: [
        AppComponent
    ],
    imports: [
        // LayoutModule,
        BrowserAnimationsModule,
        FormsModule, 
        BrowserModule,
        CommonModule,
        HttpClientModule,
        AppRoutingModule, 
        MaterialModule,
        ReactiveFormsModule,
        MatSlideToggleModule,
        // ngrx modules
        StoreModule.forRoot(reducers, {
            metaReducers,
            runtimeChecks: {
                strictStateImmutability: false,
                strictActionImmutability: false,
                strictStateSerializability: false,
                strictActionSerializability: false,
            },
        }),
        EffectsModule.forRoot([...effects]),
        StoreDevtoolsModule.instrument({
            maxAge: 25, logOnly: environment.production,
            actionsBlocklist: ['@ngrx/router*']
        }),
        StoreRouterConnectingModule.forRoot(),
        TranslateModule.forRoot({
            loader: {
                provide: TranslateLoader,
                useFactory: (createTranslateLoader),
                deps: [HttpClient]
            },
            isolate: true
        }),
        ErrorPageModule,
        MobileMoneyModule,
        AccountModule,
        CustomSharedModule,
    ],
    exports: [FormsModule, TranslateModule, ],
    providers: [
        ApiService, 
        HttpClient, 
        UserService,
        ExcelService, 
        FuncsService,
        AssetService,
        UtilsService, 
        MaterialModule,
        TranslateService,
        { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true },
        { provide: LocationStrategy, useClass: PathLocationStrategy },
        { provide: LAZY_MODULES_MAP, useValue: MenuConfigNavigate },
        { provide: APP_CONFIG_TOKEN, useClass: AppConfig },
    ],
    entryComponents: [PaginationComponent],
    bootstrap: [AppComponent]
})

export class AppModule {
    static injector: Injector;

    constructor(injector: Injector) {
        AppModule.injector = injector;
    }
}
