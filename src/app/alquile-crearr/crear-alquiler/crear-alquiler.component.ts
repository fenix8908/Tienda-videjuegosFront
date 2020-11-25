import { Juego } from './../../models/juego';
import { JuegoService } from './../../services/juego.service';
import { ClienteService } from './../../services/cliente.service';
import { AlquilerService } from './../../services/alquiler.service';
import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { Alquiler } from 'src/app/models/alquiler';
import { Router } from '@angular/router';
import { Cliente } from 'src/app/models/cliente';

@Component({
  selector: 'app-crear-alquiler',
  templateUrl: './crear-alquiler.component.html',
  styleUrls: ['./crear-alquiler.component.css']
})
export class CrearAlquilerComponent implements OnInit {

  alquilerRequest = {
    fechaAlquiler: null,
    fechaEntrega: null,
    precioAlquiler:null
  }
  listaClientes: Cliente[];
  listaJuegos: Juego[] = [];
  clienteId: number;
  juegoId: number;

  constructor(
    private alquilerService: AlquilerService,
    private clienteService: ClienteService,
    private toastService: ToastrService,
    private router: Router,
    private juegoService: JuegoService
  ) { }

  ngOnInit(): void {
    this.cargarClientes();
    this.caragarJuegos();
  }

  caragarJuegos() {
    this.juegoService.listadoJuegos().subscribe(
      respuesta =>{
        this.listaJuegos = respuesta;
      },err=>{
        console.log(err);
        
      }
    )
  }

  cargarClientes() {
    this.clienteService.lista().subscribe(
      data => {
        this.listaClientes = data;
      },
      err => {
        console.log(err);
      }
    )
  }
 
  registrarAlquiler() {
    const alquiler = new Alquiler(this.alquilerRequest.fechaAlquiler, this.alquilerRequest.fechaEntrega, this.alquilerRequest.precioAlquiler);
    this.alquilerService.registrarAlquiler(alquiler, this.clienteId, this.juegoId).subscribe(
      respuesta => {
        this.toastService.success('Alquiler registrado!!', 'OK', {
          timeOut: 3000, positionClass: 'toast-top-center'
        });
        this.router.navigate(["/lista-alquiler"]);
      },
      err => {
        this.toastService.error(err.error.mensaje, 'fallo el registro de alquiler', {
          timeOut: 3000, positionClass: 'toast-top-center',
        });
      }
    )
  }

}
