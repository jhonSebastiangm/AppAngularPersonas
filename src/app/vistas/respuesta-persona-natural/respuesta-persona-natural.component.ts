import { Component, OnInit } from '@angular/core';
import { ActivatedRoute,Router } from '@angular/router';
import { ApiPersonaNaturalService } from 'src/app/servicios/api/api-persona-natural.service';
import { RespuestaPersonaNaturalI } from 'src/app/modelos/respuestaPersonaNatural.interface';
import { FormGroup,FormControl, Validators } from '@angular/forms';
@Component({
  selector: 'app-respuesta-persona-natural',
  templateUrl: './respuesta-persona-natural.component.html',
  styleUrls: ['./respuesta-persona-natural.component.css']
})
export class RespuestaPersonaNaturalComponent implements OnInit {

  PersonaNatural:RespuestaPersonaNaturalI|undefined;
  Id:string |null| undefined
  
  constructor(private apiPersonaNaturalService:ApiPersonaNaturalService,private activatedRouter:ActivatedRoute,private router:Router) { }

  datosPersonaNatural =new FormGroup({
    identificacion:new FormControl('',Validators.required),
    nombre:new FormControl('',[Validators.required,Validators.minLength(2)]),
    apellido:new FormControl('',Validators.required),
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
    this.Id = this.activatedRouter.snapshot.paramMap.get('Identificacion');
    if(this.Id){
      this.apiPersonaNaturalService.GetByIdentificacion(Number(this.Id)).subscribe((data:any)=>{
        this.PersonaNatural=data;
        this.datosPersonaNatural.setValue({
          'identificacion':this.PersonaNatural?.identificacion,
          'nombre':this.PersonaNatural?.nombre,
          'apellido':this.PersonaNatural?.apellido,
          'tipoPersonaId':this.PersonaNatural?.tipoPersonaId,
          'letra1':this.PersonaNatural?.letra1,
          'letra2':this.PersonaNatural?.letra2,
          'nro1':this.PersonaNatural?.nro1,
          'municipio':this.PersonaNatural?.municipio,
          'nro2':this.PersonaNatural?.nro2,
          'nroAndComplements':this.PersonaNatural?.nroAndComplements,
          'telefono':this.PersonaNatural?.telefono,
        })
      })
    }
  }

  Editar(ObjpersonaNatural:RespuestaPersonaNaturalI){
    console.log(ObjpersonaNatural);
    this.apiPersonaNaturalService.updatePersonaNatural(ObjpersonaNatural).subscribe(()=>{
      this.router.navigate(['/'])
    },()=>alert("Error al actualizar"))
  }

}
