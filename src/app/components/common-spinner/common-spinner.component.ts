import {ChangeDetectionStrategy, Component} from '@angular/core';

@Component({
  selector: 'app-common-spinner',
  imports: [],
  templateUrl: './common-spinner.component.html',
  styleUrl: './common-spinner.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CommonSpinnerComponent {}
