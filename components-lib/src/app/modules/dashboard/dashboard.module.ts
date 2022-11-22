import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { SharedModule } from '../shared/shared.module';
import { ThemeModule } from '../../@theme/theme.module';

import { SlickCarouselModule } from 'ngx-slick-carousel';

const COMPONENTS = [DashboardComponent];

@NgModule({
  imports: [
    CommonModule,
    DashboardRoutingModule,
    SharedModule,
    ThemeModule,
    SlickCarouselModule,
  ],
  declarations: [...COMPONENTS],
  providers: [],
  exports: [],
})
export class DashboardModule {}
