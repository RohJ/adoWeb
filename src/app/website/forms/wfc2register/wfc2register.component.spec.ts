import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Wfc2registerComponent } from './wfc2register.component';

describe('Wfc2registerComponent', () => {
  let component: Wfc2registerComponent;
  let fixture: ComponentFixture<Wfc2registerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Wfc2registerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Wfc2registerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
