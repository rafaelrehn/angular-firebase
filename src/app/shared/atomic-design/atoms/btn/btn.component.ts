import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { IBtnInterface } from './btn.interface';

@Component({
  selector: 'app-btn',
  templateUrl: './btn.component.html',
  styleUrls: ['./btn.component.scss']
})
export class BtnComponent implements OnInit {

  @Input() btn: IBtnInterface;
  @Output() click = new EventEmitter<any>();

  constructor() { }

  ngOnInit(): void {
  }

  clickEvent(event: Event){
    this.click.emit('click')
  }
}
