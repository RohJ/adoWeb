import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GpcregisterComponent } from './gpcregister.component';

describe('GpcregisterComponent', () => {
  let component: GpcregisterComponent;
  let fixture: ComponentFixture<GpcregisterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GpcregisterComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GpcregisterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
