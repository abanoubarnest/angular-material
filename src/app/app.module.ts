import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AuthInterceptor, AuthService, FakeBackendInterceptor } from '@services/*';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ChartsModule } from './pages/charts';
import { DashboardModule } from './pages/dashboard';
import { FormsModule } from './pages/forms/forms.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
// tslint:disable-next-line: ordered-imports
import {
  MatDialogModule,
} from '@angular/material/dialog';
import {
  MatFormFieldModule,
}
  from '@angular/material/form-field';
import {
  MatInputModule,
} from '@angular/material/input';
import {
  MatButtonModule,

} from '@angular/material/button';
import {
  MatTooltipModule,

} from '@angular/material/tooltip';
import {
  MatSelectModule,

} from '@angular/material/select';
import {
  MatCheckboxModule,

} from '@angular/material/checkbox';
import { MAT_COLOR_FORMATS, NgxMatColorPickerModule, NGX_MAT_COLOR_FORMATS } from '@angular-material-components/color-picker';
import { IconPickerModule } from 'ngx-icon-picker';
import { CommonModule } from '@angular/common';
import { FormsModule as NgFormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    CommonModule,
    NgFormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    DashboardModule,
    ChartsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatDialogModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatTooltipModule,
    MatSelectModule,
    MatCheckboxModule,
    NgxMatColorPickerModule,
    IconPickerModule,

  ],
  exports: [
    MatDialogModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatTooltipModule,
    MatSelectModule,
    MatCheckboxModule,
    NgxMatColorPickerModule,
  ],
  providers: [
    AuthService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true,
    },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: FakeBackendInterceptor,
      multi: true,
    },
    { provide: MAT_COLOR_FORMATS, useValue: NGX_MAT_COLOR_FORMATS }
  ],
  bootstrap: [AppComponent],
})
export class AppModule { }
