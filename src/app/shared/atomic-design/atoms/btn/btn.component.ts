import { Component, Input, OnInit } from '@angular/core';
import { IBtnInterface } from './btn.interface';

@Component({
  selector: 'app-btn',
  templateUrl: './btn.component.html',
  styleUrls: ['./btn.component.scss']
})
export class BtnComponent implements OnInit {

  @Input() label: string;
  @Input() disabled: boolean = false
  @Input() icon: string;
  @Input() clazz: string | string[];
  @Input() type: string;

  constructor() { }

  ngOnInit(): void {
  }
}
