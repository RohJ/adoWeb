import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PremaritalComponent } from './premarital.component';

describe('PremaritalComponent', () => {
  let component: PremaritalComponent;
  let fixture: ComponentFixture<PremaritalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PremaritalComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PremaritalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
