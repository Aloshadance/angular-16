import {AfterViewChecked, ChangeDetectorRef, ViewContainerRef, Component} from '@angular/core';
import {ApiService, ModalService, NotificationService, PreloaderService, AppComponentClass, EnvironmentLabels} from '@gubkin/lib';
import {environment} from '../environments/environment';
import {Router} from '@angular/router';
import {Observable} from 'rxjs';

@Component({
    selector: 'gis-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent extends AppComponentClass implements AfterViewChecked {
    public preloaderState$: Observable<number> = this._preloaderService.showPreloader$;

    constructor(
        private readonly _changeDetectorRef: ChangeDetectorRef,
        private readonly _viewContainerRef: ViewContainerRef,
        private readonly _router: Router,
        private readonly _apiService: ApiService,
        private readonly _preloaderService: PreloaderService,
        private readonly _notificationService: NotificationService,
        private readonly _modalService: ModalService,
    ) {
        super();
        this._notificationService.rootContainerRef = this._viewContainerRef;
        this._modalService.rootContainerRef = this._viewContainerRef;
        this._apiService.host = environment[EnvironmentLabels.HOST];
    }

    /**
     * Чтобы избежать ошибки NG0100: ExpressionChangedAfterItHasBeenCheckedError
     */
    public ngAfterViewChecked(): void {
        this._changeDetectorRef.detectChanges();
    }
}
