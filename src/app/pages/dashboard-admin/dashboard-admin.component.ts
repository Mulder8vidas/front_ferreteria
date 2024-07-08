import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-dashboard-admin',
  templateUrl: './dashboard-admin.component.html',
  styleUrls: ['./dashboard-admin.component.css']
})
export class DashboardAdminComponent implements OnInit{
  constructor(private router:Router) {
  }
  ListP(){
    this.router.navigate(['/product-list']);
  }
  ListU(){
    this.router.navigate(['/user-list']);
  }
  CreateU(){
    this.router.navigate(['/nuevo-user']);
  }
  CreateP(){
    this.router.navigate(['/nuevo-product']);
  }
  SalidaP(){
    this.router.navigate(['/salida-products'])
  }

  datosLogin:any;

  ngOnInit(): void {
    // @ts-ignore
    this.datosLogin=JSON.parse(localStorage.getItem("datos_login"))
  }
  cerrarsesion(){
    localStorage.clear();
  }
}
