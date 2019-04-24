import { FormsModule } from '@angular/forms';
import { environment } from './../environments/environment';
import { VisualizadorDocumento } from './visualizador-documento/visualizador-documento.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { MatToolbarModule, MatFormFieldModule, MatInputModule }from '@angular/material';
import { AñadirDocumento } from './añadir-documento';
import { AngularFireModule } from '@angular/fire';
import { AngularFirestore } from '@angular/fire/firestore';

@NgModule({
  declarations: [
    AppComponent, VisualizadorDocumento, AñadirDocumento
  ],
  imports: [
    BrowserModule,
    AppRoutingModule, BrowserAnimationsModule, MatToolbarModule, MatFormFieldModule, MatInputModule, AngularFireModule.initializeApp(environment.firebase),
    FormsModule
  ],
  providers: [AngularFirestore],
  bootstrap: [AppComponent]
})
export class AppModule { }
