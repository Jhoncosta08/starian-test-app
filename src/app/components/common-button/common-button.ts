import {ChangeDetectionStrategy, Component, EventEmitter, Input, Output} from '@angular/core';
import {NgClass} from '@angular/common';

@Component({
  selector: 'app-common-button',
  imports: [
    NgClass
  ],
  templateUrl: './common-button.html',
  styleUrls: ['./common-button.scss', '../../shared/scss/hover-effects.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CommonButton {
  @Output() clicked: EventEmitter<void> = new EventEmitter<void>();
  @Input({required: true}) buttonText: string = 'Button';
  @Input() type: 'button' | 'submit' = 'button';
  @Input() buttonStyle: 'primary' | 'secondary' | 'outlined' | 'danger' = 'primary';
}
