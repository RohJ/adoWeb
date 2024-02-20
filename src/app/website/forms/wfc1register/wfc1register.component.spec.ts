import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Wfc1registerComponent } from './wfc1register.component';

describe('Wfc1registerComponent', () => {
  let component: Wfc1registerComponent;
  let fixture: ComponentFixture<Wfc1registerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Wfc1registerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Wfc1registerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
