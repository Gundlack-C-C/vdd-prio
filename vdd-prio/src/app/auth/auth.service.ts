import { Injectable, NgZone } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFirestore, AngularFirestoreDocument } from '@angular/fire/firestore';

// Firebase App (the core Firebase SDK) is always required and
// must be listed before other Firebase SDKs
import firebase from "firebase/app";
import User from "firebase/app";

// Add the Firebase services that you want to use
import "firebase/auth";
import "firebase/firestore";

import { Router } from "@angular/router";
import { Subject } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class AuthService {
    userState!: firebase.User | null;
    authChanged = new Subject<User.UserInfo | null>()
    constructor(
      public afs: AngularFirestore,
      public afAuth: AngularFireAuth,
      public router: Router,
      public ngZone: NgZone
    ) {
      this.afAuth.authState.subscribe((user: firebase.User | null) => {
        if (user) {
          this.userState = user;
          localStorage.setItem('user', JSON.stringify(this.userState));
          console.log("User authenticated")
          console.log(this.router.url)
          if(this.router.url == '/flowcollect') {
            this.router.navigate(['flowcollect-app-unternehmer'])
          }
        } else {
          localStorage.removeItem('user');
          console.log("User loggedout/not authenticated ...")
        }

        this.authChanged.next(user);
      });
    }
    get Name(): string {
      if(this.userState && this.userState.email) {
        return this.userState.email;
      } else {
        return "UNKOWN";
      }
    }

    SignIn(email: string, password: string) {
      return this.afAuth.signInWithEmailAndPassword(email, password)
        .then((result) => {
          this.ngZone.run(() => {
            this.SetUserData(result.user);
          });
        }).catch((error) => {
          window.alert(error.message)
        })
    }

    SignUp(email: string, password: string) {
      return this.afAuth.createUserWithEmailAndPassword(email, password)
        .then((result) => {
          this.SendVerificationMail();
          this.SetUserData(result.user);
          this.router.navigate(['flowcollect', 'sign-in'])
        }).catch((error) => {
          window.alert(error.message)
        })
    }

    SendVerificationMail() {
        return this.afAuth.currentUser.then((user) => {
          if(user != null)
            user.sendEmailVerification()
        }).then(() => {
          this.router.navigate(['auth', 'email-verification']);
        })
    }

    ForgotPassword(passwordResetEmail: string) {
      return this.afAuth.sendPasswordResetEmail(passwordResetEmail)
      .then(() => {
        window.alert('Password reset email sent, check your inbox.');
        this.router.navigate(['flowcollect', 'sign-in'])
      }).catch((error) => {
        window.alert(error)
      })
    }

    get isLoggedIn(): boolean {

      const user = localStorage.getItem('user');
      if(!user)
        return false

      const user_obj = JSON.parse(user);
      const isLoggedIn = (user_obj !== null && user_obj['emailVerified'] !== false) ? true : false;
      if(!this.userState && isLoggedIn)
        this.userState = user_obj;
      return isLoggedIn;
    }

    AuthLogin(provider: firebase.auth.AuthProvider) {
      return this.afAuth.signInWithPopup(provider)
      .then((result) => {
         this.ngZone.run(() => {
            this.SetUserData(result.user);
          })
      }).catch((error) => {
        window.alert(error)
      })
    }

    SetUserData(user: any) {
      const userRef: AngularFirestoreDocument<any> = this.afs.doc(`users/${user.uid}`);
      const userState = {
        uid: user.uid,
        email: user.email,
        displayName: user.displayName,
        photoURL: user.photoURL,
        emailVerified: user.emailVerified
      }
      return userRef.set(userState, {
        merge: true
      })
    }

    SignOut() {
      return this.afAuth.signOut().then(() => {
        localStorage.removeItem('user');
        this.router.navigate(['']);
      })
    }
}
