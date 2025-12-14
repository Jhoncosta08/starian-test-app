import {Component, inject, OnInit} from '@angular/core';
import {NavigationEnd, Router, RouterOutlet} from '@angular/router';
import {filter} from 'rxjs';
import {TranslateService} from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  imports: [
    RouterOutlet
  ],
  templateUrl: './app.html',
})
export class App implements OnInit {
  protected isAppReady: boolean = false;
  protected isAuthUrl: boolean = false;
  private readonly router: Router = inject(Router);
  private readonly translate: TranslateService = inject(TranslateService);

  ngOnInit(): void {
    this.translate.addLangs(['pt-BR', 'en-US']);
    this.translate.use('pt-BR');

    this.router.events.pipe(
      filter((event: any): any => event instanceof NavigationEnd))
      .subscribe((event: NavigationEnd): void => {
        this.isAuthUrl = event.urlAfterRedirects.includes('/auth');
        this.isAppReady = true;
      });
  }
}
