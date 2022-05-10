import { reducer } from './router/router.reducer';
import {ActionReducer, ActionReducerMap, MetaReducer, createSelector} from '@ngrx/store';
import {RouterReducerState} from '@ngrx/router-store';
import {localStorageSync} from 'ngrx-store-localstorage';
import * as navigation from './navigation';
import * as settings from './settings';
import * as router from './router';
import * as appstate from './appstate';
import * as assets from './asset';
import * as banners from './banner';
export interface AppState {
    settings: settings.SettingsState;
    router: RouterReducerState<router.RouterStateUrl>;
    appstate: appstate.AppState;
    navigation: navigation.NavigationState;
    assets: assets.AssetState,
    banners: banners.BannerState
}

export const reducers: ActionReducerMap<AppState> = {
    settings: settings.reducer,
    router: router.reducer,
    appstate: appstate.reducer,
    navigation: navigation.reducer,
    assets: assets.reducer,
    banners: banners.reducer,
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
    navigation.NavigationEffects,
    assets.AssetEffects,
    banners.BannerEffects  
];

