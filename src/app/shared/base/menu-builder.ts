import { Injectable } from "@angular/core";

export interface IMenuInterface {
  label: string;
  routerLink: string;
  icon: string;
  clazz?: any
}

@Injectable()
export class IMenuBuilder{

  private menu: IMenuInterface;

  build(label: string, routerLink: string, icon: string){
    this.menu ={
      label: label,
      routerLink: routerLink,
      icon: icon
    }
    return this
  }

  clazz(clazz: any){
    this.menu.clazz = clazz
    return this
  }


  get(){
    return this.menu
  }
}
