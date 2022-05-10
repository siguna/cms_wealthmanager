import { TabTwoComponent } from './tab-two/tab-two.component';
import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import { AssetListComponent } from '../asset-management/asset-list/asset-list.component';


export const routes: Routes = [

    {
        path: '', component: TabTwoComponent,
    },
    {
        path: 'list-vtp', component: AssetListComponent,
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})

export class TabTwoRoutingModule {
}
