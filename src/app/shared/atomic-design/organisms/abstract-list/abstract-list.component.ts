import { Component, Inject, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { AbstractFieldsService } from 'src/app/shared/base/abstract-fields.interface';
import { AbstractService } from 'src/app/shared/base/abstract.service';
import { IBtnInterface } from '../../atoms/btn/btn.interface';
import { ClickTableEvent } from '../../molecules/table/table.component';

@Component({
  selector: 'app-abstract-list',
  templateUrl: './abstract-list.component.html',
  styleUrls: ['./abstract-list.component.scss']
})
export class AbstractListComponent<T>{

  
  columns: string[]
  nameColumns: string[]



  constructor(
    public service: AbstractService<T>,
    @Inject('fieldsService') protected fieldsService: AbstractFieldsService
  ) {
    this.service.initDataSource()
    this.buildColumns()
  }

  buildColumns() {
    this.columns = this.fieldsService.buildFields().filter(f=>f.columnShow).map(m=>m.label as string)
    this.nameColumns = this.fieldsService.buildFields().filter(f=>f.columnShow).map(m=>m.name)
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
