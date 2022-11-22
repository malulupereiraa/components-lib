import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

import { SharedRoutingModule } from './shared-routing.module';

import { HomeComponent } from '../../@core/components';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ThemeModule } from '../../@theme/theme.module';

const baseComponents = [HomeComponent];

const appServices = [];

const customComponents = [];

const nbBootstrapModules = [NgbModule];

const directives = [];

const pipes = [];

const importedComponents = [];

@NgModule({
  declarations: [
    // ...directives,
    // ...pipes,
    // ...customComponents,
    ...baseComponents,
  ],
  imports: [
    CommonModule,
    SharedRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    ThemeModule,
  ],
  providers: [],
  exports: [
    FormsModule,
    ReactiveFormsModule,
    ThemeModule,
    // ...directives,
    // ...pipes,
    ...nbBootstrapModules,
    // ...customComponents,
    ...baseComponents,
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class SharedModule {}
