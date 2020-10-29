import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HacerClienteComponent } from './hacer-cliente.component';

describe('HacerClienteComponent', () => {
  let component: HacerClienteComponent;
  let fixture: ComponentFixture<HacerClienteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HacerClienteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HacerClienteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
