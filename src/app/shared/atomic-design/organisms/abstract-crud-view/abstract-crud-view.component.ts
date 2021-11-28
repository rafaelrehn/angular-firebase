import { Component, Inject, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AbstractFieldsService } from 'src/app/shared/base/abstract-fields.interface';
import { AbstractService } from 'src/app/shared/base/abstract.service';
import { DefaultEntity } from 'src/app/shared/default.entity';
import { IInputInterface } from '../../atoms/input/input.interface';
import { IViewForm } from '../../molecules/view-form/view-form.interface';

@Component({
  selector: 'app-abstract-crud-view',
  templateUrl: './abstract-crud-view.component.html',
  styleUrls: ['./abstract-crud-view.component.scss']
})
export class AbstractCrudViewComponent implements OnInit {

  model: DefaultEntity

  arrayViewForm: IViewForm[] = []
  inputs: IInputInterface[]

  constructor(
    protected service: AbstractService<DefaultEntity>,
    @Inject('fieldsService') protected fieldsService: AbstractFieldsService,
    protected route: Router,
    protected activatedRoute: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.inputs = this.fieldsService.buildFields()
    this.getModel()
  }

  getModel(){
    let key = this.activatedRoute.snapshot.paramMap.get('key') as string;
    this.service.getOne(key).subscribe(res=>{
      this.model = res
      this.inputs.forEach(input=>{
        this.arrayViewForm.push({
          label: input.label as string,
          value: input.name,
          mask: input.inputType
        })
      })      
    })
  }

}
