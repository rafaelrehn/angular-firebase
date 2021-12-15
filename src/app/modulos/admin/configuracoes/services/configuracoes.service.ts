import { Injectable } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';
import { DatabaseReference } from '@angular/fire/database/interfaces';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { ClientInterface } from '../client.interface';

@Injectable({
  providedIn: 'root'
})
export class ConfiguracoesService {


  // dataSource!: Entity[];

  private get privateUrl(){
    return `clients`
  }

  constructor(
    private db: AngularFireDatabase,
    // @Inject('entityName') private entityName: string,
    // private authService: AuthService
    ) { }

  insert(entity: ClientInterface): Promise<string> {
    return new Promise((resolve,reject)=>{
        // const _entity = Object.assign(entity, {uid: this.authService.user.uid})
        this.db.list(`${this.privateUrl}`).push(entity)
          .then((result: any) => {
            console.log(result.key)
            resolve(result.key as string)
          })
          .catch((err: any) => {
            reject(err)
          })
    })
  }

  update(entity: ClientInterface, key: string) {
    return new Promise(resolve=>{
      this.db.list(`${this.privateUrl}`).update(key, entity)
      .catch(err => {
        console.error(err)
      }).then(res=>{
        resolve(res)
      })
    })
  }

  getOne(userUid: string): Promise<ClientInterface>{
    return new Promise(resolve=>{
      const query = (ref: DatabaseReference)=> ref.orderByChild('uid').equalTo(userUid)
      const subscriber$ = this.db.list(this.privateUrl, query)
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
        subscriber$.unsubscribe()
        resolve(res[0])
      })
    })
  }

  // getAll(params?: {key: string, value: string}): void {
  //   let query: QueryFn
  //   if(params){
  //     query = (ref: DatabaseReference)=> ref.orderByChild(params.key).equalTo(params.value)
  //   }else{
  //     query = (ref: DatabaseReference)=>ref
  //   }

  //   this.db.list(`${this.privateUrl}`, query)
  //     .snapshotChanges()
  //     .pipe(
  //       map(changes => {
  //         return changes.map( (c: any)=> {
  //           let res = c.payload.val() as any
  //           res.key = c.payload.key as string;
  //           return res as Entity
  //         });
  //       })
  //     ).subscribe(res=>{
  //       this.dataSource = res
  //     })
  // }

  // delete(key: string) {
  //   this.db.object(`${this.privateUrl}/${key}`).remove()
  //     .catch(err => {
  //       console.error(err)
  //     })
  // }

  // getAllInputMaster(urlPath: string): Promise<Entity[]>{
  //   // let query: QueryFn
  //   // if(params){
  //   //   query = (ref: DatabaseReference)=> ref.orderByChild(params.key).equalTo(params.value)
  //   // }else{
  //   //   query = (ref: DatabaseReference)=>ref
  //   // }
  //   return new Promise(resolve=>{
  //     this.db.list(`${this.authService.getUid()}/${urlPath}`)
  //     .snapshotChanges()
  //     .pipe(
  //       map(changes => {
  //         return changes.map( (c: any)=> {
  //           let res = c.payload.val() as any
  //           res.key = c.payload.key as string;
  //           return res as Entity
  //         });
  //       })
  //     ).subscribe((res: Entity[])=>{
  //       // this.dataSource = res
  //       resolve(res)
  //     })
  //   })

  // }
}
