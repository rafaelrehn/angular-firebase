import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { BreadCrumbBuilder } from 'src/app/shared/atomic-design/atoms/breadcrumb/breadcrumb-builder';
import { IBreadcrumb } from 'src/app/shared/atomic-design/atoms/breadcrumb/breadcrumb.interface';
import { IInputInterface } from 'src/app/shared/atomic-design/atoms/input/input.interface';
import { IBtnBarClickEvent } from 'src/app/shared/atomic-design/molecules/btn-bar/btn-bar.component';
import { HeaderListInfo } from 'src/app/shared/atomic-design/molecules/list-header/header-actions.component';
import { AuthService } from '../auth/auth.service';
import { ProfileFieldService } from './services/profile-field.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {

  headerInfo: HeaderListInfo
  breadcrumb: IBreadcrumb[]

  inputs: IInputInterface[]
  form: FormGroup
  isEdit = true

  constructor(
    public authService: AuthService,
    private fieldsService: ProfileFieldService,
    private _snackBar: MatSnackBar
  ) { }

  ngOnInit(): void {
    this.buildInfo()
    this.buildBreadcrumb()
    this.buildInputs()
    this.buildForm()
    this.findCurrentProfile()
  }

  findCurrentProfile(){
    this.setValuesForm(this.authService.user)
  }

  buildInfo(){
    this.headerInfo = {
      t1: 'Profile',
      t2: 'Informações gerais do usuário',
    }
  }

  setValuesForm(model: any) {
    Object.keys(model).forEach(key => {
      this.form.get(key)?.setValue(model[key])
    })
  }

  buildBreadcrumb(){
    this.breadcrumb = [
      new BreadCrumbBuilder().build('Admin', '/admin').get(),
      new BreadCrumbBuilder().build('Profile', '/admin/profile').active().get(),
    ]
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
    const {displayName} = this.form.value
    await this.authService.updateUserInfo(displayName)
    this._snackBar.open('Informações atualizadas', 'Fechar',{
      horizontalPosition: 'center',
      verticalPosition: 'top',
      duration: 2500,
    })
  }
}
