import {ActionReducer, ActionReducerMap, MetaReducer, createSelector} from '@ngrx/store';
import {RouterReducerState} from '@ngrx/router-store';
import {localStorageSync} from 'ngrx-store-localstorage';
import * as settings from './settings';
import * as router from './router';
import * as appstate from './appstate';

export interface AppState {
    settings: settings.SettingsState;
    router: RouterReducerState<router.RouterStateUrl>;
    appstate: appstate.AppState;
}

export const reducers: ActionReducerMap<AppState> = {
    settings: settings.reducer,
    router: router.reducer,
    appstate: appstate.reducer,
};


// this will save part of redux store into localstorage
// and restore this part on app init
export function localStorageSyncReducer(reducer: ActionReducer<any>): ActionReducer<any> {
    return localStorageSync({
        keys: ['settings'],
        rehydrate: true,
    })(reducer);
}

export const metaReducers: MetaReducer<AppState>[] = [
    localStorageSyncReducer,
    settings.settingsMetaReducer
]/*.concat(
    environment.production ?
        [] : // production only meta reducers
        [] // dev only meta reducers
)*/;


export const effects = [
];

