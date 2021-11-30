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
  selector: 'app-header-actions',
  templateUrl: './header-actions.component.html',
  styleUrls: ['./header-actions.component.scss']
})
export class HeaderActionsComponent implements OnInit {

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
    const key = this.activatedRoute.snapshot.paramMap.get('key') as string;
    const parentKey = this.activatedRoute.parent?.snapshot.params['key']
    const isView = this.router.url.substr(this.router.url.length - 4) == 'view'
    if(isView){
      this.router.navigate(['..'], { relativeTo: this.activatedRoute })
    }else if(key){
      this.router.navigate([`../../${key}/view`], { relativeTo: this.activatedRoute })
    }else if(parentKey){
      this.router.navigate(['../../'], { relativeTo: this.activatedRoute })
    }else{
      this.router.navigate(['..'], { relativeTo: this.activatedRoute })
    }
  }

  routerEdit(){
    this.headerActionEvent.emit('edit')
    // this.router.navigate(['./edit'], { relativeTo: this.activatedRoute })
  }


  navigateToCreate(){
    this.router.navigate(['./create'], { relativeTo: this.activatedRoute })
  }

}
