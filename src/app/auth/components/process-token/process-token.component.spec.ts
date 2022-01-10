import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProcessTokenComponent } from './process-token.component';

describe('ProcessTokenComponent', () => {
  let component: ProcessTokenComponent;
  let fixture: ComponentFixture<ProcessTokenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ProcessTokenComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProcessTokenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
