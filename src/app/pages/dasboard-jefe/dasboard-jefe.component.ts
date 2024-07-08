import { Component } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-dasboard-jefe',
  templateUrl: './dasboard-jefe.component.html',
  styleUrls: ['./dasboard-jefe.component.css']
})
export class DasboardJefeComponent {
  constructor(private router:Router) {
  }
  ListP(){
    this.router.navigate(['/product-list']);
  }
  ListU(){
    this.router.navigate(['/user-list']);
  }
  CreateP(){
    this.router.navigate(['/nuevo-product']);
  }
  SalidaP(){
    this.router.navigate(['/salida-products'])
  }
}
