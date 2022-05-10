import { TranslateService } from '@ngx-translate/core';
import { HostListener, Injectable, Renderer2, RendererFactory2 } from '@angular/core';
import { ConfirmDialogComponent } from './confirm-dialog/confirm-dialog.component';
import { BsModalRef } from 'ngx-bootstrap/modal';
import { BsModalService } from 'ngx-bootstrap/modal';
import { Observable } from 'rxjs';
import { MessageDialogComponent } from './message-dialog/message-dialog.component';

@Injectable()
export class DialogsService {
  bsModalRef: BsModalRef;
  renderer: Renderer2;

  constructor(
    rendererFactory: RendererFactory2,
    private translateService: TranslateService,
    public modalService: BsModalService) {
    this.renderer = rendererFactory.createRenderer(null, null);
  }

  public confirm(title: string, message: string) {

    // const yes = this.translateService.instant('dashboard.button.yes');
    // const no = this.translateService.instant('dashboard.button.no');
    const yes = this.translateService.instant('Có');
    const no = this.translateService.instant('Không');

    const initialState: DialogOptions = {
      title: title,
      message: message,
      buttons: {
        confirm: {
          label: yes,
          className: ''
        },
        cancel: {
          label: no,
          className: ''
        }
      }
    };
    this.playSound('messagebox');
    this.bsModalRef = this.modalService.show(ConfirmDialogComponent,
      {
        initialState,
        backdrop: 'static',
        keyboard: false,

      });
    return this.bsModalRef.content.onClose as Observable<boolean>;
  }
  public playSound(sound: string, path = 'assets/media/sound') {
    const audioElement = document.createElement('audio');
    if (navigator.userAgent.match('Firefox/')) {
      audioElement.setAttribute('src', path + '/' + sound + '.ogg');
    } else {
      audioElement.setAttribute('src', path + '/' + sound + '.mp3');
    }

    audioElement.addEventListener('load', () => {
      audioElement.play();
    }, true);
    audioElement.pause();
    audioElement.play();
  }

  public showMessage(title: string, message: string) {
    const initialState: DialogOptions = {
      title: title,
      message: message,
      buttons: {
        confirm: {
          label: 'OK',
          className: ''
        }
      }
    };

    this.bsModalRef = this.modalService.show(MessageDialogComponent,
      {
        initialState,
        backdrop: 'static',
        keyboard: false,
      });
    return this.bsModalRef.content.onClose as Observable<boolean>;
  }

  public showIconMessage(title: string, message: string, iconClass: string) {
    const initialState: DialogOptions = {
      title: title,
      message: message,
      buttons: {
        confirm: {
          label: 'OK',
          className: ''
        }
      },
      iconClass: iconClass
    };

    this.bsModalRef = this.modalService.show(MessageDialogComponent,
      {
        initialState,
        backdrop: 'static',
        keyboard: false,
      });
    return this.bsModalRef.content.onClose as Observable<boolean>;
  }

  public showInfoMessage(title: string, message: string) {
    const initialState: DialogOptions = {
      title: title,
      message: message,
      buttons: {
        confirm: {
          label: 'OK',
          className: ''
        }
      },
      iconClass: 'messageInfo'
    };

    this.bsModalRef = this.modalService.show(MessageDialogComponent,
      {
        initialState,
        backdrop: 'static',
        keyboard: false,
      });
    return this.bsModalRef.content.onClose as Observable<boolean>;
  }

  public showWarningMessage(title: string, message: string) {
    const initialState: DialogOptions = {
      title: title,
      message: message,
      buttons: {
        confirm: {
          label: 'OK',
          className: ''
        }
      },
      iconClass: 'messageWarning'
    };

    this.bsModalRef = this.modalService.show(MessageDialogComponent,
      {
        initialState,
        backdrop: 'static',
        keyboard: false,
      });
    return this.bsModalRef.content.onClose as Observable<boolean>;
  }

  public showErrorMessage(title: string, message: string) {
    const initialState: DialogOptions = {
      title: title,
      message: message,
      buttons: {
        confirm: {
          label: 'OK',
          className: ''
        }
      },
      iconClass: 'messageError'
    };

    this.bsModalRef = this.modalService.show(MessageDialogComponent,
      {
        initialState,
        backdrop: 'static',
        keyboard: false,
      });
    return this.bsModalRef.content.onClose as Observable<boolean>;
  }
}

export interface DialogOptions {
  title: string;
  message: string;
  buttons: DialogButtons;
  iconClass?: string
}



export interface DialogButton {
  label: string;
  className: string;
}

export interface DialogButtons {
  confirm?: DialogButton;
  cancel?: DialogButton;
}
