import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatSidenavModule } from '@angular/material/sidenav';
import { MatButtonModule } from '@angular/material/button';

import { ForecastBlockModule } from '../../components/forecast-block/forecast-block.module';

import { MainPageComponent } from './main-page.component';
import { MainPageRoutingModule } from './main-page-routing.module';


@NgModule({
  declarations: [MainPageComponent],
  exports: [MainPageComponent],
  imports: [
    CommonModule,
    MatSidenavModule,
    MatButtonModule,
    MainPageRoutingModule,
    ForecastBlockModule,
  ],
})
export class MainPageModule {}
