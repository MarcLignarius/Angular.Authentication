// import { TestBed, inject } from '@angular/core/testing';

// import { AuthService } from './auth.service';

// describe('AuthService', () => {
//   beforeEach(() => {
//     TestBed.configureTestingModule({
//       providers: [AuthService]
//     });
//   });

//   it('should be created', inject([AuthService], (service: AuthService) => {
//     expect(service).toBeTruthy();
//   }));
// });
import { CanActivate, Router } from '@angular/router';
import { AngularFireAuth } from "angularfire2/angularfire2";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs/Rx";
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/take';

@Injectable()
export class AuthGuard implements CanActivate {

    constructor(private auth: AngularFireAuth, private router: Router) {}

    canActivate(): Observable<boolean> {
      return Observable.from(this.auth)
        .take(1)
        .map(state => !!state)
        .do(authenticated => {
      if 
        (!authenticated) this.router.navigate([ '/login' ]);
      })
    }
 
}