import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import {Users} from "../../model/users";
import {ApiService} from "../../services/apiService";
import {MessageService} from "primeng/api";


@Component({
  selector: 'app-gestion-usuarios',
  templateUrl: './gestion-usuarios.component.html',
  styleUrls: ['./gestion-usuarios.component.css']
})
export class GestionUsuariosComponent implements OnInit{
  data:any[]=[]
  datitos:any;
  usuario : Users =new Users();
  visible: boolean = false;


constructor(private apiservice:ApiService,private router:Router,private messageService:MessageService) {
}

  showDialog(datos:any) {
    this.datitos =datos;
    this.usuario=this.datitos;
    this.visible = true;
  }
  verDetalles(id:number) {
    this.router.navigate(["usuarios-detalles",id]);
  }
  llenarData(){
    this.apiservice.getDataU().subscribe(data=>{this.data=data;console.log(this.data)})
  }
  EliminarUsuario(id: number) {
    this.apiservice.borrarUsuario(id).subscribe(
      (respuesta) => {
        console.log('Usuario eliminado correctamente', respuesta);
        this.messageService.add({ severity: 'error', summary: 'Eliminado', detail: 'Usuario Eliminado' });
        this.llenarData()
      },
      (error) => {
        console.error('Error al eliminar el usuario', error);

      }
    );}

  actualizarUsuario() {
    this.apiservice.actualizarUsuario(this.datitos.id,this.usuario).subscribe(
      (UsuarioActualizado) => {
        this.messageService.add({severity:'success', summary: 'Exitoso', detail: 'Cambios Guardados'});
        this.visible = false;
      },
      (error) => {
        console.error('Error al actualizar el usuario', error);
      }
    );
  }

  ngOnInit(): void {
    this.llenarData()
  }
}
