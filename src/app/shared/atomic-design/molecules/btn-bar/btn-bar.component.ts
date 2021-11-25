import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { BtnInterface } from '../../atoms/btn/btn.interface';

@Component({
  selector: 'app-btn-bar',
  templateUrl: './btn-bar.component.html',
  styleUrls: ['./btn-bar.component.scss']
})
export class BtnBarComponent implements OnInit {

  submitBtn: BtnInterface
  cancelBtn: BtnInterface

  @Output() click = new EventEmitter<any>();

  constructor() { }

  ngOnInit(): void {
    this.buildBtn()
  }

  buildBtn(){
    this.submitBtn = {
      label: 'Submit',
      type: 'submit',
      color: 'primary'
    }

    this.cancelBtn = {
      label: 'Cancelar',
      color: null
    }
  }


  clickEvent(event: 'cancelar' | 'submit'){
    this.click.emit(event)
  }

}
