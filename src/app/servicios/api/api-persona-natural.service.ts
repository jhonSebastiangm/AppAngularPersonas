import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { Observable } from 'rxjs';
import { RespuestaPersonaNaturalI } from 'src/app/modelos/respuestaPersonaNatural.interface';
@Injectable({
  providedIn: 'root'
})
export class ApiPersonaNaturalService {
  url:string="https://localhost:44320/api/PersonaNaturals/";

  constructor(private httpclient:HttpClient) { }

  GetByIdentificacion(Identificacion:number):Observable<RespuestaPersonaNaturalI>{
    return this.httpclient.get<RespuestaPersonaNaturalI>(this.url+Identificacion)
  }

 updatePersonaNatural(ObjpersonaJuridica:RespuestaPersonaNaturalI):Observable<any>{
    return this.httpclient.put(this.url+ObjpersonaJuridica.identificacion,ObjpersonaJuridica)
  }
}
