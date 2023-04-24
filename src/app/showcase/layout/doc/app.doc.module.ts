import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ButtonModule } from '@coduction/primeng/button';
import { InputTextModule } from '@coduction/primeng/inputtext';
import { TooltipModule } from '@coduction/primeng/tooltip';
import { AppCodeModule } from './code/app.code.component';
import { AppDocApiSection } from './docapisection/app.docapisection.component';
import { AppDocSectionsComponent } from './docsection/app.docsection.component';
import { AppDocSectionNavComponent } from './docsectionnav/app.docsection-nav.component';
import { AppDocSectionTextComponent } from './docsectiontext/app.docsectiontext.component';
import { AppDevelopmentSection } from './developmentsection/app.developmentsection.component';
import { AppDoc } from './app.doc.component';

@NgModule({
    imports: [CommonModule, FormsModule, ButtonModule, InputTextModule, TooltipModule, AppCodeModule],
    exports: [AppDocSectionTextComponent, AppDocApiSection, AppDocSectionNavComponent, AppDocSectionsComponent, AppDevelopmentSection, AppDoc],
    declarations: [AppDocSectionTextComponent, AppDocApiSection, AppDocSectionNavComponent, AppDocSectionsComponent, AppDevelopmentSection, AppDoc]
})
export class AppDocModule {}
