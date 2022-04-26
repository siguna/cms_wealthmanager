import { Injector, NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { HTTP_INTERCEPTORS, HttpClient, HttpClientModule } from '@angular/common/http';
import { TranslateLoader, TranslateModule, TranslateService } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule, LocationStrategy, PathLocationStrategy } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '../environments/environment';
import { StoreRouterConnectingModule } from '@ngrx/router-store';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {
    ErrorPageModule, ApiService, ExcelService,
    UtilsService, ErrorInterceptor, LAZY_MODULES_MAP, APP_CONFIG_TOKEN, MobileMoneyModule, AccountModule
} from 'mobile-money';
import { LayoutModule } from 'mobile-money-layout';
import { reducers, metaReducers, effects } from '@shared/store';
import { CustomSharedModule } from '@shared/custom-shared.module';
import { MenuConfigNavigate } from './menu-config';
import { AppConfig } from './app.config';

export function createTranslateLoader(http: HttpClient) {
    return new TranslateHttpLoader(http, 'assets/langs/', '.json');
}

@NgModule({

    declarations: [
        AppComponent,
    ],
    imports: [
        AppRoutingModule, BrowserAnimationsModule,
        FormsModule, BrowserModule,
        CommonModule,
        HttpClientModule,

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
        ErrorPageModule, LayoutModule,
        MobileMoneyModule,
        AccountModule,
        CustomSharedModule,
    ],
    exports: [FormsModule, TranslateModule],
    providers: [ApiService, HttpClient,
        ExcelService, UtilsService, TranslateService,
        { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true },
        { provide: LocationStrategy, useClass: PathLocationStrategy },
        { provide: LAZY_MODULES_MAP, useValue: MenuConfigNavigate },
        { provide: APP_CONFIG_TOKEN, useClass: AppConfig },
    ],
    entryComponents: [],
    bootstrap: [AppComponent]
})

export class AppModule {
    static injector: Injector;

    constructor(injector: Injector) {
        AppModule.injector = injector;
    }
}
