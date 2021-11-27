export enum IInputType{
  INPUT = 'input',
  SELECT = 'select',
  CHECKBOX = 'checkbox',
  MULTISELECT = 'multiselect',
  RADIO = 'radio'
}

export interface ISelectOptions{
  value: string | number | boolean;
  label: string;
  selected?: boolean;
  disabled?: boolean;
}

export interface IInputInterface{
  name: string;
  label?: string;
  id?: string;
  type?: string;
  inputType: IInputType;
  select?:{
    multiselect: boolean;
    options: ISelectOptions[]

  }
  columnShow?: boolean;
  class?: string | string[] | Set<string> | { [klass: string]: any; };
}
