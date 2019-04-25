import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from 'src/login/login.component';
import { MenuComponent } from 'src/menu/menu.component';
import { RegistryComponent } from 'src/registry/registry.component';
import {CedulaComponent} from '../nueva-cedula/nuevacedula.component';
import { DocumentoComponent } from 'src/documento/documento.component';

const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'login', component: LoginComponent },
  { path: 'menu', component: MenuComponent },
  { path: 'registry', component: RegistryComponent },
  {path : 'nueva-cedula/:key', component : CedulaComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [ LoginComponent, MenuComponent, RegistryComponent ]
