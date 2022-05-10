import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from 'mobile-money';
import { ReactiveFormsModule } from '@angular/forms';
import { TranslateModule } from '@ngx-translate/core';
// import { ConfirmDialogComponent } from './common/dialogs/confirm-dialog/confirm-dialog.component';
// import { MessageDialogComponent } from './common/dialogs/message-dialog/message-dialog.component';



@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    ReactiveFormsModule,
    TranslateModule
  ],
  exports: [SharedModule, ReactiveFormsModule, TranslateModule],
  declarations: [],
  // declarations: [ConfirmDialogComponent, MessageDialogComponent]
})
export class CustomSharedModule { }
