export enum IInputType{
  INPUT = 'input',
  SELECT = 'select',
  CHECKBOX = 'checkbox',
  MULTISELECT = 'multiselect',
  RADIO = 'radio',
  CURRENCY = 'currency',
  INTEGER = 'integer'
}

export interface ISelectOptions{
  value: string | number | boolean;
  label: string;
  selected?: boolean;
  disabled?: boolean;
}

export interface ISelect{
  multiselect: boolean;
  options: ISelectOptions[]

}

export interface IInputInterface{
  name: string;
  class: string | string[] | Set<string> | { [klass: string]: any; };
  label?: string;
  id?: string;
  type?: string;
  inputType: IInputType;
  select?: ISelect;
  columnShow?: boolean;
}