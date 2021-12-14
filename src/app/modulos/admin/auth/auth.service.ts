import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import * as firebase from 'firebase/app';
import { AngularFireAuth } from '@angular/fire/auth';
import { NewUserService } from 'src/app/shared/base/new-user.service';

export interface AuthUser {
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
  slug?: string;
}

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  user: AuthUser

  autPath: 'auth'

  constructor(
    private afAuth: AngularFireAuth,
    private router: Router,
    private newUserService: NewUserService
  ) { }

  login(email: string, password: string): Promise<void> {
    return new Promise(resolve => {
      this.afAuth.signInWithEmailAndPassword(email, password)
        .then(value => {
          console.log('Nice, it worked!');
          const { displayName, email, phoneNumber, photoURL, providerId, uid } = value.user?.providerData[0] as firebase.UserInfo
          this.setUserInfo({ displayName, email, phoneNumber, photoURL, providerId, uid: value.user?.uid as string })
          resolve()
        })
        .catch(err => {
          console.log('Something went wrong: ', err.message);
        });
    })
  }

  emailSignup(email: string, password: string) {
    this.afAuth.createUserWithEmailAndPassword(email, password)
      .then(value => {
        console.log('Sucess', value);
        const { displayName, email, phoneNumber, photoURL, providerId, uid } = value.user?.providerData[0] as firebase.UserInfo
        this.setUserInfo({ displayName, email, phoneNumber, photoURL, providerId, uid: value.user?.uid as string })
        this.goHome()
      })
      .catch(error => {
        console.log('Something went wrong: ', error);
      });
  }

  googleLogin() {
    //   const provider = new firebase.auth.GoogleAuthProvider();
    //   return this.oAuthLogin(provider)
    //     .then(value => {
    //       console.log('gogle login, ', value)
    //       const { displayName, email, phoneNumber, photoURL, providerId, uid } = value.user?.providerData[0] as firebase.UserInfo
    //       this.setUserInfo({ displayName, email, phoneNumber, photoURL, providerId, uid })
    //       this.goHome()
    //  })
    //   .catch(error => {
    //     console.log('Something went wrong: ', error);
    //   });
  }

  logout() {
    this.afAuth.signOut().then(() => {
      console.log('removing key')
      localStorage.removeItem('user')
      this.router.navigate(['/auth']);
    }).catch(err => {
      console.log('singout err', err)
    });
  }

  getUid() {
    // console.log('this.user', this.user)
    // console.log('encondeURI', )
    // const basicId = this.user.uid + '-' + encodeURI(this.user.displayName as string)
    // return basicId.replace(/(\.)|(\#)|(\[)|(\])/g, '%')
    return this.user.uid
  }

  private setUserInfo(value: AuthUser) {
    this.user = value
    const date = new Date();
    date.setDate(date.getDate() + 1)
    this.user.expiredDate = date
    localStorage.setItem('user', JSON.stringify(this.user))
    this.newUserService.checkIfClientIsRegistred(this.user)
  }

  private oAuthLogin(provider: any) {
    return this.afAuth.signInWithPopup(provider);
  }

  updateUserInfo(displayName: string): Promise<any> {
    return new Promise(resolve => {
      this.afAuth.currentUser.then(_user => {
        _user?.updateProfile({
          displayName: displayName
        }).then(res=>{
          this.user.displayName = displayName
          resolve(res)
        })
      })
    })

  }

  goHome() {
    this.router.navigateByUrl('/admin');
  }
}
