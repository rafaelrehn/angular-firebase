import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { IInputInterface } from '../../atoms/input/input.interface';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {

  @Input() inputs: IInputInterface[]

  @Input() form: FormGroup;

  constructor() { }

  ngOnInit(): void {

  }
}
