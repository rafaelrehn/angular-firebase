import { Component, Inject, OnInit } from '@angular/core';
import { AbstractControl, FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Veiculo } from 'src/app/modulos/veiculos/veiculo';
import { AbstractFieldsService } from 'src/app/shared/base/abstract-fields.interface';
import { AbstractService } from 'src/app/shared/base/abstract.service';
import { IFieldBuilder } from 'src/app/shared/base/field-buider';
import { LoadingService } from 'src/app/shared/base/loading.service';
import { DefaultEntity } from 'src/app/shared/default.entity';
import { IBreadcrumb } from '../../atoms/breadcrumb/breadcrumb.interface';
import { IBtnInterface } from '../../atoms/btn/btn.interface';
import { IInputInterface } from '../../atoms/input/input.interface';
import { IBtnBarClickEvent } from '../../molecules/btn-bar/btn-bar.component';

@Component({
  selector: 'app-abstract-crud-edit',
  templateUrl: './abstract-crud-edit.component.html',
  styleUrls: ['./abstract-crud-edit.component.scss']
})
export class AbstractCrudEditComponent<T extends DefaultEntity> implements OnInit {

  loading = false

  form: FormGroup;
  inputs: IInputInterface[]
  breadcrumb: IBreadcrumb[]

  model: T

  isEdit = false

  submitBtn: IBtnInterface = {
    label: 'Submit',
    type: 'submit',
    class: 'btn-accent',
    icon: 'check'
  }

  cancelBtn: IBtnInterface = {
    label: 'Cancelar',
    icon: 'close'
  }

  constructor(
    protected service: AbstractService<DefaultEntity>,
    @Inject('fieldsService') protected fieldsService: AbstractFieldsService,
    protected router: Router,
    protected activatedRoute: ActivatedRoute,
    ) { }

  async ngOnInit() {
    this.buildForm()
    this.buildInputs()
    const key = this.activatedRoute.snapshot.paramMap.get('key') as string
    if(key){
      await this.getData(key)
      this.isEdit = true
    }
    this.buildBreadCrumb()
  }

  getData(key: string):Promise<void>{
    return new Promise(resolve=>{
      this.service.getOne(key).subscribe(res=>{
        this.model = res as any
        Object.assign(this.model, {key: key})
        this.setValuesForm(res as any)
        resolve()
      })
    })
  }

  setValuesForm(model: any){
    Object.keys(model).forEach(key=>{
      this.form.get(key)?.setValue(model[key])
    })
  }

  IsEdit(): string{
    return this.activatedRoute.snapshot.paramMap.get('key') as string;
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

  actionEvent(event: IBtnBarClickEvent){
    console.log({event})
    if(event == IBtnBarClickEvent.submit){
      this.submit()
    }else if(event == IBtnBarClickEvent.cancelar){
      this.resetFormValues()
    }else if(event == IBtnBarClickEvent.salvarNovo){
      this.submit(true)
    }
  }

  async submit(salvarNovo?: boolean){
    const formValue = this.form.getRawValue()
    console.log({formValue})
    let key: string = ''
    if(this.isEdit){
      this.service.update(formValue, this.model.key as string)
      this.redirect(key)
    }else{
      this.loading = true
      key = await this.service.insert(formValue)
      this.loading = false
      if(salvarNovo){
        this.reset()
      }else{
        this.redirect(key)
      }
    }
  }

  reset(){
    this.form.reset()
  }

  novoForm(){

  }

  redirect(key?: string){
    if(this.isEdit){
      this.router.navigate([`../../${this.model.key}/view`], { relativeTo: this.activatedRoute })
    }else if(key){
      this.router.navigate([`../${key}/view`], { relativeTo: this.activatedRoute })
    }else{
      this.router.navigate([`../`], { relativeTo: this.activatedRoute })
    }
  }

  resetFormValues(){
    this.redirect()
  }

  buildBreadCrumb(){}
}
