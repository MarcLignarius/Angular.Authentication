import { Component, OnInit, HostBinding, Output, EventEmitter } from '@angular/core';
import {AngularFireModule} from 'angularfire2';
import {AngularFireAuth} from 'angularfire2/auth';
import {AngularFireDatabaseModule} from 'angularfire2/database';
import { Router } from '@angular/router';
import { moveIn, fallIn } from '../router.animations';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { Form } from '@angular/forms';
import { Player } from '../../../models/Player'

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css'],
  animations: [moveIn(), fallIn()],
  host: {'[@moveIn]': ''}
})


export class SignupComponent implements OnInit {
  state: string = '';
  error: any;
  email: string = '';

  @Output() createPlayer = new EventEmitter();

  constructor(public af: AngularFireAuth,private router: Router) {

  }

  onSubmit(formData) {
    if(formData.valid) {
      console.log(formData.value);
      this.af.auth.createUserWithEmailAndPassword(formData.value.email, formData.value.password).then(
        (success) => {
        console.log(success);
        this.router.navigate(['/login'])
        var email = formData.value.email;
        var name = email.substring(0, email.lastIndexOf("@"));
        let newPlayer: Player = new Player(name, email);
        this.createPlayer.emit(newPlayer);
        console.log(newPlayer);
        console.log(name);
      }).catch(
        (err) => {
        console.log(err);
        this.error = err;
      })
      console.log(this.email);
    }
  }

  ngOnInit() {
  }

}
