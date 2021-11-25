import { Component, Inject, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { AbstractFieldsService } from 'src/app/shared/base/abstract-fields.interface';
import { AbstractService } from 'src/app/shared/base/abstract.service';
import { BtnInterface } from '../../atoms/btn/btn.interface';
import { ClickTableEvent } from '../../molecules/table/table.component';

@Component({
  selector: 'app-abstract-list',
  templateUrl: './abstract-list.component.html',
  styleUrls: ['./abstract-list.component.scss']
})
export class AbstractListComponent<T>{

  dataSource!: Observable<T[]>;
  columns: string[]
  nameColumns: string[]



  constructor(
    protected service: AbstractService<T>,
    @Inject('fieldsService') protected fieldsService: AbstractFieldsService
  ) {
    this.dataSource = this.service.getAll()
    this.buildColumns()
  }

  buildColumns() {
    this.columns = this.fieldsService.buildFields().map(m=>m.label)
    this.nameColumns = this.fieldsService.buildFields().map(m=>m.name)
  }

  excluir(element: T){
    const { key } = element as any
    this.service.delete(key)
  }

  clickTableEvent(event: ClickTableEvent){
    switch (event.eventName) {
      case 'excluir':
          this.excluir(event.data)
        break;

      default:
        break;
    }
  }


}
