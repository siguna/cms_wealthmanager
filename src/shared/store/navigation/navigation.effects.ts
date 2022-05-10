import {Injectable} from '@angular/core';
import {map, tap} from 'rxjs/operators';
import {Actions, createEffect, ofType} from '@ngrx/effects';
import {BreakpointObserver} from '@angular/cdk/layout';
import {ROUTER_NAVIGATED, RouterNavigatedAction} from '@ngrx/router-store';
import {activeUrl, mobileNavigation} from './navigation.actions';
// import {handleClassCondition} from "../../common/utils/utils.functions";
import { handleClassCondition } from 'mobile-money';


@Injectable()
export class NavigationEffects {

  constructor(private actions$: Actions, breakpointObserver: BreakpointObserver) {
    breakpointObserver.observe(
      '(max-width: 600px)',
    ).subscribe(result => {
      handleClassCondition(result.matches, 'mobile-view-activated', document.querySelector('body'));
    });
  }
}



