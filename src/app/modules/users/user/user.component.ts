import { Component, OnInit } from '@angular/core';
import { RemoteDataServiceService } from 'src/app/services/remote-data-service.service';
import { Response } from '../../../models/Response';
import { GastosDetail } from '../../../models/GastosDetail';
import { Gasto } from '../../../models/Gasto';
import { HttpResponse } from '@angular/common/http';


@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css'],
  providers:[RemoteDataServiceService]
})
export class UserComponent implements OnInit {

   responseLocal: Response;
   responseGastos: GastosDetail;
   responseGasto: Gasto;
   usuario={
    "name": "Pepeote",
    "job": "El jefazo"
   };

   usuario2={
    "_id": 4,
    "name": "El jefazo"
   };
   gas:Gasto;



  toState = 'state1';

  constructor(private remoteDataService: RemoteDataServiceService) { }

  ngOnInit(): void {
    this.grabarUsuario();
    this.remoteDataService.getUserData().subscribe(response => {
      this.responseLocal = response;
      console.log(this.responseLocal);
    }, err => {
        console.log("Error:",err);
  });
   /*this.remoteDataService.getGastos().subscribe(response =>
    {
      this.responseGastos = response;
      console.log(this.responseGastos);
    }, err =>
       {
        console.log("Error:",err);
       });*/

  }


  changeState(state:any)
  {
    console.log("Cambio a estado:"+state);
    this.toState=state;
  }

  obtenerGastos()
  {
    /*this.remoteDataService.getGastosByPersonIdMonthYear().subscribe(
      (data: HttpResponse<any>) => {
        console.log(data.headers.get('Authorization'));
      },
      function (error) {
        //this.loading = false;
      });*/
    this.remoteDataService.getGastosByPersonIdMonthYear().subscribe(
      response => {
         console.log("Respuesta",response);
         let cc:HttpResponse<GastosDetail> = response;
         console.log("Authorization Headers:",cc.headers.get("Authorization"));
         this.responseGastos=cc.body;
      }, err => {
        console.log("Error:",err)
      });
  }


  addGasto()
  {

    this.gas = {
       "concepto":"el conceptio",
       "Importe_Eur":12,
       "Importe_Pts":12,
       "fecha":new Date()
    };
    this.remoteDataService.addGasto(this.gas).subscribe(
      response => {
         console.log("Respuesta",response);
         //this.responseGasto=response;
      }, err => {
        console.log("Error:",err)
      });
  }

  grabarUsuario(){
    this.remoteDataService.saveUser(this.usuario).subscribe(
      response => {
         console.log(response);
      }, err => {
        console.log("Error:",err)
      });
  }

  grabarUsuario2(){
    this.remoteDataService.saveUser2(this.usuario2).subscribe(
      response => {

         console.log(response);
      }, err => {
        console.log("Error:",err)
      });
  }
}
