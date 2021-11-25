export interface BtnInterface{
  label: string;
  class?:  any;//string | string[] | Set<string> | { [klass: string]: any; };
  type?: string;
  color: 'primary' | 'accent' | 'warn' | null
}
