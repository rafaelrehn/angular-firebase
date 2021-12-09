import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UtilitariosViewComponent } from './utilitarios-view.component';

describe('ViewComponent', () => {
  let component: UtilitariosViewComponent;
  let fixture: ComponentFixture<UtilitariosViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UtilitariosViewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UtilitariosViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
