import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';
import { FormControl, NgForm, Validators } from '@angular/forms';
import { RemoteDataServiceService } from 'src/app/services/remote-data-service.service';
import { LoginServiceService } from 'src/app/services/login-service.service';
import { Usuario } from '../../../models/Usuario';
import { Router } from '@angular/router';
import { HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers:[RemoteDataServiceService]
})
export class LoginComponent implements OnInit {


  enviado:boolean=false;
  status:boolean;
  public Loginform:FormGroup;
  public user:string;
  public password:string;
  public email;
  public usuarioModel:Usuario;
  public usuarioModel2:Usuario;
  isLoggedIn : Observable<boolean>;

  constructor(private formBuilder:FormBuilder, private remoteDataService: RemoteDataServiceService,
    private router: Router, public authService : LoginServiceService)
  {
      this.isLoggedIn = authService.isLoggedIn();
  }


  ngOnInit(): void {

    //this.usuario = new FormControl('', Validators.required);
    //this.email = new FormControl('', [Validators.required,Validators.email]);
    this.Loginform=this.formBuilder.group({
      user:['',Validators.required],
      password: ['', Validators.required]
    });

  }


  onSubmit(f:FormGroup){
    //console.log(this.contacto);
    console.log("usuario valor:",this.Loginform.get("user").value);
    console.log("Password:",f.get("password").value);
    this.usuarioModel = new Usuario(this.Loginform.get("user").value,f.get("password").value);

    //this.usuarioModel.name=this.Loginform.get("user").value;
    //this.usuarioModel.password=f.get("password").value;
    //this.usuarioModel.id=1;

    /*
     response => {
         console.log("Respuesta",response);
         let cc:HttpResponse<GastosDetail> = response;
         console.log("Authorization Headers:",cc.headers.get("Authorization"));
         this.responseGastos=cc.body;
      }, err => {
        console.log("Error:",err)
      });
    */


   //localStorage.setItem("User",this.usuarioModel.name);
    this.enviado=true;
    this.remoteDataService.loginUser(this.usuarioModel).subscribe(
      response => {
        let cc:HttpResponse<Usuario> = response;
        console.log("JSON Respuesta:",response);
        if(cc.status!=403)
        {
          console.log("Authorization Headers:",cc.headers.get("Authorization"));
          if(response==null)
          {
            console.log(`USUARIO ${this.Loginform.get("user").value} no registrado,
            por favor introduzca un usuario válido`);
            localStorage.removeItem("accessToken");
            localStorage.removeItem("User");
            this.status=true;
          }
          else
          {
            this.status=true;
            console.log("USUARIO válido puede usted operar");
            this.usuarioModel = response.body;
            this.authService.login(this.usuarioModel);
            this.router.navigate(['/info']);
          }
        }
        else
        {
          console.log("ERROR 403");
          localStorage.removeItem("accessToken");
          localStorage.removeItem("User");
        }
     }, err => {
      this.status=true;
      console.log("Errores:",err)
      localStorage.removeItem("accessToken");
      localStorage.removeItem("User");
     });




    /*this.remoteDataService.saveUser(this.user).subscribe(
      response => {
         console.log(response);
      }, err => {
        console.log("Error:",err)
      });*/
  }

}
