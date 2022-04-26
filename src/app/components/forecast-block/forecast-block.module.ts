import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ForecastChartModule } from '../forecast-chart/forecast-chart.module';
import { ForecastInfoModule } from '../forecast-info/forecast-info.module';

import { ForecastBlockComponent } from './forecast-block.component';

@NgModule({
  declarations: [ForecastBlockComponent],
  exports: [ForecastBlockComponent],
  imports: [CommonModule, ForecastChartModule, ForecastInfoModule],
})
export class ForecastBlockModule {}
