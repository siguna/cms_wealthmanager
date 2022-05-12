import { EntityState, EntityAdapter, createEntityAdapter } from '@ngrx/entity';
import { Action, createReducer, on } from '@ngrx/store';
import { assetActionTypes } from './asset.actions';
import { Asset } from '@shared/models/asset.model';

export interface AssetState extends EntityState<Asset> {
  assetsLoaded: boolean;
  status: any
}

export const adapter: EntityAdapter<Asset> = createEntityAdapter<Asset>();

export const initialState = adapter.getInitialState({
  assetsLoaded: false,
  status
});

export const assetReducer = createReducer(
  initialState,

  on(assetActionTypes.assetsLoaded, (state, action: any) => {
    return adapter.addAll(
      action.body.listAssetDTO,
      {...state, assetsLoaded: true, status: action.status}
    );
  }),

  on(assetActionTypes.createAsset, (state, action) => {
    return adapter.addOne(action.assetDTO, state);
  }),

  on(assetActionTypes.deleteAsset, (state, action) => {
    return adapter.removeOne(action.assetId, state);
  }),

  on(assetActionTypes.updateAsset, (state, action) => {
    return adapter.addOne(action.assetDTO, state);
  })
);

export const { selectAll, selectIds } = adapter.getSelectors();

export function reducer(state, action: Action) {
  return assetReducer(state, action);
}