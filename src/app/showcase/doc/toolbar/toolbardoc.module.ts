import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ButtonModule } from '@coduction/primeng/button';
import { SplitButtonModule } from '@coduction/primeng/splitbutton';
import { ToolbarModule } from '@coduction/primeng/toolbar';
import { AppDocModule } from '../../layout/doc/app.doc.module';
import { AppCodeModule } from '../../layout/doc/code/app.code.component';
import { AccessibilityDoc } from './accessibilitydoc';
import { BasicDoc } from './basicdoc';
import { ImportDoc } from './importdoc';
import { PropsDoc } from './propsdoc';
import { StyleDoc } from './styledoc';
import { TemplatesDoc } from './templatesdoc';

@NgModule({
    imports: [CommonModule, AppCodeModule, AppDocModule, ToolbarModule, RouterModule, ButtonModule, SplitButtonModule],
    exports: [AppDocModule],
    declarations: [ImportDoc, BasicDoc, StyleDoc, PropsDoc, TemplatesDoc, AccessibilityDoc]
})
export class ToolbarDocModule {}
