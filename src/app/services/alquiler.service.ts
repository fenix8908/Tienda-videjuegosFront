
import { Alquiler } from './../models/alquiler';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class AlquilerService {

  alquilerURL="http://localhost:8080/tienda/";
  constructor(private http: HttpClient) { }

  public lista(): Observable<Alquiler[]> {
    return this.http.get<Alquiler[]>(this.alquilerURL + 'lista');
  }

  public registrarAlquiler(alquiler: Alquiler,idCliente:number,idJuego:number): Observable<any> {
    return this.http.post(this.alquilerURL + `alquiler/cliente/${idCliente}/juego/${idJuego}`, alquiler);
  }

}