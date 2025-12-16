import {inject, Injectable} from '@angular/core';
import {TranslateService} from '@ngx-translate/core';

@Injectable({
  providedIn: 'root',
})
export class UtilsService {

  private readonly translateService: TranslateService = inject(TranslateService);

  buildAndTranslateTableHeaders(prefix: string, stateKeys: string[]): string[] {
    return stateKeys.map((key: string) => this.translateService.instant(`${prefix}.${key}`));
  }

}
