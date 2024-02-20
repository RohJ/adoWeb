import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EwgregisterComponent } from './ewgregister.component';

describe('EwgregisterComponent', () => {
  let component: EwgregisterComponent;
  let fixture: ComponentFixture<EwgregisterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EwgregisterComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EwgregisterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
