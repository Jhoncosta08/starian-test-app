import {
  ApplicationConfig,
  importProvidersFrom, LOCALE_ID,
  provideBrowserGlobalErrorListeners,
  provideZoneChangeDetection
} from '@angular/core';
import {PreloadAllModules, provideRouter, withPreloading} from '@angular/router';

import { routes } from './app.routes';
import {provideHttpClient} from '@angular/common/http';
import {provideToastr} from 'ngx-toastr';
import {provideAnimations} from '@angular/platform-browser/animations';
import {TRANSLATE_HTTP_LOADER_CONFIG, TranslateHttpLoader} from '@ngx-translate/http-loader';
import {TranslateLoader, TranslateModule} from '@ngx-translate/core';
import {registerLocaleData} from '@angular/common';
import localePtBr from '@angular/common/locales/pt';
import {provideNgxMask} from 'ngx-mask';

export function httpTranslateLoader(): TranslateHttpLoader {
  return new TranslateHttpLoader();
}
registerLocaleData(localePtBr, 'pt-BR');

export const appConfig: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes, withPreloading(PreloadAllModules)),
    provideHttpClient(),
    provideAnimations(),
    provideNgxMask(),
    provideToastr({
      closeButton: true,
      timeOut: 3000,
      easing: 'ease-in-out',
      progressBar: false,
      positionClass: 'toast-top-right',
      preventDuplicates: true
    }),
    importProvidersFrom([TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: httpTranslateLoader
      },
    })]),
    {
      provide: LOCALE_ID,
      useValue: 'pt-BR'
    },
    {
      provide: TRANSLATE_HTTP_LOADER_CONFIG,
      useValue: {
        prefix: '/assets/i18n/',
        suffix: '.json',
      },
    },
  ]
};
