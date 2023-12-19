import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KkidsComponent } from './kkids.component';

describe('KkidsComponent', () => {
  let component: KkidsComponent;
  let fixture: ComponentFixture<KkidsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ KkidsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(KkidsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
