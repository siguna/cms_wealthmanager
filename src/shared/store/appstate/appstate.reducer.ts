import {Action, createReducer, on} from '@ngrx/store';
import * as SettingsActions from './appstate.actions';

export interface AppState {
    isLoading: boolean
}

// here you can configure initial state of your app
// for all your users
export const initialState: AppState = {
    isLoading: false
};

const appstateReducer = createReducer(
    initialState,

    on(SettingsActions.setLoading, (state, action) => ({...state, isLoading: action.isLoading})),
);

export function reducer(state: AppState, action: Action) {
    return appstateReducer(state, action);
}
