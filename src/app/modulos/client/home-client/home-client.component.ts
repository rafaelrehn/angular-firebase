import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';
import { DatabaseReference } from '@angular/fire/database/interfaces';
import { ActivatedRoute, Router } from '@angular/router';
import { map } from 'rxjs/operators';
import { AuthUser } from '../../admin/auth/auth.service';
import { Veiculo } from '../../admin/veiculos/veiculo';
import { HomeClientService } from './home-client.service';

@Component({
  selector: 'app-home-client',
  templateUrl: './home-client.component.html',
  styleUrls: ['./home-client.component.scss']
})
export class HomeClientComponent implements OnInit {






  constructor(
    private activatedRoute: ActivatedRoute,
    private homeClientService: HomeClientService,
    public router: Router
  ) { }

  ngOnInit(): void {
    const clientSlug = this.activatedRoute.snapshot.paramMap.get('slug') as string
    this.homeClientService.setClientSlug(clientSlug)
  }

  goAdmin(){
    this.router.navigate(['/admin'])
  }

}
