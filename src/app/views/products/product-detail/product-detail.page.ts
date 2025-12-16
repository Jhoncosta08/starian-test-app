import {Component, inject, OnInit} from '@angular/core';
import {TranslatePipe, TranslateService} from '@ngx-translate/core';
import {FormBuilder, FormGroup, ReactiveFormsModule, Validators} from '@angular/forms';
import {ProductDetailForm, ProductsInterface} from '../../../interfaces/products.interface';
import {ActivatedRoute} from '@angular/router';
import {ProductsService} from '../../../services/products/products.service';
import {ToastrService} from 'ngx-toastr';
import {CommonSpinnerComponent} from '../../../components/common-spinner/common-spinner.component';
import {CommonButtonComponent} from '../../../components/common-button/common-button.component';
import {NgxMaskDirective} from 'ngx-mask';

@Component({
  selector: 'app-product-detail',
  imports: [
    TranslatePipe,
    CommonSpinnerComponent,
    ReactiveFormsModule,
    CommonButtonComponent,
    NgxMaskDirective
  ],
  templateUrl: './product-detail.page.html',
  styleUrls: ['./product-detail.page.scss', '../../../shared/scss/input.scss'],
})
export class ProductDetailPage implements OnInit {
  public showSpinner: boolean = false;
  public showSubmitSpinner: boolean = false;
  protected productDetailForm!: FormGroup;
  protected productId: number | null = null;
  protected currentProduct: ProductsInterface | null = null;
  private readonly fb: FormBuilder = inject(FormBuilder);
  private readonly activatedRoute: ActivatedRoute = inject(ActivatedRoute);
  private readonly productService: ProductsService = inject(ProductsService);
  private readonly toastService: ToastrService = inject(ToastrService);
  private readonly translateService: TranslateService = inject(TranslateService);

  ngOnInit(): void {
    this.productId = this.activatedRoute.snapshot.params['id'];
    if (this.productId) {
      this.getProductById();
    } else {
      this.buildProductForm(undefined);
    }
  };

  buildProductForm(product?: ProductsInterface): void {
    this.productDetailForm = this.fb.group<ProductDetailForm>({
      id: this.fb.control(product?.id ?? null, { nonNullable: false, validators: Validators.required }),
      title: this.fb.control(product?.title ?? '', { nonNullable: true, validators: Validators.required }),
      price: this.fb.control(product?.price ?? 0, { nonNullable: false, validators: Validators.required }),
      description: this.fb.control(product?.description ?? '', { nonNullable: true, validators: Validators.required }),
      category: this.fb.control(product?.category ?? '', { nonNullable: true, validators: Validators.required }),
      image: this.fb.control(product?.image ?? '', { nonNullable: true, validators: Validators.required }),
    });
  };

  getProductById(): void {
    if (this.productId) {
      this.showSpinner = true;
      this.productService.getProductById(this.productId).subscribe({
        next: (product: ProductsInterface): void => {
          this.currentProduct = product;
          this.buildProductForm(product);
          this.showSpinner = false;
          console.warn('form: ', this.productDetailForm.value);
        },
        error: (error: Error): void => {
          const errorMsg: string = this.translateService.instant('ERRORS.PRODUCT_GET_ERROR');
          this.toastService.error(errorMsg);
          console.error(errorMsg, error);
          this.currentProduct = null;
          this.showSpinner = false;
        }
      });
    }
  };

}
