import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Subject } from 'rxjs';
import { debounceTime } from 'rxjs/operators';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.scss']
})
export class SearchBarComponent implements OnInit {

  searchWord = ''
  $keydownSubject = new Subject()
  @Output() search = new EventEmitter

  constructor() { }

  ngOnInit(): void {
    this.$keydownSubject.pipe(debounceTime(300)).subscribe(()=>{
      this.sendWord()

    })
  }

  keydownEvent(){
    this.$keydownSubject.next()
  }

  clear(){
    if(this.searchWord != ''){
      this.searchWord = ''
      this.sendWord()
    }
  }

  sendWord(){
    console.log('sending', this.searchWord)
    this.search.emit(this.searchWord)
  }
}
