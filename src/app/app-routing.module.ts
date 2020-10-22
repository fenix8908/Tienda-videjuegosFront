import { ListaAlquilerComponent } from './alquiler/lista-alquiler/lista-alquiler.component';
import { HomeComponent } from './home/home/home.component';
import { JuegoComponent } from './juego/juego/juego.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CrearClienteComponent } from './cliente/crear-cliente/crear-cliente.component';
import { ListaClientesComponent } from './cliente/lista-clientes/lista-clientes.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'lista-cliente', component: ListaClientesComponent},
  {path:'lista-alquiler', component:ListaAlquilerComponent},
  {path:'juego', component:JuegoComponent},
  {path: 'nuevo', component: CrearClienteComponent},
  {path: '**', redirectTo: '', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
