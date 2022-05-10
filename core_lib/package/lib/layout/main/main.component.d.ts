import { AfterContentInit } from '@angular/core';
import { AutoLogoutService, NavTabService } from 'mobile-money';
export declare class MainComponent implements AfterContentInit {
    private navTabService;
    private autoLogoutService;
    private topBar;
    isLoading: boolean;
    hide: boolean;
    allowOutsideClick: boolean;
    constructor(navTabService: NavTabService, autoLogoutService: AutoLogoutService);
    ngAfterContentInit(): void;
    closeMobileNav($event: MouseEvent): void;
    clickHide($event: any): void;
    onHiddenNav($event: any): void;
}
