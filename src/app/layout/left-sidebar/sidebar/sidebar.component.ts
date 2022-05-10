import {ChangeDetectionStrategy, Component, Input, OnDestroy, OnInit} from '@angular/core';
// import {UserToken} from '../../../../shared/models/user-token';
import {createSelector, Store} from '@ngrx/store';
import {NavigationItem, reloadAllItems, selectNavigationItems} from '../../../../shared/store/navigation';
import {selectSettingsState} from '../../../../shared/store/settings';
// import {NavigationService} from '../../../../shared/services/common/navigation.service';
import { NavigationService } from '@shared/services/common/navigation.service';
import {AccountService} from '../../../../account/account.service';
import {Subscription} from 'rxjs';
// import {STORAGE_KEY} from "../../../app.config";
import {AppConfig} from "../../../app.config";
import { UserToken } from 'mobile-money/lib/shared/models/user-token';


@Component({
    selector: 'vt-sidebar',
    templateUrl: './sidebar.component.html',
    styleUrls: ['./sidebar.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})

export class SidebarComponent implements OnInit, OnDestroy {
    currentUser: UserToken;
    @Input() beHide: boolean;
    vm$ = this.store.select(
        createSelector(
            selectNavigationItems,
            selectSettingsState,
            (items, settings) => ({items, minified: settings.minifyNavigation})
        )
    );

    sideBarData = [
        { id: 1, name: 'Quản lý loại tài sản', path: '/asset'},
        { id: 2, name: 'Quản lý banner', path: '/banner'},
        { id: 3, name: 'Quản lý sản phẩm', path: '/product'},
        { id: 4, name: 'Quản lý ưu đãi', path: '/endow'},
        { id: 5, name: 'Quản lý gợi ý đầu tư', path: '/product'},
        { id: 6, name: 'Quản lý câu hỏi thường gặp', path: '/product'},
    ]


    constructor(private store: Store<any>, 
        private itemService: NavigationService, 
        private authService: AccountService
        ) {

    }

    ngOnInit(): void {
        // this.authService.buildMenu().subscribe((next: any) => {
        //     if (next && next.status && next.status.code == 200) {
        //         this.store.dispatch(reloadAllItems({items: next.data}));
        //         localStorage.setItem(AppConfig.STORAGE_KEY.menuItems, JSON.stringify(next.data));
        //     } else {
        //         this.authService.logout();
        //     }
        // }, (error => {
        //     this.authService.logout();
        // }));

    }

    trackByFn(idx: number, item: NavigationItem) {
        return item.title + '_' + idx;
    }

    ngOnDestroy(): void {
    }
}