import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ForecastChartComponent } from './forecast-chart.component';
import { NgChartsModule } from 'ng2-charts';
import { MatCardModule } from '@angular/material/card';

@NgModule({
  declarations: [ForecastChartComponent],
  exports: [ForecastChartComponent],
  imports: [CommonModule, NgChartsModule, MatCardModule],
})
export class ForecastChartModule {}
