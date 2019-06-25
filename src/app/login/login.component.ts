import { Component, OnInit, HostBinding } from '@angular/core';
import {AngularFireModule} from 'angularfire2';
import {AngularFireAuthModule} from 'angularfire2/auth';
import {AngularFireDatabaseModule} from 'angularfire2/database';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  error: any;
  constructor(public af: AngularFireAuthModule, private router: Router) {

    this.af.auth.subscribe(auth => { 
    if(auth) {
      this.router.navigateByUrl('/members');
    }
  });
}

loginGoogle() {
  this.af.auth.login({
    provider: AuthProviders.Google,
    method: AuthMethods.Popup,
  }).then(
      (success) => {
      this.router.navigate(['/members']);
    }).catch(
      (err) => {
      this.error = err;
    })
}

  ngOnInit() {
  }

}
