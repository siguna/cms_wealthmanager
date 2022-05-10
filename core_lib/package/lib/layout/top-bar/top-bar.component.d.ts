import { EventEmitter, OnInit } from '@angular/core';
import { Router } from '@angular/router';
export declare class TopBarComponent implements OnInit {
    private router;
    humberger: EventEmitter<any>;
    hide: boolean;
    constructor(router: Router);
    ngOnInit(): void;
    close(): void;
    goToHomePage(): void;
    reloadPage(): void;
}
