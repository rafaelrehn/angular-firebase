import { Injectable } from '@angular/core';
import { IInputInterface } from 'src/app/shared/atomic-design/atoms/input/input.interface';
import { AbstractFieldsService } from 'src/app/shared/base/abstract-fields.interface';
import { IFieldBuilder } from 'src/app/shared/base/field-buider';

@Injectable({
  providedIn: 'root'
})
export class ProfileFieldService implements AbstractFieldsService {

  constructor() { }

  buildFields(): IInputInterface[]{
    return [
      // new IFieldBuilder().build('email').label('Email').columnShow().disabled().get(),
      // new IFieldBuilder().build('expiredDate').label('expiredDate').columnShow().disabled().get(),
      // new IFieldBuilder().build('providerId').label('providerId').disabled().get(),
      new IFieldBuilder().build('displayName').label('displayName').required().get(),
      // new IFieldBuilder().build('photoURL').label('photoURL').number().get(),
      // new IFieldBuilder().build('uid').columnShow().label('uid').disabled().get(),
      // new IFieldBuilder().build('key').columnShow().label('key').disabled().get(),
    ]
  }
}
