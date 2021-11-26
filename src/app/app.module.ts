import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';


import { AuthModule } from './auth/auth.module';
import { PagesModule } from './pages/pages.module';


import { PagesLayoutComponent } from './pages/layout/pages-layout.component';
import { AuthLayoutComponent } from './auth/layout/auth-layout.component';


import { ToastrModule } from 'ngx-toastr';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { authInterceptorProviders } from './model/helpers/auth.interceptor';

@NgModule({
  declarations: [
    AppComponent,
    PagesLayoutComponent,
    AuthLayoutComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    AuthModule,
    PagesModule,
    ToastrModule.forRoot(),
    BrowserAnimationsModule, // required animations module
  ],
  providers: [authInterceptorProviders],
  bootstrap: [AppComponent]
})
export class AppModule { }
