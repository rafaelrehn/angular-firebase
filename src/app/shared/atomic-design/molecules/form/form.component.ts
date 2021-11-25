import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { InputInterface } from '../../atoms/input/input.interface';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {

  @Input() inputs: InputInterface[]

  @Input() form: FormGroup;

  constructor() { }

  ngOnInit(): void {

  }
}
