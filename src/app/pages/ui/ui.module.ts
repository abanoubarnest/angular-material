import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { ThemeModule } from 'theme';
import { TablesComponent, TablesService } from './tables';
import { UIRoutingModule } from './ui-routing.module';
import { ConfirmMessageComponent } from './confirm-messagge/confirm-messagge.component';
import { ViewOnlyComponent } from './view-only/view-only.component';
import { InfoTableComponent } from './info-table/info-table.component';
import { MAT_COLOR_FORMATS, NgxMatColorPickerModule, NGX_MAT_COLOR_FORMATS } from '@angular-material-components/color-picker';
import { FormsModule as NgFormsModule, ReactiveFormsModule } from '@angular/forms';
import { IconPickerModule } from 'ngx-icon-picker';
import { StackedBarComponent } from './stacked-bar-chart/stacked-bar-chart.component';
import { BrowserStatisticsChartComponent } from './browser-statistics-chart/browser-statistics-chart.component';
import { ThreeTableComponent } from './three-table/three-table.component';



@NgModule({
  imports: [
    CommonModule,
    NgFormsModule,
    ReactiveFormsModule,
    UIRoutingModule,
    ThemeModule,
    NgxMatColorPickerModule,
    IconPickerModule,


  ],
  declarations: [
    TablesComponent,
    ThreeTableComponent,
    ConfirmMessageComponent,
    ViewOnlyComponent,
    InfoTableComponent,
    StackedBarComponent,
    BrowserStatisticsChartComponent,

  ],
  exports: [StackedBarComponent],
  providers: [
    TablesService,
    { provide: MAT_COLOR_FORMATS, useValue: NGX_MAT_COLOR_FORMATS }
  ],
})
export class UIModule { }
