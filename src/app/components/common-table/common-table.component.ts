import {ChangeDetectionStrategy, Component, EventEmitter, Input, OnChanges, Output, SimpleChanges} from '@angular/core';
import {NgClass} from '@angular/common';
import {CommonTableConfigInterface} from '../../interfaces/common-table.interface';

@Component({
  selector: 'app-common-table',
  imports: [
    NgClass,
  ],
  templateUrl: './common-table.component.html',
  styleUrls: ['./common-table.component.scss', '../../shared/scss/hover-effects.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CommonTableComponent implements OnChanges  {
  @Input({required: true}) tableConfig!: CommonTableConfigInterface;
  @Output() detailsClicked: EventEmitter<any> = new EventEmitter<any>();
  @Output() deleteClicked: EventEmitter<any> = new EventEmitter<any>();
  currentPage: number = 1;
  pageSize: number = 5;
  pagedData: any[] = [];
  sortColumn: string = '';
  sortDirection: boolean = true;

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['tableConfig'] && this.tableConfig.tableData?.length) {
      this.setPage(1);
    }
  }

  setPage(page: number): void {
    if (page < 1 || page > this.getTotalPages()) return;
    this.currentPage = page;
    const start: number = (page - 1) * this.pageSize;
    const end: number = start + this.pageSize;
    this.pagedData = [...this.tableConfig.tableData.slice(start, end)];
  }

  getTotalPages(): number {
    return Math.ceil(this.tableConfig.tableData.length / this.pageSize);
  }

  getPages(): number[] {
    return Array.from({ length: this.getTotalPages() }, (_, i) => i + 1);
  }

  sortData(column: string): void {
    if (this.sortColumn === column) {
      this.sortDirection = !this.sortDirection;
    } else {
      this.sortColumn = column;
      this.sortDirection = true;
    }

    this.tableConfig.tableData.sort((a: any, b: any): number => {
      const valA = a[column];
      const valB = b[column];

      if (valA == null) return 1;
      if (valB == null) return -1;

      if (typeof valA === 'number' && typeof valB === 'number') {
        return this.sortDirection ? valA - valB : valB - valA;
      }

      return this.sortDirection
        ? valA.toString().localeCompare(valB.toString(), undefined, { sensitivity: 'base' })
        : valB.toString().localeCompare(valA.toString(), undefined, { sensitivity: 'base' });
    });

    this.setPage(1);
  }


  getSortIcon(column: string): string {
    if (this.sortColumn !== column) return 'bi bi-arrow-down-up';
    return this.sortDirection ? 'bi bi-arrow-up' : 'bi bi-arrow-down';
  }
}
