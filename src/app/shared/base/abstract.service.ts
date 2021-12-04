import { Inject, Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFireDatabase, QueryFn, SnapshotAction } from '@angular/fire/database';
import { DatabaseQuery, DatabaseReference } from '@angular/fire/database/interfaces';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators'
import { AuthService } from 'src/app/modulos/auth/auth.service';

@Injectable({
  providedIn: 'root'
})
export class AbstractService<Entity> {

  dataSource!: Observable<Entity[]>;

  constructor(
    private db: AngularFireDatabase,
    @Inject('entityName') private entityName: string,
    private authService: AuthService
    ) { }

  insert(entity: Entity): Promise<string> {
    return new Promise((resolve,reject)=>{
      if(this.authService.user && this.authService.user.uid){
        const _entity = Object.assign(entity, {uid: this.authService.user.uid})
        this.db.list(`${this.entityName}/${this.authService.getUid()}`).push(_entity)
      .then(result => {
        console.log(result.key)
        resolve(result.key as string)
      })
      .catch(err => {
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
      this.db.list(`${this.entityName}/${this.authService.getUid()}`).update(key, _entity)
        .catch(err => {
          console.error(err)
        })
    }else{
      throw new Error("Usuario nao autenticado");
    }
  }

  getOne(key: string): Observable<Entity>{
    return this.db.object(`${this.entityName}/${this.authService.getUid()}/${key}`).valueChanges() as Observable<Entity>
  }

  getAll(params?: {key: string, value: string}): void {
    let query: QueryFn
    if(params){
      query = (ref: DatabaseReference)=> ref.orderByChild(params.key).equalTo(params.value)
    }else{
      query = (ref: DatabaseReference)=>ref
    }

    this.dataSource = this.db.list(`${this.entityName}/${this.authService.getUid()}`, query)
      .snapshotChanges()
      .pipe(
        map(changes => {
          return changes.map( c=> {
            let res = c.payload.val() as any
            res.key = c.payload.key as string;
            return res as Entity
          });
        })
      )
  }

  delete(key: string) {
    this.db.object(`${this.entityName}/${this.authService.getUid()}/${key}`).remove()
      .catch(err => {
        console.error(err)
      })
  }

  // initDataSource(params?: {key: string, value: string}){
  //   this.dataSource = this.getAll(params)
  // }
}
