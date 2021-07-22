import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RespuestaPersonaJuridicaComponent } from './respuesta-persona-juridica.component';

describe('RespuestaPersonaJuridicaComponent', () => {
  let component: RespuestaPersonaJuridicaComponent;
  let fixture: ComponentFixture<RespuestaPersonaJuridicaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RespuestaPersonaJuridicaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RespuestaPersonaJuridicaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
