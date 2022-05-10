import {createAction, props} from '@ngrx/store';
import {NavigationItem} from './navigation.reducer';

export const toggleNavSection = createAction(
  '[Navigation] Toggle Nav Section',
  props<{ item: NavigationItem }>()
);

export const activeUrl = createAction(
  '[Navigation] Active Url',
  props<{ url: string }>()
);

export const navigationFilter = createAction(
  '[Navigation] Navigation Filter',
  props<{ text: string }>()
);

export const mobileNavigation = createAction(
  '[Navigation] Mobile Navigation',
  props<{ open: boolean }>()
);

export const reloadAllItems = createAction(
    '[Navigation] Reload all items',
    props<{ items: NavigationItem[] }>()
);




