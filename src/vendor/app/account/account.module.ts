import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../shared/shared.module';
import { TextEditorComponent } from '../shared/ui/texteditor/texteditor.component';
import { ConfigurationAPIService } from 'client-toolbox';

import {
    ConfirmationComponent,
    MailComponent,
    accountState,
    MailManagerService,
    MailApiService
} from './';

@NgModule({
    imports: [
        SharedModule,
        RouterModule.forRoot(accountState)
    ],
    declarations: [
        MailComponent,
        ConfirmationComponent,
        TextEditorComponent
    ],
    providers: [
        ConfigurationAPIService,
        MailManagerService,
        MailApiService
    ],
    entryComponents: [ConfirmationComponent],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AccountModule { }
