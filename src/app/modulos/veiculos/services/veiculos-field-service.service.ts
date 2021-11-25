import { Injectable } from '@angular/core';
import { InputInterface } from 'src/app/shared/atomic-design/atoms/input/input.interface';
import { AbstractFieldsService } from 'src/app/shared/base/abstract-fields.interface';
import { FieldBuilder } from 'src/app/shared/base/field-buider';

@Injectable({
  providedIn: 'root'
})
export class VeiculosFieldServiceService implements AbstractFieldsService {

  constructor() {
  }

  buildFields(): InputInterface[]{
    return [
      new FieldBuilder().build('nome').label('Nome').get(),
      new FieldBuilder().build('marca').label('Marca').get(),
      new FieldBuilder().build('anoFabricacao').label('Ano de fabricação').get(),
      new FieldBuilder().build('anoModelo').label('Ano Modelo').get(),
      new FieldBuilder().build('valor').label('Valor').number().get(),
    ]
  }
}
