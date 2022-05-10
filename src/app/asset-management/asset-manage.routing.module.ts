import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import { AssetManageComponent } from "./asset-manage.component";
import { AssetEditComponent } from './asset-edit/asset-edit.component';
import { AssetAddComponent } from './asset-add/asset-add.component';


export const routes: Routes = [
    {
        path:'', component: AssetManageComponent
    },
    {
        path:'edit-vtp/:id', component: AssetEditComponent
    },
    {
        path:'add-vtp', component: AssetAddComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})

export class AssetManageRoutingModule {
}
