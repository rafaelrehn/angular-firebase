import { Component, EventEmitter, OnInit, Output } from '@angular/core';

export enum IBtnBarClickEvent {
  cancelar = 'cancelar',
  submit = 'submit',
  salvarNovo = 'salvarNovo'
}

@Component({
  selector: 'app-btn-bar',
  templateUrl: './btn-bar.component.html',
  styleUrls: ['./btn-bar.component.scss']
})
export class BtnBarComponent implements OnInit {

  @Output() actionEvent = new EventEmitter<any>();

  constructor() { }

  ngOnInit(): void {
  }

  clickEvent(event: string){
    this.actionEvent.emit(event)
  }

}
