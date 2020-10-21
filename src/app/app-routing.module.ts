import { JuegoComponent } from './juego/juego/juego.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CrearClienteComponent } from './cliente/crear-cliente/crear-cliente.component';
import { ListaClientesComponent } from './cliente/lista-clientes/lista-clientes.component';

const routes: Routes = [
  {path: '', component: ListaClientesComponent},
  {path:'juego', component:JuegoComponent},
  {path: 'nuevo', component: CrearClienteComponent},
  {path: '**', redirectTo: '', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
