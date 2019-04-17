import { Component, OnInit, Input } from '@angular/core';
import { AngularFirestore , AngularFirestoreCollection} from '@angular/fire/firestore';
import { User } from './user';


@Component({
  selector: 'app-registry',
  templateUrl: 'registry.component.html',
  styleUrls: ['./registry.component.css']
})
export class RegistryComponent implements OnInit {

  public users: User[];
  private db: AngularFirestore;
  userCollectionRef: AngularFirestoreCollection<User>;
  public same = true;


  constructor(db: AngularFirestore) {
    this.db = db;
    this.userCollectionRef = db.collection<User>('users');

    this.userCollectionRef.snapshotChanges().subscribe(data => {
      if(data){
        this.users = data.map( item =>{
          const data = item.payload.doc.data() as User; //trae los datos de firebase
          data.id = item.payload.doc.id; //trae el id del documento creado een firebase
          return data;
        });
      }
    },
    err => console.log('Error ' + err),
    () => console.log('yay'))
  }

  ngOnInit() {}

  addUser(user: string, pass: string, pass2: string){
    let us = new User();
    us.user = user;
    if(pass == pass2){
      us.password = pass;
    }

    return this.db.collection('users').add({
      user: us.user, password: us.password
    });
  }
}
