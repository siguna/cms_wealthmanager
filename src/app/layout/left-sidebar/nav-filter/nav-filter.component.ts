import {Component, ChangeDetectionStrategy, OnDestroy, OnInit} from '@angular/core';
import {Store} from '@ngrx/store';
import {selectFilter, navigationFilter} from 'src/shared/store/navigation';
import {SubSink} from 'subsink';
import {Subject} from 'rxjs';
import {tap, throttleTime, distinctUntilChanged} from 'rxjs/operators';
import {TransferData} from '../../../../shared/services/transferData.service';

@Component({
    selector: 'menu-nav-filter',
    templateUrl: './nav-filter.component.html',
    changeDetection: ChangeDetectionStrategy.Default
})
export class MenuNavFilterComponent implements OnDestroy, OnInit {

    vm$ = this.store.select(selectFilter);
    private sub = new SubSink();
    private textThrhottle$ = new Subject<string>();
    message: { down: boolean };

    constructor(private store: Store<any>, private data: TransferData) {
        this.sub.sink = this.textThrhottle$.pipe(
            throttleTime(300),
            distinctUntilChanged(),
            tap(text => {
                this.store.dispatch(navigationFilter({text}));
            })
        ).subscribe();
    }

    ngOnInit(): void {
        this.data.currentMessage.subscribe(message => {
            this.message = message;
        });
        console.log("sdadsdsa", this.vm$);
        
    }

    handleKeyup($event: KeyboardEvent, value: string) {
        this.textThrhottle$.next(value.trim());
    }

    ngOnDestroy(): void {
        this.sub.unsubscribe();
    }


}
