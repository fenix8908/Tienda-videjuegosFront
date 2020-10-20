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



@NgModule({
  declarations: [
    AppComponent,
    CrearClienteComponent,
    ListaClientesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot(),
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
