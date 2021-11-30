export interface IBtnInterface{
  label: string;
  class?:  any;//string | string[] | Set<string> | { [klass: string]: any; };
  type?: string;
  icon?: string;
  backUrlLevels?: number;
  disabled?: boolean
  // color: 'primary' | 'accent' | 'warn' | null
}
