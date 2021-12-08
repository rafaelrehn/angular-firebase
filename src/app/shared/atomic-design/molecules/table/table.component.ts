import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Observable } from 'rxjs';
import { getInputValue } from 'src/app/shared/base/utils';
import { IBtnInterface } from '../../atoms/btn/btn.interface';
import { IInputInterface, IInputType, ISelect, ISelectOptions } from '../../atoms/input/input.interface';

export interface ClickTableEvent {
  eventName: 'excluir' | 'selectRow' | 'editRow',
  data: any;
}

export interface IDisplayedColumns {
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
  @Input() dataSource: T[]

  filterTable: any = {
    // $or:[]
  }
  filterWord: string;

  inputsSelectTabel: IInputInterface = {
    inputType: IInputType.CHECKBOX,
    name: 'x',
    class: '',
  }

  @Output() clickEvent = new EventEmitter<ClickTableEvent>()
  @Output() searchEvent = new EventEmitter<string>()


  btnExcluir: IBtnInterface = {
    label: 'Excluir',
    class: 'btn-danger',
  }

  constructor() { }

  ngOnInit(): void {
    // this.buildFilter()
    setTimeout(() => {
      console.log(this.dataSource)
    }, 1000)
  }



  search(evt: string) {
    const $or: any = []
    this.displayedColumns.forEach(el => {
      if (el.mask == IInputType.INPUT ||
         el.mask == IInputType.CURRENCY ||
          el.mask == IInputType.INTEGER ||
           el.mask == IInputType.RADIO ||
            el.mask == IInputType.SELECT)
        $or.push({ [el.name]: evt })
      //
    })
    this.filterTable = {
      $or: $or
    }

    // this.filterTable = {
    //   $or:[
    //     {nome: evt},
    //     {marca: evt}
    //   ]
    // }
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

  excluir(row: T) {
    this.clickEvent.emit({
      eventName: 'excluir',
      data: row
    })
  }

  editRow(item: T) {
    this.clickEvent.emit({
      eventName: 'editRow',
      data: item
    })
  }


  selectRow(item: T) {
    this.clickEvent.emit({
      eventName: 'selectRow',
      data: item
    })
  }
}
