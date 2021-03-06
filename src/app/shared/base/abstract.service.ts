import { Inject, Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFireDatabase, QueryFn, SnapshotAction } from '@angular/fire/database';
import { DatabaseQuery, DatabaseReference } from '@angular/fire/database/interfaces';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators'
import { AuthService } from 'src/app/modulos/admin/auth/auth.service';

@Injectable({
  providedIn: 'root'
})
export class AbstractService<Entity> {

  dataSource!: Entity[];

  private get privateUrl(){
    return `${this.authService.getUid()}/${this.entityName}`
  }

  constructor(
    private db: AngularFireDatabase,
    @Inject('entityName') private entityName: string,
    private authService: AuthService
    ) { }

  insert(entity: Entity): Promise<string> {
    return new Promise((resolve,reject)=>{
      if(this.authService.user && this.authService.user.uid){
        const _entity = Object.assign(entity, {uid: this.authService.user.uid})
        this.db.list(`${this.privateUrl}`).push(_entity)
      .then((result: any) => {
        console.log(result.key)
        resolve(result.key as string)
      })
      .catch((err: any) => {
        reject(err)
      })
      }else{
        reject("Usuario nao autenticado")
      }
    })
  }

  update(entity: Entity, key: string) {
    if(this.authService.user && this.authService.user.uid){
      const _entity = Object.assign(entity, {uid: this.authService.user.uid})
      this.db.list(`${this.privateUrl}`).update(key, _entity)
        .catch(err => {
          console.error(err)
        })
    }else{
      throw new Error("Usuario nao autenticado");
    }
  }

  getOne(key: string): Observable<Entity>{
    return this.db.object(`${this.privateUrl}/${key}`).valueChanges() as Observable<Entity>
  }

  getAll(params?: {key: string, value: string}): void {
    let query: QueryFn
    if(params){
      query = (ref: DatabaseReference)=> ref.orderByChild(params.key).equalTo(params.value)
    }else{
      query = (ref: DatabaseReference)=>ref
    }

    this.db.list(`${this.privateUrl}`, query)
      .snapshotChanges()
      .pipe(
        map(changes => {
          return changes.map( (c: any)=> {
            let res = c.payload.val() as any
            res.key = c.payload.key as string;
            return res as Entity
          });
        })
      ).subscribe(res=>{
        this.dataSource = res
      })
  }

  delete(key: string) {
    this.db.object(`${this.privateUrl}/${key}`).remove()
      .catch(err => {
        console.error(err)
      })
  }

  getAllInputMaster(urlPath: string): Promise<Entity[]>{
    // let query: QueryFn
    // if(params){
    //   query = (ref: DatabaseReference)=> ref.orderByChild(params.key).equalTo(params.value)
    // }else{
    //   query = (ref: DatabaseReference)=>ref
    // }
    return new Promise(resolve=>{
      this.db.list(`${this.authService.getUid()}/${urlPath}`)
      .snapshotChanges()
      .pipe(
        map(changes => {
          return changes.map( (c: any)=> {
            let res = c.payload.val() as any
            res.key = c.payload.key as string;
            return res as Entity
          });
        })
      ).subscribe((res: Entity[])=>{
        // this.dataSource = res
        resolve(res)
      })
    })

  }


  // initDataSource(params?: {key: string, value: string}){
  //   this.dataSource = this.getAll(params)
  // }
}
