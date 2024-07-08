import { Component } from '@angular/core';
import {ApiService} from "../../services/apiService";

import {Users} from "../../model/users";
import {MessageService} from "primeng/api";

@Component({
  selector: 'app-nuevo-usuario',
  templateUrl: './nuevo-usuario.component.html',
  styleUrls: ['./nuevo-usuario.component.css']
})
export class NuevoUsuarioComponent {
  usuario: Users = new Users();
  datitos:any;
  visible: boolean = false;

  constructor(private apiservicio: ApiService, private messageService:MessageService) {
  }

  limpiarCampos() {
    this.usuario = new Users();
  }
  registrarUsuarios() {
    this.apiservicio.registrarUsuarios(this.usuario).subscribe(
      (dato) => {
        this.messageService.add({severity:'success', summary: 'Completado', detail: 'Usuario añadido'});
        this.limpiarCampos();
      },
      (error) => {
        console.error('Error al guardar el usuario', error);
      }
    );
  }
  onSubmit() {
    this.registrarUsuarios();
  }

  actualizarUsuario() {
    this.apiservicio.actualizarUsuario(this.datitos.id,this.usuario).subscribe(
      (UsuarioActualizado) => {
        this.messageService.add({severity:'success', summary: 'Exitoso', detail: 'Cambios Guardados'});
        this.visible = false;
      },
      (error) => {
        console.error('Error al actualizar el usuario', error);
      }
    );
  }
}
