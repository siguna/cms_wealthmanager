import {Component, ElementRef, OnDestroy} from '@angular/core';
import {
    // ApiService, 
    Environment} from 'mobile-money';
import {environment} from 'src/environments/environment';
import {ActivatedRoute, NavigationEnd, Router} from '@angular/router';
import {TranslateService} from '@ngx-translate/core';
import {Title} from '@angular/platform-browser';
import {filter, map, takeUntil} from 'rxjs/operators';
import {Subject} from 'rxjs';

@Component({
    // tslint:disable-next-line:component-selector
    selector: 'smart-root',
    templateUrl: './app.component.html'
})
export class AppComponent implements OnDestroy {

    unsubscribeAll = new Subject<void>();

    constructor(private el: ElementRef,
                // private apiService: ApiService,
                private router: Router,
                private activatedRoute: ActivatedRoute,
                private translateService: TranslateService,
                private titleService: Title) {
        Environment.environment = {...environment};
        // this.apiService.authenUrl = Environment.environment.authenUrl;
        this.router.events
            .pipe(filter(event => event instanceof NavigationEnd),
                map(() => {
                    let child = this.activatedRoute.firstChild;
                    const appName = environment.APP_CODE;
                    while (child.firstChild) {
                        child = child.firstChild;
                    }
                    if (child.snapshot.data['title']) {
                        return this.translateService.instant(child.snapshot.data['title']) + ' | ' + appName;
                    }
                    return appName;
                }))
            .pipe(takeUntil(this.unsubscribeAll))
            .subscribe((ttl: string) => {
                this.titleService.setTitle(ttl);
            });
    }

    ngOnDestroy(): void {
        this.unsubscribeAll.next();
        this.unsubscribeAll.complete();
    }

}
