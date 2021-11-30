import { Component, OnInit } from '@angular/core';
import { HeaderListInfo } from 'src/app/shared/atomic-design/molecules/list-header/header-actions.component';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  headerInfo: HeaderListInfo

  constructor() { }

  ngOnInit(): void {
    this.buildInfo()
  }

  buildInfo(){
    this.headerInfo = {
      t1: 'Dashboard',
      t2: 'Atualizações gerais sobre a aplicação',
    }
  }

}
