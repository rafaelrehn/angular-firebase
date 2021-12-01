import { Component, OnInit } from '@angular/core';
import { BreadCrumbBuilder } from 'src/app/shared/atomic-design/atoms/breadcrumb/breadcrumb-builder';
import { IBreadcrumb } from 'src/app/shared/atomic-design/atoms/breadcrumb/breadcrumb.interface';
import { HeaderListInfo } from 'src/app/shared/atomic-design/molecules/list-header/header-actions.component';
import { AuthService } from '../auth/auth.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {

  headerInfo: HeaderListInfo
  breadcrumb: IBreadcrumb[]

  constructor(
    public authService: AuthService
  ) { }

  ngOnInit(): void {
    this.buildInfo()
    this.buildBreadcrumb()
  }

  buildInfo(){
    this.headerInfo = {
      t1: 'Profile',
      t2: 'Informações gerais do usuário',
    }
  }

  buildBreadcrumb(){
    this.breadcrumb = [
      new BreadCrumbBuilder().build('Home', '/home').get(),
      new BreadCrumbBuilder().build('Profile', '/home/profile').active().get(),
    ]
  }

}
