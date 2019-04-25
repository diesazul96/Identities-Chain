import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {CedulaComponent} from '../nueva-cedula/nuevacedula.component';
import { DocumentoComponent } from 'src/documento/documento.component';
const routes: Routes = [
  {path : '', component : DocumentoComponent},
  {path : 'nueva-cedula/:key', component : CedulaComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
