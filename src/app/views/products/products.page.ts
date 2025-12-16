import {Component, inject, OnInit} from '@angular/core';
import {ProductsService} from '../../services/products/products.service';
import {ProductsInterface} from '../../interfaces/products.interface';
import {ToastrService} from 'ngx-toastr';
import {TranslatePipe, TranslateService} from '@ngx-translate/core';
import {CommonButtonComponent} from '../../components/common-button/common-button.component';
import {CommonTableComponent} from '../../components/common-table/common-table.component';
import {CommonTableConfigInterface} from '../../interfaces/common-table.interface';
import {UtilsService} from '../../services/utils/utils.service';
import {ModalService} from '../../services/modal/modal.service';
import {ModalConfirmation} from '../../modals/modal-confirmation/modal-confirmation';
import {CommonSpinnerComponent} from '../../components/common-spinner/common-spinner.component';
import {Router} from '@angular/router';

@Component({
  selector: 'app-products',
  imports: [
    TranslatePipe,
    CommonButtonComponent,
    CommonTableComponent,
    CommonSpinnerComponent
  ],
  templateUrl: './products.page.html',
  styleUrl: './products.page.scss',
})
export class ProductsPage implements OnInit {
  public showSpinner: boolean = false;
  protected tableConfig: CommonTableConfigInterface = {
    tableHeaders: [],
    columnsToDisplay: [],
    tableData: []
  };
  private readonly productsService: ProductsService = inject(ProductsService);
  private readonly toastService: ToastrService = inject(ToastrService);
  private readonly translateService: TranslateService = inject(TranslateService);
  private readonly utilsService: UtilsService = inject(UtilsService);
  private readonly modalService: ModalService = inject(ModalService);
  private readonly router: Router = inject(Router);

  ngOnInit(): void {
    this.setTableHeadersData();
    this.getAllProducts();
  };

  setTableHeadersData(): void {
    this.tableConfig.columnsToDisplay = ['image', 'id', 'title', 'price', 'category', 'actions']
    this.tableConfig.tableHeaders = this.utilsService.buildAndTranslateTableHeaders(
      'TABLE.PRODUCTS_TABLE_HEADERS',
      ['IMAGE', 'ID', 'TITLE', 'PRICE', 'CATEGORIES', 'ACTIONS']
    )
  }

  getAllProducts(): void {
    this.showSpinner = true;
    this.productsService.getProducts().subscribe({
      next: (products: ProductsInterface[]): void => {
        this.tableConfig = {
          ...this.tableConfig,
          tableData: products
        };
        this.showSpinner = false;
      },
      error: (error: Error): void => {
        this.tableConfig.tableData = [];
        const errorMsg: string = this.translateService.instant('ERRORS.PRODUCTS_LIST_ERROR');
        console.error(errorMsg, error);
        this.toastService.error(errorMsg);
        this.showSpinner = false;
      }
    });
  };

  updateProduct(product: ProductsInterface): void {
    this.moveRouteForward(product.id);
  }

  deleteProduct(product: ProductsInterface): void {
    void this.modalService.open(ModalConfirmation).then((): void => {
      this.productsService.deleteProduct(product.id).subscribe({
        next: (): void => {
          this.getAllProducts();
          this.toastService.success(this.translateService.instant('MODALS.CONFIRM_DELETE'));
        },
        error: (error: Error): void => {
          const errorMsg: string = this.translateService.instant('ERRORS.PRODUCT_DELETE_ERROR');
          console.error(errorMsg, error);
        }
      });
    });
  }

  moveRouteForward(productId?: number): void {
    const path: string = productId ? `/produtos/${productId}` : 'produtos/novo';
    void this.router.navigate([path]);
  }

}
