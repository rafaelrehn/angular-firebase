import { Component, Input, OnInit } from '@angular/core';
import { IViewForm } from '../../molecules/view-form/view-form.interface';

@Component({
  selector: 'app-view-input',
  templateUrl: './view-input.component.html',
  styleUrls: ['./view-input.component.scss']
})
export class ViewInputComponent implements OnInit {

  @Input() viewInput: IViewForm

  constructor() { }

  ngOnInit(): void {
  }

}
