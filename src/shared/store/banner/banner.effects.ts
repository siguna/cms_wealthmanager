import { getAllAssets } from '@store/asset/asset.selectors';
import { createEffect, Actions, ofType } from '@ngrx/effects';
import { concatMap, map, tap } from 'rxjs/operators';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BannerService } from '@shared/services/banner/banner.service';
import { bannerActionTypes } from './banner.actions';

@Injectable()
export class BannerEffects {
  
  constructor(private bannerService: BannerService, private actions$: Actions, private router: Router) {}

  loadBanners$ = createEffect(() =>
    this.actions$.pipe(
      ofType(bannerActionTypes.loadBanners),
      concatMap(() => 
      this.bannerService.getAllBannerSortedByPriority()
      ),
      map((banner: any) => { 
        console.log(banner);
        return bannerActionTypes.bannersLoaded(banner)
      })
    )
  );

  createBanner$ = createEffect(() =>
    this.actions$.pipe(
      ofType(bannerActionTypes.createBanner),
      concatMap((action) => this.bannerService.createBanner(action.banners)),
      tap(() => this.router.navigateByUrl('/banner'))
    ),
    {dispatch: false}
  );

//   deleteAsset$ = createEffect(() =>
//     this.actions$.pipe(
//       ofType(assetActionTypes.deleteAsset),
//       concatMap((action) => this.BannerService.deleteAsset(action.assetId))
//     ),
//     {dispatch: false}
//   );

//   updateAsset$ = createEffect(() =>
//     this.actions$.pipe(
//       ofType(assetActionTypes.updateAsset),
//       concatMap((action) => this.BannerService.updateAsset(action.update.id, action.update.changes))
//     ),
//     {dispatch: false}
//   );

}

