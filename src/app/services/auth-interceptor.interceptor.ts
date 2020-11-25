import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable()
export class AuthInterceptorInterceptor implements HttpInterceptor {

  constructor(private router: Router) {}

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    console.log("Interceptaaannndoooo");
    const tokenNumber:number = this.getToken();
    let mitoken:string;
    console.log("Estoy en mi interceptor, busco el header Authorization");
    console.log("User:",localStorage.getItem("User"));


    if(!request.headers.has('Authorization'))
    {
      //Buscamos token en el localStorage
      console.log("No existe cabecera Authorization y la creo");
      //let access = localStorage.getItem('accessToken');
      let userStorage = localStorage.getItem('User');
      mitoken = userStorage + tokenNumber;
      console.log("mitoken:"+mitoken);
      const cloneRequest = request.clone({
        setHeaders: {
          Authorization: `Bearer ${mitoken}`
        }
      });
      console.log(cloneRequest.headers.get("Authorization"));
      /*request.headers.getAll();*/
      //console.log("Cabeceras:",cloneRequest.headers);
      return next.handle(cloneRequest);
    }
    else
    {
      console.log("Existe cabecera Authorization");
      return next.handle(request);

      this.router.navigateByUrl('/login');
    }

   /* if(!!tokenNumber)
    {
      request = request.clone(
        {
          setHeaders:{Authorization:'Bearer ' + tokenNumber}
        }
      )
    }
    return next.handle(request);*/
  }

  getToken():number
  {
    return Math.random();
  }
}
