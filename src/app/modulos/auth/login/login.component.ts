import { Component, OnInit } from '@angular/core';
import { IBtnInterface } from 'src/app/shared/atomic-design/atoms/btn/btn.interface';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(private authService: AuthService) { }

  async ngOnInit() {
    await this.authService.checkUserIsAuthenticated()
  }

  loginGoogle() {
    this.authService.googleLogin();
  }

}
