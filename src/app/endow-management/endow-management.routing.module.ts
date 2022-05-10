import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import { EndowAddComponent } from './endow-add/endow-add.component';
import { EndowEditComponent } from './endow-edit/endow-edit.component';
import { EndowManagementComponent } from './endow-management.component';


export const routes: Routes = [
    {
        path:'', component: EndowManagementComponent
    },
    {
        path:'edit-endow', component: EndowEditComponent
    },
    {
        path:'add-endow', component: EndowAddComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})

export class EndowManagementRoutingModule {
}
