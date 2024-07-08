import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {LoginComponentComponent} from "./pages/login-component/login-component.component";
import {DashboardAdminComponent} from "./pages/dashboard-admin/dashboard-admin.component";
import {DasboardJefeComponent} from "./pages/dasboard-jefe/dasboard-jefe.component";
import {DasboardEmpleadoComponent} from "./pages/dasboard-empleado/dasboard-empleado.component";
import {ProductListComponent} from "./pages/product-list/product-list.component";
import {NuevoUsuarioComponent} from "./pages/nuevo-usuario/nuevo-usuario.component";
import {NuevoProductoComponent} from "./pages/nuevo-producto/nuevo-producto.component";
import {GestionUsuariosComponent} from "./pages/gestion-usuarios/gestion-usuarios.component";
import {SalidaProductosComponent} from "./pages/salida-productos/salida-productos.component";
import {DetallesProductosComponent} from "./pages/detalles-productos/detalles-productos.component";


const routes: Routes = [
  {path:'', component:LoginComponentComponent},
  {path:'home-admin',component:DashboardAdminComponent},
  {path:'home-jefe',component:DasboardJefeComponent},
  {path:'home-empleado', component:DasboardEmpleadoComponent},
  {path:'product-list', component:ProductListComponent},
  {path:'nuevo-user',component:NuevoUsuarioComponent},
  {path:'nuevo-product',component:NuevoProductoComponent},
  {path:'user-list',component:GestionUsuariosComponent},
  {path:'salida-products',component:SalidaProductosComponent},
  {path:'productos-detalles/:id',component:DetallesProductosComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
