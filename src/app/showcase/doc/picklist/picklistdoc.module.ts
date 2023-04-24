import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { PickListModule } from '@coduction/primeng/picklist';
import { AppDocModule } from '../../layout/doc/app.doc.module';
import { AppCodeModule } from '../../layout/doc/code/app.code.component';
import { AccessibilityDoc } from './accessibilitydoc';
import { BasicDoc } from './basicdoc';
import { EventsDoc } from './eventsdoc';
import { FilterDoc } from './filterdoc';
import { ImportDoc } from './importdoc';
import { MethodsDoc } from './methodsdoc';
import { PropsDoc } from './propsdoc';
import { StyleDoc } from './styledoc';
import { TemplatesDoc } from './templatesdoc';

@NgModule({
    imports: [CommonModule, AppCodeModule, AppDocModule, PickListModule, RouterModule],
    exports: [AppDocModule],
    declarations: [ImportDoc, BasicDoc, FilterDoc, PropsDoc, EventsDoc, TemplatesDoc, MethodsDoc, StyleDoc, AccessibilityDoc]
})
export class PicklistDocModule {}
