import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Subject } from 'rxjs';
import { debounceTime } from 'rxjs/operators';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.scss']
})
export class SearchBarComponent implements OnInit {

  searchWord = ''
  @Output() keydownEvent = new EventEmitter

  constructor() { }

  ngOnInit(): void {
  }

  sendKeyEvent(){
    this.keydownEvent.emit(this.searchWord)
  }

  clear(){
    if(this.searchWord != ''){
      this.searchWord = ''
      this.keydownEvent.emit(this.searchWord)
    }
  }
}
