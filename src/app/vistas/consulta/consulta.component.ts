import { Component, OnInit } from '@angular/core';
import { RespuestaPersonaNaturalI } from 'src/app/modelos/respuestaPersonaNatural.interface';
import { RespuestaPersonaJuridicaI } from 'src/app/modelos/respuestaPersonaJuridica.interface';
import { FormGroup,FormControl,Validators } from '@angular/forms';
import { Router } from '@angular/router'; 
import { ApiPersonaNaturalService } from 'src/app/servicios/api/api-persona-natural.service'; 
import { ApiPersonaJuridicaService } from 'src/app/servicios/api/api-persona-juridica.service';
@Component({
  selector: 'app-consulta',
  templateUrl: './consulta.component.html',
  styleUrls: ['./consulta.component.css']
})
export class ConsultaComponent implements OnInit {
  respuestaPersonaNatural:RespuestaPersonaNaturalI[]=[]
  respuestaPersonaJuridica:RespuestaPersonaJuridicaI[]=[]
  PersonaNatural=new FormGroup({
    identificacion : new FormControl('',Validators.required)
  })
  constructor(private router:Router, private apiPersonaNaturalService:ApiPersonaNaturalService, private apiPersonaJuridicaService:ApiPersonaJuridicaService) { }

  ngOnInit(): void {
  }
  Buscar(PersonaNatural: RespuestaPersonaNaturalI){
    if(PersonaNatural.identificacion == 0){
    alert("Debe ingresar un Nio O Identificacion");
    }else{    
      this.apiPersonaNaturalService.GetByIdentificacion(PersonaNatural.identificacion).subscribe((data:any) =>{ 
      console.log(data);
      this.respuestaPersonaNatural=data
      this.router.navigate(['PersonaNatural',PersonaNatural.identificacion]);
    },()=>this.apiPersonaJuridicaService.GetByNit(PersonaNatural.identificacion).subscribe((data:any) =>{ 
        console.log(data);
        this.respuestaPersonaJuridica=data
        this.router.navigate(['PersonaJuridica',PersonaNatural.identificacion]);
      },()=>alert("(tramite03030303030303) La Identificacion De La Empresa No Esta Registrada")) )   
    }

  }
}
