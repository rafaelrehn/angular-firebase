import { Injectable } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';
import { DatabaseReference } from '@angular/fire/database/interfaces';
import { Observable, Subscription } from 'rxjs';
import { map } from 'rxjs/operators';
import { AuthUser } from 'src/app/modulos/admin/auth/auth.service';

@Injectable({
  providedIn: 'root'
})
export class NewUserService {

  dbPath = 'clients'

  subscriber$: Subscription

  constructor(
    private db: AngularFireDatabase
  ) { }

  async checkIfClientIsRegistred(userRegistred: AuthUser){
    console.log("checkIfClientIsRegistred", {userRegistred})
    const res = await this.findCurrentClient(userRegistred)
    if(res.length == 0){
      this.insertNewClient(userRegistred)
    }
  }

  findCurrentClient(userRegistred: AuthUser): Promise<any[]>{
    return new Promise(resolve=>{
      const query = (ref: DatabaseReference)=> ref.orderByChild('uid').equalTo(userRegistred.uid)
      this.subscriber$ = this.db.list(this.dbPath, query)
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
        this.subscriber$.unsubscribe()
        resolve(res)
      })
    })
  }

  private insertNewClient(userRegistred: AuthUser){
    const newClient = Object.assign(userRegistred, {slug: userRegistred.uid})
    this.db.list(this.dbPath).push(newClient)
  }

  // private convertToSlug(user: AuthUser): string {
  //     return user.uid.toLowerCase()
  //     .replace(/[^\w ]+/g, '')
  //     .replace(/ +/g, '-');
  // }
}
