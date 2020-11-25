import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LogsService {

  constructor() { }

  log(msg:any)
  {
    console.log(msg);
  }

  warn(msg:any)
  {
    console.warn(msg);
  }

  error(msg:any)
  {
    console.error(msg);
  }
}
