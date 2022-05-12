import { createAction, props } from '@ngrx/store';
import {Update} from '@ngrx/entity';
import { Asset } from '@shared/models/asset.model';

export const loadAssets = createAction(
  '[Assets List] Load Assets via Service',
);

export const assetsLoaded = createAction(
  '[Assets Effect] Assets Loaded Successfully',
  props<{data: any}>()
);

export const createAsset = createAction(
  '[Create Asset Component] Create Asset',
  props<{assetDTO: Asset}>()
);

export const deleteAsset = createAction(
  '[Assets List Operations] Delete Asset',
  props<{assetId: string}>()
);

export const updateAsset = createAction(
  '[Assets List Operations] Update Asset',
  props<{assetDTO: Asset}>()
);

export const assetActionTypes = {
  loadAssets,
  assetsLoaded,
  createAsset,
  deleteAsset,
  updateAsset
};