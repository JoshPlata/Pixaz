import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProdEmpComponent } from './prod-emp.component';

describe('ProdEmpComponent', () => {
  let component: ProdEmpComponent;
  let fixture: ComponentFixture<ProdEmpComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProdEmpComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProdEmpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
