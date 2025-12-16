import {Component, inject, OnInit} from '@angular/core';
import {ProductsService} from '../../services/products/products.service';
import {ProductsInterface} from '../../interfaces/products.interface';
import {ToastrService} from 'ngx-toastr';
import {TranslatePipe, TranslateService} from '@ngx-translate/core';
import {CommonButtonComponent} from '../../components/common-button/common-button.component';
import {CommonTableComponent} from '../../components/common-table/common-table.component';
import {CommonTableConfigInterface} from '../../interfaces/common-table.interface';
import {UtilsService} from '../../services/utils/utils.service';

@Component({
  selector: 'app-products',
  imports: [
    TranslatePipe,
    CommonButtonComponent,
    CommonTableComponent
  ],
  templateUrl: './products.page.html',
  styleUrl: './products.page.scss',
})
export class ProductsPage implements OnInit {
  protected tableConfig: CommonTableConfigInterface = {
    tableHeaders: [],
    columnsToDisplay: [],
    tableData: []
  };
  private readonly productsService: ProductsService = inject(ProductsService);
  private readonly toastService: ToastrService = inject(ToastrService);
  private readonly translateService: TranslateService = inject(TranslateService);
  private readonly utilsService: UtilsService = inject(UtilsService);

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
    this.productsService.getProducts().subscribe({
      next: (products: ProductsInterface[]): void => {
        this.tableConfig = {
          ...this.tableConfig,
          tableData: products
        }
      },
      error: (error: Error): void => {
        this.tableConfig.tableData = [];
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
