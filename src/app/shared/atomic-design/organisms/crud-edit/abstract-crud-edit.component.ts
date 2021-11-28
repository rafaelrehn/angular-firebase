import { Component, Inject, OnInit } from '@angular/core';
import { AbstractControl, FormControl, FormGroup } from '@angular/forms';
import { Veiculo } from 'src/app/modulos/veiculos/veiculo';
import { AbstractFieldsService } from 'src/app/shared/base/abstract-fields.interface';
import { AbstractService } from 'src/app/shared/base/abstract.service';
import { IFieldBuilder } from 'src/app/shared/base/field-buider';
import { DefaultEntity } from 'src/app/shared/default.entity';
import { IBreadcrumb } from '../../atoms/breadcrumb/breadcrumb.interface';
import { IInputInterface } from '../../atoms/input/input.interface';

@Component({
  selector: 'app-abstract-crud-edit',
  templateUrl: './abstract-crud-edit.component.html',
  styleUrls: ['./abstract-crud-edit.component.scss']
})
export class AbstractCrudEditComponent implements OnInit {

  form: FormGroup;
  inputs: IInputInterface[]
  breadcrumb: IBreadcrumb[]


  constructor(
    protected service: AbstractService<DefaultEntity>,
    @Inject('fieldsService') protected fieldsService: AbstractFieldsService
    ) { }

  ngOnInit(): void {
    this.buildInputs()
    this.buildForm()
    this.buildBreadCrumb()
  }

  buildForm(){
    this.form = new FormGroup({})
    this.fieldsService.buildFields().map(m=>m.name).forEach((name: string)=>{
      this.form.addControl(name, new FormControl())
    })
  }

  buildInputs(){
    try {
      this.inputs = this.fieldsService.buildFields()
    } catch (error) {
      console.error(error)
    }
  }

  btnBarClick(event: any){
    console.log({event})
    if(event == 'cancelar'){
      this.resetFormValues()
    }
  }

  onSubmit(){
    const formValue = this.form.getRawValue()
    console.log({formValue})
    this.service.insert(formValue)
    this.resetFormValues()
  }

  resetFormValues(){
    this.form.reset()
  }

  buildBreadCrumb(){}

}
