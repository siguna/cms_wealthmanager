import { TabTwoComponent } from './tab-two/tab-two.component';
import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';


export const routes: Routes = [

    {
        path: '', component: TabTwoComponent,
    },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})

export class TabTwoRoutingModule {
}
