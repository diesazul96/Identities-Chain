import { Component, OnInit, Input } from '@angular/core';
import { AngularFirestore , AngularFirestoreCollection} from '@angular/fire/firestore';
import { User } from './user';
import { NgbModalConfig, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Router } from '@angular/router';


@Component({
  selector: 'app-registry',
  templateUrl: 'registry.component.html',
  providers: [NgbModalConfig, NgbModal],
  styleUrls: ['./registry.component.css']
})
export class RegistryComponent implements OnInit {

  public users: User[];
  private db: AngularFirestore;
  userCollectionRef: AngularFirestoreCollection<User>;
  public same = true;

  @Input() userName: string;
  @Input() password: string;
  @Input() password2: string;

  constructor(db: AngularFirestore, config: NgbModalConfig, private modalService: NgbModal, private router: Router) {
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

  onChanges(){
    if(this.password != this.password2){
      this.same = false;
    }else{
      this.same = true;
    }
  }

  addUser(user: string, pass: string, pass2: string, content){
    let us = new User();
    us.user = user;
    if(pass == pass2){
      us.password = pass;

      this.userName= '';
      this.password = '';
      this.password2 = '';

      this.modalService.open(content, { centered: true, size:'sm' });

      this.router.navigateByUrl(`${'/menu'}`);

      return this.db.collection('users').add({
        user: us.user, password: us.password
      });
    }


  }
}
