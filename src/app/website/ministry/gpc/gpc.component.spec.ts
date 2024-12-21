import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GpcComponent } from './gpc.component';

describe('GpcComponent', () => {
  let component: GpcComponent;
  let fixture: ComponentFixture<GpcComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GpcComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GpcComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
