import { Component } from '@angular/core';
import { BsModalRef } from 'ngx-bootstrap/modal';
import {DialogButtons} from '../dialogs.service';
import {Subject} from 'rxjs';

@Component({
  selector: 'vt-confirm-dialog',
  templateUrl: './confirm-dialog.component.html',
  styleUrls: ['./confirm-dialog.component.scss']
})
export class ConfirmDialogComponent {

  title: string;
  message: string;
  buttons: DialogButtons;
  onClose = new Subject();

  constructor(public bsModalRef: BsModalRef) { }

  confirm($event: MouseEvent) {
    this.onClose.next(true);
    this.onClose.complete();
    this.bsModalRef.hide();
  }
  cancel($event: MouseEvent) {
    this.onClose.next(false);
    this.onClose.complete();
    this.bsModalRef.hide();
  }

}