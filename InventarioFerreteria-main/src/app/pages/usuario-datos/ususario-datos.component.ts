import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-ususario-datos',
  templateUrl: './ususario-datos.component.html',
  styleUrls: ['./ususario-datos.component.css']
})
export class UsusarioDatosComponent  implements OnInit{
  datosLogin:any;
  constructor(private router:Router) {
  }
  ngOnInit(): void {
    // @ts-ignore
    this.datosLogin=JSON.parse(localStorage.getItem("datos_login"))
  }
  cerrarsesion(){
    localStorage.clear();
    this.router.navigate([''])
  }
}
