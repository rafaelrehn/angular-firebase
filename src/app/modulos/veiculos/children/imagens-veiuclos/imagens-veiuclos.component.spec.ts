import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImagensVeiuclosComponent } from './imagens-veiuclos.component';

describe('ImagensVeiuclosComponent', () => {
  let component: ImagensVeiuclosComponent;
  let fixture: ComponentFixture<ImagensVeiuclosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ImagensVeiuclosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ImagensVeiuclosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
