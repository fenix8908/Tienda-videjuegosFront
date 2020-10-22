import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CrearClienteComponent } from './cliente/crear-cliente/crear-cliente.component';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {HttpClientModule} from '@angular/common/http';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
//Modulos externos
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
import { ListaClientesComponent } from './cliente/lista-clientes/lista-clientes.component';
import { JuegoComponent } from './juego/juego/juego.component';
import {NgxPaginationModule} from 'ngx-pagination';
import { HomeComponent } from './home/home/home.component';
import { NavComponent } from './nav/nav/nav.component';
import { ListaAlquilerComponent } from './alquiler/lista-alquiler/lista-alquiler.component';
import { CrearAlquilerComponent } from './alquile-crearr/crear-alquiler/crear-alquiler.component';




@NgModule({
  declarations: [
    AppComponent,
    CrearClienteComponent,
    ListaClientesComponent,
    JuegoComponent,
    HomeComponent,
    NavComponent,
    ListaAlquilerComponent,
    CrearAlquilerComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot(),
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    NgxPaginationModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
