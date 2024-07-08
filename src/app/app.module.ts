import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponentComponent } from './pages/login-component/login-component.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { DashboardAdminComponent } from './pages/dashboard-admin/dashboard-admin.component';
import { DasboardJefeComponent } from './pages/dasboard-jefe/dasboard-jefe.component';
import { DasboardEmpleadoComponent } from './pages/dasboard-empleado/dasboard-empleado.component';
import { ProductListComponent } from './pages/product-list/product-list.component';
import { NuevoUsuarioComponent } from './pages/nuevo-usuario/nuevo-usuario.component';
import { GestionUsuariosComponent } from './pages/gestion-usuarios/gestion-usuarios.component';
import { NuevoProductoComponent } from './pages/nuevo-producto/nuevo-producto.component';
import { SalidaProductosComponent } from './pages/salida-productos/salida-productos.component';
import {HttpClientModule} from "@angular/common/http";
import {DialogModule} from 'primeng/dialog';
import {ButtonModule} from 'primeng/button';
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {MessageService} from 'primeng/api';
import {ToastModule} from 'primeng/toast';
import { DetallesProductosComponent } from './pages/detalles-productos/detalles-productos.component';
import {NgxPaginationModule} from 'ngx-pagination';
import { UsusarioDatosComponent } from './pages/usuario-datos/ususario-datos.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponentComponent,
    DashboardAdminComponent,
    DasboardJefeComponent,
    DasboardEmpleadoComponent,
    ProductListComponent,
    NuevoUsuarioComponent,
    GestionUsuariosComponent,
    NuevoProductoComponent,
    SalidaProductosComponent,
    DetallesProductosComponent,

    UsusarioDatosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    FormsModule,
    DialogModule,
    ButtonModule,
    BrowserAnimationsModule,
    ToastModule,
    NgxPaginationModule

  ],
  providers: [
    MessageService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
