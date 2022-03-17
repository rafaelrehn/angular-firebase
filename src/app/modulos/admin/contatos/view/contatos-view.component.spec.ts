import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VeiculosViewComponent } from './veiculos-view.component';

describe('ViewComponent', () => {
  let component: VeiculosViewComponent;
  let fixture: ComponentFixture<VeiculosViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VeiculosViewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VeiculosViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
