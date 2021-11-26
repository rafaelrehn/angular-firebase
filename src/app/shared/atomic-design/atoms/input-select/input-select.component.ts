import { Component, Input, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { IInputInterface } from '../input/input.interface';

@Component({
  selector: 'app-input-select',
  templateUrl: './input-select.component.html',
  styleUrls: ['./input-select.component.scss']
})
export class InputSelectComponent implements OnInit {

  @Input() input: IInputInterface;
  @Input() form: FormGroup;

  constructor() { }

  ngOnInit(): void {
  }

}
