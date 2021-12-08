import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Observable } from 'rxjs';
import { map, startWith } from 'rxjs/operators';
import { AbstractService } from 'src/app/shared/base/abstract.service';
import { IInputInterface } from '../input/input.interface';

@Component({
  selector: 'app-input-master',
  templateUrl: './input-master.component.html',
  styleUrls: ['./input-master.component.scss']
})
export class InputMasterComponent implements OnInit {

  @Input() input: IInputInterface;
  @Input() form: FormGroup;

  myControl = new FormControl();
  options: any[] = []
  filteredOptions: Observable<any[]>;

  constructor(
    private service: AbstractService<any>
  ){}

  ngOnInit() {
    this.getOptions()

  }

  getOptions(){
    if(this.input.context){
      this.service.getAllInputMaster(this.input.context?.name).then(res=>{
        this.options = res
        this.startFilter()
      })
    }
  }

  startFilter(){
    this.filteredOptions = this.myControl.valueChanges.pipe(
      startWith(''),
      map(value => this._filter(value)),
    );
  }



  private _filter(value: string): any[] {
    const filterValue = value.toLowerCase();
    return this.options.filter((option: any) => (option['nome'] || '').toLowerCase().includes(filterValue));
  }

}
