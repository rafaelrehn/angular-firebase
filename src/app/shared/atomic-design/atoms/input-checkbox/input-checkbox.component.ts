import { Component, Input, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { IInputInterface } from '../input/input.interface';

@Component({
  selector: 'app-input-checkbox',
  templateUrl: './input-checkbox.component.html',
  styleUrls: ['./input-checkbox.component.scss']
})
export class InputCheckboxComponent implements OnInit {

  @Input() input: IInputInterface;
  @Input() form: FormGroup;

  constructor() { }

  ngOnInit(): void {
  }

}
