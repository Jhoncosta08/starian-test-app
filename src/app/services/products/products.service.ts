import {inject, Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {ProductsEndpoints} from '../../endpoints/products.endpoints';
import {ProductsInterface} from '../../interfaces/products.interface';

@Injectable({
  providedIn: 'root',
})
export class ProductsService {
  private httpClient: HttpClient = inject(HttpClient);

  getProducts(): Observable<ProductsInterface[]> {
    return this.httpClient.get<ProductsInterface[]>(ProductsEndpoints.ProductsEndpoint());
  }

  getProductById(productId: number): Observable<ProductsInterface> {
    return this.httpClient.get<ProductsInterface>(ProductsEndpoints.ProductsByIdEndpoint(productId));
  }

  addNewProduct(productBody: ProductsInterface): Observable<ProductsInterface> {
    return this.httpClient.post<ProductsInterface>(ProductsEndpoints.ProductsEndpoint(), productBody);
  }

  updateProduct(productBody: ProductsInterface, productId: number): Observable<ProductsInterface> {
    return this.httpClient.put<ProductsInterface>(ProductsEndpoints.ProductsByIdEndpoint(productId), productBody);
  }

  deleteProduct(productId: number): Observable<void> {
    return this.httpClient.delete<void>(ProductsEndpoints.ProductsByIdEndpoint(productId));
  }

}
