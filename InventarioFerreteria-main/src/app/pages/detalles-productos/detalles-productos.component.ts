import { Component, OnInit } from '@angular/core';
import { Producto } from "../../model/productos";
import {ActivatedRoute, Router, RouterLink} from "@angular/router";
import { ApiService } from "../../services/apiService";
import {MessageService} from "primeng/api";

@Component({
  selector: 'app-detalles-productos',
  templateUrl: './detalles-productos.component.html',
  styleUrls: ['./detalles-productos.component.css']
})
export class DetallesProductosComponent implements OnInit {
  id: any;
  producto: Producto = new Producto();
  datitos:any;
  visible: boolean = false;
  data:any[]=[]

  constructor(private route: ActivatedRoute, private apiService: ApiService,messageService:MessageService,private router:Router) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.apiService.obtenerProductoPorId(this.id).subscribe(
      (dato: Producto) => {
        this.producto = dato;
      },
      (error) => {
        console.error('Error al obtener el producto por ID', error);
      }
    );
  }
  showDialog(datos:any) {
    this.datitos =datos;
    this.producto=this.datitos;
    this.visible = true;
  }
  llenarData(){
    this.apiService.getData().subscribe(data=>{this.data=data;console.log(this.data)})
  }
  EliminarProducto(id: number) {
    this.apiService.borrarProducto(id).subscribe(
      (respuesta) => {
        console.log('Producto eliminado correctamente', respuesta);
        alert('producto editado correctamente')
        this.llenarData()
        this.router.navigate(['/product-list'])

      },
      (error) => {
        console.error('Error al eliminar el producto', error);

      }
    );}

  actualizarProducto() {
    this.apiService.actualizarProducto(this.datitos.id,this.producto).subscribe(
      (productoActualizado) => {
        alert("Cambios Guardados")
        this.visible = false;
      },
      (error) => {
        console.error('Error al actualizar el producto', error);
      }
    );
  }
}
