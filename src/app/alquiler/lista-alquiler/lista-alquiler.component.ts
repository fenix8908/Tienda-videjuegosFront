
import { AlquilerService } from './../../services/alquiler.service';
import { Alquiler } from './../../models/alquiler';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lista-alquiler',
  templateUrl: './lista-alquiler.component.html',
  styleUrls: ['./lista-alquiler.component.css']
})
export class ListaAlquilerComponent implements OnInit {

  alquilerLista: Alquiler[] = [];  
  p: number = 1;//determina la pagina actual de la paginacion

  constructor(private alquilerService: AlquilerService) { }

  ngOnInit(): void {
    this.cargarAlquilerLitado();
  }

  cargarAlquilerLitado() {
    this.alquilerService.lista().subscribe(
      data => {
        this.alquilerLista = data;
      },
      err => {
        console.log(err);
      }
    )
  }


}
