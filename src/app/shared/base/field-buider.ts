import { Injectable } from "@angular/core";
import { IInputContext, IInputInterface, IInputType, ISelectOptions } from "../atomic-design/atoms/input/input.interface";

@Injectable()
export class IFieldBuilder{

  private input: IInputInterface;


  build(name: string, inputType?: IInputType){
    this.input ={
      name: name,
      id: name,
      label: name,
      type: 'text',
      inputType: inputType || IInputType.INPUT,
      class: '',
      required: false
    }
    return this
  }

  label(label: string){
    this.input.label = label
    return this
  }

  number(){
    this.input.type = 'number'
    return this
  }

  select(options: ISelectOptions[]){
    this.input.select ={
      multiselect: this.input.inputType == IInputType.MULTISELECT,
      options: options
    }
    return this
  }

  columnShow(){
    this.input.columnShow = true
    return this
  }

  setClass(param: string){
    this.input.class = param
    return this
  }

  context(context: IInputContext){
    this.input.context = context
    return this
  }

  required(){
    this.input.required = true
    return this
  }

  get(){
    return this.input
  }
}
