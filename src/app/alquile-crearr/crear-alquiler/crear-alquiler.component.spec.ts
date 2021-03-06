import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CrearAlquilerComponent } from './crear-alquiler.component';

describe('CrearAlquilerComponent', () => {
  let component: CrearAlquilerComponent;
  let fixture: ComponentFixture<CrearAlquilerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CrearAlquilerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CrearAlquilerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
