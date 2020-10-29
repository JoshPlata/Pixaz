import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { Pedido } from '../model/Pedido/Pedido';
import { PedidoService } from '../model/Pedido/pedido_service';

@Component({
  selector: 'app-pedido-emp',
  templateUrl: './pedido-emp.component.html',
  styleUrls: ['./pedido-emp.component.css']
})
export class PedidoEmpComponent implements OnInit {

  pedidos: Pedido[];

  constructor(private pedidoService: PedidoService) { }

  ngOnInit(): void {
    this.setPedidos();
  }

  setPedidos(): void {
    this.pedidos = this.pedidoService.getListaProductos();
  }

}
