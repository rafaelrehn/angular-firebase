import { Component, Input, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { IInputInterface } from '../input/input.interface';

@Component({
  selector: 'app-input-error-container',
  templateUrl: './input-error-container.component.html',
  styleUrls: ['./input-error-container.component.scss']
})
export class InputErrorContainerComponent implements OnInit {

  @Input() input: IInputInterface;
  @Input() form: FormGroup;

  constructor() { }

  ngOnInit(): void {
  }

}
