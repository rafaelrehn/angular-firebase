import { Component, OnInit } from '@angular/core';
import { HeaderListInfo } from 'src/app/shared/atomic-design/molecules/list-header/list-header.component';

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
      t2: 'Atualizações sobre a visualizações de veículos',
    }
  }

}
