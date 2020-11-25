import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-info',
  templateUrl: './info.component.html',
  styleUrls: ['./info.component.css']
})
export class InfoComponent implements OnInit {

  public nombre:string="Jose Luis";
  public precio:number=99.75;
  public numero:number=10;
  constructor() { }

  ngOnInit(): void {
  }

  usuario = {
    nombre:"Furia",
    apellido:"Iberica",
    edad:25
  };

  public saludar(): void
  {
    alert(`Hola Mundo: ${this.usuario.nombre}`);
  }


  usuarios = [this.usuario,
              {nombre:"Pepè",apellido:"Pepote",edad:56},
              {nombre:"Ramon",apellido:"Rodriguez",edad:32},
              {nombre:"Lala",apellido:"Lolaina",edad:26},
              {nombre:"Rista",apellido:"Mejde",edad:18}];

  public verApellidoPorConsola(usuarioSeleccionado: any): void
  {
    console.log("El apellido del usuario seleccionado es:",usuarioSeleccionado.apellido);
  }

  Mivalor:number= 0;

  public seleccionaClass(modo:string):{}
  {
    let cssClasses={};
    if(modo=='dia')
    {
      cssClasses={
        'uno': true,
        'dos': true
      };
    }
    else
    {
      cssClasses={
        'tres':true,
        'cuatro':true
      };
    }
    return cssClasses;
  }


}
