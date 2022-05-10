import {Injectable} from '@angular/core';
import {BehaviorSubject} from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class TransferData {

    private messageSource = new BehaviorSubject<{ down: boolean }>({down: false});
    currentMessage = this.messageSource.asObservable();

    constructor() {
    }

    changeState(state: { down: boolean }) {
        this.messageSource.next(state);
    }

}
