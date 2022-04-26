import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatSelectModule } from '@angular/material/select';

import { ForecastInfoComponent } from './forecast-info.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [ForecastInfoComponent],
  exports: [ForecastInfoComponent],
  imports: [CommonModule, FormsModule, MatSelectModule],
})
export class ForecastInfoModule {}
