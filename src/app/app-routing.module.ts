import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import { MainComponent, LayoutModule } from 'mobile-money-layout';
import {P404Component, P500Component, AuthGuard, LoginComponent} from 'mobile-money';



const routes: Routes = [

    {
        path: '', component: MainComponent,
        canActivate: [AuthGuard],
        canActivateChild: [AuthGuard],
        children: [
            {
                path: 'contract',
                loadChildren: './demo-tab-one/demo-tab-one.module#DemoTabOneModule'
            },
            {
                path: 'parameter',
                loadChildren: './demo-tab-two/demo-tab-two.module#DemoTabTwoModule'
            },
            {
                path: 'terms',
                loadChildren: './demo-tab-two/demo-tab-two.module#DemoTabTwoModule'
            },
            {
                path: 'faq',
                loadChildren: './demo-tab-two/demo-tab-two.module#DemoTabTwoModule'
            },
            {
                path: 'rule',
                loadChildren: './demo-tab-two/demo-tab-two.module#DemoTabTwoModule'
            },
        ]
    },
    {
        path: 'account/login',
        component: LoginComponent,
    },
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
    {path: '**', redirectTo: '/404'}
];

@NgModule({
    imports: [LayoutModule, RouterModule.forRoot(routes)],
    exports: [RouterModule]
})

export class AppRoutingModule {
}
