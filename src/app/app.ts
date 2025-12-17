import {Component, inject, OnInit} from '@angular/core';
import {RouterOutlet} from '@angular/router';
import {TranslateService} from '@ngx-translate/core';
import {HeaderComponent} from './components/nav/header/header.component';

@Component({
  selector: 'app-root',
  imports: [
    RouterOutlet,
    HeaderComponent
  ],
  templateUrl: './app.html',
})
export class App implements OnInit {
  protected isAppReady: boolean = false;
  private readonly translate: TranslateService = inject(TranslateService);

  ngOnInit(): void {
    this.translate.addLangs(['pt-BR', 'en-US']);
    this.translate.setFallbackLang('pt-BR');
    this.translate.use('pt-BR').subscribe({
      next: (): any => (this.isAppReady = true),
      error: (): any => (this.isAppReady = true)
    });
  };

}
