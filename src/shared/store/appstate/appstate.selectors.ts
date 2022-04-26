import {createFeatureSelector, createSelector} from '@ngrx/store';
import {AppState} from './appstate.reducer';

export const selectAppState = createFeatureSelector<AppState>('appstate');

export const filterAppLoading = createSelector(selectAppState, state => ({
    value: state.isLoading
}));
