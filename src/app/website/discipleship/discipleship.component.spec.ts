import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DiscipleshipComponent } from './discipleship.component';

describe('DiscipleshipComponent', () => {
  let component: DiscipleshipComponent;
  let fixture: ComponentFixture<DiscipleshipComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DiscipleshipComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DiscipleshipComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
