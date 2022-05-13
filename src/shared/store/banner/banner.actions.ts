import { Customer } from '@model/banner.model';
import { createAction, props } from '@ngrx/store';

export const loadBanners = createAction(
  '[Banner List] Load Banners',
);

export const bannersLoaded = createAction(
  '[Banner Effect] banners Loaded Successfully',
  props<{banners: any[]}>()
);


export const createBanner = createAction(
  '[Banner] Create Banner',
  props<{ banners: any }>()
)

export const bannerById = createAction(
  '[BannerId Effect] bannerId Loaded Successfully',
  props<{banner: string}>()
);

export const bannerActionTypes = {
  loadBanners,
  bannersLoaded,
  bannerById,
  createBanner, 
};


