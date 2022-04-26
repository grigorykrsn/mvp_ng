import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatSidenavModule } from '@angular/material/sidenav';
import { MatDividerModule } from '@angular/material/divider';

import { ForecastBlockModule } from '../../components/forecast-block/forecast-block.module';

import { MainPageComponent } from './main-page.component';
import { MainPageRoutingModule } from './main-page-routing.module';


@NgModule({
  declarations: [MainPageComponent],
  exports: [MainPageComponent],
  imports: [
    CommonModule,
    MatSidenavModule,
    MatDividerModule,
    MainPageRoutingModule,
    ForecastBlockModule,
  ],
})
export class MainPageModule {}
