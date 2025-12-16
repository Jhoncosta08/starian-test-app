import {Component, inject, OnInit} from '@angular/core';
import {ProductsService} from '../../services/products/products.service';
import {ProductsInterface} from '../../interfaces/products.interface';
import {ToastrService} from 'ngx-toastr';
import {TranslatePipe, TranslateService} from '@ngx-translate/core';
import {CommonButtonComponent} from '../../components/common-button/common-button.component';

@Component({
  selector: 'app-products',
  imports: [
    TranslatePipe,
    CommonButtonComponent
  ],
  templateUrl: './products.page.html',
  styleUrl: './products.page.scss',
})
export class ProductsPage implements OnInit {
  protected products: ProductsInterface[] = [];
  private readonly productsService: ProductsService = inject(ProductsService);
  private readonly toastService: ToastrService = inject(ToastrService);
  private readonly translateService: TranslateService = inject(TranslateService);

  ngOnInit(): void {
    this.getAllProducts();
  };

  getAllProducts(): void {
    this.productsService.getProducts().subscribe({
      next: (products: ProductsInterface[]): void => {
        this.products = products;
      },
      error: (error: Error): void => {
        this.products = [];
        const errorMsg: string = this.translateService.instant('ERRORS.PRODUCTS_LIST_ERROR');
        console.error(errorMsg, error);
        this.toastService.error(errorMsg);
      }
    });
  };

  addNewProduct(): void {
    console.warn('addNewProduct clicked');
  }

}
