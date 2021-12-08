import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InputMasterComponent } from './input-master.component';

describe('InputMasterComponent', () => {
  let component: InputMasterComponent;
  let fixture: ComponentFixture<InputMasterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InputMasterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InputMasterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
