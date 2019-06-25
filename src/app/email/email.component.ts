import { Component, OnInit, HostBinding } from '@angular/core';
import {AngularFireModule} from 'angularfire2';
import {AngularFireAuth} from 'angularfire2/auth';
import {AngularFireDatabaseModule} from 'angularfire2/database';
import firebase from 'firebase/app';
import { Router } from '@angular/router';

@Component({
  selector: 'app-email',
  templateUrl: './email.component.html',
  styleUrls: ['./email.component.css']
})
export class EmailComponent implements OnInit {

  state: string = '';
  error: any;

  constructor(public af: AngularFireAuth,private router: Router) {
  this.af.authState.subscribe(auth => { 
    if(auth) {
      this.router.navigateByUrl('/members');
    }
  });
}


onSubmit(formData) {
  if(formData.valid) {
    console.log(formData.value);
    this.af.auth.signInWithEmailAndPassword(formData.value.email, formData.value.password).then(
      (success) => {
      console.log(success);
      this.router.navigate(['/members']);
    }).catch(
      (err) => {
      console.log(err);
      this.error = err;
    })
  }
}

  ngOnInit() {
  }

}
