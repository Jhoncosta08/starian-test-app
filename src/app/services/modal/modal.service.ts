import {
  ApplicationRef,
  ComponentRef,
  createComponent,
  EmbeddedViewRef,
  EnvironmentInjector, inject,
  Injectable,
  Type
} from '@angular/core';
import {ModalContainerComponent} from '../../modals/modal-container.component';

@Injectable({
  providedIn: 'root'
})
export class ModalService {

  private readonly appRef: ApplicationRef = inject(ApplicationRef);
  private readonly envInjector: EnvironmentInjector = inject(EnvironmentInjector);
  private modalStack: ComponentRef<ModalContainerComponent>[] = [];

  open<T>(component: Type<T>, data?: any, size?: 'sm' | 'lg' | 'xl' | string): Promise<any> {
    return new Promise((resolve: any): void => {

      const modalRef: any = createComponent(ModalContainerComponent, {
        environmentInjector: this.envInjector
      });

      this.appRef.attachView(modalRef.hostView);
      const domElem = (modalRef.hostView as EmbeddedViewRef<any>).rootNodes[0] as HTMLElement;
      document.body.appendChild(domElem);
      this.modalStack.push(modalRef);
      modalRef.instance.childComponentType = component;
      modalRef.instance.childData = data || [];
      modalRef.instance.modalSize = size || '';
      modalRef.instance.resolve = (result: any): void => {
        resolve(result);
        this.close();
      };
      modalRef.instance.reject = (): void => {
        this.close();
      }
    });
  };

  close(): void {
    const modalRef: any = this.modalStack.pop();
    if (modalRef) {
      this.appRef.detachView(modalRef.hostView);
      modalRef.destroy();
    }
  };

}
