import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { Router } from '@angular/router';
import { AuthGuard } from 'src/app/guards/auth.guard';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss']
})
export class AuthComponent implements OnInit {

  constructor(
    private authGuard: AuthGuard,
    private router: Router
  ) { }

  ngOnInit(): void {
    if(this.authGuard.isAutenthicated()){
      this.router.navigate(['/admin'])
    }
  }

}
