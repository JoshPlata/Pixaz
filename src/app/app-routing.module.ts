import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { DireccionClienteComponent } from './direccion-cliente/direccion-cliente.component';
import { HacerClienteComponent } from './hacer-cliente/hacer-cliente.component';
import { HomeClienteComponent } from './home-cliente/home-cliente.component';
import { HomeEmpComponent } from './home-emp/home-emp.component';
import { PedidoClienteComponent } from './pedido-cliente/pedido-cliente.component';
import { PedidoEmpComponent } from './pedido-emp/pedido-emp.component';
import { ProdEmpComponent } from './prod-emp/prod-emp.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'home-emp', component: HomeEmpComponent },
  { path: 'prod-emp', component: ProdEmpComponent },
  { path: 'pedido-emp', component: PedidoEmpComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }


