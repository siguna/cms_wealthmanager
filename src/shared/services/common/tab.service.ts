import {Injectable} from '@angular/core';
import {TabModel} from "../../models/tab.model";
import {NavigationItem} from "../../../app/store/navigation/navigation.reducer";
import {Store} from "@ngrx/store";
import {activeUrl, navigationFilter, selectNavigationItems} from "../../store/navigation";
// import {AppConfig, STORAGE_KEY} from "../../../app/app.config";
import {AppConfig} from "../../../app/app.config";
import {UserToken} from "../../models/user-token";
import {BehaviorSubject, of} from "rxjs";
import {NavigationItems} from "../../../app/app.navigation";
import { UtilsService } from 'mobile-money';
// import { UtilsService } from './utils.service';

@Injectable({
    providedIn: 'root',
})
export class TabService {
    private activeTab = new BehaviorSubject<string>(null);
    activeTab$ = this.activeTab.asObservable();
    tabs: TabModel[] = [];
    private messageSource = new BehaviorSubject(false);
    currentMessage = this.messageSource.asObservable();

    constructor(private store: Store<any>, 
        private utils: UtilsService
        ) {
    }

    changeMessage(message: boolean) {
        this.messageSource.next(message);
    }

    addTab(newTab: TabModel) {
        let routeLink = newTab.routerLink;
        if (routeLink.startsWith("/")) {
            routeLink = routeLink.substr(1);
            newTab.routerLink = routeLink;
        }
        if (!this.tabs.some(tab => tab.routerLink === newTab.routerLink)) {
            let userToken: UserToken = JSON.parse(localStorage.getItem(AppConfig.STORAGE_KEY.userToken));
            if (userToken) {
                let navItem = {title:'', routerLink: ''};
                // let navItem = this.utils.getNavByRouteLink(newTab.routerLink, userToken.userInfo.items);
                if (navItem) {
                    newTab.title = navItem.title;
                    this.tabs.push(newTab);
                    this.activeTab.next(newTab.routerLink);
                    this.store.dispatch(activeUrl({url: navItem.routerLink}));
                }
            }

        } else {
            this.activeTab.next(newTab.routerLink);
            // let navItem = this.utils.getNavByRouteLink(newTab.routerLink);
            // if (navItem) {
            //     this.store.dispatch(activeUrl({url: navItem.routerLink}));
            // }
        }
    }

    getTab() {
        return of(this.tabs);
    }

    deleteTab(index: number) {
        this.tabs.splice(index, 1);
    }
}
