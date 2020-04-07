import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CarruselComponent } from './carrusel/carrusel.component';
import { LoginComponent } from "./login/login.component";
import { PrincipalComponent } from "./principal/principal.component";


const routes: Routes = [
  {
  path: '',
  component: CarruselComponent
},
{
path : 'login',
component: LoginComponent
},
{
  path: 'principal',
  component: PrincipalComponent
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
