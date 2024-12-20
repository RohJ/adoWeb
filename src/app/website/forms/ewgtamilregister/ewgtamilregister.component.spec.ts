import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EwgtamilregisterComponent } from './ewgtamilregister.component';

describe('EwgtamilregisterComponent', () => {
  let component: EwgtamilregisterComponent;
  let fixture: ComponentFixture<EwgtamilregisterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EwgtamilregisterComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EwgtamilregisterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
