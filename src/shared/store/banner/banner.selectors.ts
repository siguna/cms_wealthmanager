import { createSelector, createFeatureSelector } from '@ngrx/store';
import { BannerState, selectAll } from './banner.reducer';

export const bannerFeatureSelector = createFeatureSelector<BannerState>('banners');

export const getAllBanner = createSelector(
  bannerFeatureSelector,
  selectAll
);

export const getBannerSelect = createSelector(
  bannerFeatureSelector,
  state => ({
    ids: state.ids,
    entities: state.entities
  })
);


