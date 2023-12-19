import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DozComponent } from './doz.component';

describe('DozComponent', () => {
  let component: DozComponent;
  let fixture: ComponentFixture<DozComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DozComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DozComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
