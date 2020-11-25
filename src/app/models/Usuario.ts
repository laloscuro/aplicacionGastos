export class Usuario
{
  public id:number;
  public name:string;
  public password:string

  constructor(name:string,password:string, id?:number)
  {
    this.name=name;
    this.password=password;
    if(!id)
    {
      this.id=id;
    }
  }

}

