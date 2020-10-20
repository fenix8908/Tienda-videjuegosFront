import { Cliente } from './../models/cliente';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ClienteService {

  clienteURL= "http://localhost:8080/cliente/";

  constructor(private http:HttpClient) { }

  public lista():Observable<Cliente[]>{
    return this.http.get<Cliente[]>(this.clienteURL + 'lista');
  }

  public guardarCliente(cliente:Cliente): Observable<any>{
    return this.http.post(this.clienteURL + 'crear',cliente);
  }
}
