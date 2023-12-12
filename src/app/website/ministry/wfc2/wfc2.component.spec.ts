import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Wfc2Component } from './wfc2.component';

describe('Wfc2Component', () => {
  let component: Wfc2Component;
  let fixture: ComponentFixture<Wfc2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Wfc2Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Wfc2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
