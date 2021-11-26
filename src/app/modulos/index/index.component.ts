import { Component, OnInit } from '@angular/core';
import { IMenuBuilder, IMenuInterface } from 'src/app/shared/base/menu-builder';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.scss']
})
export class IndexComponent implements OnInit {

  menuList: IMenuInterface[]

  constructor() { }

  ngOnInit(): void {
    this.buildMenu()
  }

  buildMenu(){
    this.menuList = [
      new IMenuBuilder().build('Dashboard', '/index/dashboard', 'dashboard').get(),
      new IMenuBuilder().build('Veiculos', '/index/veiculos', 'time_to_leave').get(),
      new IMenuBuilder().build('Configurações', '/index/configuracoes', 'personal_video').get(),
      new IMenuBuilder().build('Admin', '/index/admin', 'people').get(),
      new IMenuBuilder().build('Relatórios', '/index/relatorios', 'wifi').get(),
      new IMenuBuilder().build('Notificações', '/index/notificacoes', 'notification_important').get(),
    ]
  }

}
