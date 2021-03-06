import {Location} from '@angular/common';
import {Injectable} from '@angular/core';
import {Router} from '@angular/router';

import {Actions, Effect, ofType} from '@ngrx/effects';
import * as RouterActions from './router.actions';

import {map, tap} from 'rxjs/operators';

@Injectable()
export class RouterEffects {
    @Effect({dispatch: false}) navigate$ = this.actions$.pipe(
        ofType(RouterActions.GO),
        map((action: RouterActions.Go) => action.payload),
        tap(({path, query: queryParams, extras}) => {
            this.router.navigate(path, {queryParams, ...extras});
        })
    );

    @Effect({dispatch: false}) location$ = this.actions$.pipe(
        ofType(RouterActions.UPDATE),
        map((action: RouterActions.UpdateLocation) => action.payload),
        tap(path => {
            this.location.go(path);
        })
    );

    @Effect({dispatch: false}) navigateBack$ = this.actions$.pipe(
        ofType(RouterActions.BACK),
        tap(() => this.location.back())
    );

    @Effect({dispatch: false}) navigateForward$ = this.actions$.pipe(
        ofType(RouterActions.FORWARD),
        tap(() => this.location.forward())
    );

    constructor(
        private actions$: Actions,
        private router: Router,
        private location: Location
    ) {
    }
}
