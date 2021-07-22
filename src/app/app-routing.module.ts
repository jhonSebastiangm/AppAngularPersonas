import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RespuestaPersonaJuridicaComponent } from './vistas/respuesta-persona-juridica/respuesta-persona-juridica.component';
import { RespuestaPersonaNaturalComponent } from './vistas/respuesta-persona-natural/respuesta-persona-natural.component';
import { ConsultaComponent } from './vistas/consulta/consulta.component';
const routes: Routes = [
  {path:'',redirectTo:'inicio',pathMatch:'full'},
  {path:'inicio',component:ConsultaComponent},
  {path:'PersonaJuridica/:Nit',component:RespuestaPersonaJuridicaComponent},
  {path:'PersonaNatural/:Identificacion',component:RespuestaPersonaNaturalComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }