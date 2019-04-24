import { documento } from './visualizador-documento.component';
import { Component, OnInit } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';

export interface documento {
  key: string,
  nombre: string,
  fecha: Date,
  gs: string,
  rh: string,
  departamento: string,
  ciudad: string,
  sexo: string
}

@Component({
    selector: 'visualizador-documento',
    templateUrl: 'visualizador-documento.html',
    styleUrls: ['visualizador-documento.css']
})
export class VisualizadorDocumento{

  private db: AngularFirestore;
  private key:string = "K2I8a8HcoIpLbLX2GF8a";
  userCollectionRef: AngularFirestoreCollection<documento>;
  doc: any = {};
  documentos: documento[];

  constructor(db: AngularFirestore) {
    console.log("const");
    this.db = db;
    this.userCollectionRef = db.collection<documento>('cedulas');

    this.userCollectionRef.snapshotChanges().subscribe(data => {
      if (data) {
        this.documentos = data.map(item => {
          const data = item.payload.doc.data() as documento;
          data.key = item.payload.doc.id;
          console.log(data.key);
          this.getDoc(data);
          return data;
        });
      }
    },
      err => console.log('Error ' + err),
      () => console.log("Yeyy")
    );

    console.log(this.documentos);
  }
  
  getDoc(data){
    if (data.key == this.key) {
      this.doc = data;
    }
    console.log(this.doc);
  }
}
