export interface IBtnInterface{
  label: string;
  class?:  any;//string | string[] | Set<string> | { [klass: string]: any; };
  type?: string;
  icon?: 'note_add';
  backUrlLevels?: number;
  // color: 'primary' | 'accent' | 'warn' | null
}
