import { Component, OnInit } from '@angular/core';
import { AngularFirestore , AngularFirestoreCollection} from '@angular/fire/firestore';
import { User } from 'src/registry/user';
import { NgbModalConfig, NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-login',
  templateUrl: 'login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public users: User[];
  private db: AngularFirestore;
  userCollectionRef: AngularFirestoreCollection<User>;

  constructor(db: AngularFirestore, config: NgbModalConfig, private modalService: NgbModal) {
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

  logIn(user: string, password: string, content){
    var flag = false;
    for (let i = 0; i < this.users.length; i++) {
      if(this.users[i].user == user && this.users[i].password == password){
        flag = true;
        console.log("ok :)");
      }
    }
    if(flag == false){
      this.modalService.open(content, { centered: true, size:'sm' });
    }
  }
}
