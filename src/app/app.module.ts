import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {CommonModule} from '@angular/common';
import {
    ApiModule, ConfirmationDialogModule, DxModule, ModalModule, NotificationModule, PipesModule, PreloaderModule, TooltipModule, ValidationService
} from '@gubkin/lib';

@NgModule({
    declarations: [
        AppComponent
    ],
    imports: [
        CommonModule,
        BrowserModule,
        AppRoutingModule,
        ApiModule,
        NotificationModule,
        PreloaderModule,
        DxModule,
        ModalModule,
        TooltipModule,
        ConfirmationDialogModule,
        PipesModule,
    ],
    exports: [
        PipesModule
    ],
    providers: [
        ValidationService
    ],
    bootstrap: [AppComponent]
})
export class AppModule {
}
