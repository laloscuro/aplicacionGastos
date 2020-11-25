import { Component, OnInit } from '@angular/core';
import { FormControl, NgForm, Validators } from '@angular/forms';
import { Contacto } from './Contacto';
import {FormBuilder, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-formularios',
  templateUrl: './formularios.component.html',
  styleUrls: ['./formularios.component.css']
})
export class FormulariosComponent implements OnInit {
  enviado:boolean=false;
  contacto:Contacto;
  public form:FormGroup;
  public name:string="FormularioReactivo";
  public phone;
  public email;
  constructor(private formBuilder:FormBuilder) {

  }

  ngOnInit(): void {
    this.contacto = new Contacto();
    this.contacto.name="Jose Luis";
    this.contacto.email="laloscuro@gmail.com";
    this.contacto.phone="636677665";
    this.contacto.subject="Lo que sea reactivo";
    this.contacto.msg="Lorem20ddf dejefjefj edjidjiw diwjd jdiwjdiwjdosidjwd";

    this.phone = new FormControl('', Validators.required);
    this.email = new FormControl('', [Validators.required,Validators.email]);
    this.form=this.formBuilder.group({
      email:this.email,
      phone: this.phone,
      name:['', Validators.required],
      msg:'',
      subject:''
    });
    }

  onSubmit(f:FormGroup){
    console.log(this.contacto);
    console.log("name:",this.form.get("name").value);
    console.log("Name:",f.get("name").value);
    this.enviado=true;
  }

  limpiar()
  {
    console.log("Limpiando");
    this.form.reset();
    //f.resetForm();
    this.enviado=false;
  }

}
