import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import * as firebase from 'firebase/app';
import { AngularFireAuth } from '@angular/fire/auth';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  // providerUserInfo: ProviderUserInfo
  user: firebase.UserInfo | null

  constructor(
    private afAuth: AngularFireAuth,
    private router: Router
    ) {}

  login(email: string, password: string) {
    this.afAuth.signInWithEmailAndPassword(email, password)
    .then(value => {
      console.log('Nice, it worked!');
      this.setUserInfo(value)
      this.goHome()
    })
    .catch(err => {
      console.log('Something went wrong: ', err.message);
    });
  }

  emailSignup(email: string, password: string) {
    this.afAuth.createUserWithEmailAndPassword(email, password)
    .then(value => {
     console.log('Sucess', value);
     this.setUserInfo(value)
     this.goHome()
    })
    .catch(error => {
      console.log('Something went wrong: ', error);
    });
  }

  googleLogin() {
    const provider = new firebase.auth.GoogleAuthProvider();
    return this.oAuthLogin(provider)
      .then(value => {
        this.setUserInfo(value)
        this.goHome()
   })
    .catch(error => {
      console.log('Something went wrong: ', error);
    });
  }

  logout() {
    this.afAuth.signOut().then(() => {
      this.router.navigate(['/']);
    });
  }

  private setUserInfo(value: any){
    this.user = value.additionalUserInfo.profile
  }

  private oAuthLogin(provider: any) {
    return this.afAuth.signInWithPopup(provider);
  }

  async checkUserIsAuthenticated(){
    console.log('checkUserIsAuthenticated()' ,this.user)
    if(!this.user){
      return await this.authState()
    }else{
      return true
    }
  }

  authState(): Promise<boolean> {
    return new Promise(resolve=>{
      this.afAuth.authState.subscribe(authState=>{
        console.log({authState})
        if(authState){
          this.user = authState.providerData[0]
          resolve(true)
        }else{
          resolve(false)
          this.logout()
        }
      })
    })
  }

  getUid(){
    if(this.user && this.user.uid){
      return this.user.uid
    }else{
      throw new Error("Usuario não autenticado");
    }
  }

  checkToken(){

  }

  private goHome(){
    this.router.navigateByUrl('/home');
  }
}
