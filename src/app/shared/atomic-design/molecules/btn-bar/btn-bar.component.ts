import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { IBtnInterface } from '../../atoms/btn/btn.interface';

@Component({
  selector: 'app-btn-bar',
  templateUrl: './btn-bar.component.html',
  styleUrls: ['./btn-bar.component.scss']
})
export class BtnBarComponent implements OnInit {

  @Input() submitBtn: IBtnInterface = {
    label: 'Submit',
    type: 'submit',
    class: 'btn-accent',
    icon: 'send'
  }

  @Input() cancelBtn: IBtnInterface = {
    label: 'Cancelar',
  }

  @Output() click = new EventEmitter<any>();

  constructor() { }

  ngOnInit(): void {
  }

  clickEvent(event: 'cancelar' | 'submit'){
    this.click.emit(event)
  }

}
