import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContatosViewComponent } from './contatos-view.component';

describe('ViewComponent', () => {
  let component: ContatosViewComponent;
  let fixture: ComponentFixture<ContatosViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContatosViewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ContatosViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
