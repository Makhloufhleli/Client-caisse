import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { baseUrl } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { Item } from '../../entities/item';


const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json'})
};
@Injectable({
  providedIn: 'root'
})

export class ItemsService {

  constructor(private http: HttpClient) { }

  getAllItems(): Observable<any>{
    return this.http.get(`${baseUrl}/items/`, httpOptions);
  }

  saveItem(item: Item): Observable<any>{
    return this.http.post(baseUrl + '/items/new', item, httpOptions);
  }

  deleteItem( idItem: number): Observable<any>{
    return this.http.delete(`${baseUrl}/items/delete/${idItem}`, httpOptions)
  }

}
