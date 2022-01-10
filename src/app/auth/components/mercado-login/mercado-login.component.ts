import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { environment } from '@env/environment';

@Component({
  selector: 'app-mercado-login',
  templateUrl: './mercado-login.component.html',
  styleUrls: ['./mercado-login.component.scss'],
})
export class MercadoLoginComponent implements OnInit {
  version: string | null = environment.version;
  error: string | undefined;
  loginForm!: FormGroup;
  isLoading = false;

  constructor(private router: Router, private route: ActivatedRoute, private formBuilder: FormBuilder) {
    this.createForm();
  }

  ngOnInit(): void {
    const link = `https://auth.mercadolibre.com.co/authorization?response_type=code&client_id=${environment.client_id}&redirect_uri=${environment.redirect_uri}`;
    window.location.replace(link);
  }
  login() {}
  private createForm() {
    this.loginForm = this.formBuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required],
      remember: true,
    });
  }
}
