import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StdDashComponent } from './std-dash.component';

describe('StdDashComponent', () => {
  let component: StdDashComponent;
  let fixture: ComponentFixture<StdDashComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StdDashComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StdDashComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
