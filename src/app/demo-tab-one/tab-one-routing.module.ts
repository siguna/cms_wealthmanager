import { TabOneCreateComponent } from './tab-one-create/tab-one-create.component';
import { TabOneComponent } from './tab-one/tab-one.component';
import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';


export const routes: Routes = [

    {
        path: 'search-vtp', component: TabOneComponent,
    },
    {
        path: 'identify-vtp',
        component: TabOneCreateComponent,
    },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})

export class TabOneRoutingModule {
}
