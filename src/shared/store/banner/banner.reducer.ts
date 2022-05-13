import { EntityState, EntityAdapter, createEntityAdapter } from '@ngrx/entity';
import { Action, createReducer, on } from '@ngrx/store';
import { bannerActionTypes } from './banner.actions';
export interface BannerState extends EntityState<any> {
  bannerssLoaded: boolean;
  status: any;
}

export const adapter: EntityAdapter<any> = createEntityAdapter<any>();

export const initialState = adapter.getInitialState({
  bannerssLoaded: false,
  status: {}
});

export const bannerReducer = createReducer(
  initialState,

  on(bannerActionTypes.bannersLoaded, (state, action: any) => {
    return adapter.addAll(
      action.body.banner,
      {...state, status: action.status}
    );
  }),
);

export const { selectAll, selectIds } = adapter.getSelectors();

export function reducer(state: BannerState, action: Action) {
  return bannerReducer(state, action);
}