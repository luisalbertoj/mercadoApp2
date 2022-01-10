import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { marker } from '@biesbjerg/ngx-translate-extract-marker';
import { MercadoLoginComponent } from './components/mercado-login/mercado-login.component';
import { ProcessTokenComponent } from './components/process-token/process-token.component';

import { LoginComponent } from './login.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent, data: { title: marker('Login') } },
  { path: 'auth', component: MercadoLoginComponent, data: { title: marker('Auth') } },
  { path: '', component: ProcessTokenComponent, data: { title: marker('Access token') } },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: [],
})
export class AuthRoutingModule {}
