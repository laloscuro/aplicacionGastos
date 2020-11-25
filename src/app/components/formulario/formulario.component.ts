import { Component, OnInit , Input} from '@angular/core';



@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent implements OnInit {

  @Input()
  entrada:string;

  constructor() { }

  ngOnInit(): void {
    console.log("Entrada:"+this.entrada);
  }


  public usuario = {
    nombreUsuario:"",
    passwordUsuario:""
  };



  public modelo = {
    texto:''
  };

  public getModel()
  {
    console.log("Usuario:",this.usuario.nombreUsuario);
    console.log("PAss:",this.usuario.passwordUsuario);
  }

  public finalizado:boolean=false;
  public important:boolean=true;

  public setStyles():{}
  {
    let styles = {
      'text-decoration':this.finalizado ?'line-through':'none',
      'font-weight': this.important ?'bold':'normal',
      'color':'black'
    };
    return styles;
  }
}
