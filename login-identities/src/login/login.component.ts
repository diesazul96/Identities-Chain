import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AngularFirestore } from '@angular/fire/firestore';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

 usuario: {id: string, nombre: string, apellido: string};
  usuarios;
  constructor(private fireStore: AngularFirestore){}

 buscarPersona(form: NgForm){
    const data = form.value;
    this.fireStore.collection('Usuarios', ref => ref.where('nombre','==',data.nombre)).snapshotChanges().subscribe(
      (datosObjeto) => {
        if(datosObjeto){
          this.usuario = {
          id: datosObjeto[0].payload.doc.id,
          ...datosObjeto[0].payload.doc.data()
          }
        }
      }
    );
  }

  ngOnInit() {
  }

}