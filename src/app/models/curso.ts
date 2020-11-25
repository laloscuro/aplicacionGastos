import { Content } from '@angular/compiler/src/render3/r3_ast';
import {isDate, isCurrency, IsInt, Length, Max, Min, Contains} from 'class-validator';

export class Curso{
  @Length(1,2)
  Id: number;

  @Contains("Angular")
  Nombre: string;

  @Length(1,100)
  Descripcion: string;

  @IsInt()
  @Min(50)
  @Max(150)
  Duracion: number;

  @IsInt()
  @Min(100)
  @Max(200)
  Precio: number;
}
