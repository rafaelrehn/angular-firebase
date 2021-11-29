import { Component, Inject, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AbstractFieldsService } from 'src/app/shared/base/abstract-fields.interface';
import { AbstractService } from 'src/app/shared/base/abstract.service';
import { DefaultEntity } from 'src/app/shared/default.entity';
import { ClickTableEvent, IDisplayedColumns } from '../../molecules/table/table.component';

@Component({
  selector: 'app-abstract-list',
  templateUrl: './abstract-list.component.html',
  styleUrls: ['./abstract-list.component.scss']
})
export class AbstractListComponent<Entity extends DefaultEntity>{

  
  columns: IDisplayedColumns[]



  constructor(
    public service: AbstractService<Entity>,
    @Inject('fieldsService') protected fieldsService: AbstractFieldsService,
    protected route: Router
  ) {
    this.service.initDataSource()
    this.buildColumns()
  }

  buildColumns() {
    this.columns = this.fieldsService.buildFields().filter(f=>f.columnShow).map(m=>{
      return { 
        label: m.label as string,
        name: m.name,
        mask: m.inputType,
        select: m.select
      }
    })
  }

  excluir(element: Entity){
    const { key } = element as any
    this.service.delete(key)
  }

  selectRow(data: Entity){
    this.route.navigate([this.route.url +'/view/'+data.key])
  }

  editRow(data: Entity){
    this.route.navigate([this.route.url +'/edit/'+data.key])
  }


  clickTableEvent(event: ClickTableEvent){
    switch (event.eventName) {
      case 'excluir':
          this.excluir(event.data)
        break;

      case 'selectRow':
          this.selectRow(event.data)
        break;

      case 'editRow':
          this.selectRow(event.data)
        break;

      default:
        break;
    }
  }


}
