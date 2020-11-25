import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'multiplicador'
})
export class MultiplicadorPipe implements PipeTransform {

  transform(valorRecibido:number, factor:string): number {
    let fac:number = parseFloat(factor);
    let mult:number = (valorRecibido * fac);
    return mult;
  }

}
