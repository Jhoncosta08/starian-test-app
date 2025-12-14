import {
  AfterViewInit,
  ChangeDetectionStrategy,
  Component,
  Input,
  Type,
  ViewChild,
  ViewContainerRef
} from '@angular/core';
import {NgClass, NgStyle} from '@angular/common';

@Component({
  selector: 'app-modal-container',
  imports: [
    NgClass,
    NgStyle
  ],
  templateUrl: './modal-container.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ModalContainerComponent implements AfterViewInit {
  @ViewChild('modalContent', {read: ViewContainerRef}) vcr!: ViewContainerRef;
  @Input() childComponentType!: Type<any>;
  @Input() childData!: any;
  @Input() modalSize: 'sm' | 'lg' | 'xl' | string = '';
  resolve!: (value: any) => void;
  reject!: () => void;

  get customSizeStyle(): any {
    const standardSizes: string[] = ['sm', 'lg', 'xl'];
    if (this.modalSize && !standardSizes.includes(this.modalSize)) {
      return {'max-width': this.modalSize, 'width': '100%'};
    }
    return {};
  };

  ngAfterViewInit(): void {
    const componentRef: any = this.vcr.createComponent(this.childComponentType);
    componentRef.instance.data = this.childData;
    componentRef.instance.confirm = this.resolve;
    componentRef.instance.cancel = this.reject;
  };

  onAnyClick(event: MouseEvent): void {
    const target = event.target as HTMLElement;
    if (target.hasAttribute('data-dismiss') && target.getAttribute('data-dismiss') === 'modal') {
      this.reject();
    }
  };

}
