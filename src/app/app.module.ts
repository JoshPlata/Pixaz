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
import { AppRoutingModule } from './app-routing.module';
import { ReactiveFormsModule } from '@angular/forms';
import { ProductoService } from './model/Productos/Productos-service';
import { PedidoService } from './model/Pedido/pedido_service';

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
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [ProductoService, PedidoService],
  bootstrap: [AppComponent]
})
export class AppModule { }
