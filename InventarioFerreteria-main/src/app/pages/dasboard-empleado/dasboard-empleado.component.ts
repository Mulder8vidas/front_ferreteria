import { Component } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-dasboard-empleado',
  templateUrl: './dasboard-empleado.component.html',
  styleUrls: ['./dasboard-empleado.component.css']
})
export class DasboardEmpleadoComponent {
  constructor(private router:Router) {
  }
  ListP(){
    this.router.navigate(['/product-list']);
  }
  SalidaP(){
    this.router.navigate(['/salida-products'])
  }
}
