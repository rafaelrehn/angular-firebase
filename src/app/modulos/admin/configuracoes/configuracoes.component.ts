import { Component, OnInit } from '@angular/core';
import { BreadCrumbBuilder } from 'src/app/shared/atomic-design/atoms/breadcrumb/breadcrumb-builder';
import { IBreadcrumb } from 'src/app/shared/atomic-design/atoms/breadcrumb/breadcrumb.interface';
import { HeaderListInfo } from 'src/app/shared/atomic-design/molecules/list-header/header-actions.component';
import { AuthService } from '../auth/auth.service';

@Component({
  selector: 'app-configuracoes',
  templateUrl: './configuracoes.component.html',
  styleUrls: ['./configuracoes.component.scss']
})
export class ConfiguracoesComponent implements OnInit {

  headerInfo: HeaderListInfo
  breadcrumb: IBreadcrumb[]

  constructor(
  ) { }

  ngOnInit(): void {
    this.buildInfo()
  }

  buildInfo(){
    this.headerInfo = {
      t1: 'Configurações',
      t2: 'Configurações do client',
    }
  }

  buildBreadcrumb(){
    this.breadcrumb = [
      new BreadCrumbBuilder().build('admin', '/admin').get(),
      new BreadCrumbBuilder().build('Configurações', '/admin/configuracoes').active().get(),
    ]
  }

}
