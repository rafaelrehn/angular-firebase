import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Observable } from 'rxjs';
import { IBtnInterface } from '../../atoms/btn/btn.interface';
import { IInputInterface, IInputType } from '../../atoms/input/input.interface';

export interface ClickTableEvent{
  eventName: 'excluir' | 'selectRow',
  data: any;
}

export interface IDisplayedColumns{
  label: string;
  name: string;
  mask: IInputType;
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
    return r[this.displayedColumns[idx].name]
  }

  excluir(row: T){
    this.clickEvent.emit({
      eventName: 'excluir',
      data: row
    })
  }


  selectRow(item: T){
    this.clickEvent.emit({
      eventName: 'selectRow',
      data: item
    })
  }
}
