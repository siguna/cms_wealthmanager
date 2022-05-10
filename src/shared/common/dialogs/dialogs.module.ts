import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ConfirmDialogComponent} from './confirm-dialog/confirm-dialog.component';
import {ModalModule} from 'ngx-bootstrap/modal';
import {DialogsService} from './dialogs.service';
import {MessageDialogComponent} from './message-dialog/message-dialog.component';

@NgModule({
  declarations: [ConfirmDialogComponent, MessageDialogComponent],
  entryComponents: [ConfirmDialogComponent,MessageDialogComponent],
  imports: [
    CommonModule,
    ModalModule
  ],
  providers: [DialogsService]
})
export class DialogsModule { }
