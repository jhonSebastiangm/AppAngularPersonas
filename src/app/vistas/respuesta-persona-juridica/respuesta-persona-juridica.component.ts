import { Component, OnInit } from '@angular/core';
import { FormGroup,FormControl,Validators } from '@angular/forms';
import { ActivatedRoute,Router } from '@angular/router';
import { RespuestaPersonaJuridicaI } from 'src/app/modelos/respuestaPersonaJuridica.interface';
import { ApiPersonaJuridicaService } from 'src/app/servicios/api/api-persona-juridica.service';
@Component({
  selector: 'app-respuesta-persona-juridica',
  templateUrl: './respuesta-persona-juridica.component.html',
  styleUrls: ['./respuesta-persona-juridica.component.css']
})
export class RespuestaPersonaJuridicaComponent implements OnInit {
  PersonaJuridica:RespuestaPersonaJuridicaI|undefined;
  Id:string |null| undefined
  
  constructor(private apiPersonaJuridicaService:ApiPersonaJuridicaService,private activatedRouter:ActivatedRoute,private router:Router) { }
  datosPersonaJuridica =new FormGroup({
    nit:new FormControl('',Validators.required),
    identificacion:new FormControl('',Validators.required),
    razonSocial:new FormControl('',Validators.required),
    tipoPersonaId:new FormControl('',Validators.required),
    letra1:new FormControl('',Validators.required),
    letra2:new FormControl('',Validators.required),
    municipio:new FormControl('',Validators.required),
    nro1:new FormControl('',Validators.required),
    nro2:new FormControl('',Validators.required),
    nroAndComplements:new FormControl('',Validators.required),
    telefono:new FormControl('',Validators.required),
  })

  ngOnInit(): void {
    this.Id = this.activatedRouter.snapshot.paramMap.get('Nit');
    if(this.Id){
      this.apiPersonaJuridicaService.GetByNit(Number(this.Id)).subscribe((data:any)=>{
        this.PersonaJuridica=data;
        this.datosPersonaJuridica.setValue({
          'nit':this.PersonaJuridica?.nit,
          'identificacion':this.PersonaJuridica?.identificacion,
          'razonSocial':this.PersonaJuridica?.razonSocial,
          'tipoPersonaId':this.PersonaJuridica?.tipoPersonaId,
          'letra1':this.PersonaJuridica?.letra1,
          'letra2':this.PersonaJuridica?.letra2,
          'nro1':this.PersonaJuridica?.nro1,
          'municipio':this.PersonaJuridica?.municipio,
          'nro2':this.PersonaJuridica?.nro2,
          'nroAndComplements':this.PersonaJuridica?.nroAndComplements,
          'telefono':this.PersonaJuridica?.telefono,
        })
      })
    }
  }

  Editar(ObjpersonaJuridica:RespuestaPersonaJuridicaI){
    console.log(ObjpersonaJuridica);
    this.apiPersonaJuridicaService.updatePersonaJuridica(ObjpersonaJuridica).subscribe(()=>{
      this.router.navigate(['/'])
    },()=>alert("Error al actualizar"))
  }

}
