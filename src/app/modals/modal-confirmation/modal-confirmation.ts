import {ChangeDetectionStrategy, Component, inject, Input} from '@angular/core';
import {ModalConfirmationContentInterface} from '../../interfaces/modal-confirmation.interface';
import {ModalService} from '../../services/modal/modal.service';
import {CommonButtonComponent} from '../../components/common-button/common-button.component';
import {TranslatePipe} from '@ngx-translate/core';

@Component({
  selector: 'app-modal-confirmation',
  imports: [
    CommonButtonComponent,
    TranslatePipe
  ],
  templateUrl: './modal-confirmation.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ModalConfirmation {
  @Input() data!: ModalConfirmationContentInterface;
  confirm!: (res?: any) => void;
  private readonly modalService: ModalService = inject(ModalService);

  closeModal(): void {
    this.modalService.close();
  }

}
