import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Wfc1Component } from './wfc1.component';

describe('Wfc1Component', () => {
  let component: Wfc1Component;
  let fixture: ComponentFixture<Wfc1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Wfc1Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Wfc1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
