import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PedidoEmpComponent } from './pedido-emp.component';

describe('PedidoEmpComponent', () => {
  let component: PedidoEmpComponent;
  let fixture: ComponentFixture<PedidoEmpComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PedidoEmpComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PedidoEmpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
