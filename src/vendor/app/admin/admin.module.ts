import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../shared/shared.module';
import {
    FilesListComponent,
    FileComponent,
    adminState
} from './';

@NgModule({
    imports: [
        SharedModule,
        RouterModule.forRoot(adminState)
    ],
    declarations: [
        FilesListComponent,
        FileComponent
    ],
    providers: [],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AdminModule { }
