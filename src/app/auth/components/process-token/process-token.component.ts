import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Logger } from '@app/@shared/logger.service';
import { FactoryService } from '@app/@shared/services/factory.service';
import { CredentialsService } from '@app/auth';
import { environment } from '@env/environment';
import { finalize } from 'rxjs/operators';

const log = new Logger('Login');

@Component({
  selector: 'app-process-token',
  templateUrl: './process-token.component.html',
  styleUrls: ['./process-token.component.scss'],
})
export class ProcessTokenComponent implements OnInit {
  code: any;
  error: string | undefined;
  token: string | undefined;
  isLoading = false;
  constructor(
    private _router: Router,
    private _factory: FactoryService,
    private route: ActivatedRoute,
    private _credentialsService: CredentialsService
  ) {}

  ngOnInit(): void {
    this.processCode();
  }

  processCode() {
    const urlTree = this._router.parseUrl(this._router.url);
    this.code = urlTree.queryParams['code'];
    console.log('Code:', this.code);
    if (this.code) this.getToken();
  }

  getToken() {
    const ruta = 'https://api.mercadolibre.com/oauth/token';
    const data = {
      grant_type: environment.grant_type,
      client_id: environment.client_id,
      client_secret: environment.client_secret,
      code: this.code,
      redirect_uri: environment.redirect_uri,
    };
    this._factory
      .post(ruta, data)
      .pipe(
        finalize(() => {
          this.isLoading = false;
        })
      )
      .subscribe(
        (res: any) => {
          this._credentialsService.setCredentials(res, true);
          log.debug(`${res.user_id} successfully logged in`);
          this._router.navigate([this.route.snapshot.queryParams.redirect || '/home'], { replaceUrl: true });
        },
        (error) => {
          log.debug(`Login error: ${error}`);
          console.log(`Login error:`, error);
          this.error = error;
        }
      );
  }
}
