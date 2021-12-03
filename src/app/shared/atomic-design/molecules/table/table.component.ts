import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Observable } from 'rxjs';
import { getInputValue } from 'src/app/shared/base/utils';
import { IBtnInterface } from '../../atoms/btn/btn.interface';
import { IInputInterface, IInputType, ISelect, ISelectOptions } from '../../atoms/input/input.interface';

export interface ClickTableEvent{
  eventName: 'excluir' | 'selectRow' | 'editRow',
  data: any;
}

export interface IDisplayedColumns{
  label: string;
  name: string;
  mask: IInputType;
  select?: ISelect;
}

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent<T> implements OnInit {

  @Input() displayedColumns: IDisplayedColumns[] = [];
  @Input() dataSource: Observable<T[]>

  inputsSelectTabel: IInputInterface = {
    inputType: IInputType.CHECKBOX,
    name: 'x',
    class: ''
  }

  @Output() clickEvent = new EventEmitter<ClickTableEvent>()

  btnExcluir: IBtnInterface = {
    label: 'Excluir',
    class: 'btn-danger',
  }

  constructor() { }

  ngOnInit(): void {
  }

  getValue(row: T, idx: number): string {
    let r = row as any
    // const value = r[this.displayedColumns[idx].name]
    const IInputInterface: IInputInterface = {
      class: '',
      inputType: this.displayedColumns[idx].mask,
      name: this.displayedColumns[idx].name,
      select: this.displayedColumns[idx].select
    }
    return getInputValue(IInputInterface, r)
  }

  excluir(row: T){
    this.clickEvent.emit({
      eventName: 'excluir',
      data: row
    })
  }

  editRow(item: T){
    this.clickEvent.emit({
      eventName: 'editRow',
      data: item
    })
  }


  selectRow(item: T){
    this.clickEvent.emit({
      eventName: 'selectRow',
      data: item
    })
  }

  // getColumnClass(col: IDisplayedColumns){
  //   if(col.mask == IInputType.CURRENCY || col.mask == IInputType.CHECKBOX){
  //     return 'w-100'
  //   }else{
  //     return ''
  //   }
  // }
}
