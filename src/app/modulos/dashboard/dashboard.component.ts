import { Component, OnInit } from '@angular/core';
import { IMenuBuilder, IMenuInterface } from 'src/app/shared/base/menu-builder';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  menuList: IMenuInterface[]

  constructor() { }

  ngOnInit(): void {
    this.buildMenu()
  }

  buildMenu(){
    this.menuList = [
      new IMenuBuilder().build('Dashboard', '/dashboard', 'home').get(),
      new IMenuBuilder().build('Veiculos', '/dashboard/veiculos', 'home').get(),
      new IMenuBuilder().build('Configurações', '/dashboard/configuracoes', 'home').get(),
      new IMenuBuilder().build('Admin', '/dashboard/admin', 'home').get(),
      new IMenuBuilder().build('Relatórios', '/dashboard/relatorios', 'home').get(),
    ]
  }

}
