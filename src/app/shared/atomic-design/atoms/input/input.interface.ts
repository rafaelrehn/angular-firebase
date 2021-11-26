export enum IInputType{
  INPUT = 'input',
  SELECT = 'select',
  CHECKBOX = 'checkbox',
  MULTISELECT = 'multiselect'
}

export interface ISelectOptions{
  value: string | number | boolean;
  label: string;
}

export interface IInputInterface{
  name: string;
  label: string;
  id: string;
  type: string;
  inputType: IInputType;
  select?:{
    multiselect: boolean;
    options: ISelectOptions[]

  }
}
