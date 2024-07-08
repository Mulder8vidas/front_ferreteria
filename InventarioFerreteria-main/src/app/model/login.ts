export class Login{
  username:string;
  password:string;
}
export interface Response {
  mensaje: string
  data: Data
}

export interface Data {
  apellido: string
  nombre: string
  rol: string
}
