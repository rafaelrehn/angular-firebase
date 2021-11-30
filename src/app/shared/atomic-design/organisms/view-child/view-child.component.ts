import { Component, Input, OnInit } from '@angular/core';
import { ISideMenuItens } from '../../atoms/side-menu/side-menu.component';
import { IViewForm } from '../../molecules/view-form/view-form.interface';

@Component({
  selector: 'app-view-child',
  templateUrl: './view-child.component.html',
  styleUrls: ['./view-child.component.scss']
})
export class ViewChildComponent implements OnInit {

  @Input() arrayViewForm: IViewForm[]

  @Input() sideMenuIntens: ISideMenuItens[]

  constructor() { }

  ngOnInit(): void {
  }

}
