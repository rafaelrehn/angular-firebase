import { Component, Input, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { IInputInterface } from '../input/input.interface';

@Component({
  selector: 'app-input-radio',
  templateUrl: './input-radio.component.html',
  styleUrls: ['./input-radio.component.scss']
})
export class InputRadioComponent implements OnInit {

  @Input() input: IInputInterface;
  @Input() form: FormGroup;

  constructor() { }

  ngOnInit(): void {
  }

}
