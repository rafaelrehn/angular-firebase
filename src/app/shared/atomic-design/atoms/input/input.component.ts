import { Component, Input, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { InputInterface } from './input.interface';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss']
})
export class InputComponent implements OnInit {

  @Input() input: InputInterface;
  @Input() form: FormGroup;

  constructor() { }

  ngOnInit(): void {
  }

}
