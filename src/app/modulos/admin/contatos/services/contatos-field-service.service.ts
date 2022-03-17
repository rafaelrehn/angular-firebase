import { Injectable } from '@angular/core';
import { IInputInterface, IInputType } from 'src/app/shared/atomic-design/atoms/input/input.interface';
import { AbstractFieldsService } from 'src/app/shared/base/abstract-fields.interface';
import { IFieldBuilder } from 'src/app/shared/base/field-buider';
// import { CAMBIO_OPTIONS, CATEGORIA_OPTIONS, COMBUSTIVEL_OPTIONS, COR_OPTIONS, ITENS_ADICIONAIS_OPTIONS } from './contatos-fields.options';

@Injectable({
  providedIn: 'root'
})
export class ContatosFieldServiceService implements AbstractFieldsService {

  constructor() {
  }

  buildFields(): IInputInterface[]{
    const FB = new IFieldBuilder()
    return [
      FB.build('nome').label('Nome').columnShow().required().get(),
      FB.build('ordemExibicao', IInputType.INTEGER).label('Ordem de exibição').columnShow().get(),
      // FB.build('marca').label('Marca').columnShow().required().get(),
      // FB.build('anoFabricacao').label('Ano de fabricação').required().setClass('w-140').get(),
      // FB.build('anoModelo').label('Ano Modelo').setClass('w-140').required().get(),
      // FB.build('valor', IInputType.CURRENCY).columnShow().label('Valor').number().setClass('w-140').required().get(),
      // FB.build('categoria', IInputType.RADIO).columnShow().label('Categoria').select(CATEGORIA_OPTIONS).required().get(),
      // FB.build('combustivel', IInputType.RADIO).select(COMBUSTIVEL_OPTIONS).columnShow().label('Combustível').required().get(),
      // FB.build('cambio', IInputType.RADIO).select(CAMBIO_OPTIONS).columnShow().label('Câmbio').required().get(),
      // FB.build('cor', IInputType.SELECT).select(COR_OPTIONS).columnShow().label('Cor principal').required().get(),
      // FB.build('itemsAdicionais', IInputType.MULTISELECT).select(ITENS_ADICIONAIS_OPTIONS).label('Items adicionais').context({name: 'utilitarios', mainField: 'nome'}).get(),
      // FB.build('descricao', IInputType.TEXTAREA).label('Descrição adicional').get(),
      // FB.build('publicar', IInputType.TOGGLE).label('Publicar').columnShow().get(),
      // FB.build('vendido', IInputType.CHECKBOX).label('Vendido').columnShow().get(),
    ]
  }
}
