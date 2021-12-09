import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UtilitariosEditComponent } from './utilitarios-edit.component';

describe('UtilitariosEditComponent', () => {
  let component: UtilitariosEditComponent;
  let fixture: ComponentFixture<UtilitariosEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UtilitariosEditComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UtilitariosEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
