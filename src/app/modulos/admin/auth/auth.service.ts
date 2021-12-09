import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import * as firebase from 'firebase/app';
import { AngularFireAuth } from '@angular/fire/auth';

export interface AuthUser{
  expiredDate?: Date
  displayName: string | null;
  email: string | null;
  phoneNumber: string | null;
  photoURL: string | null;
  providerId: string;
  /**
   * The user's unique ID.
   */
  uid: string;
}

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  user: AuthUser

  constructor(
    private afAuth: AngularFireAuth,
    private router: Router
    ) {}

  login(email: string, password: string) {
    // this.afAuth.signInWithEmailAndPassword(email, password)
    // .then(value => {
    //   console.log('Nice, it worked!');
    //   this.setUserInfo(value)
    //   this.goHome()
    // })
    // .catch(err => {
    //   console.log('Something went wrong: ', err.message);
    // });
  }

  emailSignup(email: string, password: string) {
    // this.afAuth.createUserWithEmailAndPassword(email, password)
    // .then(value => {
    //  console.log('Sucess', value);
    //  this.setUserInfo(value)
    //  this.goHome()
    // })
    // .catch(error => {
    //   console.log('Something went wrong: ', error);
    // });
  }

  googleLogin() {
    const provider = new firebase.auth.GoogleAuthProvider();
    return this.oAuthLogin(provider)
      .then(value => {
        console.log('gogle login, ', value)
        const { displayName, email, phoneNumber, photoURL, providerId, uid } = value.user?.providerData[0] as firebase.UserInfo
        this.setUserInfo({ displayName, email, phoneNumber, photoURL, providerId, uid })
        this.goHome()
   })
    .catch(error => {
      console.log('Something went wrong: ', error);
    });
  }

  logout() {
    this.afAuth.signOut().then(() => {
      console.log('removing key')
      localStorage.removeItem('user')
      this.router.navigate(['/']);
    }).catch(err=>{
      console.log('singout err', err)
    });
  }

  getUid(){
    console.log('this.user', this.user)
    console.log('encondeURI', )
    const basicId = this.user.uid + '-' + encodeURI(this.user.displayName as string)
    return basicId.replace(/(\.)|(\#)|(\[)|(\])/g, '%')
  }

  private setUserInfo(value: AuthUser){
    this.user = value
    const date = new Date();
    date.setDate(date.getDate()+1)
    this.user.expiredDate = date
    localStorage.setItem('user', JSON.stringify(this.user))
  }

  private oAuthLogin(provider: any) {
    return this.afAuth.signInWithPopup(provider);
  }

  private goHome(){
    this.router.navigateByUrl('/home');
  }
}
