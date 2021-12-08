import { Injectable } from '@angular/core';
import { IInputInterface, IInputType, ISelectOptions } from 'src/app/shared/atomic-design/atoms/input/input.interface';
import { AbstractFieldsService } from 'src/app/shared/base/abstract-fields.interface';
import { IFieldBuilder } from 'src/app/shared/base/field-buider';
import { CAMBIO_OPTIONS, COMBUSTIVEL_OPTIONS, COR_OPTIONS, ITENS_ADICIONAIS_OPTIONS } from './utilitarios-fields.options';

@Injectable({
  providedIn: 'root'
})
export class UtilitariosFieldServiceService implements AbstractFieldsService {



  constructor() {
  }

  buildFields(): IInputInterface[]{
    return [
      new IFieldBuilder().build('ativo', IInputType.CHECKBOX).label('Ativo').columnShow().get(),
      new IFieldBuilder().build('nome').label('Nome').columnShow().required().get(),
      new IFieldBuilder().build('value').label('value').columnShow().required().get(),
      // new IFieldBuilder().build('anoFabricacao').label('Ano de fabricação').setClass('w-140').get(),
      // new IFieldBuilder().build('anoModelo').label('Ano Modelo').setClass('w-140').get(),
      // new IFieldBuilder().build('valor', IInputType.CURRENCY).columnShow().label('Valor').number().setClass('w-140').get(),
      // new IFieldBuilder().build('combustivel', IInputType.RADIO).select(COMBUSTIVEL_OPTIONS).label('Combustível').get(),
      // new IFieldBuilder().build('cambio', IInputType.RADIO).select(CAMBIO_OPTIONS).columnShow().label('Câmbio').get(),
      // new IFieldBuilder().build('cor', IInputType.SELECT).select(COR_OPTIONS).columnShow().label('Cor principal').get(),
      // new IFieldBuilder().build('itemsAdicionais', IInputType.MULTISELECT).select(ITENS_ADICIONAIS_OPTIONS).label('Items adicionais').get(),
      // new IFieldBuilder().build('publicar', IInputType.CHECKBOX).label('Publicar').get(),
      // new IFieldBuilder().build('vendido', IInputType.CHECKBOX).label('Vendido').get(),
    ]
  }
}
