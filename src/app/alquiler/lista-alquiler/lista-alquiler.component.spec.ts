import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaAlquilerComponent } from './lista-alquiler.component';

describe('ListaAlquilerComponent', () => {
  let component: ListaAlquilerComponent;
  let fixture: ComponentFixture<ListaAlquilerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListaAlquilerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListaAlquilerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
