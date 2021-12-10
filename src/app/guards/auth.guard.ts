import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFireDatabase } from '@angular/fire/database';
import { DatabaseReference } from '@angular/fire/database/interfaces';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, CanActivateChild, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { AuthService, AuthUser } from '../modulos/admin/auth/auth.service';
import { NewUserService } from '../shared/base/new-user.service';

interface UserRegistred{
  displayName: string
  email: string
  expiredDate: string
  phoneNumber: string
  photoURL: string
  providerId: string
  uid: string
}

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {



  constructor(
    private afAuth: AngularFireAuth,
    private router: Router,
    private authService: AuthService,
    private newUserService :NewUserService

  ) { }

  async canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Promise<boolean | UrlTree> {
      return await this.isAutenthicated()
  }

  async isAutenthicated(){
    const ls: AuthUser = JSON.parse(localStorage.getItem('user') as any)
    const isUserAuthenticated = ls ? true : false
    console.log('isUserAuthenticated>>>>>>>>>', ls)
    if(!isUserAuthenticated){
      // alert('Você precisa estar logado para continuar')
      this.router.navigate(['/auth'])
    }
    this.authService.user = ls
    if(ls){
      this.newUserService.checkIfClientIsRegistred(ls)
    }
    return isUserAuthenticated
  }



}
