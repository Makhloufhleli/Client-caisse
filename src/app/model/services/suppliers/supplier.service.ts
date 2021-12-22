import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { baseUrl } from 'src/environments/environment';
import { Supplier } from '../../entities/supplier';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json'})
};

@Injectable({
  providedIn: 'root'
})

export class SupplierService {

  constructor(private http: HttpClient) { }

  getAllSuppliers(): Observable<any>{
    return this.http.get(`${baseUrl}/suppliers/`, httpOptions);
  }

  saveSupplier(supplier: Supplier): Observable<any>{
    return this.http.post(baseUrl + '/suppliers/new', supplier, httpOptions);
  }

  searchSupplier(name: string): Observable<any>{
    return this.http.get(`${baseUrl}/suppliers/?name=${name}`, httpOptions);
  }

  deleteSupplier( idSupplier: number): Observable<any>{
    return this.http.delete(`${baseUrl}/suppliers/delete/${idSupplier}`, httpOptions)
  }

  getSupplierById(idSupplier: number): Observable<any>{
    return this.http.get(`${baseUrl}/suppliers/${idSupplier}`, httpOptions);
  }
}
