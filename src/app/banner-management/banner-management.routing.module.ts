import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BannerAddComponent } from './banner-add/banner-add.component';
import { BannerEditComponent } from './banner-edit/banner-edit.component';
import { BannerManagementComponent } from './banner-management.component';


export const routes: Routes = [
    {
        path:'', component: BannerManagementComponent
    },
    {
        path:'edit-banner', component: BannerEditComponent
    },
    {
        path:'add-banner', component: BannerAddComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})

export class BannerManagementRoutingModule {
}
