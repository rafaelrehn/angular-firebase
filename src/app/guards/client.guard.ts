import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFireDatabase } from '@angular/fire/database';
import { DatabaseReference } from '@angular/fire/database/interfaces';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { HomeClientService } from '../modulos/client/home-client/home-client.service';


@Injectable({
  providedIn: 'root'
})
export class ClientGuard implements CanActivate {

  constructor(
    private homeClientService: HomeClientService,
    private router: Router
  ) { }

  async canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Promise<boolean | UrlTree> {

      try {
        const isAutenthicated =  await this.isAutenthicated(route.params.slug)
        if(!isAutenthicated){
          this.router.navigateByUrl('/home');
        }
        return isAutenthicated
      } catch (error) {
        console.error(error)
        this.router.navigateByUrl('/home');
        return false
      }
  }

  async isAutenthicated(slug: string){
    try {
      const clientInfo = await this.homeClientService.checkIfClientIsRegistred(slug)
      return clientInfo ? true : false
    } catch (error) {
      console.error(error)
      return false
    }

  }
}
