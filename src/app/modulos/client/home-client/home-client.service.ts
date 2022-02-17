import { Injectable } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';
import { DatabaseReference } from '@angular/fire/database/interfaces';
import { map } from 'rxjs/operators';
import { AuthUser } from '../../admin/auth/auth.service';

@Injectable()
export class HomeClientService {

  private clientSlug: string

  clientInfo: AuthUser;
  dbPath = 'clients'

  constructor(
    private db: AngularFireDatabase,
  ) { }

  setClientSlug(slug: string){
    this.clientSlug = slug
  }

  checkIfClientIsRegistred(): Promise<AuthUser> {
    return new Promise(resolve => {
      if (this.clientInfo) {
        resolve(this.clientInfo)
      } else {
        const query = (ref: DatabaseReference) => ref.orderByChild('slug').equalTo(this.clientSlug)
        this.db.list(this.dbPath, query)
          .snapshotChanges()
          .pipe(
            map(changes => {
              return changes.map((c: any) => {
                let res = c.payload.val() as any
                res.key = c.payload.key as string;
                return res as any
              });
            })
          ).subscribe((res: any[]) => {
            if (res.length > 0) {
              const clientInfo = res[0]
              console.log('encntrou um client???', clientInfo)
              if (clientInfo) {
                this.clientInfo = clientInfo
              }
              resolve(this.clientInfo)
            }
          })
      }
    })
  }
}