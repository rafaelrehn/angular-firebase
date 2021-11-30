import { Component, OnInit } from '@angular/core';
import { IBtnInterface } from 'src/app/shared/atomic-design/atoms/btn/btn.interface';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  btnGoogle: IBtnInterface = {
    label: 'Login or Signup With Google',
    class: 'btn-accent'
  }
  btnEmail: IBtnInterface = {
    label: 'Email'
  }

  constructor(private authService: AuthService) { }

  async ngOnInit() {
    await this.authService.checkUserIsAuthenticated()
  }

  loginGoogle() {
    this.authService.googleLogin();
  }

}
