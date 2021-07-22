import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RespuestaPersonaNaturalComponent } from './respuesta-persona-natural.component';

describe('RespuestaPersonaNaturalComponent', () => {
  let component: RespuestaPersonaNaturalComponent;
  let fixture: ComponentFixture<RespuestaPersonaNaturalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RespuestaPersonaNaturalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RespuestaPersonaNaturalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
