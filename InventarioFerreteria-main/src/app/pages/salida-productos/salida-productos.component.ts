import {Component, OnInit} from '@angular/core';
import {ApiService} from "../../services/apiService";
import {Producto} from "../../model/productos";
import {MessageService} from "primeng/api";

@Component({
  selector: 'app-salida-productos',
  templateUrl: './salida-productos.component.html',
  styleUrls: ['./salida-productos.component.css']
})
export class SalidaProductosComponent implements OnInit{
  productos: Producto[] = [];
  selectedProducto: any;
  cantidad: number = 0;
  datitos:any;

  constructor(private apiservice:ApiService) {
  }
  actualizarUsuario() {
    this.apiservice.actualizarProducto(this.datitos.id,this.selectedProducto).subscribe(
      (UsuarioActualizado) => {


      },
      (error) => {
        console.error('Error al actualizar el usuario', error);
      }
    );
  }


  realizarSalida() {


    let tempProducto = JSON.stringify(this.selectedProducto);

    this.selectedProducto.cantidadEnStock=this.selectedProducto.cantidadEnStock-this.cantidad
    if(this.selectedProducto.cantidadEnStock<=0){

      alert("No puedes tener stock negativo")
      this.selectedProducto=JSON.parse(tempProducto)

    }
    this.apiservice.actualizarProducto(this.selectedProducto.id,this.selectedProducto).subscribe(value => {
      alert("producto actualizado")
    })


  }

  ngOnInit(): void {
    this.apiservice.getData().subscribe(value => {
      this.productos=value;
    })
  }
}
