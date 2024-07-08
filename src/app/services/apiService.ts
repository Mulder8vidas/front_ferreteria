import {HttpClient} from "@angular/common/http";
import {Injectable} from "@angular/core";
import {Observable} from "rxjs";
import {Producto} from "../model/productos";
import {Users} from "../model/users";
import {Login, Response} from "../model/login";
import {RequestUserCrear} from "../model/RequestUserCrear";
@Injectable({
  providedIn: 'root'
})
export class ApiService{

  //dev
  /*private urlproductos='http://localhost:8080/api/v1/productos';
  private urlusuarios='http://localhost:8080/api/v1/usuarios';
  private urlLogin='http://localhost:8080/api/v1/login'*/
  //prd
  private urlproductos='https://dc0c-15-228-205-48.ngrok-free.app/api/v1/productos';
  private urlusuarios='https://dc0c-15-228-205-48.ngrok-free.app/api/v1/usuarios';
  private urlLogin='https://dc0c-15-228-205-48.ngrok-free.app/api/v1/login'

constructor( private http:HttpClient) {


}
  public getData():Observable<any>{
    return this.http.get<any>(this.urlproductos)
  }
  public getDataU():Observable<any>{
    return this.http.get<any>(this.urlusuarios)
  }

  registrarProducto(producto:Producto): Observable<Object>{
  return  this.http.post(`${this.urlproductos}`,producto)

  }
  registrarUsuarios(usuario:RequestUserCrear): Observable<Object>{
    return  this.http.post(`${this.urlusuarios}`,usuario)

  }
  actualizarProducto(id:number,producto:Producto):Observable<Object>{
  return this.http.put(`${this.urlproductos}/${id}`,producto);
  }

  actualizarUsuario(id:number,usuario:Users):Observable<Object>{
  return this.http.put(`${this.urlusuarios}/${id}`,usuario);
  }
  borrarProducto(id:number):Observable<Object>{
    return this.http.delete(`${this.urlproductos}/${id}`);
  }

  borrarUsuario(id:number):Observable<Object>{
    return this.http.delete(`${this.urlusuarios}/${id}`);
  }
  obtenerProductoPorId(id: number): Observable<Producto> {
    return this.http.get<Producto>(`${this.urlproductos}/${id}`);
  }

  obtenerUsuarioPorId(id: number): Observable<Users> {
    return this.http.get<Users>(`${this.urlusuarios}/${id}`);
  }
  login(payload:Login | any):Observable<Response>{

    return this.http.post<Response>(`${this.urlLogin}`,payload)

  }
  busqueda(busquedaa:string):Observable<Producto[]>{
    return this.http.get<Producto[]>(`http://localhost:8080/api/v1/productos/busqueda/${busquedaa}`)

  }

}
