import {Injectable} from '@angular/core';
import {NavigationItem} from '../../../app/store/navigation/navigation.reducer';
// import {STORAGE_KEY} from '../../../app/app.config';
import {Store} from "@ngrx/store";
import {setLoading} from "../../store/appstate";
import { AppConfig } from 'src/app/app.config';

@Injectable()
export class  UtilsService {
    constructor(private store : Store<any>){

    }
    public removeSlashBefore(routeLink: string): string {
        if (!routeLink) {
            return routeLink;
        } else if (routeLink.startsWith('/')) {
            return routeLink.substr(1);
        } else { return routeLink; }
    }

    public getNavByRouteLink(routerLink: string, navigationItems?: any[]): any {
        let navItem: any;
        if (navigationItems) {
            for (const item of navigationItems) {
                if (this.removeSlashBefore(item.routerLink) === this.removeSlashBefore(routerLink)) {
                    if (!item.items || item.items.length === 0) {
                        navItem = item;
                    } else {
                        return null;
                    }
                } else if (item.items) {
                    navItem = this.getNavByRouteLink(routerLink, item.items);
                }
                if (navItem) {
                    return navItem; 
                }
            }
        } else {
            const allMenus = this.getAllMenu();
            if (allMenus && allMenus.length > 0) {
                return this.getNavByRouteLink(routerLink, allMenus);
            }
        }
        return null;
    }

    public getAllMenu(): any[] {
        try {
            const strItems = localStorage.getItem(AppConfig.STORAGE_KEY.menuItems);
            if (strItems) {
                return JSON.parse(strItems);
            }
        } catch (e) {
            console.error(e);
        }
    }

    showSpinner(){
        this.store.dispatch(setLoading({isLoading: true})) ;
    }

    hideSpinner(){
        setTimeout(()=>{this.store.dispatch(setLoading({isLoading: false})) ;},1000);
    }
}
