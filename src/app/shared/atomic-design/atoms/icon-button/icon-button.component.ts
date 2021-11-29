import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-icon-button',
  templateUrl: './icon-button.component.html',
  styleUrls: ['./icon-button.component.scss']
})
export class IconButtonComponent implements OnInit {

  @Output() clickEvent = new EventEmitter()
  @Input() iconName: string

  constructor() { }

  ngOnInit(): void {
  }

  clickFunction(){
    this.clickEvent.emit()
  }

}
