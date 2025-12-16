import {ChangeDetectionStrategy, Component, EventEmitter, Input, Output} from '@angular/core';
import {NgClass} from '@angular/common';

@Component({
  selector: 'app-common-button',
  imports: [
    NgClass
  ],
  templateUrl: './common-button.component.html',
  styleUrls: ['./common-button.component.scss', '../../shared/scss/hover-effects.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CommonButtonComponent {
  @Output() clicked: EventEmitter<void> = new EventEmitter<void>();
  @Input({required: true}) buttonText: string = 'Button';
  @Input() type: 'button' | 'submit' = 'button';
  @Input() buttonStyle: 'primary' | 'secondary' | 'outlined' | 'outlined-black' | 'danger' = 'primary';
}
