import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule  } from '@angular/forms';
import { FormulariosRoutingModule } from './formularios-routing.module';
import { FormulariosComponent } from './formularios/formularios.component';


@NgModule({
  declarations: [FormulariosComponent],
  imports: [
    CommonModule,
    FormulariosRoutingModule,
    ReactiveFormsModule,
    FormsModule
  ]
})
export class FormulariosModule { }
