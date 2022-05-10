import {Component, ChangeDetectionStrategy} from '@angular/core';
import {createSelector, Store} from '@ngrx/store';
// import {APP_CONFIG} from 'src/app/app.config';
import {filterAppLoading, selectAppState} from "../../../shared/store/appstate";
import {Observable} from "rxjs";
import { AppConfig } from 'src/app/app.config';

@Component({
  selector: 'vt-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MainComponent {


  app = AppConfig.APP_CONFIG.app;
  isLoading: boolean;
  isLoading$: Observable<{ value: boolean }> = this.store.select(filterAppLoading);
  hide: boolean;

  constructor(private store: Store<any>) {
      this.isLoading$.subscribe(next => {
          this.isLoading = next.value;
      })
  }

  closeMobileNav($event: MouseEvent) {
      $event.preventDefault();
  }

  clickHide($event: any) {
      this.hide = $event;
  }

  onResize($event: any) {
  }
}
