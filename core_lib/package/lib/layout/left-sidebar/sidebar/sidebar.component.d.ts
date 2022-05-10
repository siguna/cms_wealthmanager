import { ChangeDetectorRef, ElementRef, EventEmitter, OnDestroy, OnInit } from '@angular/core';
import { NavTabService } from 'mobile-money';
import { NavigationItem } from 'mobile-money/lib/shared/common/nav-tab/store/navigation-tab';
import { Observable, Subscription } from 'rxjs';
export declare class SidebarComponent implements OnInit, OnDestroy {
    private navTabService;
    private change;
    sideNavOpen: string;
    beHide: boolean;
    onHiddenNav: EventEmitter<{}>;
    inputSearch: ElementRef;
    vm$: Observable<NavigationItem[]>;
    unsubcrible: Subscription;
    disableOutsideClick: boolean;
    constructor(navTabService: NavTabService, change: ChangeDetectorRef);
    onResize(event: any): void;
    ngOnInit(): void;
    trackByFn(idx: number, item: NavigationItem): string;
    clearTxtSearch(): void;
    /**
     * animation navside
     * @author phongnv
     */
    toggleNavMenu(): "in" | "out";
    handleKeyup($event: KeyboardEvent, value: string): void;
    clickOutside($event: any): void;
    sizeChange(): void;
    ngOnDestroy(): void;
}
