import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFireDatabase } from '@angular/fire/database';
import { DatabaseReference } from '@angular/fire/database/interfaces';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';
import { HomeClientService } from '../modulos/client/home-client/home-client.service';


@Injectable({
  providedIn: 'root'
})
export class ClientGuard implements CanActivate {

  constructor(
    private homeClientService: HomeClientService
  ) { }

  async canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Promise<boolean | UrlTree> {
      console.log(route)
      console.log(state)
      return await this.isAutenthicated(route.params.slug)
  }

  async isAutenthicated(slug: string){
    const clientInfo = await this.homeClientService.checkIfClientIsRegistred(slug)
    return clientInfo ? true : false
  }
}
