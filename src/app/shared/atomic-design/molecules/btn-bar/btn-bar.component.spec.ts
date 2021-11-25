import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BtnBarComponent } from './btn-bar.component';

describe('BtnBarComponent', () => {
  let component: BtnBarComponent;
  let fixture: ComponentFixture<BtnBarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BtnBarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BtnBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
