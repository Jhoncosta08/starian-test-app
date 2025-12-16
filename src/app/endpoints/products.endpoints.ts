import {apiUrl} from './endpoints.config';

export class ProductsEndpoints {

  public static ProductsEndpoint(): string {
    return `${apiUrl}/products`;
  }

  public static ProductsByIdEndpoint(productId: number): string {
    return `${apiUrl}/products/${productId}`;
  }

}
