import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { CommonModule } from '@angular/common';
import { JsonpModule } from '@angular/http';
import { MaterialModule } from '@angular/material';
import { FlexLayoutModule } from '@angular/flex-layout';
import { DROPDOWN_DIRECTIVES } from './ui/dropdown/dropdown.directive';

@NgModule({
    imports: [
        HttpModule,
        CommonModule,
        FormsModule,
        JsonpModule,
        ReactiveFormsModule,
        MaterialModule,
        FlexLayoutModule
    ],
    declarations: [
        DROPDOWN_DIRECTIVES
    ],
    providers: [
        
    ],
    exports: [
        HttpModule,
        CommonModule,
        FormsModule,
        JsonpModule,
        ReactiveFormsModule,
        MaterialModule,
        FlexLayoutModule,
        DROPDOWN_DIRECTIVES
    ]
})
export class SharedModule {
}
