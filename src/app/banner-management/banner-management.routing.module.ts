import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BannerAddComponent } from './banner-add/banner-add.component';
import { BannerEditComponent } from './banner-edit/banner-edit.component';
import { BannerManagementComponent } from './banner-management.component';
import { BannerViewComponent } from './banner-view/banner-view.component';


export const routes: Routes = [
    {
        path:'', component: BannerManagementComponent
    },
    {
        path:'edit-banner/:id', component: BannerEditComponent
    },
    {
        path:'add-banner', component: BannerAddComponent
    },
    {
        path:'view-banner/:id', component: BannerViewComponent
    }
    
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})

export class BannerManagementRoutingModule {
}
