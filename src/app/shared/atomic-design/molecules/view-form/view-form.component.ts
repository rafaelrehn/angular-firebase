import { Component, Input, OnInit } from '@angular/core';
import { IViewForm } from './view-form.interface';

@Component({
  selector: 'app-view-form',
  templateUrl: './view-form.component.html',
  styleUrls: ['./view-form.component.scss']
})
export class ViewFormComponent implements OnInit {

  @Input() arrayViewForm: IViewForm[]

  constructor() { }

  ngOnInit(): void {
  }

}
