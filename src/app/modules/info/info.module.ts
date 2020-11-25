import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormularioComponent } from '../../components/formulario/formulario.component';
import { InfoRoutingModule } from './info-routing.module';
import { InfoComponent } from './info/info.component';
import { MultiplicadorPipe } from 'src/app/Pipes/multiplicador.pipe';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [InfoComponent,MultiplicadorPipe,FormularioComponent],
  imports: [
    CommonModule,
    InfoRoutingModule,
    FormsModule
  ],
  providers:[MultiplicadorPipe]
})
export class InfoModule { }
