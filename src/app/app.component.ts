import { Component, OnInit } from '@angular/core';
import { validate } from 'class-validator';
import { Observable } from 'rxjs';
import { Curso } from './models/curso';
import { LogsService } from './services/logs.service';
import { LoginServiceService } from 'src/app/services/login-service.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit{

  constructor(logs:LogsService,public authService : LoginServiceService) {
    console.log("Constructor Principal");
    logs.log("Pepito de los palotes en consola");
    this.isLoggedIn = authService.isLoggedIn();
  }

  isLoggedIn : Observable<boolean>;
  usuarioLogadoString:string="";
  userloggin:boolean=false;


  ngOnInit() {

  }



  title = 'proyectoAngularAlten';



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
