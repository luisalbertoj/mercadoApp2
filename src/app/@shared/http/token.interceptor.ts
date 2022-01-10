import { Injectable } from '@angular/core';
import { HttpEvent, HttpInterceptor, HttpHandler, HttpRequest } from '@angular/common/http';
import { Observable } from 'rxjs';
import { CredentialsService } from '@app/auth/credentials.service';
/**
 * Prefixes all requests not starting with `http[s]` with `environment.serverUrl`.
 */
@Injectable({
  providedIn: 'root',
})
export class TokenInterceptor implements HttpInterceptor {
  constructor(private _credentialsService: CredentialsService) {}

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const credentials: any = this._credentialsService.credentials;

    let request = req;

    if (credentials) {
      request = req.clone({
        setHeaders: {
          authorization: `Bearer ${credentials.access_token}`,
        },
      });
    }

    return next.handle(request);
  }
}
