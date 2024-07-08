import { Component } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {Router} from "@angular/router";
import {ApiService} from "../../services/apiService";

@Component({
  selector: 'app-login-component',
  templateUrl: './login-component.component.html',
  styleUrls: ['./login-component.component.css']
})
export class LoginComponentComponent {

  constructor(private router : Router,private authService:ApiService) {

  }
  form= new FormGroup({
    email :new FormControl('',Validators.required),
    password:new FormControl('',Validators.required)

  })

  Login(){
      this.authService.login({
        username:this.form.getRawValue().email,
        password:this.form.getRawValue().password
      }).subscribe(value => {

        if(value.data?.rol=="admin"){
          this.router.navigate(["home-admin"])
        }
        if(value.data?.rol=="jefe"){
          this.router.navigate(["home-jefe"])
        }
        if(value.data?.rol=="empleado"){
          this.router.navigate(["home-empleado"])
        }
        localStorage.setItem("datos_login",JSON.stringify(value.data));


        //obtener datos del localstorage
        // @ts-ignore
        const datoLogin =JSON.parse(localStorage.getItem("datos_login"))

      })
  }

}
