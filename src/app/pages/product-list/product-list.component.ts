import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import {ApiService} from "../../services/apiService";
import {Producto} from "../../model/productos";
import {MessageService} from "primeng/api";

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  visible: boolean = false;
  data:any[]=[]
  datitos:any;
  producto : Producto = new  Producto();
  page: number = 1;


  constructor(private apiservice:ApiService,private router:Router,private messageService:MessageService) {

  }

  ngOnInit(): void {
    this.llenarData()
  }
  showDialog(datos:any) {
    this.datitos =datos;
    this.producto=this.datitos;
    this.visible = true;
  }

  llenarData(){
    this.apiservice.getData().subscribe(data=>{this.data=data;console.log(this.data)})
  }
  showSuccess() {
    this.messageService.add({severity:'success', summary: 'Success', detail: 'Message Content'});
  }

  actualizarProducto() {
    this.apiservice.actualizarProducto(this.datitos.id,this.producto).subscribe(
      (productoActualizado) => {
        this.messageService.add({severity:'success', summary: 'Exitoso', detail: 'Cambios Guardados'});
        this.visible = false;
      },
      (error) => {
        console.error('Error al actualizar el producto', error);
      }
    );
}
  EliminarProducto(id: number) {
    this.apiservice.borrarProducto(id).subscribe(
      (respuesta) => {
        console.log('Producto eliminado correctamente', respuesta);
        this.messageService.add({ severity: 'error', summary: 'Eliminado', detail: 'Producto Eliminado' });
        this.llenarData()
      },
      (error) => {
        console.error('Error al eliminar el producto', error);

      }
    );}

  verDetalles(id:number) {
    this.router.navigate(["productos-detalles",id]);
  }

  busqueda(busqueda: string) {
    this.apiservice.busqueda(busqueda).subscribe(value => {
      console.log(value)})

  }
}

