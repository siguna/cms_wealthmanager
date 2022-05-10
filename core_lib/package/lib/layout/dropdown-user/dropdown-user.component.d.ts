import { OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AccountService, UserToken } from 'mobile-money';
export declare class DropdownUserComponent implements OnInit, OnDestroy {
    private authService;
    private router;
    user: UserToken;
    isShowLogout: boolean;
    constructor(authService: AccountService, router: Router);
    ngOnInit(): void;
    logout(): void;
    toggle(): void;
    outSideClick(): void;
    ngOnDestroy(): void;
}
