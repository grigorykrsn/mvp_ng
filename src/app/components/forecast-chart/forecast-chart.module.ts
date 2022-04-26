import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ForecastChartComponent } from './forecast-chart.component';

@NgModule({
  declarations: [ForecastChartComponent],
  exports: [ForecastChartComponent],
  imports: [CommonModule],
})
export class ForecastChartModule {}
