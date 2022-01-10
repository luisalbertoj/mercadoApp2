import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MercadoLoginComponent } from './mercado-login.component';

describe('MercadoLoginComponent', () => {
  let component: MercadoLoginComponent;
  let fixture: ComponentFixture<MercadoLoginComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MercadoLoginComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MercadoLoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
