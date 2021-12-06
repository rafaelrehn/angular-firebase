import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, CanActivateChild, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from '../modulos/auth/auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(
    private afAuth: AngularFireAuth,
    private router: Router,
    private authService: AuthService
  ) { }

  async canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Promise<boolean | UrlTree> {

    const isUserAuthenticated = await this.authService.authState()
    // // const user = await this.afAuth.user
    // // console.log({user})
    // const isUserAuthenticated = user ? true : false
    console.log({isUserAuthenticated})
    if(!isUserAuthenticated){
      alert('Você precisa estar logado para continuar')
      this.router.navigate(['/auth'])
    }
    return isUserAuthenticated
  }

}
