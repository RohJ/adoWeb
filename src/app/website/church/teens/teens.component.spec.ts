import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TeensComponent } from './teens.component';

describe('TeensComponent', () => {
  let component: TeensComponent;
  let fixture: ComponentFixture<TeensComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TeensComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TeensComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
