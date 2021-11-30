import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
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

  @Output() headerActionEvent = new EventEmitter()

  constructor(
    private router: Router, private activatedRoute: ActivatedRoute
  ) { }

  ngOnInit(): void {
  }

  routerBack(){
    const key = this.activatedRoute.snapshot.paramMap.get('key') as string || this.activatedRoute.parent?.snapshot.params['key'];

    if(this.headerInfo.backBtn?.levels == 1  && !key){
      this.router.navigate(['..'], { relativeTo: this.activatedRoute })
    }else if (key){
      this.router.navigate(['../'], { relativeTo: this.activatedRoute })
    }else if(this.headerInfo.backBtn?.levels == 2){
      this.router.navigate(['../../'], { relativeTo: this.activatedRoute })
    }else{
      this.router.navigate(['..'], { relativeTo: this.activatedRoute })
    }
  }

  routerEdit(){
    this.headerActionEvent.emit('edit')
  }

}
