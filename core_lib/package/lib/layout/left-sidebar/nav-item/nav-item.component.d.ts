import { ChangeDetectorRef, ElementRef, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NavTabService } from 'mobile-money';
import { NavigationItem } from 'mobile-money/lib/shared/common/nav-tab/store/navigation-tab';
export declare class MenuNavItemComponent implements OnInit, OnDestroy {
    private router;
    private navTabService;
    private change;
    item: NavigationItem;
    isActive: boolean;
    isOpen: boolean;
    isSelected: boolean;
    txtSearch: string;
    itemLink: ElementRef;
    itemToggle: ElementRef;
    private unsubscribe;
    onlyOpen: boolean;
    lenghtMenuHidden: number;
    constructor(router: Router, navTabService: NavTabService, change: ChangeDetectorRef);
    ngOnInit(): void;
    toggleSection($event: any, item: any): void;
    trackByFn(idx: number, item: NavigationItem): string;
    onClick(item: NavigationItem): void;
    ngOnDestroy(): void;
}
