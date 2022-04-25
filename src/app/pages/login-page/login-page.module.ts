import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {
  ErrorStateMatcher,
  ShowOnDirtyErrorStateMatcher,
} from '@angular/material/core';

import { LoginPageComponent } from './login-page.component';
import { LoginPageRoutingModule } from './login-page-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';

@NgModule({
  declarations: [LoginPageComponent],
  exports: [LoginPageComponent],
  imports: [
    CommonModule,
    LoginPageRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatToolbarModule
  ],
  providers: [
    { provide: ErrorStateMatcher, useClass: ShowOnDirtyErrorStateMatcher },
  ],
})
export class LoginPageModule {}
