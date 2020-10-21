import { Busqueda } from './../../models/busqueda';
import { JuegoService } from './../../services/juego.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-juego',
  templateUrl: './juego.component.html',
  styleUrls: ['./juego.component.css']
})
export class JuegoComponent implements OnInit {

  juegos: any[] = [];
  busqueda: Busqueda = {
    director: '',
    protagonista: '',
    productor: '',
    marca: '',
    tecnologia: ''
  };
  constructor(private juegoService: JuegoService) { }

  ngOnInit(): void {
    this.listaJuegos();
  }

  listaJuegos(): void {
    this.juegoService.juegos(this.busqueda).subscribe(
      data => {
        this.juegos = data;
      },
      err => {
        console.log(err);
      }
    )
  }

  limpiarDirector(): void {
    this.busqueda.director = '';
    this.listaJuegos();
  }
  limpiarProtagonista(): void {
    this.busqueda.protagonista = '';
    this.listaJuegos();
  }
  limpiarMarca(): void {
    this.busqueda.marca = '';
    this.listaJuegos();
  }
  limpiarProductor(): void {
    this.busqueda.productor = '';
    this.listaJuegos();
  }
  
  limpiarTodo(){
    this.busqueda.director = '';
    this.busqueda.protagonista = '';
    this.busqueda.marca = '';
    this.busqueda.productor = '';
    this.busqueda.tecnologia = '';
    this.listaJuegos();
  }


}
