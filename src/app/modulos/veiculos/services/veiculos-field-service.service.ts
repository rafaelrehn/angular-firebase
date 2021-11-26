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


  constructor() {
  }

  buildFields(): IInputInterface[]{
    return [
      new IFieldBuilder().build('nome').label('Nome').get(),
      new IFieldBuilder().build('marca').label('Marca').get(),
      new IFieldBuilder().build('anoFabricacao').label('Ano de fabricação').get(),
      new IFieldBuilder().build('anoModelo').label('Ano Modelo').get(),
      new IFieldBuilder().build('valor').label('Valor').number().get(),
      new IFieldBuilder().build('combustivel', IInputType.SELECT).select(this.combustivelOptions).label('Combustível').get(),
      new IFieldBuilder().build('itemsAdicionais', IInputType.MULTISELECT).select(this.itensAdicionais).label('Items adicionais').get(),
      new IFieldBuilder().build('publicar', IInputType.CHECKBOX).label('Publicar').get(),
      new IFieldBuilder().build('vendido', IInputType.CHECKBOX).label('Vendido').get(),
    ]
  }
}
