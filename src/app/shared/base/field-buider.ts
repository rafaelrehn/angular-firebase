import { Injectable } from "@angular/core";
import { IInputInterface, IInputType, ISelectOptions } from "../atomic-design/atoms/input/input.interface";

@Injectable()
export class IFieldBuilder{

  private input: IInputInterface;


  build(name: string, inputType?: IInputType){
    this.input ={
      name: name,
      id: name,
      label: name,
      type: 'text',
      inputType: inputType || IInputType.INPUT
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

  get(){
    return this.input
  }
}
