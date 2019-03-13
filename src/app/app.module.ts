import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {DocumentoComponent} from '../documento/documento.component';
import {CedulaComponent} from '../nueva-cedula/nuevacedula.component';


//Dropdowns Material Imports
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatSelectModule} from '@angular/material/select';
import{ MatInputModule} from '@angular/material/input';


//Imports para el datepicker
import{ MatDatepickerModule} from '@angular/material/datepicker';
import{MatNativeDateModule} from '@angular/material';



@NgModule({
  declarations: [
    AppComponent,
    DocumentoComponent,
    CedulaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule, BrowserAnimationsModule,
    MatFormFieldModule,
    MatSelectModule,
    MatInputModule,
    MatDatepickerModule,
    MatNativeDateModule


  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
