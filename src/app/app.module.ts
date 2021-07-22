import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule,FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { RespuestaPersonaJuridicaComponent } from './vistas/respuesta-persona-juridica/respuesta-persona-juridica.component';
import { RespuestaPersonaNaturalComponent } from './vistas/respuesta-persona-natural/respuesta-persona-natural.component';
import { ConsultaComponent } from './vistas/consulta/consulta.component';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent,
    ConsultaComponent,
    RespuestaPersonaNaturalComponent,
    RespuestaPersonaJuridicaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
