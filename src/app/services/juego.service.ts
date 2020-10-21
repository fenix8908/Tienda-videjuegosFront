import { Busqueda } from './../models/busqueda';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class JuegoService {

  juegoURL = "http://localhost:8080/juego/";

  constructor(private http:HttpClient) { }

  public juegos(busqueda:Busqueda):Observable<any[]>{
    return this.http.post<any[]>(this.juegoURL+ 'lista',busqueda);
  }

}
