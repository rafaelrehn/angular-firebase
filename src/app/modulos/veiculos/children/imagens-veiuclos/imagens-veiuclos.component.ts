import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-imagens-veiuclos',
  templateUrl: './imagens-veiuclos.component.html',
  styleUrls: ['./imagens-veiuclos.component.scss']
})
export class ImagensVeiuclosComponent implements OnInit {

  entityKey: string;

  constructor(protected activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.entityKey = this.activatedRoute.parent?.snapshot.paramMap.get('key') as string;
  }

}
