import {createAction, props} from '@ngrx/store';


export const setLoading = createAction(
    '[appstate] set app loading',
    props<{ isLoading: boolean }>()
);

