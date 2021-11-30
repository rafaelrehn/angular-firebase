import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UtilitariosListComponent } from './utilitarios-list.component';

describe('UtilitariosListComponent', () => {
  let component: UtilitariosListComponent;
  let fixture: ComponentFixture<UtilitariosListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UtilitariosListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UtilitariosListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
