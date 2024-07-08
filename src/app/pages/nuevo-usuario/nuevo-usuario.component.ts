import { Component } from '@angular/core';
import {ApiService} from "../../services/apiService";

import {Users} from "../../model/users";
import {MessageService} from "primeng/api";
import {RequestUserCrear} from "../../model/RequestUserCrear";

@Component({
  selector: 'app-nuevo-usuario',
  templateUrl: './nuevo-usuario.component.html',
  styleUrls: ['./nuevo-usuario.component.css']
})
export class NuevoUsuarioComponent {
  usuario:RequestUserCrear={
    nombre:'',
    apellido:'',
    email:'',
    password:'',
    rol:0,
    imagenUrl:''

  };
  datitos:any;
  visible: boolean = false;

  constructor(private apiservicio: ApiService, private messageService:MessageService) {
  }

  limpiarCampos() {
    this.usuario = {
      nombre: '',
      apellido: '',
      email: '',
      password: '',
      rol: 0,
      imagenUrl: ''
    };

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


}
