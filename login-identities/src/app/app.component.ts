import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent implements OnInit {

usuario: {id: string, nombre: string, pass: string};
  usuarios;
  constructor(private fireStore: AngularFirestore){}
  agregarPersona(formPersona: NgForm){
    const datos = formPersona.value;
    this.fireStore.collection('Usuarios').add({...datos});
  }

  ngOnInit() {
    this.fireStore.collection('Usuarios').valueChanges().subscribe(
      (res) => {
        this.usuarios=res;
      }
    );
  }

}
