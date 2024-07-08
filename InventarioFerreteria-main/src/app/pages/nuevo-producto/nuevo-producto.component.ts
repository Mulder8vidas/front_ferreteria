import { Component, OnInit } from '@angular/core';
import { Producto } from "../../model/productos";
import { ApiService } from "../../services/apiService";
import {MessageService} from "primeng/api";

@Component({
  selector: 'app-nuevo-producto',
  templateUrl: './nuevo-producto.component.html',
  styleUrls: ['./nuevo-producto.component.css']
})
export class NuevoProductoComponent implements OnInit {
  producto: Producto = new Producto();

  constructor(private apiservicio: ApiService, private messageService:MessageService) {}

  ngOnInit(): void {}

  guardarProducto() {
    this.apiservicio.registrarProducto(this.producto).subscribe(
      (dato) => {
        this.messageService.add({severity:'success', summary: 'Completado', detail: 'Producto añadido'});
        this.limpiarCampos();
      },
      (error) => {
        console.error('Error al guardar el producto', error);
      }
    );
  }

  onSubmit() {
    this.guardarProducto();
  }

  limpiarCampos() {
    this.producto = new Producto(); // o cualquier otra lógica para reiniciar los valores
  }
}
