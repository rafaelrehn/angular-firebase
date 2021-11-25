import { Injectable } from "@angular/core";
import { InputInterface } from "../atomic-design/atoms/input/input.interface";

@Injectable()
export class FieldBuilder{

  private input: InputInterface;


  build(name: string){
    this.input ={
      name: name,
      id: name,
      label: name,
      type: 'text'
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

  get(){
    return this.input
  }
}
