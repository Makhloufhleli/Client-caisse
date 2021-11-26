import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PagesRoutingModule } from './pages-routing.module';
import { ContactsComponent } from './components/contacts/contacts.component';
import { HomeComponent } from './components/home/home.component';
import { authInterceptorProviders } from '../model/helpers/auth.interceptor';
import { CellComponent } from './components/cell/cell.component';

import {NgxPaginationModule} from 'ngx-pagination';

@NgModule({
  declarations: [
    ContactsComponent,
    HomeComponent,
    CellComponent
  ],
  imports: [
    CommonModule,
    PagesRoutingModule,
    NgxPaginationModule
  ],
  providers: [
    authInterceptorProviders
  ]
})
export class PagesModule { }
