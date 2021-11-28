import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { IBreadcrumb } from '../../atoms/breadcrumb/breadcrumb.interface';
import { IBtnInterface } from '../../atoms/btn/btn.interface';

export interface HeaderListInfo{
  t1: string
  t2?: string
  editBtn?:{
    active: boolean
    disabled?: boolean
  }
  backBtn?: {
    active: boolean
    disabled?: boolean
    levels?: 1 | 2
  }
  addBtn?:{
    active: boolean
    disabled?: boolean
  };
}

@Component({
  selector: 'app-list-header',
  templateUrl: './list-header.component.html',
  styleUrls: ['./list-header.component.scss']
})
export class ListHeaderComponent implements OnInit {

  @Input() breadcrumb: IBreadcrumb[] = []

  @Input() headerInfo: HeaderListInfo

  @Input() adicionarBtn: IBtnInterface;
  @Input() voltarBtn: IBtnInterface;

  constructor(
    private router: Router, private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
  }

  routerBack(){
    if(this.headerInfo.backBtn?.levels == 1){
      this.router.navigate(['../'])
    }else if(this.headerInfo.backBtn?.levels == 2){
      this.router.navigate(['../../'], { relativeTo: this.route })
    }
  }

}
