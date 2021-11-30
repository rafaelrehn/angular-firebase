import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-icon-button',
  templateUrl: './icon-button.component.html',
  styleUrls: ['./icon-button.component.scss']
})
export class IconButtonComponent implements OnInit {

  @Output() clickEvent = new EventEmitter()
  @Input() iconName: string
  @Input() disabled: boolean | undefined

  constructor() { }

  ngOnInit(): void {
  }

  clickFunction(){
    if(this.disabled){return}
    this.clickEvent.emit()
  }

}
