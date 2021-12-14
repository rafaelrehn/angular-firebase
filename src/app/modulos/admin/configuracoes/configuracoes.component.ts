import { Component, Inject, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { BreadCrumbBuilder } from 'src/app/shared/atomic-design/atoms/breadcrumb/breadcrumb-builder';
import { IBreadcrumb } from 'src/app/shared/atomic-design/atoms/breadcrumb/breadcrumb.interface';
import { IInputInterface } from 'src/app/shared/atomic-design/atoms/input/input.interface';
import { IBtnBarClickEvent } from 'src/app/shared/atomic-design/molecules/btn-bar/btn-bar.component';
import { HeaderListInfo } from 'src/app/shared/atomic-design/molecules/list-header/header-actions.component';
import { AbstractFieldsService } from 'src/app/shared/base/abstract-fields.interface';
import { NewUserService } from 'src/app/shared/base/new-user.service';
import { AuthService } from '../auth/auth.service';
import { ClientInterface } from './client.interface';
import { ConfiguracoesFieldsService } from './services/configuracoes-fields.service';
import { ConfiguracoesService } from './services/configuracoes.service';

@Component({
  selector: 'app-configuracoes',
  templateUrl: './configuracoes.component.html',
  styleUrls: ['./configuracoes.component.scss']
})
export class ConfiguracoesComponent implements OnInit {

  headerInfo: HeaderListInfo
  breadcrumb: IBreadcrumb[]

  inputs: IInputInterface[]
  form: FormGroup
  isEdit = true

  model: ClientInterface


  // currentClient: any

  constructor(
    // private newUserService: NewUserService,
    protected fieldsService: ConfiguracoesFieldsService,
    private authService: AuthService,
    private service: ConfiguracoesService,
    private _snackBar: MatSnackBar
  ) { }

  ngOnInit(): void {
    this.buildInputs()
    this.buildForm()
    this.buildInfo()
    this.buildBreadcrumb()
    this.findCurrentClient()
  }

  buildInputs() {
    try {
      this.inputs = this.fieldsService.buildFields()
    } catch (error) {
      console.error(error)
    }
  }

  buildForm() {
    this.form = new FormGroup({})
    this.fieldsService.buildFields().forEach((input: IInputInterface) => {
      const control = new FormControl(null, input.required ? Validators.required : null)
      input.disabled ? control.disable() : null
      this.form.addControl(input.name, control)
    })
  }

  setValuesForm(model: any) {
    Object.keys(model).forEach(key => {
      this.form.get(key)?.setValue(model[key])
    })
  }

  async findCurrentClient(){
    // this.currentClient = (await this.newUserService.findCurrentClient(this.authService.user))[0]
    this.model = await this.service.getOne(this.authService.user.uid)
    this.setValuesForm(this.model)
  }

  buildInfo(){
    this.headerInfo = {
      t1: 'Configurações',
      t2: 'Configurações do cliente',
    }
  }

  buildBreadcrumb(){
    this.breadcrumb = [
      new BreadCrumbBuilder().build('Admin', '/admin').get(),
      new BreadCrumbBuilder().build('Configurações', '/admin/configuracoes').active().get(),
    ]
  }

  actionEvent(event: IBtnBarClickEvent) {
    console.log({ event })
    if (event == IBtnBarClickEvent.submit) {
      this.submit()
    } else if (event == IBtnBarClickEvent.cancelar) {
      // this.resetFormValues()
    } else if (event == IBtnBarClickEvent.salvarNovo) {
      // this.submit(true)
    }
  }

  async submit(){
    let formValue: any = this.form.getRawValue()
    formValue.slug = this.convertToSlug(formValue.slug)
    this.model = Object.assign(this.model, formValue)
    // formValue = {...this.model}
    await this.service.update(this.model, this.model.key)
    this._snackBar.open('Informações atualizadas', 'Fechar',{
      horizontalPosition: 'center',
      verticalPosition: 'top',
      duration: 2500,
    })
    await this.findCurrentClient()
  }

  convertToSlug(text: string) {
    return text.toLowerCase()
               .replace(/ /g, '-')
               .replace(/[^\w-]+/g, '');
  }



}
