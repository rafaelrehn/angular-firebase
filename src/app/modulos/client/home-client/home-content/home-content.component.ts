import { Component, Input, OnInit, SimpleChanges } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';
import { ActivatedRoute } from '@angular/router';
import { map } from 'rxjs/operators';
import { AuthUser } from 'src/app/modulos/admin/auth/auth.service';
import { Veiculo } from 'src/app/modulos/admin/veiculos/veiculo';
import { HomeClientService } from '../home-client.service';

@Component({
  selector: 'app-home-content',
  templateUrl: './home-content.component.html',
  styleUrls: ['./home-content.component.scss']
})
export class HomeContentComponent implements OnInit {

  

  constructor(

  ) { }

  async ngOnInit() {

  }

  
}
