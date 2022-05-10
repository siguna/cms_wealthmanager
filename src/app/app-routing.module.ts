import { NgModule } from '@angular/core';
import { RouterModule, Routes, Route } from '@angular/router';
// import { LayoutModule } from 'mobile-money-layout';
import { LayoutModule } from './layout/layout.module';
import { MainComponent } from '../app/layout/main/main.component';

import { P404Component, P500Component, AuthGuard, LoginComponent } from 'mobile-money';
const home: Route = {
    path: 'asset',
    component: MainComponent,
    children: [
        {
            path: '',
            loadChildren: './asset-management/asset-manage.module#AssetManageModule'
        }
    ]
};

const endow: Route = {
    path: 'endow',
    component: MainComponent,
    children: [
        {
            path: '',
            loadChildren: './endow-management/endow-management.module#EndowManagementModule'
        }
    ]
}

const banner: Route = {
    path: 'banner',
    component: MainComponent,
    children: [
        {
            path: '',
            loadChildren: './banner-management/banner-management.module#BannerManagementModule'
        }
    ]
}

const routes: Routes = [
    home,
    endow,
    banner,
    {
        path: '',
        redirectTo: '/asset',
        pathMatch: 'full'
    },
    // {
    //     path: '', component: MainComponent,
    //     // canActivate: [AuthGuard],
    //     // canActivateChild: [AuthGuard],
    //     children: [
    //         {
    //             path: 'contract',
    //             loadChildren: './demo-tab-one/demo-tab-one.module#DemoTabOneModule'
    //         },
    //         {
    //             path: 'parameter',
    //             loadChildren: './demo-tab-two/demo-tab-two.module#DemoTabTwoModule'
    //         },
    //         {
    //             path: 'terms',
    //             loadChildren: './demo-tab-two/demo-tab-two.module#DemoTabTwoModule'
    //         },
    //         {
    //             path: 'faq',
    //             loadChildren: './demo-tab-two/demo-tab-two.module#DemoTabTwoModule'
    //         },
    //         {
    //             path: 'rule',
    //             loadChildren: './demo-tab-two/demo-tab-two.module#DemoTabTwoModule'
    //         },
    //     ]
    // },
    // {
    //     // path: 'account/login',
    //     // component: LoginComponent,
    // },
    {
        path: '404',
        component: P404Component,
        data: {
            title: 'Page 404'
        }
    },
    {
        path: '500',
        component: P500Component,
        data: {
            title: 'Page 500'
        }
    },
    // { path: '**', redirectTo: '/404' }
];

@NgModule({
    imports: [LayoutModule, RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {}
