import { Component, Input, OnInit } from '@angular/core';

export interface ISideMenuItens {
  label: string;
  route: string
}

@Component({
  selector: 'app-side-menu',
  templateUrl: './side-menu.component.html',
  styleUrls: ['./side-menu.component.scss']
})
export class SideMenuComponent implements OnInit {

  @Input() sideMenuIntens: ISideMenuItens[]

  constructor() { }

  ngOnInit(): void {
  }

}
