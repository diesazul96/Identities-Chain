import { VisualizadorDocumento } from './visualizador-documento/visualizador-documento.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { MatToolbarModule, MatFormFieldModule, MatInputModule }from '@angular/material';
import { AñadirDocumento } from './añadir-documento';

@NgModule({
  declarations: [
    AppComponent, VisualizadorDocumento, AñadirDocumento
  ],
  imports: [
    BrowserModule,
    AppRoutingModule, BrowserAnimationsModule, MatToolbarModule, MatFormFieldModule, MatInputModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
