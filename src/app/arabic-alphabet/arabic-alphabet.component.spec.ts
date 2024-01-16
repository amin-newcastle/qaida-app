import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArabicAlphabetComponent } from './arabic-alphabet.component';

describe('ArabicAlphabetComponent', () => {
  let component: ArabicAlphabetComponent;
  let fixture: ComponentFixture<ArabicAlphabetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ArabicAlphabetComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ArabicAlphabetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
