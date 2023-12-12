import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EwgComponent } from './ewg.component';

describe('EwgComponent', () => {
  let component: EwgComponent;
  let fixture: ComponentFixture<EwgComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EwgComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EwgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
