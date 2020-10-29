import { Component, OnInit } from '@angular/core';
import { Producto } from '../model/Productos/Producto';
import { ProductoService } from '../model/Productos/Productos-service';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-prod-emp',
  templateUrl: './prod-emp.component.html',
  styleUrls: ['./prod-emp.component.css']
})
export class ProdEmpComponent implements OnInit {

  productos: Producto[];
  prodEmpForm: FormGroup;

  constructor(private productoService: ProductoService, private fb: FormBuilder) { }

  ngOnInit(): void {
    this.buildForm();
    this.setProductos();
  }

  setProductos(): void{
    this.productos = this.productoService.getProductos();
  }

  private buildForm(){
    this.prodEmpForm = this.fb.group({
      nombre: [''],
      precio: []
    });
  }

  get NombreField(){
    return this.prodEmpForm.get('nombre').value;
  }

  get PrecioField(){
    return this.prodEmpForm.get('precio').value;
  }

  save(evt: Event){
    evt.preventDefault();
    this.productoService.guardarProducto(new Producto({
      id_producto: this.productos.length + 1,
      nombre: this.NombreField,
      precio: this.PrecioField
    }));
  }

}
