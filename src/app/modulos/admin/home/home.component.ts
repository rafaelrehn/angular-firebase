import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoadingService } from 'src/app/shared/base/loading.service';
import { IMenuBuilder, IMenuInterface } from 'src/app/shared/base/menu-builder';
import { AuthService } from '../auth/auth.service';
import { ConfiguracoesService } from '../configuracoes/services/configuracoes.service';

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
    public authService: AuthService,
    public router: Router,
    private configuracoesService: ConfiguracoesService
  ) {

   }

  ngOnInit() {
    this.buildMenu()
  }

  buildMenu(){
    this.menuList = [
      new IMenuBuilder().build('Dashboard', './dashboard', 'dashboard').get(),
      new IMenuBuilder().build('Veiculos', './veiculos', 'time_to_leave').get(),
      new IMenuBuilder().build('Utilitários', './utilitarios', 'build').get(),
      new IMenuBuilder().build('Profile', './profile', 'assignment_ind').get(),
      new IMenuBuilder().build('Configurações', './configuracoes', 'extension').get(),
    ]
  }

  getProfileImage(){
    let x = 'url(' + this.authService?.user?.photoURL + ')'
    return x
  }

  logout(){
    this.authService.logout()
  }

  async acessarWebsite(){
    const currentClient = await this.configuracoesService.getOne(this.authService.user.uid)
    this.router.navigate(['/client/' + currentClient.slug])
  }

}
