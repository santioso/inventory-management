import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ProductsService {
  private readonly apiUrl = 'http://localhost:3000/products';

  constructor(private readonly http: HttpClient) {}

  createProduct(product: any): Observable<any> {
    return this.http.post(`${this.apiUrl}/create`, product);
  }

  getAllProducts(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl);
  }

  updateProductQuantity(productId: string, quantity: number): Observable<any> {
    return this.http.patch(`${this.apiUrl}/${productId}/update-quantity`, { quantity });
  }

  searchProducts(query: string): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}/search/${query}`);
  }
}
