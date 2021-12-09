import { Component, OnInit } from '@angular/core';
import { BreadCrumbBuilder } from 'src/app/shared/atomic-design/atoms/breadcrumb/breadcrumb-builder';
import { IBreadcrumb } from 'src/app/shared/atomic-design/atoms/breadcrumb/breadcrumb.interface';
import { HeaderListInfo } from 'src/app/shared/atomic-design/molecules/list-header/header-actions.component';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  headerInfo: HeaderListInfo
  breadcrumb: IBreadcrumb[]

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

  buildBreadcrumb(){
    this.breadcrumb = [
      new BreadCrumbBuilder().build('admin', '/home').get(),
      new BreadCrumbBuilder().build('Dashboard', '/home/dashboard').active().get(),
    ]
  }

}
