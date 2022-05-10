import {Component, Input, ChangeDetectionStrategy, HostBinding, Output, EventEmitter, OnInit} from '@angular/core';
import {activeUrl, NavigationItem, toggleNavSection} from 'src/shared/store/navigation';

import {trigger, state, style, transition, animate, group} from '@angular/animations';
import {Store} from '@ngrx/store';
import {TabService} from '../../../../shared/services/common/tab.service';
import {Router} from '@angular/router';
import {makeSlideInOut} from '../../../../shared/common/utils/animations';
// import {AccountService} from '../../../../account/account.service';
// import {APP_CONFIG, STORAGE_KEY} from "../../../app.config";
import {TabModel} from "../../../../shared/models/tab.model";
import { AppConfig } from 'src/app/app.config';

@Component({
    // tslint:disable-next-line:component-selector
    selector: '[menu-nav-item]',
    templateUrl: './nav-item.component.html',
    animations: [makeSlideInOut()],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class MenuNavItemComponent implements OnInit{

    @Input() item: NavigationItem;
    @Input() minified: boolean;
    calc = false;
    @Output() send = new EventEmitter();

    @HostBinding('class.active') get active() {
        return this.item.active;
    }

    @HostBinding('class.open') get open() {
        return this.item.open;
    }

    @HostBinding('class.js-filter-hide]') get hidden() {
        return this.item.matched !== null && !this.item.matched;
    }

    @HostBinding('class.js-filter-show]') get shown() {
        return this.item.matched !== null && this.item.matched;
    }

    @HostBinding('class.nav-title]') get navTitle() {
        return this.item.navTitle;
    }
    message: boolean;

    constructor(
        private store: Store<any>,
        private data: TabService,
        private tabService: TabService,
        private router: Router,
        // private accountService: AccountService
    ) {
    }
    ngOnInit(): void {
        this.data.currentMessage.subscribe(message => this.message = message);
    }

    toggleSection($event: MouseEvent) {
        $event.preventDefault();
        this.store.dispatch(toggleNavSection({item: this.item}));
    }

    trackByFn(idx: number, item: NavigationItem) {
        return item.title + '_' + idx;
    }

    onClick(item: NavigationItem) {
        this.calc = true;
        this.data.changeMessage(true);
        this.send.emit(this.calc);
        item.active = true;
        this.store.dispatch(activeUrl({url: item.routerLink}));
        localStorage.setItem(AppConfig.STORAGE_KEY.currentFeature,JSON.stringify({featureId: item.id}));
        ;
        if (AppConfig.APP_CONFIG.showInTab) {
            let tab: TabModel = {
                routerLink: item.routerLink,
                featureId: item.id
            };
            this.tabService.addTab(tab);

        }
        this.router.navigateByUrl(item.routerLink).catch(console.log);
    }



}
