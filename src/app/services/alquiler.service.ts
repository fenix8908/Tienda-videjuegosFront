import { Alquiler } from './../models/alquiler';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class AlquilerService {

  alquilerURL="http://localhost:8080/alquiler/";
  constructor(private http: HttpClient) { }

  public lista(): Observable<Alquiler[]> {
    return this.http.get<Alquiler[]>(this.alquilerURL + 'lista');
  }

  public listaJoin(): Observable<Alquiler[]> {
    return this.http.get<Alquiler[]>(this.alquilerURL + 'alquileres');
  }

  public registrarAlquiler(alquiler: Alquiler): Observable<any> {
    return this.http.post(this.alquilerURL + 'registro', alquiler);
  }
}