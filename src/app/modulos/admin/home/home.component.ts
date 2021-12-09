import { Component, OnInit } from '@angular/core';
import { LoadingService } from 'src/app/shared/base/loading.service';
import { IMenuBuilder, IMenuInterface } from 'src/app/shared/base/menu-builder';
import { AuthService } from '../auth/auth.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  menuList: IMenuInterface[]

  authChecked: boolean = true

  constructor(
    public loadingService: LoadingService,
    public authService: AuthService
  ) {

   }

  ngOnInit() {
    this.buildMenu()
    // this.authService.checkUserIsAuthenticated().then(res=>{
    //   this.authChecked = res
    // })
  }

  buildMenu(){
    this.menuList = [
      new IMenuBuilder().build('Dashboard', './dashboard', 'dashboard').get(),
      new IMenuBuilder().build('Veiculos', './veiculos', 'time_to_leave').get(),
      new IMenuBuilder().build('Utilitários', './utilitarios', 'build').get(),
      new IMenuBuilder().build('Profile', './profile', 'assignment_ind').get(),
      // new IMenuBuilder().build('Sair', '/login', 'login').clazz('mt-auto mb-40-p').get(),
    ]
  }

  getProfileImage(){
    let x = 'url(' + this.authService?.user?.photoURL + ')'
    // console.log('profile image', x)s
    return x
  }

  logout(){
    this.authService.logout()
  }

}
