import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { AngularFireModule } from '@angular/fire';
import { AngularFirestore } from '@angular/fire/firestore';

import { AppComponent } from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { LoginComponent } from '../login/login.component';
import { MenuComponent } from '../menu/menu.component';
import { RegistryComponent } from '../registry/registry.component';
import { environment } from '../environments/environment';

@NgModule({
  declarations: [
    AppComponent, LoginComponent, MenuComponent, RegistryComponent
  ],
  imports: [
    NgbModule,
    BrowserModule,
    AppRoutingModule, BrowserAnimationsModule,
    AngularFireModule.initializeApp(environment.firebase)
  ],
  providers: [AngularFirestore],
  bootstrap: [AppComponent]
})
export class AppModule { }
