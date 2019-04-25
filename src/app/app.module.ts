import { FormsModule } from '@angular/forms';
import { environment } from './../environments/environment';
import { VisualizadorDocumento } from './visualizador-documento/visualizador-documento.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

import { AppComponent } from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { MatToolbarModule, MatFormFieldModule, MatInputModule }from '@angular/material';
import { AñadirDocumento } from './añadir-documento';
import { AngularFireModule } from '@angular/fire';
import { AngularFirestore } from '@angular/fire/firestore';
import { LoginComponent } from '../login/login.component';
import { MenuComponent } from '../menu/menu.component';
import { RegistryComponent } from '../registry/registry.component';
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
    AppComponent, LoginComponent, MenuComponent, RegistryComponent, VisualizadorDocumento, AñadirDocumento, DocumentoComponent,
    CedulaComponent
  ],
  imports: [
    NgbModule,
    BrowserModule,
    AppRoutingModule, BrowserAnimationsModule, MatToolbarModule, AngularFireModule.initializeApp(environment.firebase),
    FormsModule,
    MatFormFieldModule,
    MatSelectModule,
    MatInputModule,
    MatDatepickerModule,
    MatNativeDateModule
  ],
  providers: [AngularFirestore],
  bootstrap: [AppComponent]
})
export class AppModule { }
