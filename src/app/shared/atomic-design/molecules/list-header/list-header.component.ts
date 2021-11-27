import { Component, Input, OnInit } from '@angular/core';
import { IBreadcrumb } from '../../atoms/breadcrumb/breadcrumb.interface';
import { IBtnInterface } from '../../atoms/btn/btn.interface';

export interface HeaderListInfo{
  h2: string
  h4?: string
  buttons?: {
    add: boolean
  }
}

@Component({
  selector: 'app-list-header',
  templateUrl: './list-header.component.html',
  styleUrls: ['./list-header.component.scss']
})
export class ListHeaderComponent implements OnInit {

  @Input() breadcrumb: IBreadcrumb[] = []

  @Input() headerInfo: HeaderListInfo

  @Input() adicionarBtn: IBtnInterface;
  @Input() voltarBtn: IBtnInterface;

  constructor() { }

  ngOnInit(): void {
  }

}
