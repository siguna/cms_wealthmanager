import { createEffect, Actions, ofType } from '@ngrx/effects';
import { concatMap, map, tap } from 'rxjs/operators';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { AssetService } from '@shared/services/asset/asset.service';
import { assetActionTypes } from './asset.actions';

@Injectable()
export class AssetEffects {
  
  constructor(private assetService: AssetService, private actions$: Actions, private router: Router) {}

  loadAssets$ = createEffect(() =>
    this.actions$.pipe(
      ofType(assetActionTypes.loadAssets),
      concatMap(() => this.assetService.getAllAssets()),
      map((assets: any) => assetActionTypes.assetsLoaded(assets.body))
    )
  );

  createAsset$ = createEffect(() =>
    this.actions$.pipe(
      ofType(assetActionTypes.createAsset),
      concatMap((action) => this.assetService.createAsset(action.assetDTO)),
      tap((assets: any) => {
        assetActionTypes.assetsLoaded(assets.body)
        return this.router.navigateByUrl('/asset')
      })
    ),
    {dispatch: false}
  );

  deleteAsset$ = createEffect(() =>
    this.actions$.pipe(
      ofType(assetActionTypes.deleteAsset),
      concatMap((action) => this.assetService.deleteAsset(action.assetId)),
      map(() => assetActionTypes.loadAssets())
    ),
  );

  updateAsset$ = createEffect(() =>
    this.actions$.pipe(
      ofType(assetActionTypes.updateAsset),
      concatMap((action) => this.assetService.updateAsset(action.assetDTO.id, action.assetDTO.changes))
    ),
    {dispatch: false}
  );

}