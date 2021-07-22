import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { RespuestaPersonaJuridicaI } from 'src/app/modelos/respuestaPersonaJuridica.interface';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class ApiPersonaJuridicaService {
  url:string="https://localhost:44320/api/PersonaJuridicas/";


  constructor(private httpclient:HttpClient) { }
  GetByNit(Nit:number):Observable<RespuestaPersonaJuridicaI>{
    return this.httpclient.get<RespuestaPersonaJuridicaI>(this.url+Nit)
  }

  updatePersonaJuridica(ObjpersonaJuridica:RespuestaPersonaJuridicaI):Observable<any>{
    return this.httpclient.put(this.url+ObjpersonaJuridica.nit,ObjpersonaJuridica)
  }


}
