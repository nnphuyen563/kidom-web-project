import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CATAGORYS } from '../../data';
import { Catagory } from '../shared/models/Catagory';

const CATEGORY_API = 'http://localhost:8080/api/category/';
const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
};

@Injectable({
  providedIn: 'root',
})
export class CatagoryService {
  constructor(private http: HttpClient) {}

  getListCategory(): Observable<any> {
    return this.http.get(CATEGORY_API, httpOptions);
  }

  getListCategoryEnabled() {
    return this.http.get(CATEGORY_API + 'enabled', httpOptions);
  }

  getAll(): Catagory[] {
    return CATAGORYS;
  }
}
