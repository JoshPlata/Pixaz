import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { HomeEmpComponent } from './home-emp/home-emp.component';
import { HomeClienteComponent } from './home-cliente/home-cliente.component';
import { ProdEmpComponent } from './prod-emp/prod-emp.component';
import { PedidoEmpComponent } from './pedido-emp/pedido-emp.component';
import { PedidoClienteComponent } from './pedido-cliente/pedido-cliente.component';
import { HacerClienteComponent } from './hacer-cliente/hacer-cliente.component';
import { DireccionClienteComponent } from './direccion-cliente/direccion-cliente.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HomeEmpComponent,
    HomeClienteComponent,
    ProdEmpComponent,
    PedidoEmpComponent,
    PedidoClienteComponent,
    HacerClienteComponent,
    DireccionClienteComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
