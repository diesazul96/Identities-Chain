import { Component, OnInit} from '@angular/core';
import { AngularFirestore,} from '@angular/fire/firestore';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'nuevacedula',
  templateUrl: './nuevacedula.component.html',
  styleUrls: ['./nuevacedula.component.css']
})
export class CedulaComponent implements OnInit{
  private genre:string;
  private key:string;
  private db: AngularFirestore;
  constructor(db : AngularFirestore,private route: ActivatedRoute) {
    this.db=db;
    route.params.subscribe(params => {this.key = params['key'];});
  }
  ngOnInit():void {
  }

  public alert(){
    alert("Documento registrado correctamente!");
    var list= document.getElementsByClassName("input");
    for (var i = 0; i < list.length; i++) {
      (<HTMLInputElement>list[i]).value = "";
    }
  }
  public createCedula(nombre: string, fecha: Date, gs: string, rh: string, depto: string,ciudad: string){

      return this.alert(),this.db.collection('cedulas').add({
        key: this.key,
        nombre: nombre,
        fecha: fecha,
        gs: gs,
        rh:rh,
        departamento: depto,
        ciudad: ciudad,
        sexo: this.genre
      });

  }



}
