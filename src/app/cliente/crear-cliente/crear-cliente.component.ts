import { ClienteService } from './../../services/cliente.service';
import { Component, OnInit } from '@angular/core';
import { Cliente } from 'src/app/models/cliente';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';

@Component({
  selector: 'app-crear-cliente',
  templateUrl: './crear-cliente.component.html',
  styleUrls: ['./crear-cliente.component.css']
})
export class CrearClienteComponent implements OnInit {

  clienteInicial = {
    correo: '',
    documento: '',
    nombreCompleto: '',
    telefono: '',
    tipoDocumento: '',
  }

  constructor(
    private clienteService: ClienteService,
    private toastService: ToastrService,
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  guardarCliente() {
    const cliente = new Cliente(this.clienteInicial.correo, this.clienteInicial.documento, this.clienteInicial.nombreCompleto,
      this.clienteInicial.tipoDocumento, this.clienteInicial.telefono);
    this.clienteService.guardarCliente(cliente).subscribe(
      data => {
        this.toastService.success('Cliente creado!!', 'OK', {
          timeOut: 3000, positionClass: 'toast-top-center'
        });
        this.router.navigate(['/lista-cliente']);
      },
      err => {
        this.toastService.error(err.error.mensaje, 'fallo la creacion del cliente', {
          timeOut: 3000, positionClass: 'toast-top-center',
        });
        this.router.navigate(['/nuevo']);
      }
    )
  }


}
