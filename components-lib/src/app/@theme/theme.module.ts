import { ModuleWithProviders, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { FooterComponent, HeaderComponent } from './components';

const COMPONENTS = [HeaderComponent, FooterComponent];

@NgModule({
  imports: [CommonModule, ReactiveFormsModule],
  declarations: [...COMPONENTS],
  exports: [CommonModule, ...COMPONENTS],
  providers: [],
})
export class ThemeModule {
  static forRoot(): ModuleWithProviders<ThemeModule> {
    return {
      ngModule: ThemeModule,
      providers: [],
    };
  }
}
