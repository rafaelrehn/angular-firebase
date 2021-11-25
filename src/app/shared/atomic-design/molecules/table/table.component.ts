import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Observable } from 'rxjs';
import { BtnInterface } from '../../atoms/btn/btn.interface';

export interface ClickTableEvent{
  eventName: 'excluir',
  data: any;
}

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent<T> implements OnInit {

  @Input() displayedColumns: string[] = [];
  @Input() nameColumns: string[] = [];
  @Input() dataSource: Observable<T[]>

  @Output() clickEvent = new EventEmitter<ClickTableEvent>()

  btnExcluir: BtnInterface = {
    label: 'Excluir',
    class: 'btn-danger',
    color: 'warn'
  }

  constructor() { }

  ngOnInit(): void {
  }

  getValue(row: T, idx: number): string {
    let r = row as any
    return r[this.nameColumns[idx]]
  }

  excluir(row: T){
    this.clickEvent.emit({
      eventName: 'excluir',
      data: row
    })
  }

}
