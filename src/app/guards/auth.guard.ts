import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFireDatabase } from '@angular/fire/database';
import { DatabaseReference } from '@angular/fire/database/interfaces';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, CanActivateChild, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { AuthService, AuthUser } from '../modulos/admin/auth/auth.service';

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

  dbPath = 'clients'

  constructor(
    private afAuth: AngularFireAuth,
    private router: Router,
    private authService: AuthService,
    private db: AngularFireDatabase
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
      this.checkIfClientIsRegistred(ls)
    }
    return isUserAuthenticated
  }

  private checkIfClientIsRegistred(userRegistred: AuthUser){
    console.log({userRegistred})

    const query = (ref: DatabaseReference)=> ref.orderByChild('uid').equalTo(userRegistred.uid)
    this.db.list(this.dbPath, query)
    .snapshotChanges()
    .pipe(
      map(changes => {
        return changes.map( (c: any)=> {
          let res = c.payload.val() as any
          res.key = c.payload.key as string;
          return res as any
        });
      })
    ).subscribe((res: any[])=>{
      if(res.length == 0){
        this.insertNewClient(userRegistred)
      }
    })
  }

  private insertNewClient(userRegistred: AuthUser){
    const newClient = Object.assign(userRegistred, {slug: this.convertToSlug(userRegistred.displayName as string)})
    this.db.list(this.dbPath).push(newClient)
  }

  convertToSlug(text: string): string {
    return text.toLowerCase()
               .replace(/[^\w ]+/g, '')
               .replace(/ +/g, '-');
  }

}
