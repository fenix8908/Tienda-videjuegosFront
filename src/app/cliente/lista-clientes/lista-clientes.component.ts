import { ClienteService } from './../../services/cliente.service';
import { Component, OnInit } from '@angular/core';
import { Cliente } from 'src/app/models/cliente';

@Component({
  selector: 'app-lista-clientes',
  templateUrl: './lista-clientes.component.html',
  styleUrls: ['./lista-clientes.component.css']
})
export class ListaClientesComponent implements OnInit {

  clientes:Cliente[] = [];

  constructor(private clienteService:ClienteService) { }

  ngOnInit(): void {
    this.cargarClientes();
  }

  cargarClientes(){
    this.clienteService.lista().subscribe(
      data =>{
        this.clientes = data;
      },
      err=>{
        console.log(err);
      }
    )
  }

}
