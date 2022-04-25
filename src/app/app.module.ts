import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { registerLocaleData } from '@angular/common';
import en from '@angular/common/locales/en';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppMaterialModule } from './appMaterial.module';

import { NgChartsModule } from 'ng2-charts';

import { LoginPageModule } from './pages/login-page/login-page.module';
import { MainPageModule } from './pages/main-page/main-page.module';

import { HeaderModule } from './components/header/header.module';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';

registerLocaleData(en);

@NgModule({
  declarations: [AppComponent],
  imports: [
    AppMaterialModule,
    RouterModule,
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    NgChartsModule,
    BrowserAnimationsModule,
    LoginPageModule,
    MainPageModule,
    HeaderModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
