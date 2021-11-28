import { Inject, Injectable } from '@angular/core';
import { AngularFireDatabase, SnapshotAction } from '@angular/fire/database';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators'

@Injectable({
  providedIn: 'root'
})
export class AbstractService<Entity> {

  dataSource!: Observable<Entity[]>;

  constructor(
    private db: AngularFireDatabase,
    @Inject('entityName') private entityName: string
    ) { }

  insert(veiculo: Entity) {
    this.db.list(this.entityName).push(veiculo)
      .then(result => {
        console.log(result)
      })
      .catch(err => {
        console.error(err)
      })
  }

  update(veiculo: Entity, key: string) {
    this.db.list(this.entityName).update(key, veiculo)
      .catch(err => {
        console.error(err)
      })
  }

  getOne(key: string): Observable<Entity>{
    return this.db.object(`${this.entityName}/${key}`).valueChanges() as Observable<Entity>
  }

  getAll(): Observable<Entity[]> {
    return this.db.list(this.entityName)
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
