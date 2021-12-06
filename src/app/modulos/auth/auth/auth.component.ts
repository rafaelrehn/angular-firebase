import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { Router } from '@angular/router';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss']
})
export class AuthComponent implements OnInit {

  constructor(
    private afAuth: AngularFireAuth,
    private router: Router
  ) { }

  async ngOnInit(): Promise<void> {
    // const user = await this.afAuth.currentUser
    // console.log('user no aut component', user)
    // if(user){
    //   this.router.navigate(['/home'])
    // }
  }

}
