import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AbstractCrudViewComponent } from './abstract-crud-view.component';

describe('AbstractCrudViewComponent', () => {
  let component: AbstractCrudViewComponent;
  let fixture: ComponentFixture<AbstractCrudViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AbstractCrudViewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AbstractCrudViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
