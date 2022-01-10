import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CredentialsService } from '@app/auth/credentials.service';

const httpOptions: any = {
  headers: new HttpHeaders({
    accept: 'application/json',
    'content-Type': 'application/x-www-form-urlencoded',
  }),
};

@Injectable({
  providedIn: 'root',
})
export class FactoryService {
  constructor(private _http: HttpClient, private _credentialsService: CredentialsService) {}

  get(model: string) {
    /* const options = httpOptions;
    const credentials: any = this._credentialsService.credentials;
    options.headers.Authorization = credentials.access_token; */
    return this._http.get(model);
  }

  post(model: string, data: any) {
    return this._http.post(model, data, httpOptions);
  }
}
