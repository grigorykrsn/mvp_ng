import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ForecastChartModule } from '../forecast-chart/forecast-chart.module';

import { ForecastBlockComponent } from './forecast-block.component';

@NgModule({
  declarations: [ForecastBlockComponent],
  exports: [ForecastBlockComponent],
  imports: [CommonModule, ForecastChartModule],
})
export class ForecastBlockModule {}
