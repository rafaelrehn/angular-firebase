import { Component, Input, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { IInputInterface } from '../input/input.interface';

@Component({
  selector: 'app-input-textarea',
  templateUrl: './input-textarea.component.html',
  styleUrls: ['./input-textarea.component.scss']
})
export class InputTextareaComponent implements OnInit {

  @Input() input: IInputInterface;
  @Input() form: FormGroup;

  constructor() { }

  ngOnInit(): void {
  }

}
