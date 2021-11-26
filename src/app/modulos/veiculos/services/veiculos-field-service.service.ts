import { Injectable } from '@angular/core';
import { IInputInterface, IInputType, ISelectOptions } from 'src/app/shared/atomic-design/atoms/input/input.interface';
import { AbstractFieldsService } from 'src/app/shared/base/abstract-fields.interface';
import { IFieldBuilder } from 'src/app/shared/base/field-buider';

@Injectable({
  providedIn: 'root'
})
export class VeiculosFieldServiceService implements AbstractFieldsService {

  combustivelOptions: ISelectOptions[] = [
    {
      label: 'Gasolina',
      value: 'gasolina'
    },
    {
      label: 'Alcool',
      value: 'alcool'
    },
    {
      label: 'Flex',
      value: 'flex'
    },
    {
      label: 'Diesel',
      value: 'disel'
    }
  ]

  itensAdicionais: ISelectOptions[] = [
    {
      label: 'Trava elétrica',
      value: 'travaEletrica'
    },
    {
      label: 'Direção hidráulica',
      value: 'direcaoHidraulica'
    },
    {
      label: 'Alarme',
      value: 'alarme'
    },
    {
      label: 'Rodas de liga leve',
      value: 'rodaLigaLeve'
    }
  ]

  cambioOptions: ISelectOptions[] = [
    {
      label: 'Manual',
      value: 'manual',
      selected: true
    },
    {
      label: 'Automático',
      value: 'automatico'
    },
  ]

  constructor() {
  }

  buildFields(): IInputInterface[]{
    return [
      new IFieldBuilder().build('nome').label('Nome').columnShow().get(),
      new IFieldBuilder().build('marca').label('Marca').columnShow().get(),
      new IFieldBuilder().build('anoFabricacao').label('Ano de fabricação').get(),
      new IFieldBuilder().build('anoModelo').label('Ano Modelo').get(),
      new IFieldBuilder().build('valor').columnShow().label('Valor').number().get(),
      new IFieldBuilder().build('combustivel', IInputType.SELECT).select(this.combustivelOptions).label('Combustível').get(),
      new IFieldBuilder().build('cambio', IInputType.RADIO).select(this.cambioOptions).columnShow().label('Câmbio').get(),
      new IFieldBuilder().build('itemsAdicionais', IInputType.MULTISELECT).select(this.itensAdicionais).label('Items adicionais').get(),
      new IFieldBuilder().build('publicar', IInputType.CHECKBOX).label('Publicar').get(),
      new IFieldBuilder().build('vendido', IInputType.CHECKBOX).label('Vendido').get(),
    ]
  }
}
