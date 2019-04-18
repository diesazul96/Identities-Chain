import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {DocumentoComponent} from '../documento/documento.component';
import {CedulaComponent} from '../nueva-cedula/nuevacedula.component';
import { AngularFirestore } from '@angular/fire/firestore';
import { AngularFireModule } from '@angular/fire';
import { environment} from '../environments/environment';
import { FormsModule } from '@angular/forms';

//Dropdowns Material Imports
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatSelectModule} from '@angular/material/select';
import{ MatInputModule} from '@angular/material/input';


//Imports para el datepicker
import{ MatDatepickerModule} from '@angular/material/datepicker';
import{MatNativeDateModule} from '@angular/material';


import {RouterModule, Routes,ActivatedRoute} from '@angular/router';
const appRoutes : Routes=[
  {path : 'nuevacedula/:key', component : CedulaComponent}
];

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
    MatNativeDateModule,
    AngularFireModule.initializeApp(environment.firebase),
    FormsModule,
    RouterModule.forRoot(appRoutes)



  ],
  providers: [AngularFirestore],
  bootstrap: [AppComponent]
})
export class AppModule { }
