import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Product } from '../interfaces/product.interface';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  endpoint= 'api/products';
  constructor(
    private http: HttpClient
  ) { }

  all(): Observable<Product[]> {
    return this.http.get<Product[]>(this.endpoint)
  }

  createProduct(data: Product): Observable<Product> {
    return this.http.post<Product>(this.endpoint, data);
  }
}
