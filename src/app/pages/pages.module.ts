import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PagesRoutingModule } from './pages-routing.module';
import { ContactsComponent } from './components/contacts/contacts.component';
import { HomeComponent } from './components/home/home.component';
import { authInterceptorProviders } from '../model/helpers/auth.interceptor';
import { CellComponent } from './components/cell/cell.component';

import {NgxPaginationModule} from 'ngx-pagination';
import { SupplierComponent } from './components/supplier/supplier.component';
import { FormsModule } from '@angular/forms';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { Ng2OrderModule } from 'ng2-order-pipe';
import { SuppliersFilterPipe } from '../model/filters/suppliers-filter.pipe';

@NgModule({
  declarations: [
    ContactsComponent,
    HomeComponent,
    CellComponent,
    SupplierComponent,
    SuppliersFilterPipe
  ],
  imports: [
    CommonModule,
    PagesRoutingModule,
    NgxPaginationModule,
    Ng2SearchPipeModule,
    Ng2OrderModule,
    FormsModule
  ],
  providers: [
    authInterceptorProviders
  ]
})
export class PagesModule { }
