import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { IBtnInterface } from '../../atoms/btn/btn.interface';

@Component({
  selector: 'app-btn-bar',
  templateUrl: './btn-bar.component.html',
  styleUrls: ['./btn-bar.component.scss']
})
export class BtnBarComponent implements OnInit {

  submitBtn: IBtnInterface
  cancelBtn: IBtnInterface

  @Output() click = new EventEmitter<any>();

  constructor() { }

  ngOnInit(): void {
    this.buildBtn()
  }

  buildBtn(){
    this.submitBtn = {
      label: 'Submit',
      type: 'submit',
      class: 'btn-accent'
    }

    this.cancelBtn = {
      label: 'Cancelar',
    }
  }


  clickEvent(event: 'cancelar' | 'submit'){
    this.click.emit(event)
  }

}
