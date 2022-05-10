import { createSelector, createFeatureSelector } from '@ngrx/store';
import { AssetState, selectAll } from './asset.reducer';

export const assetFeatureSelector = createFeatureSelector<AssetState>('assets');

export const getAllAssets = createSelector(
  assetFeatureSelector,
  selectAll
);

export const areAssetsLoaded = createSelector(
  assetFeatureSelector,
  state => ({
    ids: state.ids,
    entities: state.entities
  })
);


