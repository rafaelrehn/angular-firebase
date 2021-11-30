import { Inject, Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFireDatabase, QueryFn, SnapshotAction } from '@angular/fire/database';
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
        this.db.list(this.entityName).push(_entity)
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
      this.db.list(this.entityName).update(key, _entity)
        .catch(err => {
          console.error(err)
        })
    }else{
      throw new Error("Usuario nao autenticado");        
    }
  }

  getOne(key: string): Observable<Entity>{
    return this.db.object(`${this.entityName}/${key}`).valueChanges() as Observable<Entity>
  }

  getAll(): Observable<Entity[]> {
    const uid = this.authService.user?.uid as any
    console.log({uid})
    const query = (ref: any)=>ref.orderByChild('uid').equalTo(uid)
    return this.db.list(this.entityName, query)
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
    this.db.object(`${this.entityName}/${key}`).remove()
      .catch(err => {
        console.error(err)
      })
  }

  initDataSource(){
    this.dataSource = this.getAll()
  }
}
