export class  Users{
 idPersona:{
   nombre: string;
   apellido: string;
 }
  email: string;
  password: string;
  rol: number;
  imagenUrl: string;


  constructor() {
    this.idPersona={
      nombre: '',
      apellido: ''
    }
  }
}



