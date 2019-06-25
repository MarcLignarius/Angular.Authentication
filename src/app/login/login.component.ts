import { Component, OnInit, HostBinding } from '@angular/core';
import {AngularFireModule} from 'angularfire2';
import {AngularFireAuth} from 'angularfire2/auth';
import {AngularFireDatabaseModule} from 'angularfire2/database';
import * as firebase from 'firebase/app';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  error: any;
  constructor(public af: AngularFireAuth, private router: Router) {

    this.af.authState.subscribe(auth => { 
    if(auth) {
      this.router.navigateByUrl('/members');
    }
  });
}

loginGoogle() {
  this.af.auth.signInWithPopup(new firebase.auth.GoogleAuthProvider()).then(
    (success) => {
    this.router.navigate(['/members']);
  }).catch(
    (err) => {
    this.error = err;
  });
}

logout() {
  this.af.auth.signOut();
}

ngOnInit() {
}

}
