import { Injectable } from '@angular/core';
import { Response } from '../models/Response';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { GastosDetail } from '../models/GastosDetail';
import { Usuario } from '../models/Usuario';
import { Gasto } from '../models/Gasto';


@Injectable(/*{
  providedIn: 'root'
}*/)
export class RemoteDataServiceService {

  constructor(private httpclient:HttpClient) { }

  httpOptions = {
    headers: new HttpHeaders({
      'Access-Control-Allow-Origin':'*',
      'Access-Control-Allow-Credentials': 'true',
      'Access-Control-Allow-Headers': 'origin, content-type, accept, authorization'
    })
  };


  _api_url:string = "http://127.0.0.1:8080/ApiGastosRest/api";

  getUserData()
  {
    return this.httpclient.get<Response>('https://reqres.in/api/users');
  }

  saveUser(usuario)
  {
    return this.httpclient.post('https://reqres.in/api/users',usuario);
  }

  saveUser2(usuario2)
  {
    return this.httpclient.post(`${this._api_url}/personas/create`,usuario2);
  }

  addGasto(gasto)
  {
    console.log("Voy a hacer la request a addGasto");
    return this.httpclient.post(`${this._api_url}/gastos/addGasto/1`,gasto);
  }

  getGastos()
  {
    return this.httpclient.get<GastosDetail>(`${this._api_url}/gastos/persona/2`);
  }

  getGastosByPerson()
  {
    return this.httpclient.get<GastosDetail>(`${this._api_url}/gastos/all`);
  }

  getGastosByPersonIdMonthYear()
  {
    return this.httpclient.get<GastosDetail>(`${this._api_url}/gastos/1/Enero/2020`,{observe:'response'});
  }



  loginUser(usuario:Usuario)
  {
    console.log("ID:"+usuario.id);
    //return this.httpclient.post<Usuario>(`${this._api_url}/personas/persona/login`,usuario,this.httpOptions);
    return this.httpclient.post<any>(`${this._api_url}/personas/persona/login`, usuario,{observe:'response'});
    //return this.httpclient.get<Usuario>(`${this._api_url}/personas/persona/1`);

  }


}
